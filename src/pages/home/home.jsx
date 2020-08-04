import React, {useEffect ,useContext} from 'react';
import {useLocation} from 'react-router-dom' ;
import PageContext from '../../context/page-context';
import './home.styles.scss';

import Hero from '../../components/core-components/hero/hero.component';
import Shape from '../../components/core-components/shape/shape.component';

import Section1 from '../../components/pages-components/home-components/section1/section1.component';
import Section2 from '../../components/pages-components/home-components/section2/section2.component';
import Section3 from '../../components/pages-components/home-components/section3/section3.component';
import Section4 from '../../components/pages-components/home-components/section4/section4.component';
import Section5 from '../../components/pages-components/home-components/section5/section5.component';
import Section6 from '../../components/pages-components/home-components/section6/section6.component';
import Section7 from '../../components/pages-components/home-components/section7/section7.component';
import Section8 from '../../components/pages-components/home-components/section8/section8.component';
import Section9 from '../../components/pages-components/home-components/section9/section9.component';









const cpathHero = "polygon(100% 0, 100% 92%, 52% 100%, 0 92%, 0 0)";




const Home = () => {

   
  const {value,setValue} = useContext(PageContext);

 
  let location = useLocation()

  useEffect(
    () => {
      setValue(location.pathname)
    },
    [location, setValue, value]
  )

    return (
       <div className="home">
       <Hero title='Home' clippath={cpathHero} />  
    <div className="main" id='main'>
                 
        <Section1 id={1}/>
        <Section2 id={2}/>
        <Section3 id={3}/>
        
       <Shape key={4} classname={'spacer-1'} shapeType={"triangle"}  w='50vw' h='50vh' lin='linear-gradient(45deg, #f1f1f1,#d1d1d1 )'>
       </Shape>
       <Section4 id={4}/>
       <Section5 id={5}/>
       <Section6 id={6}/>
       
       <Shape key={8} classname={'spacer-2'} shapeType={"triangle"}  w='50vw' h='40vh' lin='linear-gradient(45deg, #f1f1f1,#d1d1d1 )'></Shape>
       <Section7 id={7}/>
       <Shape key={10} classname={'spacer-3'} shapeType={"triangle"}  w='50vw' h='40vh' lin='linear-gradient(45deg, rgba(255,255,255,.6),rgba(255,255,255,.3))'></Shape>
       <Section8 id={8}/>
       <Section9 id={9}/>
       

    </div>
    </div>  );
}
 
export default Home;