import React from 'react';


import Hero from '../../components/core-components/hero/hero.component';
import HomeSection from '../../components/pages-components/section/HomeSection.component';
import './home.styles.scss';
import data from './data-home';
import HomeService from '../../components/pages-components/service/home-service.component';
import Shape from '../../components/core-components/shape/shape.component';
import AButton from '../../components/core-components/aButton/aButton.component';

import {IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter,IoLogoYoutube} from 'react-icons/io'
import {FiPhone, FiMail} from 'react-icons/fi';
import { GoLocation} from 'react-icons/go';

const s2 = process.env.PUBLIC_URL + '/img/section2.jpg';
const cams = process.env.PUBLIC_URL + '/img/cameras.png';
const cam = process.env.PUBLIC_URL + '/img/cam.png';
const wifi = process.env.PUBLIC_URL + '/img/wifi.png';
const iphones = process.env.PUBLIC_URL + '/img/iphones.png';
const googlePlay = process.env.PUBLIC_URL + '/img/google-play.png';
const appStore = process.env.PUBLIC_URL + '/img/app-store.png';
const camerasdcard = '/img/camerasdcard.png';
const bgSection5='/img/bg-section-5.jpg';
const ipcam = '/img/ip-camera.jpg';
const bgs7 = '/img/bg-section-7.jpg';
const cameraControl = '/img/camera-control.jpg'
const footerBg = '/img/footer_bg.jpg'


const cpathHero = "polygon(100% 0, 100% 92%, 52% 100%, 0 92%, 0 0)";
const cpathSection1= 'polygon(0% 100%, 100% 92%, 100% 0%, 0% 0%)';



