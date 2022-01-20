<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sessions', function (Blueprint $table) {
            $table->id();
            $table->time('time')->unsigned();
            $table->integer('hall_id')->unsigned()->default(1);
            $table->foreign('hall_id')->references('id')->on('halls')->onDelete('cascade');;
            $table->integer('film_id')->unsigned()->default(1);
            $table->foreign('film_id')->references('id')->on('films')->onDelete('cascade');;
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
        Schema::dropIfExists('sessions');
    }
}
