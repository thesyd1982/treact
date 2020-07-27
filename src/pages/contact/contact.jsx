import React from 'react';
import Hero from '../../components/core-components/hero/hero.component';
import Badge from '../../components/core-components/badge/badge.component';

const image =  process.env.PUBLIC_URL + '/img/contact.jpg';
const Contact = () => {
    return (<div className="contact" >
        <Hero title='Contact' img={image} height='50vh'></Hero>
        <section className='contact prupos'>
        <Badge/>
        </section>
    </div>  );
}
 
export default Contact;