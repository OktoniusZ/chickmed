<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReportModel extends Model
{
    use HasFactory;

    public function disease()
    {
        return $this->belongsTo(DiseaseModel::class, 'disease_id');
    }
}
