<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class PageController extends Controller
{
    public function index(): View
    {
        return view('admin.pages.index', ['pages' => Page::query()->orderBy('id')->get()]);
    }

    public function create(): View
    {
        return view('admin.pages.form', ['page' => new Page]);
    }

    public function edit(Page $page): View
    {
        return view('admin.pages.form', compact('page'));
    }

    public function store(Request $request): RedirectResponse
    {
        $page = new Page;
        $this->save($request, $page);

        return redirect()->route('admin.pages.edit', $page)->with('success', 'تمت إضافة الصفحة.');
    }

    public function update(Request $request, Page $page): RedirectResponse
    {
        $this->save($request, $page);

        return back()->with('success', 'تم حفظ الصفحة.');
    }

    private function save(Request $request, Page $page): void
    {
        $data = $request->validate([
            'slug' => ['required', 'alpha_dash:ascii', 'max:100', Rule::unique('pages', 'slug')->ignore($page->id)],
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'body' => ['nullable', 'string', 'max:20000'],
            'meta_description' => ['nullable', 'string', 'max:500'],
        ]);
        if ($page->exists && in_array($page->slug, ['home', 'story', 'contact', 'returns-policy', 'manufacturing'], true) && $data['slug'] !== $page->slug) {
            throw ValidationException::withMessages(['slug' => 'رابط القسم الأساسي ثابت حتى يبقى الموقع يعمل بشكل صحيح.']);
        }
        $page->fill($data);
        $page->is_published = $request->boolean('is_published');
        $page->save();
    }
}
