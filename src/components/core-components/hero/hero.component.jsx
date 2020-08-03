import React from 'react';
import './hero.styles.scss';


const image =  process.env.PUBLIC_URL + '/img/hero.jpg';
const background =  process.env.PUBLIC_URL + '/img/hero.jpg';
const cpath = "polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0)";

const Hero = ({title='Hero',img= image,height='100vh', width='100vw',clippath=cpath,children}) => {
    return ( 
    <div className="hero" id='hero' style={{

 background:
  `url(${img}), url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:`${height}`,
        width:`${width}`,
        clipPath: `${clippath}`
        }}>

{/* <div className="hero" style={{
        background: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
       }}>
<div className="hero" style={{


background: `linear-gradient(135deg, rgba(72, 70, 89, 0.8) 0%, rgba(72, 70, 89, 0.77) 16%, rgba(0, 137, 45, 0.63) 85%, rgba(0, 137, 45, 0.6) 100%)
 ,url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity:0.8,position: 'absolute',
        left: 0,
            top:0}}> */}
      
       
     
        
    <h1>{title}</h1>
        {children}
    </div> 
    // </div>
    // </div>
    );
}
 
export default Hero;