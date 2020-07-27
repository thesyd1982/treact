import React from 'react';
// import {AiOutlineAlert} from 'react-icons/ai'
import {GiRingingBell} from 'react-icons/gi'
const HomeService = ({id ,title,description,icon}) => {
    return ( 
    <div className="home-service" key ={id}>
        <span className="tag-wrap">
        <div className="home-service-icon">
    
           {icon}
           <GiRingingBell  size={124} color={"white"}/>
           {/* <AiOutlineAlert  size={64} color={"white"}/> */}
           
        </div>
        </span>
        <div className="home-service-infos">
        <h3 className='wsub-title'>{title}</h3>
        <p className='pservice'>{description}Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ducimus officiis quod ullam, sed laboriosam?</p>
        
        </div>
        
</div> );
}
 
export default HomeService;
