<?php

namespace App\Http\Controllers;

use App\Http\Requests\SessionRequest;
use App\Models\Session;
use Illuminate\Http\Response;

class SessionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Session[]
     */
    public function index()
    {
        return Session::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param SessionRequest $request
     * @return Response
     */
    public function store(SessionRequest $request)
    {
        return Session::create($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Session $session
     * @return Response
     */
    public function destroy(Session $session)
    {
        if ($session->delete()) {
            return response(null, Response::HTTP_NO_CONTENT);
        }
        return null;
    }
}
