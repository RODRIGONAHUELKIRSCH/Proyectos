<?php

namespace App\Attribute;

use Attribute;

#[Attribute(Attribute::TARGET_METHOD)]
class Route {
    public string $path;
    public string $method;

    public function __construct(string $path, string $method ) {
        $this->path = $path;
        $this->method = strtoupper($method);
    }
}
