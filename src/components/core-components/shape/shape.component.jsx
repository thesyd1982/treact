import React from 'react';

const color1 = 'rgba(239,239,239,1)'
const color2 = 'rgba(209,209,209,1)'
const linear = `linear-gradient(0deg,  ${color2} 0%,  ${color1} 100%)`

const shapes ={
    'rectangle':'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    'circle':'circle(50% at 50% 50%)',
    'hp':'polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0)',
    'sp':'polygon(0% 100%, 100% 80%, 100% 0%, 0% 0%)',
    'isp':'polygon(0 0, 100% 0%, 100% 100%, 0 85%)',
    'triangle':'polygon(0 39%, 0 0, 100% 18%)',
    's5':'polygon(0 15%, 100% 0, 100% 100%, 0 85%)',
    's6':'polygon(0% 0%, 50% 0%, 100% 0%, 100% 100%, 50% calc(100% - 60px), 0% 100%)',
    's7':'polygon(0 20%, 100% 0, 100% 80%, 0% 100%)',
    's9':'polygon(0 0, 100% 20%, 100% 100%, 0 100%)'
    }


const Shape = ({id, classname,img,lin=linear,w,h,clipPath=shapes['rectangle'],shapeType,children}) => {

    if(shapeType!==''&&shapes[shapeType]!==undefined )
      { clipPath=shapes[shapeType]}

    return ( <div id={id} className={`shape ${classname}`} 
                    style={{
                      background: `url(${img}),${lin}`,
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