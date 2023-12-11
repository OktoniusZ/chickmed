<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function updateUser(Request $request) {
        $validated = $request->validate([
            'profile' => 'required',
            'name' => 'required',
            'email' => 'required',
        ]);

        $image = $request->file('profile');
        $image->storeAs('public/user-profile', $image->hashName());

        User::where('id', $request->id)->update([
            'profile' => $image->hashName(),
            'name' => $request->name,
            'email' => $request->email,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Update Success.',
            'data' => $validated
        ], 201);
    }

    public function changePassword(Request $request) {
        $request->validate([
            'password' => 'required',
            'confirm_password' => 'required|same:password'
        ]);

        User::where('id', $request->user()->id)->update([
            'password' => bcrypt($request->password)
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Update Success.',
            'data' => true
        ], 201);
    }
}
