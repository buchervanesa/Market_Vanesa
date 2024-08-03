'use client'
import React from "react";
import { useAuth } from "@/Context/AuthContext";
import Link from "next/link";



export const ButtonSession = () => {
 
    const {token, setToken, DataUser} = useAuth();


   const LogOutHandler = () => {
       setToken(null)
       localStorage.clear();
       document.cookie =
      "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; samesite=strict;";
        
   }
    return (
        
        <div className="flex space-x-2" >
        <div className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
           {token && DataUser ?  <Link href={'/'}><button onClick={LogOutHandler}>Cerrar Sesion</button></Link>  : <Link href={'./Login'}><button>Iniciar Sesion</button> </Link> }
        </div>
        <div className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
           {token && DataUser ?  <Link href={'/Dashboard'}><button>Mi Perfil</button></Link>  : <Link href={'./Register'}><button>Registrarme</button> </Link> }
        </div>

        </div>
    );
}

export default ButtonSession;