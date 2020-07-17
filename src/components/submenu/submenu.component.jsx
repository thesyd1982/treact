import React from 'react';
import {Link} from 'react-router-dom';

const SubMenu = ({submenu}) => {
    return (
            <ul className="sub-menu">
            <li className="nav-link"><Link  to="/" className="">VIDÉOSURVEILLANCE</Link> </li>
            <li className="nav-link"><Link  to="/" className="">CAMERA COVID-19</Link> </li>
            <li className="nav-link"><Link  to="/" className="">VIDÉO. AGRICOLE</Link> </li>
            <li className="nav-link"><Link  to="/" className="">VIDÉO. URBAINE</Link> </li>
            <li className="nav-link"><Link  to="/" className="">TECHNOLOGIES EMPLOYÉES</Link></li>
            </ul> 
    );
}
 
export default SubMenu;

