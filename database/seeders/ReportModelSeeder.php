<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class ReportModelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Get all disease_model IDs
        $diseaseModelIds = DB::table('disease_models')->pluck('id')->toArray();

        foreach (range(1, 10) as $index) {
            $reportData = [
                'date' => $faker->date,
                'result_image' => $faker->imageUrl(),
                'raw_image' => $faker->sentence,
                'created_at' => now(),
                'updated_at' => now(),
            ];

            DB::table('report_models')->insert($reportData);

            DB::table('report_disease_models')->insert([
                'report_model_id' => $index,
                'disease_model_id' => $faker->randomElement($diseaseModelIds),
                "confidence" => 0.905,
                "bounding_box" => "76,71,609,979",
                'created_at' => now(),
                'updated_at' => now(),
            ]);

        }
    }
}
