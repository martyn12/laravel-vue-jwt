<?php

namespace Database\Factories;

use FakerRestaurant\Provider\en_US\Restaurant;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as FakerFactory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Fruit>
 */
class FruitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = FakerFactory::create();
        $faker->addProvider(new Restaurant($faker));


        return [
            'name' => $faker->fruitName(),
            'price' => $this->faker->numberBetween(100, 523)
        ];
    }
}
