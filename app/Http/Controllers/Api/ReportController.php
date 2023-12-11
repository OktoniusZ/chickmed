<?php

namespace App\Http\Controllers\Api;

use App\Models\ReportModel;
use App\Models\ReportDiseaseModel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReportController extends Controller
{
    public function listReport() {
        $reports = ReportModel::latest()->paginate(6);

        return response()->json([
            'success' => true,
            'message' => 'Analisys Result.',
            'data' => $reports
        ], 200);
    }

    public function reports(Request $request) {
        $reports = ReportModel::where('user_id', $request->user()->id)->latest()->paginate(6);

        return response()->json([
            'success' => true,
            'message' => 'Analisys Result.',
            'data' => $reports->items()
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
            'message' => 'Detail Analisys Result.',
            'data' => $report
        ], 200);
    }

    public function latestReport(Request $request) {
        $report = ReportModel::where('user_id', $request->user()->id)->latest()->first();

        return response()->json([
            'success' => true,
            'message' => 'Latest Analisys Result.',
            'data' => $report
        ], 200);

    }

    public function store(Request $request) {
        $report = ReportModel::create([
            'user_id' => $request->user_id,
            // file
            "date" => $request->date,
            "raw_image" => $request->raw_image,
            "result_image" => $request->processed_image,
        ]);

        foreach ($request->data as $value) {
            ReportDiseaseModel::create([
                'report_model_id' => $report["id"],
                'disease_model_id' => $value["class"],
                'confidence' => $value["confidence"],
                'bounding_box' => implode(',', $value["boxes"]),
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Analisys Result.',
            'data' => $report
        ], 201);
    }
}
