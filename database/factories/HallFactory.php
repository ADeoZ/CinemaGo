<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class HallFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => 'Зал ' . $this->faker->unique()->randomDigitNotNull,
            'row' => $this->faker->numberBetween(8, 12),
            'row_seats' => $this->faker->numberBetween(8, 12),
            'price_standard' => $this->faker->numberBetween(50, 90) * 10,
            'price_vip' => $this->faker->numberBetween(100, 200) * 10,
            'opened' => $this->faker->boolean
        ];
    }
}
