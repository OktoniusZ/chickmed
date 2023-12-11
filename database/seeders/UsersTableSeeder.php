<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**

Run the database seeds.*/
    public function run(): void
    {
        $faker = Faker::create();

        DB::table('users')->insert([
            'name' => "hengki",
            'email' => "hengki@mail.com",
            'password' => bcrypt('12345678'),
        ]);

        foreach (range(1, 10) as $index) {
            $userData = [
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => bcrypt('12345678'),
                'created_at' => now(),
                'updated_at' => now(),
                'profile' => '',
            ];

            DB::table('users')->insert($userData);
        }
    }
}
