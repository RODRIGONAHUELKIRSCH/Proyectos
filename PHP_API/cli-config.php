<?php

require 'vendor/autoload.php';
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMSetup;
use Doctrine\Migrations\Configuration\EntityManager\ExistingEntityManager;
use Doctrine\Migrations\DependencyFactory;
use Doctrine\Migrations\Configuration\Migration\PhpFile;

$config = new PhpFile('migrations.php'); // Or use one of the Doctrine\Migrations\Configuration\Configuration\* loaders

$paths = [__DIR__.'/ENTITIES'];

$isDevMode = true;

$ORMConfig = ORMSetup::createAttributeMetadataConfiguration($paths, $isDevMode,null ,null ,false);

$connection = require 'migrations-db.php';

$entityManager = new EntityManager($connection, $ORMConfig);

return DependencyFactory::fromEntityManager($config, new ExistingEntityManager($entityManager));