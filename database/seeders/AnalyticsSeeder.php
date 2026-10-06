<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnalyticsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $events = json_decode(file_get_contents(database_path('seed-data/visitor-events.json')), true, flags: JSON_THROW_ON_ERROR);

        foreach (array_chunk($events, 150) as $chunk) {
            DB::table('visitor_events')->insertOrIgnore($chunk);
        }

        $orders = json_decode(file_get_contents(database_path('seed-data/historical-order-summaries.json')), true, flags: JSON_THROW_ON_ERROR);
        DB::table('historical_order_summaries')->insertOrIgnore($orders);
    }
}
