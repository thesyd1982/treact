import React,{useState, useEffect} from 'react';
import './navbar.styles.scss';
import {Link} from 'react-router-dom';
import DropdownLink from '../dropdown/dropdownLink.component';
import Menu from '../menu/menu.component';
import NavbarBtn from '../nabarButton/navbarbtn.component';
const Navbar = () => {

    const  handleScroll = () => {
  
    const scrollpos = window.scrollY;
    if (scrollpos > 10) {
        setScrolled('navbar scrolled')
    } else {
        setScrolled('navbar')
    }


    }


   

    const [scrolledState, setScrolled] = useState('navbar');

useEffect(() => {
    // Met à jour le  document via l’API du navigateur
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  },[]);


const handleHover = () =>{
    hoverState?setHover(false):setHover(true)
}


const [hoverState, setHover] = useState(false);



    return ( 

        <header className={scrolledState}>
        <div className="logo">
            <Link  to="/">LOGO</Link> 
        </div>
        <input type="checkbox" className="menu-btn" id="menu-btn"/>
        <label htmlFor="menu-btn" className="menu-icon">
            <span className="menu-icon__line">
            </span>
        </label>

        <ul className="nav-links">
            <li className="nav-link">
            <Link  to="/"><i className="fa fa-home" aria-hidden="true"></i>&nbsp; ACCUEIL</Link></li>
            <DropdownLink title='Services' onHover={handleHover}>
            
                {(hoverState)&&<Menu/>}
           
            </DropdownLink>

            <li className="nav-link"><Link  to="/">boutique</Link> </li>
            <li className="nav-link"><Link  to="/about">A propos</Link> </li>
            <li className="nav-link"><Link  to="/contact">CONTACT</Link> </li>
            <NavbarBtn key={1} icon ={'search'}>search</NavbarBtn>
            <NavbarBtn key={2} icon ={'basket'}>test</NavbarBtn>
        </ul>
    </header>
        
    );
}
 
export default Navbar;