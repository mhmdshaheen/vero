<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class OrderController extends Controller
{
    public function index(): View
    {
        return view('admin.orders', ['orders' => Order::query()->latest()->paginate(25)]);
    }

    public function update(Request $request, Order $order): RedirectResponse
    {
        $data = $request->validate(['status' => ['required', Rule::in(['new', 'registered', 'cancelled'])]]);
        $order->update($data);

        return back()->with('success', 'تم تحديث حالة الطلب.');
    }
}
