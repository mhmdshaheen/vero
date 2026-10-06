<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\VisitorEvent;
use Database\Seeders\AnalyticsSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;
use Tests\TestCase;

class AnalyticsTest extends TestCase
{
    use RefreshDatabase;

    public function test_historical_analytics_are_seeded_idempotently_and_visible_to_admin(): void
    {
        $this->seed(AnalyticsSeeder::class);
        $this->seed(AnalyticsSeeder::class);
        $this->assertDatabaseCount('visitor_events', 1460);
        $this->assertDatabaseCount('historical_order_summaries', 3);

        $this->get('/manage/analytics')->assertRedirect('/manage/login');
        $this->actingAs(User::factory()->create())->get('/manage/analytics')
            ->assertOk()
            ->assertSee('زيارات الموقع ونشاط الزوّار')
            ->assertSee('1,048')
            ->assertSee('1,366')
            ->assertSee('طلبات قديمة محفوظة كملخصات');

        $this->get('/manage/analytics?period=today')->assertOk()->assertSee('لا توجد أنشطة في هذه الفترة');
        $this->get('/manage/analytics?from=2026-10-03&to=2026-10-04')
            ->assertOk()
            ->assertDontSee('لا توجد أنشطة في هذه الفترة');
    }

    public function test_tracking_accepts_same_origin_events_and_ignores_admins(): void
    {
        $payload = [
            'id' => (string) Str::uuid(),
            'visitorId' => (string) Str::uuid(),
            'sessionId' => (string) Str::uuid(),
            'event' => 'page_view',
            'path' => '/products/classic-wingtip',
            'source' => 'facebook.com',
        ];

        $this->withHeader('Origin', 'http://127.0.0.1:8765')->postJson('/api/analytics/track', $payload)->assertNoContent();
        $this->assertDatabaseHas('visitor_events', ['id' => $payload['id'], 'product_id' => 'classic-wingtip', 'source' => 'facebook.com']);
        $this->withHeader('Origin', 'http://127.0.0.1:8765')->postJson('/api/analytics/track', $payload)->assertNoContent();
        $this->assertDatabaseCount('visitor_events', 1);
        $this->withHeader('Origin', 'https://foreign.example')->postJson('/api/analytics/track', array_replace($payload, ['id' => (string) Str::uuid()]))->assertForbidden();

        $this->actingAs(User::factory()->create())
            ->withHeader('Origin', 'http://127.0.0.1:8765')
            ->postJson('/api/analytics/track', array_replace($payload, ['id' => (string) Str::uuid()]))
            ->assertNoContent();
        $this->assertSame(1, VisitorEvent::query()->count());
    }
}
