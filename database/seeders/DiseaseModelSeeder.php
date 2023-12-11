<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class DiseaseModelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        DB::table('disease_models')->insert([
            'name' => "Salmonella disease",
            'description' => $faker->sentence,
            'solution' => $faker->sentence,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('disease_models')->insert([
            'name' => "Coccidiosis disease",
            'description' => $faker->sentence,
            'solution' => $faker->sentence,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('disease_models')->insert([
            'name' => "Healthy",
            'description' => $faker->sentence,
            'solution' => $faker->sentence,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('disease_models')->insert([
            'name' => "Newcastle disease",
            'description' => $faker->sentence,
            'solution' => $faker->sentence,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        foreach (range(1, 10) as $index) {

            DB::table('articles')->insert([
                'image' => $faker->imageUrl($width = 640, $height = 480),
                'title' => $faker->word,
                'author' => "hengki",
                'date' => "2021-01-01",
                'content' => $faker->sentence,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
