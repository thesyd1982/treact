import React from 'react';
import {Link} from 'react-router-dom';

const DropdownLink = ({title='dropdown link', path='/', children}) => {
    return (  <li className="nav-link drop-down">

<Link  to={path} className="drop-down-btn">
    <i className="fa fa-camera" aria-hidden="true">

    </i>{title}
</Link> 
{children}


</li> );
}
 
export default DropdownLink;