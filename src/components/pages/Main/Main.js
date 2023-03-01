import * as React from 'react';
import equus from '../../img/EquusBlack.png';
import background from '../../video/background.mp4';
import './Main.css';

function Main() {
    return (
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
        </div>
    )
}
export default Main;