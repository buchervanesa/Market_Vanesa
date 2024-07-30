import  React from 'react'
import { ICardProps } from "../../components/Card/types";
import { Card as MUICard, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import ButtonCard from '../ButtonCard/ButtonCard'


export const Card: React.FC<ICardProps> = ({ id, name, price, description, image, stock, categoryId }) => {

  return (
    
 
<div className="w-full max-w-xs  rounded-xl overflow-hidden shadow-lg bg-gray-100 text-black transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col">
  <div className="flex justify-center items-center h-40">
    <Link href={`/product/${id}`}><img className="object-cover h-36 w-35 rounded-xl " src={image} alt={name} /></Link>
  </div>
  <div className="flex flex-col flex-1 p-6 text-center justify-between">
    <div>
      <div className="font-bold text-lg mb-2">{name}</div>
      <p className="text-start text-gray-900 text-sm mb-2">
        {description}
      </p>
    </div>
    <div className="flex justify-between items-center mb-4">
      <p className="text-gray-400 text-base font-semibold">
        ${price}
      </p>
      <p className="text-gray-500 text-sm">
        Stock: {stock}
      </p>
    </div>
    <p className="text-gray-500 text-xs mb-4 ">
      Category ID: {categoryId}
    </p>
    <ButtonCard product={{ id, name, price, description, image, stock, categoryId }}/>
  </div>
</div>

 )
};

export default Card