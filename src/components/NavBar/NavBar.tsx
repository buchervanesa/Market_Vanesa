
'use client';
import { PATHROUTES } from "@/utils/PATHROUTE";
import ButtonSession from "../ButtonSession/ButtonSession"
import { useState } from "react";

interface navbarProps {
  token: string,
  setToken: string
}
export const NavBar : React.FC<navbarProps> = ()  => {
  const [isOpen, setIsOpen] = useState(false);
  const [token] = useState(localStorage.getItem("userToken") || null);

 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-500 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ELECTROSHOP</span>

        <div className="gap-2 flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ButtonSession />
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        <div
          className={` items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ?  'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-700 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href= {PATHROUTES.HOME} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Inicio</a>
            </li>
            <li>
              <a href={PATHROUTES.PRODUCTS} className="block py-2 px-3 text-white-900 rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Productos</a>
            </li>
            <li>
              { token && (<a href= {PATHROUTES.CART}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" md:hover:text-blue-100 dark:hover:text-white md:hover:bg-transparent text-blue-500 size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </a>) }
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;