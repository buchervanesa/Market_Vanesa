 /* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../Context/AuthContext';

import { CreateOrder } from '../../utils/FetchOrder';
import {  toast, Toaster } from 'sonner';



interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart = () => {
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const { token } = useAuth();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (storedCart.length > 0) {
      setCartProducts(storedCart);
      calculateTotal(storedCart);
    }
  }, []);

  const calculateTotal = (products: IProduct[]) => {
    const totalCart = products.reduce((acc, product) => {
      return acc + product.price; 
    }, 0);
    setTotal(totalCart);
  };

  const handleRemoveFromCart = (productId: number) => {
    const updatedCart = cartProducts.filter(product => product.id !== productId);
    setCartProducts(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart); 
  };

  const handleAddToCart = async () => {
    const productIds = cartProducts.map((product) => product.id);
    if (productIds.length === 0) {
      toast.warning('No hay productos en el carrito');
      return;
    }

    if (token) {
      await CreateOrder(productIds as number[], token);
      toast.success('Se ha creado la orden con éxito');
      setCartProducts([]);
      setTotal(0);
      localStorage.removeItem('cart');

      setTimeout(() => {
        window.location.href = '/Dashboard';
      }, 1000);
    } else {
      toast.error('No se pudo crear la orden. El token no está disponible.');
    }
  };

  return (
    <div className="mt-20 container mx-auto px-4 py-10">
      <Toaster position="bottom-center" richColors />

      <div className="bg-gray-700 shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Carrito de Compras</h1>
        {cartProducts.length > 0 ? (
          <>
            <ul className="space-y-6">
              {cartProducts.map((product) => (
                <li key={product.id} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-gray-200">${product.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
              <button
                onClick={handleAddToCart}
                className="mt-4 w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Comprar
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600">Tu carrito está vacío</p>
        )
      
        }
      </div>
    </div>
  );
};

export default Cart;



