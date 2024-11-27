<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->app['router']->aliasMiddleware('jwt.auth', \Tymon\JWTAuth\Http\Middleware\Authenticate::class);
        $this->app['router']->aliasMiddleware('jwt.refresh', \Tymon\JWTAuth\Http\Middleware\RefreshToken::class);
    }
}
