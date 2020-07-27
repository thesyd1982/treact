import React  from 'react';
import './footer.styles.scss';

import Shape from '../shape/shape.component';

import {IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter,IoLogoYoutube} from 'react-icons/io'
import {FiPhone, FiMail} from 'react-icons/fi';
import { GoLocation} from 'react-icons/go';


const footerBg = '/img/footer_bg.jpg'
const Footer = () => {
    return (<div className="app-footer">
         <Shape key={16} id={'footer-1'}  classname={'footer-1'} img={footerBg} w='100vw' h='200px' >
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
     {/* <p><a href="https://www.google.com/maps/dir//cirta+pi%C3%A8ces+autos/data=!4m8!4m7!1m0!1m5!1m1!1s0x478af501ad4eb519:0x3e31c64bb2876686!2m2!1d5.7287412!2d45.1654944"><GoLocation size={16}/>Nous localiser sur la map</a> →</p> */}
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
    <Shape key={17} id={'footer-2'}  classname={'footer-2'}  w='100vw' h='10vh' lin='linear-gradient(45deg,#2b2b2b,rgb(43, 43, 43))'>
         <div className="copyright">
         © 2020 SysDev | Tous droits réservés.
         </div>
    </Shape> </div>);
}
 
export default Footer;