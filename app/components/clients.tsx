'use client';
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/clients.css';
import '../styles/mediaQuery.css';
// import '../styles/styles.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function Clients() {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 600) {
        setSlidesToShow(2);
      }
    }
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,                                                                
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    adaptiveHeight: false

  };


  const [isVisible, setIsVisible] = useState(false);
  const [isLogo, setLogoVisible] = useState(false)

  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: logoRef, inView: logoInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsVisible(sectionInView);
  }, [sectionInView]);

  useEffect(() => {
    setLogoVisible(logoInView);
  }, [logoInView]);


  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const triggerPoint = window.innerHeight * 0.2;
  //     const triggerPointLogo = window.innerHeight * 0.2;
  //     // Adjust this value as needed
  //     setIsVisible(scrollTop > triggerPoint);
  //     setLogoVisible(scrollTop > triggerPointLogo);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  const clients = [
  //   { id: "1", image: "/resizedLogo/mako-logo.png", largeImage: false },
    
  //   {id: "2", image: "/resizedLogo/rajdeep-logo.png", largeImage: false },
  // {id: "3", image: "/resizedLogo/suyash-logo.png", largeImage: false }, { id: "4",image: "/resizedLogo/anyo-logo.png", largeImage: false },
  // {id: "5", image: "/resizedLogo/india-wasted-logo.png", largeImage: false }, {id: "6",image: "/resizedLogo/northern-arc-logo.png", largeImage: false },
  // {id: "7", image: "/resizedLogo/dhananjaya-logo.png", largeImage: false }, {id: "8", image: "/resizedLogo/ia-logo.png", largeImage: false },
  // {id: "9", image: "/resizedLogo/myTrackie-logo.png", largeImage: false }, {id: "10", image: "/resizedLogo/kivi-logo.png", largeImage: false },
  // {id: "11", image: "/resizedLogo/technoweld-logo.png", largeImage: false }

  {id: "1", image: "/clients/kivi.png"},

  {id: "2", image: "/clients/rajdeep.png"},
  {id: "3", image: "/clients/dhananjaya.png"},

  {id: "4", image: "/clients/technowild.png"},
  {id: "5", image: "/clients/mako.png"},

  {id: "6", image: "/clients/india_wasted.png"},
  {id: "7", image: "/clients/suyash.png"},

  {id: "8", image: "/clients/anyo.png"},
  {id: "9", image: "/clients/industrial_agencies.png"},

  {id: "10", image: "/clients/my_trackie.png"},
  {id: "11", image: "/clients/northen_arc.png"},
  ];
  // image:{"mako.svg", "rajdeep.svg", "suyash.svg", "anyoBg.png", "myTrackieBg.png","nothernArcBg.png"

  return (
    <div id="clients-section  " className="paddingClients">
      <div  ref={sectionRef} className={`scroll-animationPortfolio ${isVisible ? 'visiblesectionName  mb-12' : ''}`}>
        <div className="flex items-center justify-center ">
          <hr className="separator"></hr>
          <div className='section-title clients-title-desktop mobilePaddingHeader'>
            OUR AMAZING <span className='section-title-highlight'>CLIENTS</span>
          </div>
          <div className='section-title clients-title-mobile mobilePaddingHeader'>
            OUR <span className='section-title-highlight'>CLIENTS</span>
          </div>
          <hr className="separator"></hr>
        </div>
      </div>
      <div ref={logoRef} className={`scroll-animationClients clients-logo-section flex justify-center ${isLogo ? 'visibleClients pl-3 pr-3' : 'pl-3 pr-3'}`}>

        {/* <div className={`scroll-animationClients ${isLogo ? 'client flex flex-row flex-wrap pr-10 pl-10' : ''}`}> */}
        <Slider {...settings}>
          {clients.map((client, i) => (
            //  {client.largeImage ===  true ? (<img className='logo  w-36' src={client.image} />):
            //  ((
            <div className="clientLogo " key={i}>
              <img className='logo' key={client.id} src={client.image} />
              {/* <Image className="logo" src={client.image} width={500} height={500} alt="Picture of the author" /> */}
           </div>
          ))}
        </Slider>
        {/* </div> */}
      </div>
      <div id="Founder's"></div>
    </div>
  );
}