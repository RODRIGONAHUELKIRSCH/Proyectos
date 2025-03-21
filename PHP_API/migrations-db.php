<?php
use Doctrine\DBAL\DriverManager;

return DriverManager::getConnection([
    'dbname' => 'yourdbnamehere',
    'user' => 'rodrigo',
    'password' => 'nahuel',
    'host' => 'localhost',
    'driver' => 'pdo_mysql',
]);