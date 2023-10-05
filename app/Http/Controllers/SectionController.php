<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Section;
use App\Models\Test_step;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $examples = Section::all();
        return Inertia::render('Sessions/IndexSessions', [
            'examples' => $examples,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $typ_adm = [
            $type_sessions = Test_step::all(),
            $admins = Admin::all(),
        ];
        // dd($typ_adm);
        return Inertia::render('Sessions/CreateSession', [
            'typ_ad' => $typ_adm
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        dd($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Section $section)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Section $section)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Section $section)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Section $section)
    {
        //
    }
}
