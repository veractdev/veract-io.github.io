'use client';
import '../styles/styles.css'
import '../styles/mediaQuery.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { Transform } from 'stream';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
  // import { useRouter } from 'next/router';

import { usePathname } from 'next/navigation'
import Contacts from './contacts';

export default function TopnavBar() {
  const router = useRouter()
  const pathnames = usePathname()

  const scrollToElement=(sectionId:string)=>{
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
  const handleReload = () => {
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
      <div className="flex flex-row justify-between flex-nowrap items-center justify-center">
        <Link href="/">
        {/* <button> */}
        <div className={`transitionEffect ${isVisible ? 'afterScroll' : 'beforeScroll'}`} >ver<span className="textColorLogo">act</span></div>
        {/* <div className={`transitionEffect ${isVisible ? 'navbar_afterScroll ' : 'navbar_beforeScroll' }`}></div> */}
        {/* </button> */}
        </Link>
        {/* <div><img src="/logo.png"></img></div> */}


        <div className="mobileAppointment pl-20" >
          <div className="fix-appointment1 flex navbarCursor  whitespace-nowrap fontFamily" onClick={() => scrollToSection("ContactUS")}><a>Talk to us</a></div>
        </div>
        <nav className="pt-4 pb-4">
          <ul>
            <div className={`nav-list ${isOpen ? "open" : "MediaHidden"}`}>
              <div className="flex nav-list fontFamilyNav  navFonts md:gap-10">
                <div className='w-full'>
                  <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                      <div className='flex items-center justify-center navbarCursor whitespace-nowrap menu-item' onClick={handleToggle}><div onClick={() => scrollToSection("Home")}>Home</div></div>
                      <div><hr className="menu-item-separator"></hr></div>
                    </div>
                  </li>
                </div>
                <div className='w-full'>
                  <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                      <div className='flex items-center justify-center navbarCursor whitespace-nowrap menu-item' onClick={handleToggle}><div onClick={() => scrollToSection("Founder's")}>Founder's desk</div></div>
                      <div> <hr className="menu-item-separator"></hr></div>
                    </div>
                  </li>
                </div>
                <div className='w-full'>
                  <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                      <div className="flex items-center justify-center navbarCursor whitespace-nowrap" onClick={() => scrollToSection("Services")}><a className="services menu-item" onClick={handleToggle}><span onClick={() => scrollToSection("Services")}>Services</span></a></div>
                      <div><hr className="menu-item-separator"></hr></div>
                    </div>
                  </li>
                </div>
                <div className='w-full'>
                  <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                      {/* <div className="flex items-center founder justify-center navbarCursor whitespace-nowrap" onClick={() => scrollToSection("Portfolio")}><a  className="services " onClick={handleToggle}><span onClick={() => scrollToSection("Portfolio")}>Case Studies</span></a></div> */}
                      <div className='flex items-center justify-center navbarCursor whitespace-nowrap menu-item' onClick={handleToggle}><div onClick={() => scrollToSection("Portfolio")}>Case Studies</div></div>
                      <div><hr className="menu-item-separator"></hr></div>
                    </div>
                  </li>
                </div>
                <div className="caseMain_mobile">
                  <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                      <div  className="caseMain caseMain_mobile pl-3 " onClick={handleToggle}><div className='desktopPortfolioText flex items-center justify-center navbarCursor  whitespace-nowrap'><Link href="/MobileCaseStudy/machinevision">Customer Success</Link></div></div>
                        <div><hr className="menu-item-separator"></hr></div>
                      </div>
                  </li>
                </div>
                <div className="caseMain_desktop">
                <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                  <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div  className="caseMain_desktop " onClick={handleToggle}><div className='desktopPortfolioText flex items-center justify-center navbarCursor  whitespace-nowrap' ><Link href="/CaseStudyPage" className="caseMain">Customer Success</Link></div></div>
                    <div><hr className="testimonialsHr"></hr></div>
                  </div>
                </li>
                </div> */}
                <div className='w-full'>
                  <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                      <div className='flex items-center justify-center navbarCursor whitespace-nowrap pl-3 menu-item' onClick={handleToggle}><div onClick={() => scrollToSection("Testimonials")}>Clients Speak</div></div>
                    <div><hr className="menu-item-separator"></hr></div>
                    </div>
                  </li>
                </div>
                <div className='w-full'>
                <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                  <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div  className="caseMain caseMain_mobile pl-3" onClick={handleToggle}><div className='desktopPortfolioText flex items-center justify-center navbarCursor  whitespace-nowrap'><div  onClick={() => scrollToSection("ContactUS")}>Contact Us</div></div></div>
                    <div><hr className="testimonialsHr1"></hr></div>
                  </div>
                </li>
                </div>

                <div>
                  
                  <li className={`nav-item ${isOpen ? "visible pl-8" : "MediaHidden"}`}>
                    <div className="mobileTalk">
                      <div className="fix-appointment flex navbarCursor whitespace-nowrap fontFamily whitespace-nowrap menu-item" onClick={() => scrollToSection("ContactUS")}><a onClick={handleToggle}>Talk to us</a></div>
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