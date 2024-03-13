import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import Image from 'next/image';
import { Link, animateScroll as scroll } from 'react-scroll';
export default function Navbar() {

  const [active, setActive] = useState<number>(0)

  return (
    <nav className='items-center flex flex-wrap xl:h-24 h-16 px-10'>
      <div>
        <Link to="/">
          <Image src={logo} alt="photo de mathieu bourkel" width={50} height={50}/>
        </Link>
      </div>
      <ul className='md:flex hidden'>
        <li className={`${active === 0 && 'active'}`}><Link to="/" onClick={() => setActive(0)}>Home</Link></li>
        <li className={`${active === 1 && 'active'}`}><Link to="about" smooth={true} duration={500} onClick={() => setActive(1)}>About me</Link></li>
        <li className={`${active === 2 && 'active'}`}><Link to="skills" smooth={true} duration={500} onClick={() => setActive(2)}>Skills</Link></li>
        <li className={`${active === 3 && 'active'}`}><Link to="projects" smooth={true} duration={500} onClick={() => setActive(3)}>Projects</Link></li>
        <li className={`${active === 4 && 'active'}`}><Link to="experiences" smooth={true} duration={500} onClick={() => setActive(4)}>Experiences</Link></li>
      </ul>
      {/* <div>
        <button>Contact me</button>
      </div> */}
  </nav>
  )
}
