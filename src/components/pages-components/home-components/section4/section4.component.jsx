
import React from 'react';
import './section4.styles.scss';

import Shape from '../../../core-components/shape/shape.component';

const iphones = process.env.PUBLIC_URL + '/img/iphones.png';
const googlePlay = process.env.PUBLIC_URL + '/img/google-play.png';
const appStore = process.env.PUBLIC_URL + '/img/app-store.png';

const Section4 = ({id}) => {
    return ( 
        <Shape key={id}  id={`section-${id}`}  classname={'section'}  w='100vw' h='120vh' lin='linear-gradient(45deg, #fff,#fff )'>
       <div className="stitle">
       <h3 >Réglage FACILE DE LA CAMÉRA</h3>
       <div className="sinfos">
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni hic accusantium sit totam porro eum ipsa voluptatum? Rem, ipsa aut repudiandae nobis dicta cumque nemo, obcaecati, tempora libero reiciendis accusamus.</p>
       <img src={iphones} alt="" srcSet=""/>
       <div className="appstores"><img src={googlePlay} alt="" srcSet=""/>
       <img src={appStore} alt="" srcSet=""/></div> 
       </div>
       </div>    
       </Shape> );
}
 
export default Section4;