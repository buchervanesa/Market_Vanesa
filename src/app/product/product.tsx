
import React from 'react';
import { FunctionFetch } from '@/utils/FunctionFetch';

import Card from '../../components/Card'
import { ICardProps } from '@/components/Card/types';
import ParentComponent from '../Category/page'
import { Toaster } from 'sonner';

  const AllProducts: React.FC  = async () => {
    const products = await FunctionFetch("http://localhost:4000/products");
    // const products = await FunctionFetch("https://zkxnlxm3-4000.brs.devtunnels.ms/products");
    
  
    return (
    
     <div> 
       <Toaster
       position="top-center"
       expand={true} 
       richColors

       />
      <h1 className='mt-28 text-4xl text-gray-200  font-bold justify-center text-center' >Productos</h1>
  <h2 className="text-2xl font-semibold mt-4 justify-center text-center mb-6">Elegancia y Tecnología en Nuestros Productos</h2>
      <ParentComponent/>
      
      <section className="mt-2 p-6 justify-center bg-gray-800  gap-5 flex flex-wrap  "> 
      
      {products.map((product:ICardProps) => (
    

        <Card key={product.id} {...product} />

       
      ))}
        
    </section>
     </div>
    );
  };
  export default AllProducts;

  
  



  