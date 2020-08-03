import React ,{useEffect, useContext} from 'react';
import {useLocation} from 'react-router-dom' ;
import PageContext from '../../context/page-context';
import Hero from '../../components/core-components/hero/hero.component';
import Badge from '../../components/core-components/badge/badge.component';

const image =  process.env.PUBLIC_URL + '/img/contact.jpg';
const Contact = () => {

       
  const {value,setValue} = useContext(PageContext);
  let location = useLocation()

  useEffect(
    () => {
      setValue(location.pathname)
    },
    [location, setValue, value]
  )


    return (<div className="contact" >
    <div className="main" id='main'>
        <Hero title='Contact' img={image} height='50vh'></Hero>
        <section className='contact prupos'>
        <Badge/>
        </section>
        </div>
    </div>  );
}
 
export default Contact;