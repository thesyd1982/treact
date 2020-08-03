import React from 'react';
import './section1.styles.scss';


import data from '../../../../pages/home/data-home';
import HomeService from '../../service/home-service.component';
import Shape from '../../../core-components/shape/shape.component';

const cams = process.env.PUBLIC_URL + '/img/cameras.png';

const bg =  process.env.PUBLIC_URL + '/img/appart4.jpg';

const Section1 = ({id}) => {

    return (
        <Shape key={id}  id={`section-${id}`} shapeType={'s1'}  classname={'section'} w='100vw' h='120vh'  img={bg}>
        <div className="col-l">
            <h3 className='wtitle'>{data[id-1].section.title}</h3>
            {
                data[id-1].section.services.map(({id,...ohters}) =><HomeService key={id} id {...ohters} />)  
            }  
        </div>
        <div className="col-r">
        <img src={cams} alt="" srcSet=""/>
        </div>
     </Shape> );
}
 
export default Section1;