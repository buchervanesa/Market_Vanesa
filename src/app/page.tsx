'use client'
import Image from "next/image";
import React from "react";
import NavBar from "@/components/NavBar/NavBar";

import {HomeComponent} from "../components/HomeComponent/HomeComponent";
import {useState} from "react";



export default function Home() {


  
  return (
    <div>
      <NavBar token={""} setToken={""}/>
      <HomeComponent/>
      
     

   
    </div>
  );
}
