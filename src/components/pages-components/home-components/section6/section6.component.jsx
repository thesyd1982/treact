
import React from 'react';
import './section6.styles.scss';

import Shape from '../../../core-components/shape/shape.component';

import AButton from '../../../core-components/aButton/aButton.component';

const ipcam = process.env.PUBLIC_URL + '/img/ip-camera.jpg';

const Section6 = ({id}) => {
    return ( 
        <Shape key={id}  id={`section-${id}`}  classname={'section'}  w='100vw' h='100vh' 
      lin={'linear-gradient(0deg, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%)'} >

        
<div className="col-left">
    <h3>IP CAMERA AVEC NIGHT VISION</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut cum mollitia saepe, iure et, qui id illo culpa pariatur sequi enim ducimus dolorum laboriosam, laudantium molestiae nemo recusandae! Totam?</p>
         <div className="ip-cams-button"> <AButton cl={'a-button a-button--black'} link={'/'} text={'En savoir plus'}>
          </AButton> 

          <AButton  link={'/'} text={'Essayer maintenant'}>
          </AButton>  
          </div>
</div>
<div className="col-right">
<img src={ipcam} alt="" srcSet=""/>


</div
></Shape>);
}
 
export default Section6;