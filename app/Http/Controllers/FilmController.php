<?php

namespace App\Http\Controllers;

use App\Http\Requests\FilmRequest;
use App\Models\Film;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

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

     */
    public function store(FilmRequest $request)
    {
        $film = new Film;
        $film->fill($request->validated());
        $film->poster = $request->poster->store('posters');
        return $film->save();
    }

    /**
     * Display the specified resource.
     *
     * @param integer
     * @return Response
     */
    public function show($id)
    {
        return Film::findOrFail($id);
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
