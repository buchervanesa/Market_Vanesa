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
    // const products = await FunctionFetch("http://localhost:4000/products");
    const products = await FunctionFetch("https://zkxnlxm3-4000.brs.devtunnels.ms/products");
    
      
 
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

    

    












// 'use client';
// import { fetchProductById } from '../../ProductFetch';
// import Iproduct from '@/Interfaces/Iproduct';
// import { useEffect, useState } from 'react';
// import React from 'react';

// const ProductID = ({ params }: { params: { productId: string } }) => {
//     const [product, setProduct] = useState<Iproduct | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     const fetchData = async () => {
//         try {
//             const fetchedProduct = await fetchProductById(params.productId);
//             setProduct(fetchedProduct);
//         } catch (error: unknown) {
//             if (error instanceof Error) {
//                 setError(error.message);
//             } else {
//                 setError('An unexpected error occurred');
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [params.productId]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             {product ? (
//                 <>
//                     <h3>{product.name}</h3>
//                     <img src={product.image} alt={product.name} />
//                     <p>{product.description}</p>
//                     <p>{product.price}</p>
//                     <p>{product.stock}</p>
//                     <p>{product.categoryId}</p>
//                     <button>Comprar</button>
//                 </>
//             ) : (
//                 <div>Product not found</div>
//             )}
//         </div>
//     );
// }

// export default ProductID;



// 'use client';
// import { fetchProductById } from '../../ProductFetch';
// import Iproduct from '@/Interfaces/Iproduct';
// import { useEffect, useState } from 'react';

// const ProductID = ({ params }: { params: { productId: string } }) => {
//     const [product, setProduct] = useState<Iproduct | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     const fetchData = async () => {
//         try {
//             const product = await fetchProductById(params.productId);
//             setProduct(product);
//         } catch (error: unknown) {
//             if (error instanceof Error) {
//                 setError(error.message);
//             } else {
//                 setError('An unexpected error occurred');
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [params.productId]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="mt-20 p-4 md:p-6 flex flex-col justify-between">
//             {product ? (
//                 <>
//                     <h3>{product.name}</h3>
//                     <img src={product.image} alt={product.name} />
//                     <p>{product.description}</p>
//                     <p>{product.price}</p>
//                     <p>{product.stock}</p>
//                     <p>{product.categoryId}</p>
//                     <button>Comprar</button>
//                 </>
//             ) : (
//                 <div>Product not found</div>
//             )}
//         </div>
//     );
// }

// export default ProductID;


























// import React from "react";
// import ProductDetails from "../../../components/ProductDetails/ProductDetails";


// export const productId = ({params} : {params: {productId: String}}) => {
//     const {productId} = params;

    
   
//     return (
//         <div>
//          <h3 className="text-3xl font-bold mt-20">este es mi product {productId} </h3>
//         </div>
//     )
// }
// export default productId
// import React from "react";
// import ProductDetails from "../../../components/ProductDetails/ProductDetails";

// // Asegúrate de importar la interfaz adecuada si es necesaria para productId

// const ProductIdPage = ({ params }: { params: { productId: string } }) => {
//     const { productId } = params;

//     return (
//         <div>
//             <h3 className="text-3xl font-bold mt-20">Este es mi producto: {productId}</h3>
//             {/* Renderiza el componente ProductDetails y pasa productId como prop */}
//             <ProductDetails productId={productId} />
//         </div>
//     );
// };

// export default ProductIdPage;

// export const fetchProductDetails = async (id: string) => {
//   const response = await fetch(`http://localhost:4000/products/${id}`)
//   const product = await response.json();
//   return product;
// };

// export const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
//     const {id, name, price, description, image, stock, categoryId} = await fetchProductDetails(params.id);

//     return (
//         <ProductDetails id={id} name={name} price={price} description={description} image={image} stock={stock} categoryId={categoryId} />
//     )
    
// }

// export default ProductDetailsPage;

// import React from 'react';
// import { GetStaticPaths, GetStaticProps } from 'next';
// interface IProduct {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   image: string;
//   stock: number;
//   categoryId: number;
// }

// interface ProductDetailsProps {
//   product: IProduct | null;
// }

// const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
//     event.currentTarget.src = "/images/placeholder.png"; // Path to your placeholder image
//     event.currentTarget.alt = "Image not available";
//   };

//   return (
//     <section className="p-6 bg-gray-50">
//       <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full md:w-1/3 h-auto object-cover"
//           onError={handleImageError}
//         />
//         <div className="p-4 md:p-6 flex flex-col justify-between">
//           <div>
//             <h2 className="text-lg font-semibold text-gray-600">STORE</h2>
//             <h1 className="text-2xl font-bold text-gray-800 mt-2">{product.name}</h1>
//             <p className="text-xl text-gray-700 mt-2">${product.price}</p>
//             <p className="text-gray-600 mt-2">{product.description}</p>
//           </div>
//           <div className="mt-4">
//             <p className="text-sm text-gray-500">Stock: {product.stock}</p>
//             <p className="text-sm text-gray-500">Category ID: {product.categoryId}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


// export default ProductDetails;

// import React from 'react';
// import { GetStaticPaths, GetStaticProps } from 'next';
// import ProductDetails from '../../../components/ProductDetails/ProductDetails';
// import Iproduct from "../../../Interfaces/Iproduct" // Suponiendo que tienes una interfaz definida

// interface ProductDetailsPageProps {
//   product: Iproduct | null;
// }

// const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ product }) => {
//   return <ProductDetails product={product} />;
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await fetch('http://localhost:4000/products');
//   console.log({ response });
//   const products: Iproduct[] = await response.json();
  
  
//   const paths = products.map(product => ({
//     params: { id: product.id   .toString() }
//   }));

//   return {
//     paths,
//     fallback: 'blocking'
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { id } = params as { id: string };
//   let product: Iproduct | null = null;

//   try {
//     const response = await fetch(`http://localhost:4000/products/${id}`);
//     if (response.ok) {
//       product = await response.json();
//     }
//   } catch (error) {
//     console.error(error);
//   }

//   return {
//     props: {
//       product
//     }
//   };
// };

// export default ProductDetailsPage;

// import React, { useEffect, useState } from 'react';
// import { FunctionFetch } from '@/utils/FunctionFetch';


// interface IProduct {
//     id: number;
//     name: string;
//     price: number;
//     description: string;
//     image: string;
   
//   }
  
//   interface ProductDetailsProps {
//     productId: string; 
//   }
  
//   const AllProucts: React.FC  = async () => {
//     const product = await FunctionFetch("http://localhost:4000/products");
  
    
  
//     return (
//       <section className="mt-20 p-6 bg-gray-50">
//         <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full md:w-1/3 h-auto object-cover"
//             onError={handleImageError}
//           />
//           <div className="p-4 md:p-6 flex flex-col justify-between">
//             <div>
//               <h2 className="text-lg font-semibold text-gray-600">STORE</h2>
//               <h1 className="text-2xl font-bold text-gray-800 mt-2">{product.name}</h1>
//               <p className="text-xl text-gray-700 mt-2">${product.price}</p>
//               <p className="text-gray-600 mt-2">{product.description}</p>
//             </div>
         
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default ProductDetails;
// interface IProduct {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   image: string;
//   stock: number;
//   categoryId: number;
// }

// interface ProductDetailsProps {
//   productId: string; 
// }

// const ProductDetails: React.FC<ProductDetailsProps> = ({ productId }) => {
//   const [product, setProduct] = useState<IProduct | null>(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
      
//         const response = await fetch(`http://localhost:4000/products/`);
//         const data = await response.json();
//         console.log('Product details:', data); 
//         setProduct(data);
//       } catch (error) {
//         console.error('Error fetching product details:', error);
//         setProduct(null); 
//       }
//     };

//     fetchProductDetails();
//   }, [productId]); 

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
//     event.currentTarget.src = "/images/placeholder.png"; 
//     event.currentTarget.alt = "Image not available";
//   };

//   return (
//     <section className="mt-20 p-6 bg-gray-50">
//       <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full md:w-1/3 h-auto object-cover"
//           onError={handleImageError}
//         />
//         <div className="p-4 md:p-6 flex flex-col justify-between">
//           <div>
//             <h2 className="text-lg font-semibold text-gray-600">STORE</h2>
//             <h1 className="text-2xl font-bold text-gray-800 mt-2">{product.name}</h1>
//             <p className="text-xl text-gray-700 mt-2">${product.price}</p>
//             <p className="text-gray-600 mt-2">{product.description}</p>
//           </div>
//           <div className="mt-4">
//             <p className="text-sm text-gray-500">Stock: {product.stock}</p>
//             <p className="text-sm text-gray-500">Category ID: {product.categoryId}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetails;

// // <ProductDetails productId="1" />