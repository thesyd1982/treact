
import React   from 'react';

import {useLocation} from "react-router-dom";
import Hero from '../../components/core-components/hero/hero.component';

const  NoMatch= () => {
  let location = useLocation();
  return (  <div className='nomatch'>
    <Hero title='Error 404'></Hero>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>);
}
 
export default NoMatch ;