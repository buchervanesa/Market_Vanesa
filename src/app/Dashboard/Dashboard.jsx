'use client'
import  { useEffect } from 'react';
import { useAuth} from '../../Context/AuthContext'; // Asegúrate de ajustar la ruta según tu estructura de carpetas
import { getOrders } from '@/utils/FetchOrder';
import { useState } from 'react';
import { FaUserCircle, FaShoppingCart, FaSignOutAlt, FaHome, FaBars } from 'react-icons/fa';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const { DataUser, token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const fetchedOrders = await getOrders(token);
          setOrders(fetchedOrders);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      }
    };

    fetchData();
  }, [token]);

  if (!DataUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
    {/* Header */}
    <header className="bg-gray-700 text-white p-4 shadow-lg flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <FaBars className="text-2xl" />
            <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
            <FaUserCircle className="text-2xl" />
            <span>{DataUser.name || 'User'}</span>
            <FaSignOutAlt className="text-2xl cursor-pointer" />
        </div>
    </header>

    <div className="flex flex-1 flex-col md:flex-row ">
        <aside className="w-full md:w-64  bg-gray-900 text-white flex flex-col shadow-lg">
            <nav className="mt-4  flex-1">
                <ul>
                    <li className=" p-4 hover: cursor-pointer flex items-center space-x-2">
                        <FaUserCircle />
                        <span>Perfil</span>
                    </li>
                    <li className="p-4 hover: cursor-pointer flex items-center space-x-2">
                        <FaShoppingCart />
                        <span>Compras</span>
                    </li>
                </ul>
            </nav>
        </aside>

        <main className="flex-1 p-8 bg-gray-800">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-white">Bienvenido, {DataUser.name || 'User'}!</h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <section className="bg-indigo-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Mis Pedidos</h2>
                    <div>
                        <p className="text-gray-700">Usted tiene {orders.length} Pedidos.</p>
                        <ul className="mt-4">
                            {orders.map((order) => (
                                <li key={order.id} className="mb-4 p-4 text-black bg-white rounded-lg shadow-md">
                                    <strong>Estado:</strong> {order.status}<br />
                                    <strong>Fecha:</strong> {new Date(order.date).toLocaleDateString()}<br />
                                    <ul className="mt-2">
                                        {order.products.map((product) => (
                                            <li key={product.id} className="flex items-center space-x-4">
                                                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                                                <div>
                                                    <p className="text-gray-700"><strong>Producto:</strong> {product.name}</p>
                                                    <p className="text-gray-700"><strong>Precio:</strong> ${product.price}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className="bg-indigo-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-center text-2xl font-semibold mb-4 text-gray-800">
                        Mi Perfil
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 inline-block ml-2 size-20 text-indigo-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </h2>
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <p className="text-center text-gray-700"><strong>Nombre:</strong> {DataUser.name || 'N/A'}</p>
                        <p className="text-center text-gray-700"><strong>Email:</strong> {DataUser.email || 'N/A'}</p>
                        <p className="text-center text-gray-700"><strong>Celular:</strong> {DataUser.phone || 'N/A'}</p>
                        <p className="text-center text-gray-700"><strong>Dirección:</strong> {DataUser.address || 'N/A'}</p>
                        <p className="text-center text-gray-700"><strong>Pedidos:</strong> {orders.length || 'N/A'}</p>
                    </div>
                </section>
            </div>
        </main>
    </div>
</div>
  );
};

export default Dashboard;
