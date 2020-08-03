import React ,{useEffect, useContext} from 'react';
import {useLocation} from 'react-router-dom' ;
import PageContext from '../../context/page-context';
import Hero from '../../components/core-components/hero/hero.component';
import './about.styles.scss'
const About = () => {


    const {value,setValue} = useContext(PageContext);
  let location = useLocation()

  useEffect(
    () => {
      setValue(location.pathname)
    },
    [location, setValue, value]
  )

    return (<div className="about">
    
    <Hero title='About' img={process.env.PUBLIC_URL + '/img/appart.jpg'}></Hero>
    <div className="main" id='main'>
    Main
    </div>
    </div>  );
}
 
export default About;