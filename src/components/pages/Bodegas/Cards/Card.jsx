import * as React from 'react';
import './Cards.css'
import { Link } from 'react-router-dom';

export default function Card({ data }) {

  const {id, title, location, img} = data;
  

  return (
    <div className='card'>
      <Link to={`/Bodegas/${id}`}>
          <div className="card__image">
            <img src={img} alt={img}/>
          </div>
          <div className='card__info'>
            <h4>{(title).toUpperCase()}</h4>
            <p>{location}</p>
            <p>Ir a {title}</p>
          </div>
      </Link>   
    </div>
  )
}