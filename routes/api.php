<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware('auth:api')->group(function(){

  // Route::get('/user', function (Request $request) {
  //     return $request->user();
  // });

  Route::namespace('Api')->group(function () {


    Route::get('security', "SecurityController@index");
    Route::post('security', "SecurityController@verify");
    Route::patch('security', "SecurityController@toggle");



    Route::get('/user', "UserController@info");

    Route::get('/todos', 'TodosController@index');
    Route::post('/todos', 'TodosController@store');
    Route::patch('/todos/{todo}', 'TodosController@update');
    Route::patch('/todosCheckAll', 'TodosController@updateAll');
    Route::delete('/todos/{todo}', 'TodosController@destroy');
    Route::delete('/todosDeleteCompleted', 'TodosController@destroyCompleted');

    Route::post('/logout', 'AuthController@logout');
  });

});


Route::namespace('Api')->group(function () {
  Route::post('/login','AuthController@login');
  Route::post('/register','AuthController@register');
});

