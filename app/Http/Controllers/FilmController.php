<?php

namespace App\Http\Controllers;

use App\Http\Requests\FilmRequest;
use App\Models\Film;
use Illuminate\Http\Response;

class FilmController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Film[]
     */
    public function index()
    {
        return Film::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param FilmRequest $request
     * @return Response
     */
    public function store(FilmRequest $request)
    {
        return Film::create($request->validated());
    }

    /**
     * Display the specified resource.
     *
     * @param Film $film
     * @return Response
     */
    public function show(Film $film)
    {
        return Film::findOrFail($film);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param FilmRequest $request
     * @param Film $film
     * @return bool
     */
    public function update(FilmRequest $request, Film $film)
    {
        $film->fill($request->validated());
        return $film->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Film $film
     * @return Response
     */
    public function destroy(Film $film)
    {
        if ($film->delete()) {
            return response(null, Response::HTTP_NO_CONTENT);
        }
        return null;
    }
}
