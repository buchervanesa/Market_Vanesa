// ProductFetch.ts
// import Iproduct from '@/Interfaces/Iproduct';

// const apiURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// export const fetchProducts = async (): Promise<Iproduct[]> => {
//     try {
//         const response = await fetch(`${apiURL}/products`, {
//             method: 'GET',
//         });

//         if (!response.ok) {
//             throw new Error('Failed to fetch products');
//         }

//         const products: Iproduct[] = await response.json();
//         return products;
//     } catch (error: any) {
//         throw new Error(error.message || 'Something went wrong');
//     }
// }

// export const fetchProductById = async (id: string): Promise<Iproduct | null> => {
//     try {
//         const response = await fetch(`${apiURL}/products/${id}`, {
//             method: 'GET',
//         });

//         if (!response.ok) {
//             throw new Error('Failed to fetch product');
//         }

//         const product: Iproduct = await response.json();
//         return product;
//     } catch (error: any) {
//         console.error('Error fetching product:', error);
//         return null;
//     }
// }


// import Iproduct from '@/Interfaces/Iproduct';
// // const apiURL = process.env.NEXT_PUBLIC_API_URL;

// export const fetchProducts = async (): Promise<Iproduct[]> => {
//     try {
//         const response = await fetch(`http://localhost:4000/products`, {
//             method: 'GET',
//         });
//  console.log ("response", response)
//         if (!response.ok) {
//             throw new Error('Failed to fetch products');
//         }

//         const products: Iproduct[] = await response.json();
//         return products;
//         console.log("products", products)
//     } catch (error: any) {
//         throw new Error(error.message || 'Something went wrong');
//     }
// }

// export const fetchProductById = async (id: string): Promise<Iproduct> => {
//     try {
//         const products = await fetchProducts();
//         const product = products.find(product => product.id?.toString() === id);
//         console.log ("product", product)
//         if (!product) {
//             throw new Error('Product not found');
//         }

//         return product;
//     } catch (error: unknown) {
//         if (error instanceof Error) {
//             throw new Error(error.message || 'Something went wrong');
//         } else {
//             throw new Error('An unexpected error occurred');
//         }
//     }
// }


// import  Iproduct  from '../Interfaces/Iproduct';
// const apiURL = process.env.NEXT_PUBLIC_API_URL;




// export const fetchProducts = async () => {
//     try {
//         const response = await fetch(`${apiURL}/products`,{
//             method: 'GET',
//         });

//         const products =  Iproduct[] = await response.json();
//         return products;
//     } catch (error:any) {
//         throw new Error(error);
//     }
// }

// export default fetchProducts

import Iproduct  from '../Interfaces/Iproduct';
const apiURL = process.env.NEXT_PUBLIC_API_URL;
export const fetchProducts = async (): Promise<Iproduct[]> => {
    try {
        const response = await fetch(`${apiURL}/products`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const products: Iproduct[] = await response.json();
        return products;
    } catch (error: any) {
        throw new Error(error.message || 'Something went wrong');
    }
}

export const fetchProductById = async (id:string) => {
    try {
        const products = await fetchProducts();
        const product = products.find(product => product.id?.toString() === (id));

        if (!product) {
            throw new Error('Product not found');
        }

        return product;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message || 'Something went wrong');
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}