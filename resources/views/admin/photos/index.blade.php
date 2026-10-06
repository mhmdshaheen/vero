@extends('admin.layout')
@section('content')
<div class="toolbar"><h1>صور الكتالوج</h1><a class="btn" href="{{ route('admin.photos.create') }}">+ صورة جديدة</a></div><div class="card table-wrap"><table><thead><tr><th>الصورة</th><th>الكود</th><th>الوصف</th><th>القسم</th><th>الحالة</th><th>إدارة</th></tr></thead><tbody>@foreach($photos as $photo)<tr><td><img src="{{ $photo->image_path }}" alt=""></td><td><bdi>{{ $photo->code }}</bdi></td><td>{{ $photo->alt }}</td><td>{{ $photo->category }}</td><td>{{ $photo->is_active ? 'منشورة' : 'مخفية' }}</td><td><a class="btn secondary" href="{{ route('admin.photos.edit', $photo) }}">تعديل</a></td></tr>@endforeach</tbody></table></div>
@endsection
