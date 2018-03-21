<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;

class ApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function article()
    {
        $data = Article::get();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function findBy(Request $request)
    {
        $slug = $request->slug;
        $data = Article::where('article_slug',$slug)->first();
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function keahlian()
    {
        return response()->json(
            [
                [
                    'tech' => 'PHP',
                    'color' => 'success',
                    'progress' => 80,
                ],
                [
                    'tech' => 'CodeIgniter',
                    'color' => 'warning',
                    'progress' => 80,
                ],
                [
                    'tech' => 'Laravel',
                    'color' => 'info',
                    'progress' => 40,
                ],
                [
                    'tech' => 'Javascript',
                    'color' => 'danger',
                    'progress' => 80,
                ],
                [
                    'tech' => 'JQuery',
                    'color' => 'primary',
                    'progress' => 75,
                ],
                [
                    'tech' => 'React JS',
                    'color' => 'success',
                    'progress' => 70,
                ]
            ]
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
