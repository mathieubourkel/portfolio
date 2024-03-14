import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import Image from 'next/image';
import { Link, animateScroll as scroll } from 'react-scroll';
import './navbar.css';
import { faXmark, faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar({sticky, active}:{sticky:boolean, active:number}) {

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
        <Link to="/" className='cursor-pointer'>
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
      <div className='block lg:hidden'>
        <button onClick={toggleMenu} id="menu-btn" className="sticky z-50 items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
              {showMenu ? <FontAwesomeIcon className='sticky z-50' size='xl' icon={faXmark} />
              :  <FontAwesomeIcon className='sticky z-50' size='lg' icon={faBars} />}
        </button>
       </div>
      {/* <div>
        <button>Contact me</button>
      </div> */}
  </nav>
  {showMenu && <ul className={`lg:hidden  fixed z-40 w-full h-[88vh] menu-nav gap-10 small-caps flex flex-col items-center justify-center bg-bg-5 rounded-xl p-2 mt-2`}>
      <li className={`${active === 1 && 'active'} `}><Link to="home" onClick={toggleMenu}>Home</Link></li>
        <li className={`${active === 2 && 'active'} `}><Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About me</Link></li>
        <li className={`${active === 3 && 'active'} `}><Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</Link></li>
        <li className={`${active === 4 && 'active'} `}><Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link></li>
        <li className={`${active === 5 && 'active'} `}><Link to="experiences" smooth={true} duration={500} onClick={toggleMenu} >Experiences</Link></li>
        </ul>}
  </>
  )
}
