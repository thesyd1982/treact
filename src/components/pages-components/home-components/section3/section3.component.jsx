
import React from 'react';
import './section3.styles.scss';

import Shape from '../../../core-components/shape/shape.component';



const wifi = process.env.PUBLIC_URL + '/img/wifi.png';

const Section3 = ({id}) => {
    return ( 
        <Shape key={id}  id={`section-${id}`} shapeType={'isp'} classname={'section'}  w='100vw' h='120vh' lin='linear-gradient(45deg, #d1d1d1, #f1f1f1)'>
        <div className="stitle">
        <h3 >WI-FI PAN/TILT SECURITY</h3>
        <div className="sinfos">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni hic accusantium sit totam porro eum ipsa voluptatum? Rem, ipsa aut repudiandae nobis dicta cumque nemo, obcaecati, tempora libero reiciendis accusamus.</p>
        <img src={wifi} alt="" srcSet=""/>
        </div>
        </div>
          
        </Shape> );
}
 
export default Section3;