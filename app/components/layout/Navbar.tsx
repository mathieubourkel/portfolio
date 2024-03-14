import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import Image from 'next/image';
import { Link, animateScroll as scroll } from 'react-scroll';
export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  const [active, setActive] = useState<number>(0)

  return (
    <>
    <nav className='items-center lg:flex lg:flex-wrap py-[1rem] xl:h-24 h-16 lg:px-10 px-[1rem]'>
      <div>
        <Link to="/" className='cursor-pointer'>
          <Image src={logo} alt="photo de mathieu bourkel" width={50} height={50}/>
        </Link>
      </div>
      <ul className='lg:flex hidden'>
        <li className={`${active === 0 && 'active'}`}><Link to="/" onClick={() => setActive(0)}>Home</Link></li>
        <li className={`${active === 1 && 'active'}`}><Link to="about" smooth={true} duration={500} onClick={() => setActive(1)}>About me</Link></li>
        <li className={`${active === 2 && 'active'}`}><Link to="skills" smooth={true} duration={500} onClick={() => setActive(2)}>Skills</Link></li>
        <li className={`${active === 3 && 'active'}`}><Link to="projects" smooth={true} duration={500} onClick={() => setActive(3)}>Projects</Link></li>
        <li className={`${active === 4 && 'active'}`}><Link to="experiences" smooth={true} duration={500} onClick={() => setActive(4)}>Experiences</Link></li>
      </ul>
      <div className='block lg:hidden'>
        <button onClick={toggleMenu} id="menu-btn" className="items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
        </button>
       </div>
      {/* <div>
        <button>Contact me</button>
      </div> */}
  </nav>
  {showMenu && <ul className="lg:hidden absolute right-0 ">
      <li className={`${active === 0 && 'active'}`}><Link to="/" onClick={() => setActive(0)}>Home</Link></li>
        <li className={`${active === 1 && 'active'} block `}><Link to="about" smooth={true} duration={500} onClick={() => setActive(1)}>About me</Link></li>
        <li className={`${active === 2 && 'active'} block`}><Link to="skills" smooth={true} duration={500} onClick={() => setActive(2)}>Skills</Link></li>
        <li className={`${active === 3 && 'active'} block`}><Link to="projects" smooth={true} duration={500} onClick={() => setActive(3)}>Projects</Link></li>
        <li className={`${active === 4 && 'active'} block`}><Link to="experiences" smooth={true} duration={500} onClick={() => setActive(4)}>Experiences</Link></li>
        </ul>}
  </>
  )
}
