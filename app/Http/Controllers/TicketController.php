<?php

namespace App\Http\Controllers;

use App\Http\Requests\TicketRequest;
use App\Models\Ticket;
use Illuminate\Http\Response;

class TicketController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param TicketRequest $request
     * @return Response
     */
    public function store(TicketRequest $request)
    {
        return Ticket::create($request->validated());
    }

    /**
     * Display the specified resource.
     *
     * @param Ticket $ticket
     * @return Response
     */
    public function show(Ticket $ticket)
    {
        return Ticket::findOrFail($ticket);
    }
}
