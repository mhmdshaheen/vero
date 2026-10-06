@extends('admin.layout')
@section('title', 'زيارات الموقع ونشاط الزوّار | VERO')
@section('content')
<style>
.analytics-intro{margin-bottom:22px}.analytics-intro p{margin:0 0 16px}.analytics-filters{display:flex;gap:8px;flex-wrap:wrap;align-items:end;margin:22px 0}.analytics-filters a{min-height:42px}.analytics-filters .selected{background:var(--navy);color:white}.analytics-filters form{display:flex;gap:10px;flex-wrap:wrap;align-items:end}.analytics-filters form label{margin:0}.analytics-filters input{min-width:150px}.analytics-note{padding:15px 18px;background:#fffdf7;border-right:4px solid var(--gold);margin:18px 0 24px}.analytics-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}.analytics-grid .card{min-height:130px;margin:0}.analytics-grid .card strong{display:block;font-size:35px;line-height:1.3;margin-top:14px}.analytics-grid .card span{font-weight:600}.analytics-section{margin-top:30px}.analytics-section h2{margin-bottom:12px}.analytics-summary{margin:20px 0}.analytics-activity td{font-size:14px}.analytics-activity code{direction:ltr;display:inline-block}.analytics-empty{padding:18px;color:#66717e}@media(max-width:900px){.analytics-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:550px){.analytics-grid{grid-template-columns:1fr}}
</style>
<div class="analytics-intro">
    <h1>زيارات الموقع ونشاط الزوّار</h1>
    <p>كل زيارة هي جلسة تصفّح؛ تبدأ جلسة جديدة بعد ٣٠ دقيقة من دون نشاط. الزوّار المختلفون محسوبون حسب المتصفّح، وليس الأشخاص.</p>
</div>

<div class="analytics-filters" aria-label="فلترة الفترة">
    @foreach(['all' => 'من بداية التتبع', 'today' => 'اليوم', '7' => 'آخر ٧ أيام', '30' => 'آخر ٣٠ يوم'] as $key => $label)
        <a class="btn secondary {{ $period === $key ? 'selected' : '' }}" href="{{ route('admin.analytics.index', ['period' => $key]) }}">{{ $label }}</a>
    @endforeach
    <form method="get" action="{{ route('admin.analytics.index') }}">
        <label>من <input type="date" name="from" value="{{ $from }}"></label>
        <label>إلى <input type="date" name="to" value="{{ $to }}"></label>
        <button class="btn" type="submit">تحديث</button>
    </form>
</div>

<div class="analytics-note">@if($startedAt)بدأ تسجيل الزيارات في {{ \Illuminate\Support\Carbon::parse($startedAt, 'UTC')->timezone('Asia/Beirut')->format('Y/m/d، g:i a') }}. @else لم يبدأ تسجيل الزيارات بعد. @endif الزيارات السابقة لبداية التتبع غير متوفرة. لا تشمل زيارات حسابات الإدارة أو برامج البحث المعروفة. الفترات حسب توقيت بيروت.</div>

<div class="analytics-grid">
    @foreach(['visits' => 'الزيارات', 'visitors' => 'زوّار مختلفون', 'pageViews' => 'مشاهدات الصفحات', 'productViews' => 'مشاهدات الموديلات', 'cartAdds' => 'إضافات للسلة', 'checkouts' => 'محاولات إرسال الطلب', 'orders' => 'طلبات محفوظة بنجاح', 'whatsapp' => 'ضغطات واتساب'] as $key => $label)
        <div class="card"><span>{{ $label }}</span><strong>{{ number_format($metrics[$key]) }}</strong></div>
    @endforeach
</div>

<div class="analytics-summary">
    <p>الطلبات المحفوظة محسوبة ضمن الفترة المختارة، باستثناء الملغاة والمحذوفة. تتضمن {{ $historicalOrders }} طلبات قديمة محفوظة كملخصات إحصائية دون بيانات الزبائن الشخصية.</p>
    <p>نسبة الزيارات المتتبّعة التي أرسلت طلبًا: <strong>{{ $metrics['visits'] ? number_format($metrics['orderingVisits'] / $metrics['visits'] * 100, 1) : '0.0' }}٪</strong>. تعتمد النسبة على الطلبات المرتبطة بجلسة تتبّع؛ الطلب المحفوظ لا يعني تأكيد البيع أو التسليم.</p>
</div>

<section class="analytics-section"><h2>نشاط الموديلات</h2><div class="card table-wrap">
    @if(count($products))<table><thead><tr><th>الموديل</th><th>مشاهدات</th><th>إضافات للسلة</th><th>طلبات</th><th>أزواج</th></tr></thead><tbody>
        @foreach($products as $product)<tr><td><a href="{{ route('admin.products.edit', $product['id']) }}">{{ $product['name'] }}</a></td><td>{{ number_format($product['views']) }}</td><td>{{ number_format($product['cartAdds']) }}</td><td>{{ number_format($product['orders']) }}</td><td>{{ number_format($product['pairs']) }}</td></tr>@endforeach
    </tbody></table>@else<div class="analytics-empty">لا يوجد نشاط موديلات في هذه الفترة.</div>@endif
</div></section>

<section class="analytics-section"><h2>مصادر الزيارات</h2><div class="card table-wrap">
    @if($sources->count())<table><thead><tr><th>المصدر</th><th>الزيارات</th></tr></thead><tbody>@foreach($sources as $source)<tr><td>{{ $source->source === 'direct' ? 'مباشر' : $source->source }}</td><td>{{ number_format($source->visits) }}</td></tr>@endforeach</tbody></table>@else<div class="analytics-empty">لا توجد مصادر في هذه الفترة.</div>@endif
</div></section>

<section class="analytics-section"><h2>آخر الأنشطة</h2><div class="card table-wrap analytics-activity">
    @if($activities->count())<table><thead><tr><th>الوقت (بيروت)</th><th>النشاط</th><th>الصفحة</th><th>المصدر</th><th>الجهاز</th></tr></thead><tbody>
        @foreach($activities as $activity)<tr><td>{{ \Illuminate\Support\Carbon::parse($activity->created_at, 'UTC')->timezone('Asia/Beirut')->format('Y/m/d H:i') }}</td><td>{{ ['page_view' => 'مشاهدة صفحة', 'add_to_cart' => 'إضافة للسلة', 'checkout_start' => 'بدء إرسال الطلب', 'order_submitted' => 'طلب مرسل', 'whatsapp_click' => 'ضغط واتساب', 'category_filter' => 'تصفية الفئة'][$activity->event_type] ?? $activity->event_type }}</td><td><code>{{ $activity->path }}</code></td><td>{{ $activity->source === 'direct' ? 'مباشر' : $activity->source }}</td><td>{{ ['mobile' => 'هاتف', 'tablet' => 'لوحي', 'desktop' => 'كمبيوتر'][$activity->device] ?? $activity->device }}</td></tr>@endforeach
    </tbody></table>@else<div class="analytics-empty">لا توجد أنشطة في هذه الفترة.</div>@endif
</div></section>
@endsection
