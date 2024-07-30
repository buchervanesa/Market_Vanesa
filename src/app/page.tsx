'use client'
import Image from "next/image";
import React from "react";
import NavBar from "@/components/NavBar/NavBar";

import {HomeComponent} from "../components/HomeComponent/HomeComponent";
import {useState} from "react";



export default function Home() {
  const [token, setToken] = useState(localStorage.getItem('userToken')?? null);

  
  return (
    <div>
      <NavBar token={token} setToken={setToken}/>
      <HomeComponent/>
      
     

   
    </div>
  );
}
