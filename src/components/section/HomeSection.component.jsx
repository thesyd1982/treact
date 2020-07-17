import React from 'react';
import './home-section.styles.scss';

const iamge =  process.env.PUBLIC_URL + '/img/appart4.jpg';
const cpath= 'polygon(0% 100%, 100% 80%, 100% 0%, 0% 0%)';

const HomeSection = ({id,img=iamge,h='100vh', w='100vw',clippath=cpath, children}) => {
    return (  
    <section 
    className='home-section'
    id={`section-${id}`} 
    style={{
        background:
        `url(${img}) transparent`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:`${h}`,
        width:`${w}`,
        clipPath:`${clippath}`
    }}>
   
    {children}
    </section>);
}
 
export default HomeSection;