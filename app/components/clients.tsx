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
    autoplaySpeed: 500,
    adaptiveHeight: false

  };


  const [isVisible, setIsVisible] = useState(false);
  const [isLogo, setLogoVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = window.innerHeight * 0.2;
      const triggerPointLogo = window.innerHeight * 0.2;
      // Adjust this value as needed
      setIsVisible(scrollTop > triggerPoint);
      setLogoVisible(scrollTop > triggerPointLogo);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const clients = [{ image: "resizedLogo/mako-logo.png", largeImage: false }, { image: "resizedLogo/rajdeep-logo.png", largeImage: false },
  { image: "resizedLogo/suyash-logo.png", largeImage: false }, { image: "resizedLogo/anyo-logo.png", largeImage: false },
  { image: "resizedLogo/india-wasted-logo.png", largeImage: false }, { image: "resizedLogo/northern-arc-logo.png", largeImage: false },
  { image: "resizedLogo/dhananjaya-logo.png", largeImage: false }, { image: "resizedLogo/ia-logo.png", largeImage: false },
  { image: "resizedLogo/myTrackie-logo.png", largeImage: false }, { image: "resizedLogo/kivi-logo.png", largeImage: false },
  { image: "resizedLogo/technoweld-logo.png", largeImage: false }



  ];
  // image:{"mako.svg", "rajdeep.svg", "suyash.svg", "anyoBg.png", "myTrackieBg.png","nothernArcBg.png"

  return (
    <div id="clients-section  " className="paddingClients">
      <div className={`scroll-animationPortfolio ${isVisible ? 'visiblesectionName  mb-12' : ''}`}>
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
      <div className={`scroll-animationClients clients-logo-section ${isLogo ? 'visibleClients pl-3 pr-3' : ' pl-3 pr-3'}`}>

        {/* <div className={`scroll-animationClients ${isLogo ? 'client flex flex-row flex-wrap pr-10 pl-10' : ''}`}> */}
        <Slider {...settings}>
          {clients.map((client) => (
            //  {client.largeImage ===  true ? (<img className='logo  w-36' src={client.image} />):
            //  ((
            <div className="clientLogo ">
              <img className='logo' src={client.image} />
           </div>

          ))}

        </Slider>
        {/* </div> */}

      </div>
      <div id="Founder's"></div>
    </div>
  );
}