<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::prefix('v1')->middleware('force-json')->group(function () {
    Route::get('test', function () {
        return response()->json(['message' => 'API WORK']);
    });

    Route::post('refresh', function () {
        return response()->json([
            'access_token' => auth()->refresh(),
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
        ]);
    })->middleware('jwt.refresh');

    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('logout', [AuthController::class, 'logout']);

    Route::middleware('jwt.auth')->group(function () {
        Route::get('/profile', [AuthController::class, 'profile']);
    });
});
