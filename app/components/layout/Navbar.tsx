import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import Image from 'next/image';
import { Link, animateScroll as scroll } from 'react-scroll';
import './navbar.css';
import { faXmark, faBars, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./modal.css";

export default function Navbar({sticky, active, handleOpen}:{sticky:boolean, handleOpen:() => void, active:number}) {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    if (!showMenu) {
      document.body.classList.toggle('overflow-y-hidden') 
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
    setShowMenu(!showMenu);
  };


  
  return (
    <>
    <nav className={`${sticky && "navbar-sticky"} navbar items-center lg:flex lg:flex-wrap py-[1rem] h-16 lg:px-10 px-[1rem]`}>
      <div>
        <Link to="home" smooth={true} duration={500} className='cursor-pointer'>
          <Image src={logo} alt="photo de mathieu bourkel" width={50} height={50}/>
        </Link>
      </div>
      <ul className='lg:flex hidden'>
        <li className={`${active === 1 && 'active'}`}><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li className={`${active === 2 && 'active'}`}><Link to="about" smooth={true} duration={500}>About me</Link></li>
        <li className={`${active === 3 && 'active'}`}><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className={`${active === 4 && 'active'}`}><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li className={`${active === 5 && 'active'}`}><Link to="experiences" smooth={true} duration={500}>Experiences</Link></li>
      </ul>
      {sticky && <div>
        <button onClick={handleOpen} className='small-caps lg:inline-flex hidden'>Contact me</button>
        <FontAwesomeIcon onClick={handleOpen} icon={faEnvelope} size='lg' className='lg:hidden max-w-5 max-h-5 cursor-pointer'/>
      </div>}
      <div className='block lg:hidden'>
      
        <div onClick={toggleMenu} id="menu-btn" className="sticky z-50 items-center px-3 py-2 text-gray-200 hover:text-white cursor-pointer">
              {showMenu ? <FontAwesomeIcon className='sticky z-50' size='xl' icon={faXmark} />
              :  <FontAwesomeIcon className='sticky z-50' size='lg' icon={faBars} />}
        </div>
       </div>
      
  </nav>
  {showMenu && <ul className={`lg:hidden fixed z-40 w-full h-[100vh] menu-nav gap-10 small-caps flex flex-col items-center bg-bg-6 p-2 pt-10 lg:pt-0 `}>
      <li className={`${active === 1 && 'active'} `}><Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link></li>
        <li className={`${active === 2 && 'active'} `}><Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About me</Link></li>
        <li className={`${active === 3 && 'active'} `}><Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</Link></li>
        <li className={`${active === 4 && 'active'} `}><Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link></li>
        <li className={`${active === 5 && 'active'} `}><Link to="experiences" smooth={true} duration={500} onClick={toggleMenu} >Experiences</Link></li>
        </ul>}
  </>
  )
}
