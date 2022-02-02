<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeatRequest;
use App\Models\Hall;
use App\Models\Seat;
use App\Models\Session;
use Illuminate\Http\Response;

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
     * Store a newly created resource in storage.
     *
     * @param $request
     * @return Response
     */
    public function store(SeatRequest $request)
    {
        $hallId = $request->validated()['seats'][0]['hall_id'];
        $hall = Hall::findOrFail($hallId);
        Seat::whereHallId($hall->id)->delete();
        Session::whereHallId($hall->id)->delete();

        foreach ($request->validated()['seats'] as $seat) {
             Seat::create($seat);
        }
        return response(true, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param integer
     * @return Response
     */
    public function show($id)
    {
        return Seat::where('hall_id', $id)->get();
    }

    /**
     * Update set of specified resources in storage.
     *
     * @param SeatRequest $request
     * @return Response
     */
    public function updateMany(SeatRequest $request)
    {
        foreach ($request->validated()['seats'] as $seat) {
            $upSeat = Seat::findOrFail($seat['id']);
            $upSeat->fill($seat);
            $upSeat->save();
        }
        return response(true, 201);
    }
}
