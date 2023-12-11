<?php

use App\Http\Controllers\InformationModelController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ReportController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// auth
Route::post('register', [App\Http\Controllers\Api\AuthController::class, 'register']);
Route::post('login', [App\Http\Controllers\Api\AuthController::class, 'login']);

// get user data
Route::middleware('auth:sanctum')->get('/user', [App\Http\Controllers\Api\AuthController::class, 'getUser']);

//posts
Route::apiResource('/articles', App\Http\Controllers\Api\ArticleController::class);

Route::post("reports/store", [ReportController::class, "store"]);

// Information Model API
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/update/user', [UserController::class, "updateUser"]);
    Route::post('/change/password', [UserController::class, "changePassword"]);
    Route::get("reports", [ReportController::class, "reports"]);
    Route::get("reports/detail/{id}", [ReportController::class, "detailReport"]);
    Route::get("reports/latest", [ReportController::class, "latestReport"]);
    Route::get("summary", [ReportController::class, "summary"]);
    // user
    Route::get('/model', [InformationModelController::class, "index"]);
});
