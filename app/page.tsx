"use client";
import { useEffect, useState } from "react";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Projects } from "./components/Projects/Projects";


export default function Page() {
  const [active, setActive] = useState<number>(1);
  const [isSticky, setSticky] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {

      const sectionHeight = document.documentElement.scrollHeight / 5 - 100;
      if (!isSticky && window.scrollY > sectionHeight) setSticky(true)
      if (window.scrollY < sectionHeight) {
        setActive(1);
        setSticky(false)
      }
      else if (window.scrollY < sectionHeight*2) setActive(2);
      else if (window.scrollY < sectionHeight*3) setActive(3);
      else if (window.scrollY < sectionHeight*4) setActive(4);
      else if (window.scrollY < sectionHeight*5) setActive(5);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <main className=''>
      <Navbar sticky={isSticky} active={active}/>
      <section id="home" className={`min-h-[100lvh] flex items-center`}>
        <Home />
      </section>
      
      <section id="about" className={`min-h-[80lvh] flex items-center bg-gradient-to-tl from-prim-1 via-bg-1 to-bg-1`}>
        <About />
      </section>
      
      <section id="skills" className={`min-h-[80lvh] flex items-center bg-gradient-to-t from-sec-1 via-bg-2 to-bg-2`}>
        <Skills />
      </section>
      
      <section id="projects" className={`min-h-[80lvh] flex items-center pb-20 bg-bg-2 bg-gradient-to-t from-prim-1 via-bg-1 to-bg-1`}>
        <Projects />
      </section>

      <section id="experiences" className={`min-h-[60lvh] flex items-center bg-gradient-to-t from-sec-2 via-bg-2 to-bg-2`}>
        <Experiences />
      </section>
    </main>
    <Footer />
  </>
  );
}
