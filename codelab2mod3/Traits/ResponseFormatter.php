<?php

namespace Traits;

// Digunakan untuk train untuk formatter json response
trait ResponseFormatter
{
    public function responseFormatter($code, $message, $data = null){
        return json_encode([
            "code" => $code,
            "message" => $message,
            "data" => $data
        ]);
    }
}