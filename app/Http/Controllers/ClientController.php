<?php

namespace App\Http\Controllers;

use App\Models\Film;
use App\Models\Hall;
use App\Models\Seat;
use App\Models\Session;
use App\Models\Ticket;
use Illuminate\Database\Eloquent\Builder;

class ClientController extends Controller
{
    /**
     * All films with their schedule.
     *
     * @return array
     */
    public function schedule()
    {
        // Все открытые залы
        $halls = Hall::with('sessions')->where('opened', 1)->select('id', 'name')->get();

        // Все фильмы в открытых залах
        $filmIds = Session::whereHas('hall', function (Builder $query) {
            $query->where('opened', 1);
        })->pluck('film_id');
        $films = Film::all()->whereIn('id', $filmIds);

        return ["halls" => $halls, "films" => $films];
    }

    /**
     * Selected session info.
     *
     * @return array
     */
    public function seatsAvailable($sessionId)
    {
        // Информация о сеансе
        $session = Session::where('sessions.id', $sessionId)
            ->leftJoin('halls', 'sessions.hall_id', '=', 'halls.id')
            ->leftJoin('films', 'sessions.film_id', '=', 'films.id')
            ->select('sessions.id', 'sessions.time', 'films.title', 'sessions.hall_id', 'halls.name', 'halls.row', 'halls.price_standard', 'halls.price_vip');

        // Купленные места
        $tickets = Seat::has('tickets')->whereHas('tickets', function (Builder $query) use ($sessionId) {
            $query->where('session_id', $sessionId);
        })->pluck('id');

        // Все места на сеанс
        $seats = Seat::where('hall_id', $session->value('hall_id'))
        ->each(function ($seat) use ($tickets) {
            if(in_array($seat['id'], iterator_to_array($tickets))) {
                echo "hello";
            }
            else {
                echo "no";
            }
        });
//        $seats->chunkMap(function (&$seat) use ($tickets) {
//            if (in_array($seat['id'], $tickets, true)) {
//                $seat['status'] = 'sold';
//            }
//        });
        return $seats->get();

        // return ["session" => $session->get(), "seats" => $seats->get()];

    }
}