const Home = () => {
    return (
        
    <div className="home">
        <Hero title='Home' clippath={cpathHero} />
        <HomeSection key={1}  id={1} clippath={cpathSection1}>
        <div className="col-left">
            <h3 className='wtitle'>{data[0].section.title}</h3>
            {
                data[0].section.services.map(({id,...ohters}) =><HomeService key={id} id {...ohters} />)  
            }  
        </div>
        <div className="col-right">
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
           <AButton link={"/"} text={'Découvrir nos cameras'}></AButton>
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
       <Shape key={4} classname={'spacer-1'} shapeType={"triangle"}  w='50vw' h='50vh' lin='linear-gradient(45deg, #f1f1f1,#d1d1d1 )'>
       </Shape>
       <Shape key={5} id={'section-4'}  classname={'section-4'}   w='100vw' h='120vh' lin='linear-gradient(45deg, #fff,#fff )'>
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
       <Shape key={6} id={'section-5'} classname={'section-5'} w='100vw' h='120vh' shapeType={'s5'}
       
       lin={'linear-gradient(0deg, rgba(239,239,239,1) 0%, rgba(0,0,0,1) 100%)'}
        img={bgSection5}>
        <div className="overlay-bg">
            <div className="col-left">
                <h3>Enregistrement Local</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut cum mollitia saepe, iure et, qui id illo culpa pariatur sequi enim ducimus dolorum laboriosam, laudantium molestiae nemo recusandae! Totam?</p>
                <img src={camerasdcard} alt="" srcSet=""/>
            </div>
       </div>

       </Shape> 
       <Shape key={7} id={'section-6'} classname={'section-6'} w='100vw' h='100vh'  lin={'linear-gradient(0deg, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%)'} >

        
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
            
           
       </div>

       </Shape> 
       <Shape key={8} classname={'spacer-2'} shapeType={"triangle"}  w='50vw' h='40vh' lin='linear-gradient(45deg, #f1f1f1,#d1d1d1 )'></Shape>
       
       <Shape key={9} id={'section-7'}  classname={'section-7'} shapeType={"s7"} w='100vw' h='100vh' img={bgs7}>
       
       <div className="overlay-bg">
       <div className="stitle">
      
       <h3 >MODERN LIFE AND WORK PULLS</h3>
       <span>Us All In A Million Different Directions</span>
       </div> 
       <div className="sinfos">
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni hic accusantium sit totam porro eum ipsa voluptatum? Rem, ipsa aut repudiandae nobis dicta cumque nemo, obcaecati, tempora libero reiciendis accusamus.</p>
       <AButton link={'/'} text={'GETTING STARTED'}/>
       </div>
       </div>
       </Shape>
       <Shape key={10} classname={'spacer-3'} shapeType={"triangle"}  w='50vw' h='40vh' lin='linear-gradient(45deg, rgba(255,255,255,.6),rgba(255,255,255,.3))'></Shape>
       <Shape key={11} id={'section-8'}  classname={'section-8'}  w='100vw' h='100vh'  lin='linear-gradient(45deg, rgba(255,255,255,1),rgba(255,255,255,1))'>
       <div className="col-left">
                <img src={cameraControl} alt="" srcSet=""/>
            </div> 
            
            <div className="col-right">
                <h3>EVERYTHING YOU NEED</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Integer convallis accumsan mi nec elementum. Nulla ante metus, varius non condimentum,
                     molestie nec tellus. Fusce odio nulla, consectetur in sagittis eget.
                    </p>

                    <div className="ip-cams-button"> 
                      <AButton cl={'a-button a-button--black'} link={'/'} text={'En savoir plus'}>
                      </AButton> 
                      <AButton  link={'/'} text={'Essayer maintenant'}>
                      </AButton>  
                    </div>
            </div>
            
       </Shape>
       <Shape key={12} id={'section-9'}  classname={'section-9'} shapeType={"s9"} w='100vw' h='60vh'>
       <div className="container">
       <h3>Profitez de votre comfort</h3>
            <form action="" method="post">
                <input type="text"/>
                
            </form>
            <AButton  link={'/'} text={'En savoir plus'}>
            </AButton>
                </div>
       </Shape>
       
        <Shape key={13} id={'footer-1'}  classname={'footer-1'} img={footerBg} w='100vw' h='41vh' >
       <div className="overlay-bg">
        {/* <h3>Profitez de votre comfort</h3> */}
       
       <footer className="footer">
       
            <div className="footer footer-col">
                <div className="footer footer-col--title">
                    INGENIOUS
                </div>
                <div className="footer footer-col--body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur id amet ut nam eum animi dignissimos natus velit? Quia, officia.
                </p>
                </div>
            </div>


        <div className="footer footer-col">
           <div className="footer footer-col--title">
                dernieres nouvelles
            </div>
            <div className="footer footer-col--body">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequa
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur id amet ut nam eum animi dignissimos natus velit? Quia, officia.
                </p>tur id amet ut nam eum animi dignissimos natus velit? Quia, officia.
                </p>
            </div>
       </div>

       <div className="footer footer-col">
         <div className="footer footer-col--title">
         Nous contacter
        </div>
        <div className="footer footer-col--body">
        
        <p className='phone'><FiPhone size={16}/>+33 9 63 59 40 61</p>
        <p><a href="/"><FiMail size={16}/> tarek@fsocity.fr</a></p>
        
        <div className='social-container' >
        <div className="social-icons">
            <a href="#1"><IoLogoFacebook size={32}/></a>
            <a href="#2"><IoLogoLinkedin size={32}/></a>
            <a href="#3"><IoLogoTwitter size={32}/></a>
            <a href="#4"><IoLogoYoutube size={32}/></a>
            </div>
        </div>
        </div>
       </div>
        
       </footer> 
        </div>
       </Shape>
       <Shape key={14} id={'footer-2'}  classname={'footer-2'}  w='100vw' h='10vh' lin='linear-gradient(45deg,#2b2b2b,rgb(43, 43, 43))'>
            <div className="copyright">
            © 2020 SysDev | Tous droits réservés.
            </div>
       </Shape>
       
    </div>  );
}
 
export default Home;