<?php

namespace Database\Factories;

use App\Models\CatalogPhoto;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<CatalogPhoto>
 */
class CatalogPhotoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'photo_key' => 'catalog:test:'.fake()->uuid(),
            'code' => 'V-'.fake()->unique()->numberBetween(5000, 9999),
            'image_path' => '/assets/catalog/apron-derby-brown.webp',
            'category' => 'formal',
            'alt' => fake()->words(3, true),
            'is_active' => true,
            'sort_order' => 0,
        ];
    }
}
