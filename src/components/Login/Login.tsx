
'use client';
import { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { ValidateLogin} from '../auth/Errors';
import { useAuth } from '@/Context/AuthContext';
import {  toast, Toaster } from 'sonner';
import { PATHROUTES } from '@/utils/PATHROUTE';

export const Login = () => {
  const { setUserData } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<{ email: string; password: string }>({ email: '', password: '' });
 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = ValidateLogin(formData.email, formData.password);
    setErrors(validationErrors);

    if (validationErrors.email || validationErrors.password) {
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/users/login', {
        // const response = await fetch('https://zkxnlxm3-4000.brs.devtunnels.ms/users/login', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('contraseña o usuario incorrecto');
      }

      const json = await response.json();
      setUserData(json.user);
     

      localStorage.setItem('userToken', json.token);
      document.cookie = `token=admin; path=/;`;

      toast.success('Inicio de sesión exitosa!');
      setTimeout(() => {
        window.location.href = PATHROUTES.PRODUCTS;
      }, 2000);
    } catch (error) {

      toast.error('error al iniciar sesion: usuario o contraseña incorrecta');
    }
  };

  return (
    <form className="max-w-sm mx-auto mt-28" onSubmit={handleSubmit}>
      <Toaster
       position="bottom-center"
       richColors 
      />
      <h1 className='text-3xl font-bold text-center mb-4' >Iniciar Sesión</h1>
      <div className="block mb-2 text-sm font-medium text-gray-100 ">
        <label htmlFor="email">Email:</label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">
        <label htmlFor="password">Contraseña:</label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="password"
          id="password"
          name="password"
          placeholder="********"
       
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-7" type="submit">Sign In</button>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        <a href="../Register">No tengo una cuenta</a>
      </button>
     
    </form>
  );
};

export default Login;