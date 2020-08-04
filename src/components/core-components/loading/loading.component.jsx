import React from 'react';
import ReactLoading from 'react-loading';
import './loading.styles.scss';
const Loading = () => {
    return ( <div className='loading'>
   
        {/* <ReactLoading type='cylon' color='red'/> */}
        <div class="lds-ripple"><div></div><div></div></div> 
        <h3>Chargement ...</h3>
    </div> );
}
 
export default Loading;