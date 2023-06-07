import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import db from '../../../Firebase/Firebase';
import {collection, doc, getDoc, getDocs } from 'firebase/firestore';
import './bodega.css'




const BodegaDetail = ({ data }) => {
    const [ loading, setLoading ] = useState(true);
    const { id }  = useParams()
    const [product, setProduct] = useState({})
    const [wines, setWines] = useState({})
    const { title, description, background, img } = product

    const getProduct = async() => {
        const docRef = doc(db, "Bodegas", id);
        console.log(id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let product = docSnap.data();
            product.id = docSnap.id;
            setProduct(product)
          } else {
            console.log("No such document!");
          }
    }

    console.log("wines",title);

    const getWines = async() => {
        const winesname = "wines".concat(id);
        console.log(winesname);
        const itemCollection = collection(db, winesname);
        const winesSnapshot = await getDocs(itemCollection);
        const winesList = winesSnapshot.docs.map((doc)=>{
            let wine = doc.data();
            wine.id = doc.id;
            return wine
            });
        console.log(winesList)
        return winesList;
    }
        

    useEffect( () => {
        getProduct().then( ()=>{
            setWines({});
            getWines().then((wines)=>{
                setWines(wines)
                console.log(wines);
                setLoading(false)
            });
        });
    }, [id])
      
    return (
        <div>
        {loading ? (
            <div>
                <p>Loading...</p>
            </div>
        ):(
            <div>
                <div className='container-image'>
                    <img className='img-logo' src={img}/>
                    <img className='img-background' src={background}/>
                </div>
                <div className='container-text'>
                    <div className='description-container'>
                        <p className='description'>{description}</p>
                    </div>
                    <div className='grid-container'>
                        <div className='card-container'>
                            <div  className='cava'>
                                <h2 className='cava-title'>Nuestra Cava</h2>
                            </div>
                            {wines.map((wine, index)=>{
                                return(
                                    <div key={index} className='custom-card'>
                                        <div>
                                            <img className='img-wines' src={wine.img}/>
                                        </div>
                                        <div className='card-text'>
                                            <h3>{wine.name}</h3>
                                            <p>{wine.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
    )
}

export default BodegaDetail