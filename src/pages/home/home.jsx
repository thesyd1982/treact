import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../../components/hero/hero.component';
import HomeSection from '../../components/section/HomeSection.component';
import './home.styles.scss';
import data from './data-home';
import HomeService from '../../components/service/home-service.component';
import Shape from '../../components/shape/shape.component';

const s2 = process.env.PUBLIC_URL + '/img/section2.jpg';
const cams = process.env.PUBLIC_URL + '/img/cameras.png';
const cam = process.env.PUBLIC_URL + '/img/cam.png';
const wifi = process.env.PUBLIC_URL + '/img/wifi.png';
const iphones = process.env.PUBLIC_URL + '/img/iphones.png';
const googlePlay = process.env.PUBLIC_URL + '/img/google-play.png';
const appStore = process.env.PUBLIC_URL + '/img/app-store.png';

const cpathHero = "polygon(100% 0, 100% 92%, 52% 100%, 0 92%, 0 0)";
const cpathSection1= 'polygon(0% 100%, 100% 92%, 100% 0%, 0% 0%)';



const Home = () => {
    return (
    <div className="home">
        <Hero title='Home' clippath={cpathHero} />
        <HomeSection key={1}  id={1} clippath={cpathSection1}>
        <div className="column-inner">
            <h3 className='wtitle'>{data[0].section.title}</h3>
            {
                data[0].section.services.map(({id,...ohters}) =><HomeService key={id} id {...ohters} />)  
            }  
        </div>
        <div className="column-inner">
        <img src={cams} alt="" srcSet=""/>
        </div>
        

        </HomeSection>
        <HomeSection key={2}  id={2} clippath={cpathSection1} img={s2}>
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
                 <Link to={"/"} >Découvrir nos cameras</Link> 
            </div>
               
           </div>
          
       </div>
       </HomeSection>
      
       <Shape key={3} id={'section-3'}  classname={'section-3'} shapeType={"isp"}  w='100vw' h='120vh' lin='linear-gradient(45deg, #d1d1d1, #f1f1f1)'>
       <div className="stitle">
       <h3 >WI-FI PAN/TILT SECURITY</h3>
       <div className="sinfos">
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni hic accusantium sit totam porro eum ipsa voluptatum? Rem, ipsa aut repudiandae nobis dicta cumque nemo, obcaecati, tempora libero reiciendis accusamus.</p>
       <img src={wifi} alt="" srcSet=""/>
       </div>
       </div>    
       </Shape>
       <Shape key={4} classname={'spacer-1'} shapeType={"triangle"}  w='100vw' h='120vh' lin='linear-gradient(45deg, #f1f1f1,#d1d1d1 )'>
       </Shape>
       <Shape key={5} id={'section-4'}  classname={'section-4'} shapeType={"sp"}  w='100vw' h='150vh' lin='linear-gradient(45deg, #fff,#fff )'>
       <div className="stitle">
       <h3 >Réglage FACILE DE LA CAMÉRA</h3>
       <div className="sinfos">
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni hic accusantium sit totam porro eum ipsa voluptatum? Rem, ipsa aut repudiandae nobis dicta cumque nemo, obcaecati, tempora libero reiciendis accusamus.</p>
       <img src={iphones} alt="" srcSet=""/>
      <div className="appstores"><img src={googlePlay} alt="" srcSet=""/>
      <img src={appStore} alt="" srcSet=""/></div> 
       </div>
       </div>    
       </Shape>


       <div className="container">
        
        </div>
    </div>  );
}
 
export default Home;