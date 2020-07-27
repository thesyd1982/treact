
import React from 'react';
import {RiSecurePaymentLine} from 'react-icons/ri'
import {IconContext} from "react-icons"
const icons = [
        <RiSecurePaymentLine/>

];
const filterValue = (obj, key)=> obj.find((k,v )=> key === k?v :<RiSecurePaymentLine/>);




const Badge = ({title='badge', icon='project'}) => {
    let res =filterValue(icons, icon)
    if(res)console.log(res);
    
    return (
        <IconContext.Provider
            value={{ style: {fontSize: '15rem', color: "rgb(0, 123, 255)",
            // 'font-smoothing': "antialiased;"
            }}}>
         <div className='badge'>
            <RiSecurePaymentLine/>
           {/* {res} */}
                  <span className='badge title'>
             {title}
         </span>
        </div>
           </IconContext.Provider>
     );
}
 
export default Badge;