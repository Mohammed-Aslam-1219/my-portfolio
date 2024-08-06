import React, {useEffect, useState} from 'react'
import './Navbar.css'
import Menu_icon from '../../assets/Menu_icon.png'
import Close_icon from '../../assets/Close_icon.png'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
        <a href="/" className="title">Aslam</a>
        <div className="menu">
            <img src={menuOpen ? Close_icon : Menu_icon} alt="" onClick={()=>{setMenuOpen(!menuOpen)}} className='menuBtn' />
            <ul className={menuOpen ? 'menuitem' : 'menuitems'} onClick={()=>{setMenuOpen(false)}}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#project">Projects</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar