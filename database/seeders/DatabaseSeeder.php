<?php

namespace Database\Seeders;

use App\Models\Film;
use App\Models\Hall;
use App\Models\Seat;
use App\Models\Session;
use App\Models\Ticket;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Фильмы
        Film::factory()->count(5)->create();

        // Залы
        Hall::factory()->count(3)->create()->each(
            function ($hall) {
                // Места по количеству рядов для каждого зала
                Seat::factory()->count($hall['row'] * $hall['row_seats'])->sequence(
                    function ($sequence) {
                        return ['number' => $sequence->index + 1];
                    })
                    ->for($hall)->create();

                // Сеансы
                Session::factory()->count(5)->for($hall)->state(
                    new Sequence(
                        function ($sequence) {
                            $sessionsTime = ['10:00', '13:00', '16:00', '19:00', '22:00'];
                            return ['time' => $sessionsTime[$sequence->index], 'film_id' => Film::all()->random()];
                        },
                    ))
                    ->create()->each(
                        function ($session) {

                            // Билеты на каждый сеанс
                            Ticket::factory()->state(
                                new Sequence(
                                    function () use ($session) {
                                        return ['session_id' => $session];
                                    },
                                ))
                                ->hasAttached(
                                    Seat::where([['hall_id', $session['hall_id']], ['status', '<>', 'disabled']])->inRandomOrder()->limit(random_int(1, 4))->get()
                                // Seat::where('hall_id', $session['hall_id'])->inRandomOrder()->limit(random_int(1, 4))->get()
                                )
                                ->create();
                        });
            });

        // доступ администратора
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('admin'),
            'remember_token' => Str::random(10),
        ]);
    }
}
