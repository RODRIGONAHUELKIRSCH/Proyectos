<?php 

namespace App\Mapper;

use App\Entity\Product;
use App\DTO\DTOProduct;

class ProductMapper{

    public static function ProducttoDTO(Product $product){
       return   new DTOProduct(
            $product->getNombre(),
            $product->getMarca(),
            $product->getCategoria(),
            $product->getImageproduct(),
            $product->getLocaldate(),
        );

    }

    public static function DTOtoProduct(DTOProduct $DTOproduct){
       return new Product(
            $DTOproduct->getNombre(),
            $DTOproduct->getMarca(),
            $DTOproduct->getCategoria(),
            $DTOproduct->getImageproduct(),
        );
    }

}

?>