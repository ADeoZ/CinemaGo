<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/client/schedule', [\App\Http\Controllers\ClientController::class, 'schedule']);
Route::get('/client/seats/{session}', [\App\Http\Controllers\ClientController::class, 'seatsAvailable']);

Route::apiResource('/hall', \App\Http\Controllers\HallController::class);
Route::apiResource('/film', \App\Http\Controllers\FilmController::class);
Route::put('/seats/update', [\App\Http\Controllers\SeatController::class, 'updateMany']);
Route::apiResource('/seats', \App\Http\Controllers\SeatController::class);
Route::apiResource('/session', \App\Http\Controllers\SessionController::class);
Route::apiResource('/ticket', \App\Http\Controllers\TicketController::class);
