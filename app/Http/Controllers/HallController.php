<?php

namespace App\Http\Controllers;

use App\Http\Requests\HallRequest;
use App\Models\Hall;
use Illuminate\Http\Response;

class HallController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Hall[]
     */
    public function index()
    {
        return Hall::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param HallRequest $request
     * @return Response
     */
    public function store(HallRequest $request)
    {
        return Hall::create($request->validated());
    }

    /**
     * Display the specified resource.
     *
     * @param Hall $hall
     * @return Response
     */
    public function show(Hall $hall)
    {
        return Hall::findOrFail($hall);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param HallRequest $request
     * @param Hall $hall
     * @return bool
     */
    public function update(HallRequest $request, Hall $hall)
    {
        $hall->fill($request->validated());
        return $hall->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Hall $hall
     * @return Response
     */
    public function destroy(Hall $hall)
    {
        if ($hall->delete()) {
            return response(null, Response::HTTP_NO_CONTENT);
        }
        return null;
    }
}
