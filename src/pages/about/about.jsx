import React from 'react';
import Hero from '../../components/core-components/hero/hero.component';
const About = () => {
    return (<div className="about">
    
    <Hero title='About' img={process.env.PUBLIC_URL + '/img/appart.jpg'}></Hero>
       
    </div>  );
}
 
export default About;