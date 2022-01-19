<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeatTicketTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seat_ticket', function (Blueprint $table) {
            $table->id();
            $table->integer('ticket_id')->unsigned()->default(1);
            $table->foreign('ticket_id')->references('id')->on('tickets');
            $table->integer('seat_id')->unsigned()->default(1);
            $table->foreign('seat_id')->references('id')->on('seats');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('seat_ticket');
    }
}
