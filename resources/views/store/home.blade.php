@extends('store.layout')
@section('content')
<main id="top">
<section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><div class="hero-brand" aria-label="VERO Genuine Craftsmanship"><strong>VERO</strong><span>GENUINE CRAFTSMANSHIP</span></div><div class="eyebrow">صناعة لبنانية</div><h1>{{ $pages['home']->subtitle ?? 'أناقة بترافقك بكل خطوة' }}</h1><p>{{ $pages['home']->body ?? '' }}</p><a class="button" href="#collection">تسوّق الآن <span aria-hidden="true">←</span></a></div><div class="hero-video"><video autoplay muted loop playsinline preload="metadata" poster="{{ $poster }}" aria-label="فيديو تشكيلة أحذية VERO"><source src="{{ $video }}" type="video/mp4">متصفحك لا يدعم تشغيل الفيديو.</video></div></div></section>
@if($pages['manufacturing']->is_published ?? false)
<section class="section craft-section" id="manufacturing"><div class="wrap"><div class="kicker">صنع بعناية</div><h2>{{ $pages['manufacturing']->subtitle ?? 'من قلب مصنعنا' }}</h2><p>{{ $pages['manufacturing']->body ?? '' }}</p><ol class="craft-stages"><li>قصّ الجلد</li><li>الدرز</li><li>التركيب</li><li>التنعيل</li><li>التشطيب</li></ol></div></section>
@endif
<section class="section" id="collection"><div class="wrap"><div class="section-head"><div><div class="kicker">مجموعة الأحذية</div><h2>اختار حذاءك</h2></div><p>موديلات رسمية وكاجوال مصنوعة لتجمع الشكل الأنيق والراحة اليومية.</p></div><div class="category-filters" role="group" aria-label="أقسام الأحذية"><button type="button" aria-pressed="true">الكل</button></div><div class="product-collections">
@foreach(['formal'=>'رسمي','casual'=>'كاجوال','sport'=>'سبور','boot'=>'بوط','medical'=>'طبي'] as $category => $label)
<section class="product-group" id="category-{{ $category }}" aria-label="{{ $label }}"><h3>{{ $label }}</h3><div class="products">
@forelse($products->where('category', $category) as $product)
<article class="card"><figure><a href="{{ route('products.show', $product) }}"><img src="{{ $product->image_path }}" alt="{{ $product->name }} من VERO" loading="lazy"></a>@if($product->sellingPrice() < (float)$product->price)<span class="sale-badge">خصم</span>@endif</figure><div class="card-body"><div><h3><a href="{{ route('products.show', $product) }}">{{ $product->name }}</a></h3>@if($product->catalog_code)<div class="product-catalog-code">كود الموديل: <bdi>{{ $product->catalog_code }}</bdi></div>@endif<small>الألوان: {{ implode('، ', $product->colors ?? []) }}</small></div><span class="price">${{ number_format($product->sellingPrice(), 2) }}</span></div></article>
@empty
@endforelse
</div></section>
@endforeach
</div></div></section>
@if($pages['story']->is_published ?? false)
<section class="section story" id="story"><div class="wrap story-inner"><div><div class="kicker">حرفتنا</div><h2>{{ $pages['story']->subtitle ?? 'من المصنع، لإلك' }}</h2><p class="store-page-text">{{ $pages['story']->body ?? '' }}</p></div><div class="outline"><div class="fact"><strong>جلد طبيعي</strong><span>من الخارج والداخل</span></div><div class="fact"><strong>صناعة لبنانية</strong><span>بأيادٍ محترفة</span></div><div class="fact"><strong>راحة يومية</strong><span>بتفاصيل مدروسة</span></div><div class="fact"><strong>أكثر من 40 سنة</strong><span>خبرة بالصناعة</span></div></div></div></section>
@endif
@if($pages['contact']->is_published ?? false)
<section class="contact" id="contact"><div class="wrap"><div class="kicker" style="text-align:center">تواصل معنا</div><h2>{{ $pages['contact']->subtitle ?? 'عجبك موديل؟' }}</h2><p>{{ $pages['contact']->body ?? '' }}</p><a class="button" href="https://wa.me/{{ $whatsapp }}" target="_blank" rel="noopener noreferrer" style="margin-top:26px">تواصل عبر واتساب <span aria-hidden="true">←</span></a></div></section>
@endif
@if($pages['returns-policy']->is_published ?? false)
<section class="section returns-policy" id="returns-policy"><div class="wrap"><h2>{{ $pages['returns-policy']->subtitle ?? 'سياسة التبديل والإرجاع' }}</h2><p class="store-page-text">{{ $pages['returns-policy']->body ?? '' }}</p></div></section>
@endif
</main>
@endsection
