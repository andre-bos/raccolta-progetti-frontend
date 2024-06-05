<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReservationController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BookController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::resource('/book', BookController::class)->middleware(['auth', 'verified']);
// Route::post('/book', [BookController::class, 'reserveBook'])->name('book.reserveBook');

Route::resource('/reservation', ReservationController::class)->middleware('auth');


//rotta per il fetch di ricerca
Route::get('/books/search', [BookController::class, 'search']);

Route::resource('/user', UserController::class)->middleware('auth');

Route::get('/dashboard', [DashboardController::class, 'index'])
     ->middleware(['auth', 'verified'])
     ->name('dashboard');

require __DIR__.'/auth.php';
