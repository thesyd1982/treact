import React from 'react';

const color1 = 'rgba(239,239,239,1)'
const color2 = 'rgba(209,209,209,1)'
const linear = `linear-gradient(0deg,  ${color2} 0%,  ${color1} 100%)`

const shapes ={
    'circle':'circle(50% at 50% 50%)',
    'hp':'polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0)',
    'sp':'polygon(0% 100%, 100% 80%, 100% 0%, 0% 0%)',
    'isp':'polygon(0 0, 100% 0%, 100% 100%, 0 85%)',
    'triangle':'polygon(0 39%, 0 0, 100% 18%)'
    }


const Shape = ({id, classname,lin=linear,w,h,clipPath=shapes['sp'],shapeType,children}) => {

    if(shapeType!==''&&shapes[shapeType]!==undefined )
      { clipPath=shapes[shapeType]
    console.log(shapeType,shapes[shapeType])}

    return ( <div id={id} className={`shape ${classname}`} 
                    style={{
                                background:`${lin}`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                height:`${h}`,
                                width:`${w}`,
                                clipPath:`${clipPath}`,      

                            }}>
                {children}
             </div> );
}
 
export default Shape;