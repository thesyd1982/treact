
import React from 'react';
import './section5.styles.scss';

import Shape from '../../../core-components/shape/shape.component';

const camerasdcard = '/img/camerasdcard.png';
const bg='/img/bg-section-5.jpg';

const Section5 = ({id}) => {
    return ( 
        <Shape key={id}  id={`section-${id}`}  classname={'section'}  w='100vw' h='120vh' 
         shapeType={'s5'} lin={'linear-gradient(0deg, rgba(239,239,239,1) 0%, rgba(0,0,0,1) 100%)'}
        img={bg}>

        <div className="overlay-bg">
            <div className="col-left">
                <h3>Enregistrement Local</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut cum mollitia saepe, iure et, qui id illo culpa pariatur sequi enim ducimus dolorum laboriosam, laudantium molestiae nemo recusandae! Totam?</p>
                <img src={camerasdcard} alt="" srcSet=""/>
            </div>
       </div>
       </Shape> );
}
 
export default Section5;