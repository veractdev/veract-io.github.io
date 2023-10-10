'use client';
import '../styles/styles.css'
import React from 'react';
import { useEffect, useState } from 'react';
import { Transform } from 'stream';
import Link from 'next/link';
import Contacts from './contacts';

export default function TopnavBar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      
    }
  };
  // const [isScrolling, setIsScrolling] = useState(false);
  // useEffect(() => {
  //     const handleScroll = () => {
  //         setIsScrolling(true);
  //         setTimeout(() => setIsScrolling(false), 1000);
  //     };

  //     window.addEventListener('scroll', handleScroll);

  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   }, []);
  const handleReload =() => {
    window.location.reload();
  }
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const handleToggle = (e: { stopPropagation: () => void; }) => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) {
        e.stopPropagation();
        setIsopen(!isOpen);
      }
    }
    
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = window.innerHeight * 0.1; // Adjust this value as needed
      setIsVisible(scrollTop > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`navbar ${isOpen ? " padding" : "padding"}`}>
      {/* <div className="p-4 border-2  rounded-lg border-primary   bg-primary " > */}
      <div className="flex flex-row justify-between flex-nowrap items-center justify-center">
        <button onClick={handleReload}>
        <div className={`transitionEffect ${isVisible ? 'afterScroll ' : 'beforeScroll'}`} >ver<span className="textColorLogo">act</span></div>
        </button>
        {/* <div><img src="/logo.png"></img></div> */}


        <div className="mobileAppointment " >
                {/* <div className=" flex items-center justify-center whitespace-nowrap fontFamily"><a href="">Fix an appointment</a></div>  */}
                <div className="fix-appointment1 flex navbarCursor  whitespace-nowrap fontFamily" onClick={() => scrollToSection("ContactUS")}><a >Talk to us</a></div>
                </div>
        {/* <div className={`menu-links ${isOpen ? "open":" "}`}>
                  <div className="flex flex-end fontFamilyNav md:gap-10">
                    <a href="#section1" className="home">Home</a>
                    <a href="#section2" className="founder">Founder's desk</a>
                    <a href="#section3" className="services">Services</a>    
                    <a href="#section4" className="caseMain">Portfolio</a>
                    <a href="#section5" className="testMain">Testimonials</a>    
                  </div>
                </div> */}

        <nav className="pt-4 pb-4">
          <ul >
            <div className={`nav-list ${isOpen ? "open" : "MediaHidden"}`}>
              <div className="flex nav-list fontFamilyNav  navFonts md:gap-10">
                <div>
                <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                  <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div className="flex items-center justify-center navbarCursor" onClick={() => scrollToSection('Home')}><a  className="home " onClick={handleToggle}>Home</a></div>
                    <div><hr className="homeHr"></hr></div>
                  </div>
                </li>
                </div>
                <div>
                <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                  <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div className="flex items-center justify-center navbarCursor" onClick={() => scrollToSection("Founder's")}> <a  className="founder whitespace-nowrap " onClick={handleToggle}><span onClick={() => scrollToSection("Founder's")}>Founder's desk</span></a></div>
                    <div> <hr className="founderHr"></hr></div>
                  </div>
                </li>
                </div>
                <div>
                <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                  <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div className="flex items-center justify-center navbarCursor" onClick={() => scrollToSection("Services")}><a  className="services " onClick={handleToggle}><span onClick={() => scrollToSection("Services")}>Services</span></a></div>
                    <div><hr className="serviceHr"></hr></div>
                  </div>
                </li>
                </div>
                <div>
                <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                  <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div className="flex items-center justify-center navbarCursor"  onClick={() => scrollToSection("Portfolio")}><a  className="caseMain " onClick={handleToggle}><span className='desktopPortfolioText' onClick={() => scrollToSection("Portfolio")}>Case Studies</span><span className="mobilePortfolioText">Case Studies</span></a></div>
                    <div ><hr className="portfolioHr"></hr></div>
                  </div>
                </li>
                </div>
                <div>
                <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                  <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div className="flex items-center justify-center navbarCursor"  onClick={() => scrollToSection("Testimonials")}><a className="testMain " onClick={handleToggle}><span onClick={() => scrollToSection("Testimonials")}>Clients speak</span></a></div>
                    <div><hr className="testimonialsHr"></hr></div>
                  </div>
                </li>
                </div>
                <div>
                <li className={`nav-item ${isOpen ? "visible pl-8" : "MediaHidden"}`}>
                  <div className="mobileTalk">
                  <div className="fix-appointment flex navbarCursor whitespace-nowrap fontFamily"  onClick={() => scrollToSection("ContactUS")}><a onClick={handleToggle}>Talk to us</a></div>
                  </div>
                </li>
                </div>
              </div>

            </div>
          </ul>
        </nav>
        <div className="hamburger-icon " onClick={handleToggle}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>

    </div>
  );
}