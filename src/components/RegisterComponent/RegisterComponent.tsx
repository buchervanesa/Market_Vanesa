  /* eslint-disable @next/next/no-img-element */
  'use client';
import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { ValidateUserRegister } from "../auth/Errors";
import { toast, Toaster } from 'sonner';
import Image from "next/image";
import { PATHROUTES } from "@/utils/PATHROUTE";

const RegisterComponent = () => {
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: ""
    });

    
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegister(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = ValidateUserRegister(register.name, register.email, register.password, register.address, register.phone);
        setErrors(validationErrors);

        if (Object.values(validationErrors).some(error => error !== '')) {
            return;
        }

        console.log('Form Data:', register);

        fetch('http://localhost:4000/users/register', {
            // fetch('https://zkxnlxm3-4000.brs.devtunnels.ms/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(register)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: prueba otro mail' );
            }
            return response.json();
        })
        .then((json) => {
            console.log("json", json);
            toast.success('Registro exitoso');
            setRegister({
                name: "",
                email: "",
                password: "",
                address: "",
                phone: ""
            });
       
            setTimeout(() => {
              window.location.href = PATHROUTES.LOGIN;
                  }, 2000);
        })
        .catch((error) => {
            console.log(error);
            toast.error('Error al registrar usuario, mail ya registrado');
        });
      
    };

    return (
        <div className="flex flex-wrap text-center items-center justify-center min-h-screen bg-gray-800 mt-20 gap-10">
  <div className=" text-center bg-gray-100 p-10 rounded-lg shadow-lg">
    <h1 className="text-2xl font-semibold text-blue-600">¡Regístrate para comprar!</h1><br />
    <h2 className="text-xl font-semibold text-black">Descubre nuestra amplia gama de productos</h2><br />
    <p className="text-xs text-black font-semibold">
      ¡No esperes más y únete a nuestra comunidad hoy mismo! <br />
    </p><br />
    <div className="flex justify-center">
  
      <img src="https://cdn-icons-png.flaticon.com/512/3200/3200751.png" alt="Promo Image" className="w-60 "/>
    </div>
  </div>


            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <Toaster
                    position="top-center"
                    richColors />
                <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">Registro</h2>
                
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={register.name}
                        onChange={handleChange}
                        className="text-black w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Nombre"
                        
                    />
                    {errors.name && <div className="text-red-500">{errors.name}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Correo electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={register.email}
                        onChange={handleChange}
                        className="text-black w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Correo electrónico"
                       
                    />
                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={register.password}
                        onChange={handleChange}
                        className="text-black w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Contraseña"
                      
                    />
                    {errors.password && <div className="text-red-500">{errors.password}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700">Dirección:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={register.address}
                        onChange={handleChange}
                        className=" text-black w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Dirección"
                        
                    />
                    {errors.address && <div className="text-red-500">{errors.address}</div>}
                </div>
                <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700">Teléfono:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={register.phone}
                        onChange={handleChange}
                        className="text-black w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Teléfono"
                   
                    />
                    {errors.phone && <div className="text-red-500">{errors.phone}</div>}
                </div>
                <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-200">Registrarme</button>
               
            </form>
        </div>
    );
};

export default RegisterComponent;


