@extends('store.layout')
@section('title', $page->title.' | VERO')
@section('description', $page->meta_description ?? $page->subtitle)
@section('content')
<main class="section"><div class="wrap" style="max-width:900px"><a class="product-back" href="{{ route('home') }}">الرجوع إلى الرئيسية</a><div class="kicker">VERO</div><h1>{{ $page->subtitle ?: $page->title }}</h1><p class="store-page-text">{{ $page->body }}</p></div></main>
@endsection
