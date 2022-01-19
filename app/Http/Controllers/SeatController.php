<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeatRequest;
use App\Models\Seat;

class SeatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Seat[]
     */
    public function index()
    {
        return Seat::all();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param SeatRequest $request
     * @param Seat $seat
     * @return bool
     */
    public function update(SeatRequest $request, Seat $seat)
    {
        $seat->fill($request->validated());
        return $seat->save();
    }
}
