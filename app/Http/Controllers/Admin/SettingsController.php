<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function edit(): View
    {
        return view('admin.settings', ['settings' => SiteSetting::query()->pluck('value', 'key')]);
    }

    public function update(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'whatsapp_number' => ['required', 'regex:/^[0-9]{8,20}$/'],
            'catalog_heading_note' => ['required', 'string', 'max:255'],
            'hero_video' => ['nullable', 'file', 'mimetypes:video/mp4,video/webm', 'max:51200'],
            'hero_poster' => ['nullable', 'image', 'max:5120'],
        ]);
        foreach (['whatsapp_number', 'catalog_heading_note'] as $key) {
            SiteSetting::query()->updateOrCreate(['key' => $key], ['value' => $data[$key]]);
        }
        foreach (['hero_video', 'hero_poster'] as $key) {
            if ($request->hasFile($key)) {
                SiteSetting::query()->updateOrCreate(['key' => $key], ['value' => '/storage/'.$request->file($key)->store('site', 'public')]);
            }
        }

        return back()->with('success', 'تم حفظ إعدادات الموقع.');
    }
}
