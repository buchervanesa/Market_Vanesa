
 'use client';
 import {Card} from '../../components/Card'
 import { ICardProps } from '@/components/Card/types';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useAuth } from '../../Context/AuthContext';
import Link from 'next/link';
import product from '../product/product';


interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  stock: number;
  categoryId: number;
  // Otros campos que pueda tener tu producto
}

const Products = () => {
  const { token } = useAuth(); // Obtener token y DataUser del contexto de autenticación
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<IProduct[]>([]); // Estado local para el carrito
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/products");
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        const productsData = await response.json();
        setProducts(productsData);
        setFilteredProducts(productsData); // Actualizar el estado filteredProducts aquí
      } catch (error) {
        setError('Error al obtener los productos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.categoryId.toString() === selectedCategory));
    }
  }, [selectedCategory, products]);

  const handleAddToCart = (product: IProduct) => {
    if (!token) {
      alert('Debes iniciar sesión para agregar productos al carrito.');
      return;
    } else {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Producto agregado al carrito');
    }
  };

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="pt-16 text-center">
      <header className="text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Productos</h1>
        <p className="text-xl">Encuentra los mejores productos a los mejores precios</p>
      </header>

      <div className="flex justify-center mt-4 rounded-md ">
        <button onClick={() => setSelectedCategory('All')} className="btn-primary bg-amber-600 hover:bg-blue-500  p-3 rounded-s">Todos</button>
        <button onClick={() => setSelectedCategory('1')} className="btn-primary bg-amber-600 hover:bg-blue-500 p-3">Smartphones</button>
        <button onClick={() => setSelectedCategory('2')} className="btn-primary bg-amber-600 hover:bg-blue-500 p-3">Laptops</button>
        <button onClick={() => setSelectedCategory('3')} className="btn-primary bg-amber-600 hover:bg-blue-500 p-3">Tablets</button>
        <button onClick={() => setSelectedCategory('4')} className="btn-primary bg-amber-600 hover:bg-blue-500 p-3">Headphones</button>
        <button onClick={() => setSelectedCategory('5')} className="btn-primary bg-amber-600 hover:bg-blue-500 p-3">Cameras</button>
        <button onClick={() => setSelectedCategory('6')} className="btn-primary bg-amber-600 hover:bg-blue-500 p-3">Printers</button>
        <button onClick={() => setSelectedCategory('7')} className="btn-primary bg-amber-600 hover:bg-blue-500 p-3">Monitors</button>
        <button onClick={() => setSelectedCategory('8')} className="btn-primary bg-amber-600 hover:bg-blue-500 p-3">Storage</button>
        <button onClick={() => setSelectedCategory('9')} className="btn-primary bg-amber-600 hover:bg-blue-500 p-3 rounded-e">Accessories</button>
      </div>

      <section className="mt-2 p-6 justify-center bg-gray-800 gap-5 flex flex-wrap">
        {filteredProducts.map((product) => (
          <Card  key={product.id} {...product} />
        ))}
      </section>
      
      {/* <Grid container spacing={1} className="gap-x-0 gap-y-6 container mx-auto px-1 py-3">
        {products.map((product) => (
          <Grid item xs={12} sm={2} md={3} key={product.id}>
            <div className="ml-10 max-w-xs rounded-xl overflow-hidden shadow-lg bg-gray-100 text-black transition-transform transform hover:scale-105 hover:shadow-2xl h-full flex flex-col">
              <div className="flex justify-center items-center h-40">
                <img className="mt-7 pt-5 mb-7 object-cover h-44 min-w-44 rounded-xl" src={product.image} alt={product.name} />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="font-bold text-lg mb-5">{product.name}</div>
                <p className="text-gray-900 text-sm mb-2 flex-grow">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400 text-base font-semibold">${product.price}</p>
                  <p className="text-gray-500 text-sm">Stock: {product.stock}</p>
                </div>
                <p className="text-gray-500 text-xs mt-2">Category ID: {product.categoryId}</p>
                <button 
                id={product?.id.toString()}
                onClick={() => handleAddToCart(product)} className="bg-green-500 hover:bg-green-600 text-whimd p-3 px-4 py-2 rounded mt-2" >Agregar al carrito</button>
              </div>
            </div>
          </Grid>
        ))}
      </Grid> */}
      <div>
       
        {cart.length > 0 && (
          <div className="mt-4 text-center">
            <Link href="/Carrito">
              <button className="bg-blue-500 hover:bg-blue-600 text-whimd p-3 px-4 py-2 rounded">
                Ver Carrito ({cart.length} {cart.length === 1 ? 'producto' : 'productos'})
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;