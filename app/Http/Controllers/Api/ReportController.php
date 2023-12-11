<?php

namespace App\Http\Controllers\Api;

use App\Models\ReportModel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReportController extends Controller
{
    public function listReport() {
        $reports = ReportModel::latest()->paginate(6);

        return response()->json([
            'success' => true,
            'data' => $reports
        ], 200);
    }

    public function detailReport(Request $request) {
        if ($request->id) {
            $report = ReportModel::where('id', $request->id)->first();
        } else {
            $report = ReportModel::latest()->first();
        }

        return response()->json([
            'success' => true,
            'detailReport' => $report
        ], 200);
    }
}
