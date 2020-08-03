
import React from 'react';
import './section2.styles.scss';

import AButton from '../../../core-components/aButton/aButton.component';
import Shape from '../../../core-components/shape/shape.component';


const bg = process.env.PUBLIC_URL + '/img/section2.jpg';
const cam = process.env.PUBLIC_URL + '/img/cam.png';

const Section2 = ({id}) => {
    return ( 
        <Shape key={id}  id={`section-${id}`} shapeType={'s1'}  classname={'section'} w='100vw' h='120vh'  img={bg}>
       
        <div className="camsection">
            <img src={cam} alt="" srcSet=""/>
            <div className="cam-infos">
             <span className="cam-title">
             Nos cameras supportent
             </span>
             <span className="cam-title">
             L'Audio bidirectionnel
             </span>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum possimus quo maxime deleniti optio laboriosam beatae inventore veniam illo quis, temporibus ab quia similique?</p>
             <div className="cam-icons">
                <div className="cam-icon">
                 test 1
                </div>
                <div className="cam-icon cam-icon--big">
                test 2
                </div>
                
                <div className="cam-icon">
                test 3
                </div>
            </div>
            <div className="cam-button">
            <AButton link={"/"} text={'Découvrir nos cameras'}></AButton>
             </div>
                
            </div>
           
        </div>
    </Shape>);
}
 
export default Section2;