<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function updateUser(Request $request) {
        $validated = $request->validate([
            'name' => 'required|min:3',
            'email' => 'required',
        ]);

        $user = $request->user();
        $profile = $user->profile;

        if ($request->hasFile('profile')) {
            $image = $request->file('profile');
            $image->storeAs('public/user-profile', $image->hashName());

            $profile = $image->hashName();
        }

        User::where('id', $user->id)->update([
            'profile' => $profile,
            'name' => str_replace('"',"", $request->name),
            'email' => str_replace('"',"",$request->email),
        ]);
        $user = $request->user();
        if ($request->hasFile('profile')) {
            $user->profile = asset('/public/user-profile/' . $image->hashName());
        } else {
            $user->profile = asset('/public/user-profile/' . $user->profile);
        }

        return response()->json([
            'success' => true,
            'message' => 'Update Success.',
            'data' => $user
        ], 201);
    }

    public function changePassword(Request $request) {
        $request->validate([
            'password' => 'required|min:8',
            'confirm_password' => 'required|min:8|same:password'
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
