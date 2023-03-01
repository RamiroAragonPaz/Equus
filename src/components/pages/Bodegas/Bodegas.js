import * as React from 'react';
import './Bodegas.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MediaCard from './Card'
import {useEffect, useState } from 'react'



export default function Bodegas() {

  const [products, setProducts] = useState([])

  const mock = [{
    id: 1,
    bodega: 'Adelma',
    direccion: 'Mendoza',
    enologo: 'pepito'
  },
  {
    id: 2,
    bodega: 'Trapiche',
    direccion: 'Mendoza',
    enologo: 'robertito'
  },
  {
    id: 2,
    bodega: 'Trapiche',
    direccion: 'Mendoza',
    enologo: 'robertito'
  },
  {
    id: 2,
    bodega: 'Trapiche',
    direccion: 'Mendoza',
    enologo: 'robertito'
  },
  {
    id: 2,
    bodega: 'La Azul',
    direccion: 'Mendoza',
    enologo: 'carlitos'
  }]



  const getProducts = () =>{
    return(mock)
  }

  useEffect(()=>{
    setProducts(getProducts)
  },[])

  return (
    <div>
        <div className='title-container'>
            <h2 className='nosotros'>Bodegas</h2>
        </div>
        <div>
          <Box sx={{ flexGrow: 1, width: '50%', margin: 'auto' }}>
              <Grid container rowSpacing={8} columnSpacing={{ xs: 1, sm: 2, md: 4 }} spacing={12} className='grids'>
                  {products.map((product)=>{
                    return(
                    <Grid key={product.id} item xs={12} sm={6} md={4}>
                      <MediaCard  data={product}/>
                    </Grid>
                    )
                    })}
              </Grid>
          </Box>
        </div>
    </div>
  );
}