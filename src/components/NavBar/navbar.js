import React, { useState } from 'react'
import './navbar.css'
import logo from '../../Assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../Assets/contact.png'
import Menu from '../../Assets/menu.png';
const Navbar = () => {
  const [showMenu,setshowMenu]=useState(false);
  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo'></img>
      <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} duration={500} smooth={true} offset={-100} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='works' spy={true} duration={500} smooth={true} offset={-70} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='skills' spy={true} duration={500} smooth={true} offset={-50} className='desktopMenuListItem'>Projects</Link>
            <Link activeClass='active' to='education' spy={true} duration={500} smooth={true} offset={-38} className='desktopMenuListItem'>Education</Link>
            
      </div> 
      <button className='desktopMenubtn' onClick={()=>{
         document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }
      }><img src={contactImg} alt='Contact' className='desktopMenuImg'></img>Contact Me</button>
      
      <img src={Menu} alt='Menu' className='mobmenu' onClick={()=>setshowMenu(!showMenu)}></img> 
      <div className='navMenu' style={{display:showMenu?'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} duration={500} smooth={true} offset={-100} className='listItem' onClick={()=>setshowMenu(false)}>Home</Link>
            <Link activeClass='active' to='works' spy={true} duration={500} smooth={true} offset={-70} className='listItem' onClick={()=>setshowMenu(false)}>About</Link>
            <Link activeClass='active' to='skills' spy={true} duration={500} smooth={true} offset={-50} className='listItem' onClick={()=>setshowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='education' spy={true} duration={500} smooth={true} offset={-38} className='listItem' onClick={()=>setshowMenu(false)}>Education</Link>
            <Link activeClass='active' to='contact' spy={true} duration={500} smooth={true} offset={-80} className='listItem' onClick={()=>setshowMenu(false)}>Contact</Link>
      </div> 
    </nav>
  )
}

export default Navbar
