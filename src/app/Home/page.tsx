import React from 'react'
import {Card} from '../../components/Card'
import {fakeProducts} from '../../utils/fakeData'
import { Grid } from '@mui/material';
const Home: React.FC = () => {
    return (
        <div>
        <h1>Productos</h1>
        <Grid container spacing={2}>
          {fakeProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card 
                id={product.id} 
                name={product.name} 
                price={product.price} 
                description={product.description} 
                image={product.image} 
                stock={product.stock} 
                categoryId={product.categoryId} 
              />
            </Grid>
          ))}
        </Grid>
        
        </div>
    )
}

export default Home