<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FilmFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->realText(300, 2),
            'duration' => $this->faker->numberBetween(90, 150),
            'country' => $this->faker->country,
            'poster' => 'posters/poster' . $this->faker->unique()->numberBetween(1, 5) . '.jpg',
        ];
    }
}
