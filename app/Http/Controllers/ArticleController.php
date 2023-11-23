<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->input('search');
        $article = Article::orderBy("id", "desc");

        if ($query) {
            $article->where('title', 'like', "%{$query}%");
        }

        $article = $article->paginate(5);

        $filterValues = [];
        if ($query) {
            $filterValues['search'] = $query;
        }

        $article->appends($filterValues);

        return Inertia::render("Dashboard", [
            "data" => $article,
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'image' => 'required',
        ]);
        
        $article = new Article();
        $article->title = $validatedData['title'];
        $article->content = $validatedData['content'];
        $article->image = $validatedData['image'];
        $article->save();
    }
}
