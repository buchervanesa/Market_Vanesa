import React from "react";
import { FunctionFetch } from "@/utils/FunctionFetch";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

interface IdParams{
    params: {
        id:Number
    }
}

const DetailProduct: React.FC <IdParams>  = async ({params} ) => {

   const idProduct = Number(params.id)
    console.log (idProduct)
    const products = await FunctionFetch("http://localhost:4000/products");
    // const products = await FunctionFetch("https://zkxnlxm3-4000.brs.devtunnels.ms/products");
    
      
 
    const product = products.find((product: { id: number })  =>  product.id === idProduct )
    if(!product) return <div>Producto no encontrado</div>
   console.log(product)

  

    return (
        <div>
            <ProductDetails id={product.id} name={product.name} image={product.image} price={product.price} description={product.description}/>
        </div>
    )
 }
    export default DetailProduct;
