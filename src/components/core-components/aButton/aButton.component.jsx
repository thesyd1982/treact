import React from 'react';
import {Link} from 'react-router-dom';
import './a-button.styles.scss';


const AButton = ({cl="a-button",link,text,children}) => {
    return (
        <Link to={link} className={cl}>{text}
            {children}
        </Link> 
     );
}
 
export default AButton;
