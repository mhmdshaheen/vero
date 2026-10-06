<!doctype html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="@yield('description', 'تسوّق أحذية VERO الرجالية من الجلد الطبيعي. صناعة لبنانية بخبرة تتجاوز 40 سنة.')">
    <title>@yield('title', 'VERO | أحذية رجالية صنعت بإتقان في لبنان')</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="/vero.css">
    <style>.sale-price{display:flex;gap:8px;align-items:baseline}.sale-price del{color:#858b93;font-size:.8em}.sale-badge{background:#ad302d;color:white;padding:3px 8px;font-size:13px;position:absolute;top:10px;left:10px;z-index:2}.store-page-text{white-space:pre-line;line-height:1.9}</style>
</head>
<body data-whatsapp="{{ \App\Models\SiteSetting::valueFor('whatsapp_number', '96178978270') }}">
@if(!($hideHeader ?? false))
<div class="topline"></div>
<header class="store-header"><div class="wrap head">
    <a class="brand" href="{{ route('home') }}" aria-label="VERO الصفحة الرئيسية"><strong>VERO</strong><span class="brand-rule"><small>GENUINE CRAFTSMANSHIP</small></span></a>
    <a class="head-link" href="https://wa.me/{{ \App\Models\SiteSetting::valueFor('whatsapp_number', '96178978270') }}" target="_blank" rel="noopener noreferrer">اطلب عبر واتساب</a>
    <details class="store-menu"><summary aria-label="فتح قائمة الموقع"><span aria-hidden="true">☰</span></summary><nav aria-label="قائمة الموقع">
        <a href="{{ route('home') }}">الرئيسية</a><a href="{{ route('home') }}#collection">مجموعة الأحذية</a>
        <div class="menu-categories"><a href="{{ route('home') }}#category-formal">كلاسيك</a><a href="{{ route('home') }}#category-casual">كاجوال</a><a href="{{ route('home') }}#category-sport">سبور</a><a href="{{ route('home') }}#category-boot">بوط</a><a href="{{ route('home') }}#category-medical">طبي</a></div>
        <a href="{{ route('home') }}#story">عنّا</a><a href="{{ route('catalog') }}">الكاتالوج</a><a href="{{ route('home') }}#returns-policy">سياسة التبديل والإرجاع</a><a href="{{ route('home') }}#manufacturing">كيف منصنّع حذاءك؟</a>
        @foreach(\App\Models\Page::query()->where('is_published', true)->whereNotIn('slug', ['home', 'story', 'contact', 'returns-policy', 'manufacturing'])->orderBy('title')->get() as $menuPage)
            <a href="{{ route('pages.show', $menuPage) }}">{{ $menuPage->title }}</a>
        @endforeach
        <a href="https://wa.me/{{ \App\Models\SiteSetting::valueFor('whatsapp_number', '96178978270') }}" target="_blank" rel="noopener noreferrer">تواصل معنا عبر واتساب</a>
    </nav></details>
</div></header>
@endif
@yield('content')
@if(!($hideFooter ?? false))
<footer class="footer"><div class="wrap foot"><a class="brand" href="{{ route('home') }}" aria-label="VERO الصفحة الرئيسية"><strong>VERO</strong><span class="brand-rule"><small>GENUINE CRAFTSMANSHIP</small></span></a><p>أحذية رجالية · صناعة لبنانية</p><p>© {{ date('Y') }} VERO</p></div></footer>
@endif
<script src="/analytics.js" defer></script>
<script src="/store.js" defer></script>
<script src="/language.js" defer></script>
</body>
</html>
