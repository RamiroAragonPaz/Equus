import * as React from 'react';
import { useEffect,useState } from 'react';
import equus from '../../img/Equus marca-04 (1).png';
import equusCarga from '../../img/equuscarga.png';
import background from '../../video/background.mp4';
import { Link } from 'react-router-dom';

import './Main.css';

function Main() {

  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    setLoading(false)
  },[])







  
    return (
      <div>
        {loading ? (
          <img src={equusCarga} alt={equusCarga} />
        ) : (
          <div className='wallpaper-container'>
            <video
              className='video'
              autoPlay
              loop
              muted  
            >
              <source src={background} type="video/mp4" />
            </video>
            <div className='brand-container'>
              <img src={equus} alt="logo" className='wallpaper'/>
            </div>
            <div className='text-container'>
            <Link to={`/Nosotros`} className="buttons">
              <p className='text'>Ingresar</p>
            </Link>
            </div>
          </div>
        )}
      </div>
    )
}
export default Main;