import React, { 
    // useEffect, useRef, useState ,
    Fragment} from 'react';
import './navbarbtn.styles.scss'
import useHover from '../../hooks/useHover';


// import {FiSearch} from 'react-icons/fi';
import {AiOutlineShoppingCart ,AiOutlineSearch} from 'react-icons/ai';

const icons = [
{search:<AiOutlineSearch key={1}/>},{basket:<AiOutlineShoppingCart key={2}/>}
]
const findIcon = (icon) => {
    let val = {}
    let obj = Object.values(icons).find((o) => Object.keys(o).includes(icon));
    val = (obj)? Object.values(obj):<Fragment/>

    return val
}





const NavbarBtn = ({icon, children}) => {
    const [hoverRef, isHovered] = useHover();
   
    const found = findIcon(icon) 
    return ( 
    <div className="navbar-btn" ref={hoverRef}>
        {found} 
        <div className="navbar-child">
            {isHovered? children:<Fragment/>}
        </div>
    </div> );
}
 
export default NavbarBtn;