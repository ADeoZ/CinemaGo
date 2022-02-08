<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClientRequest;
use App\Models\Film;
use App\Models\Hall;
use App\Models\Seat;
use App\Models\Session;
use DateTime;
use Illuminate\Database\Eloquent\Builder;

class ClientController extends Controller
{
    /**
     * All films with their schedule.
     *
     * @return array
     */
    public function schedule(string $datetime)
    {
        $dateFormatted = DateTime::createFromFormat('Y-m-d', $datetime)->format('Y-m-d');

        // Все открытые залы с сеансами в заданную дату
        $halls = Hall::where('opened', 1)->whereHas('sessions', function (Builder $query) use ($dateFormatted) {
            $query->whereDate('datetime', $dateFormatted);
        })->select('id', 'name')->get();

        // Сеансы в открытых залах на заданную дату
        $sessions = Session::whereDate('datetime', $dateFormatted)->whereHas('hall', function (Builder $query) {
            $query->where('opened', 1);
        })->get();

        // Все фильмы в открытых залах на заданную дату
        $films = Film::all()->whereIn('id', $sessions->pluck('film_id'))->flatten();

        return ["halls" => $halls, "sessions" => $sessions, "films" => $films];
    }

    /**
     * Selected session info.
     *
     * @return array
     */
    public function seatsAvailable(int $sessionId)
    {
        // Информация о сеансе
        $session = Session::where('sessions.id', $sessionId)
            ->leftJoin('halls', 'sessions.hall_id', '=', 'halls.id')
            ->leftJoin('films', 'sessions.film_id', '=', 'films.id')
            ->select('sessions.id', 'sessions.datetime', 'films.title', 'sessions.hall_id', 'halls.name', 'halls.row', 'halls.price_standard', 'halls.price_vip')->first();

        // Купленные места
        $tickets = Seat::has('tickets')->whereHas('tickets', function (Builder $query) use ($sessionId) {
            $query->where('session_id', $sessionId);
        })->get();

        // Все места на сеанс
        $seats = Seat::where('hall_id', $session->hall_id)->select('id', 'number', 'status')->get();
        foreach ($seats as $seat) {
            if ($tickets->contains($seat)) {
                $seat->status = 'sold';
            }
        }

        return ["session" => $session, "seats" => $seats];
    }
}
