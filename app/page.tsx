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
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = document.documentElement.scrollHeight / 5 - 100;
      if (window.scrollY < sectionHeight) setActive(0);
      else if (window.scrollY < sectionHeight*2) setActive(1);
      else if (window.scrollY < sectionHeight*3) setActive(2);
      else if (window.scrollY < sectionHeight*4) setActive(3);
      else if (window.scrollY < sectionHeight*5) setActive(4);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <main className=''>
      <Navbar />
      <section id="home" className={`min-h-[92lvh] flex items-center ${active == 0 ? '' : ''}`}>
        <Home />
      </section>
      
      <section id="about" className={`min-h-[80lvh] flex items-center bg-gradient-to-tl from-prim-1 via-bg-1 to-bg-1${active == 1 ? '' : ''}`}>
        <About />
      </section>
      
      <section id="skills" className={`min-h-[80lvh] flex items-center bg-gradient-to-t from-sec-1 via-bg-2 to-bg-2 ${active == 2 ? '' : ''}`}>
        <Skills />
      </section>
      
      <section id="projects" className={`min-h-[80lvh] bg-bg-2 bg-gradient-to-b from-prim-1 via-bg-1 to-bg-1 ${active == 3 ? '' : ''}`}>
        <Projects />
      </section>

      <section id="experiences" className={`min-h-[60lvh] bg-gradient-to-t from-sec-2 via-bg-2 to-bg-2${active == 4 ? '' : ''}`}>
        <Experiences />
      </section>
    </main>
    <Footer />
  </>
  );
}
