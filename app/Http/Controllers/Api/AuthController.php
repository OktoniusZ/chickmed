<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\RegistrationRequest;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), (new RegistrationRequest())->rules());

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Registration failed',
                'errors' => $validator->errors()
            ], 422);
        }

        // Check if the email already exists
        if (User::where('email', $request->input('email'))->exists()) {
            return response()->json([
                'success' => false,
                'message' => 'Registration failed. Email is already in use.',
                'errors' => [
                    'email' => ['The email address is already taken.']
                ]
            ], 422);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $user->token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'Registration Success.',
            'data' => $user
        ], 201);
    }

    public function login(Request $request)
    {
        // Validation using a FormRequest class (assuming you created a LoginRequest class)
        $this->validate($request, (new LoginRequest())->rules());

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $auth = Auth::user();
            $auth->token = $auth->createToken('auth_token')->plainTextToken;

            return response()->json([
                'success' => true,
                'message' => 'Login successful.',
                'data' => $auth->makeHidden('is_admin')
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Login failed. Please check your email or password.',
                'data' => null
            ], 401);
        }
    }

    public function getUser(Request $request)
    {
        $user = $request->user();
        if ($user) {
            return response()->json([
                'success' => true,
                'message' => 'User details.',
                'data' => $user
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'User not found.',
                'data' => null
            ], 404);
        }
    }
}
