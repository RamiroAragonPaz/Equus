import * as React from 'react';
import './Bodegas.css';
import Card from './Cards/Card'
import {useEffect, useState } from 'react'
import equusCarga from '../../img/equuscarga.png';
import db from '../../Firebase/Firebase';
import {collection, getDocs } from 'firebase/firestore'
import wines2 from '../../img/bodega.jpg'



export default function Bodegas() {

  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getProducts = async() =>{
    const itemCollection = collection(db, 'Bodegas');
    const bodegasSnapshot = await getDocs(itemCollection);
    const bodegasList = bodegasSnapshot.docs.map( (doc)=>{
      let bodega = doc.data();
      bodega.id = doc.id;
      return bodega
      }
    )
    console.log(bodegasList)
    return bodegasList;
  }

  useEffect(()=>{
    setProducts([]);
    getProducts().then((bodegas)=>{
      setProducts(bodegas)
    });
    setLoading(false)
  },[])

  return (
    <div>
      {loading ? (
          <img src={equusCarga} alt={equusCarga} />
        ) : (
          <div>
            <div className='img-background-container'>
              <img className='img-background2' src={wines2}/>
            </div>
            <div className="cards__section">
            <h3 className='title textBodegas'>BODEGAS</h3>
              <div className="cards">
                {products.map((product, index)=>{
                  return(
                  <div key={index}>
                    <Card data={product}/>
                  </div>
                  )
                })}
              </div>
          </div>
        </div>
        )}
    </div>
  );
}