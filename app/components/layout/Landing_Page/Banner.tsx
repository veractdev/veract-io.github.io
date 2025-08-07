'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Marquee from 'react-fast-marquee';
import { baseUrl, LandingPageData } from '@/lib/custom_data';
import { isMobile, isTablet } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function Banner() {
  const router = useRouter();
  const [translateY2, setTranslateY2] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [opacity, setOpacity] = useState<number>(1);
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [hoveredTouch, setHoveredTouch] = useState(false);
  const [hoveredServices, setHoveredServices] = useState(false);


  // Typing Effect
  useEffect(() => {
    const currentWord = LandingPageData.banner.typwriting_animation_list[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (charIndex < currentWord.word.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentWord.word[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 120);
      } else {
        // Wait 3 seconds before starting to delete
        timeout = setTimeout(() => {
          setTyping(false);
        }, 3000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 80);
      } else {
        setWordIndex((prev) => (prev + 1) % LandingPageData.banner.typwriting_animation_list.length);
        setTyping(true); // Start typing next word
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, wordIndex]);

  // Background Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setTranslateY2(scrollY / 6);
      setScale(Math.max(0.88, 1 - scrollY / 300 / 2));
      setOpacity(Math.max(0.65, 1 - scrollY / 600 / 2));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setShowBanner(scrollY < window.innerHeight); // hide after 100vh
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`
      fixed top-0 select-none  w-full h-[100vh] overflow-hidden perspective-[75rem] flex items-center justify-center bg-black 
      ${showBanner ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <video
        className='absolute w-full h-full object-cover'
        autoPlay
        muted
        playsInline
        loop
        controls={false}
      >
        <source src={`${baseUrl}/Images/LandingPage/Banner/hero banner video.mp4`} type="video/mp4" />
      </video>

      {/* text overlays */}
      <div
        className=" w-[calc(100%-2.5rem)]  lg:w-auto relative z-10 text-center text-white flex flex-col items-center justify-center gap-[2.188rem] md:gap-[0.625rem] lg:gap-[3.125rem]"
        style={{
          opacity: opacity,
          transform: `scale(${scale}) translateY(${translateY2}px)`,
          transition: 'transform 0.1s ease',
        }}
      >
        {/* Main content */}
        <div className='z-10 text-center px-[1rem] '>
          <div className=" text-[2.5rem] lg:text-[3rem] md:text-[3rem]  font-semibold lg:w-[55.938rem] syneFont mx-auto pb-[2rem] md:pb-[0.625rem] lg:pb-[0.625rem] leading-[1.1em] tracking-[0rem] lg:tracking-[-0.179rem] md:tracking-[-0.173rem]">
            <motion.span
              initial={{
                clipPath: "inset(0 60% 0 0)",
                opacity: 0,
                filter: "blur(5px)",
                y: 10,
              }}
              animate={{
                clipPath: "inset(0 0% 0 0)",
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="lg:inline md:inline inline-grid"
            >
              <span>{LandingPageData.banner.title_primary} </span>
              <span className="text-white hidden lg:inline">{LandingPageData.banner.title_secondary}</span>
              <span className="text-white md:hidden ">{LandingPageData.banner.title_secondary}{LandingPageData.banner.title_tertiary}</span>

            </motion.span>
            <motion.span
              className=""
              initial={{
                opacity: 0,
                filter: "blur(5px)",
                y: 10,
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}

            >
              <span className="inline-flex md:flex md:flex-col lg:inline-flex md:items-center lg:items-baseline items-baseline md:w-[40rem] lg:w-[47rem]">
                <div className=''>
                  <span className="text-white hidden md:inline lg:hidden">{LandingPageData.banner.title_secondary}</span>
                  <span className="text-white hidden md:inline">{LandingPageData.banner.title_tertiary}</span>
                </div>
                {/* lg:-ml-[0.875rem] r */}
                <span className={`ml-0  text-primary-blue text-center lg:text-left lg:absolute lg:left-[12rem] 2xl:left-[17.5rem]`}
                  style={{
                    width: `${isMobile() || isTablet() ? `100%` : `${LandingPageData.banner.typwriting_animation_list[wordIndex].word.length}ch`}`,
                  }}
                >
                  {displayText}
                  {/* ai powered solution */}
                  <span className="animate-pulse">|</span>
                </span>
              </span>
            </motion.span>
          </div>



          <motion.div className="interFont text-[1rem] lg:text-[1.125rem] md:text-[1rem] font-medium w-[90%] md:w-[90%] lg:w-[39.188rem] leading-[1.5em] mx-auto pb-[1.75rem] md:pb-[1.75rem]  lg:pb-[1rem] tracking-[-0.02em] space-y-1 mt-0 lg:mt-[40px] md:mt-[40px]">
            {/* Line 1 */}
            <div className="overflow-hidden">
              <motion.span
                initial={{
                  clipPath: "inset(0 60% 0 0)",
                  opacity: 0,
                  filter: "blur(5px)",
                  y: 5,
                }}
                animate={{
                  clipPath: "inset(0 0% 0 0)",
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
                className="block"
              >
                {LandingPageData.banner.description_primary}
              </motion.span>
            </div>
            {/* Line 2 */}
            <div className="overflow-hidden">
              <motion.span
                initial={{
                  clipPath: "inset(0 60% 0 0)",
                  opacity: 0,
                  filter: "blur(5px)",
                  y: 5,
                }}
                animate={{
                  clipPath: "inset(0 0% 0 0)",
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
                className="block"
              >
                {LandingPageData.banner.description_secondary}
              </motion.span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
            className=' flex items-center justify-center gap-[0.938rem]  pb-[1.75rem] lg:pb-[2.688rem] md:pb-[1.75rem] mt-0 lg:mt-[30px] md:mt-[30px]'>

            <div
              onMouseEnter={() => setHoveredTouch(true)}
              onMouseLeave={() => setHoveredTouch(false)}
              onClick={() => {
                router.push('/contact-us');
              }}
              className={`${LandingPageData.banner.banner_CTA_status === 'active' ? 'cursor-pointer' : 'cursor-not-allowed'} bg-primary-blue relative overflow-hidden w-[7.75rem] h-[2.25rem] text-white rounded-full flex items-center justify-center interFont text-[0.938rem]`}
            >
              {/* Default Text */}
              <motion.div
                initial={false}
                animate={{
                  y: hoveredTouch ? "-100%" : "0%",
                  opacity: hoveredTouch ? 0 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-primary-blue absolute inset-0 flex items-center justify-center"
              >
                {LandingPageData.banner.get_in_touch}
                {/* <img loading="lazy"

                  src={`${baseUrl}/Images/LandingPage/Banner/arrowIconUp.png`}
                  alt="arrow_icon"
                  className={`w-[1rem] h-[1rem] object-contain `}
                /> */}
                <ArrowRight size={16} color='white' className='w-[1rem] h-[1rem] object-contain' />
              </motion.div>
              {/* Hover Text */}
              <motion.div
                initial={false}
                animate={{
                  y: hoveredTouch ? "0%" : "100%",
                  opacity: hoveredTouch ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center bg-primary-blue"
              >
                {LandingPageData.banner.get_in_touch}
                {/* <img loading="lazy"
                  src={`${baseUrl}/Images/LandingPage/Banner/arrowIconUp.png`}
                  alt="arrow_icon"
                  className={`w-[1rem] h-[1rem] object-contain rotate-45`}
                /> */}
                <ArrowRight size={16} color='white' className='transform -rotate-45 w-[1rem] h-[1rem] object-contain' />
              </motion.div>
            </div>


            <div
              onMouseEnter={() => setHoveredServices(true)}
              onMouseLeave={() => setHoveredServices(false)}
              onClick={() => {
                window.scrollTo(
                  {
                    top: document.getElementById('services')?.offsetTop,
                    behavior: 'instant'
                  }
                );
              }}
              className={`cursor-pointer lg:bg-[#0D0D0D] md:bg-[#050505]/80 bg-[#050505]/80 relative overflow-hidden w-[7.75rem] h-[2.25rem] border border-gray-700 text-white rounded-full flex items-center justify-center interFont text-[0.938rem]`}
            >
              {/* Default Text */}
              <motion.div
                initial={false}
                animate={{
                  y: hoveredServices ? "-100%" : "0%",
                  opacity: hoveredServices ? 0 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {LandingPageData.banner.view_services_text}
              </motion.div>
              {/* Hover Text */}
              <motion.div
                initial={false}
                animate={{
                  y: hoveredServices ? "0%" : "100%",
                  opacity: hoveredServices ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {LandingPageData.banner.view_services_text}
              </motion.div>
            </div>
          </motion.div>

          {/*Actual; pb-[5.438rem] for web */}
          <div className="flex items-end justify-center gap-[1.5rem]">
            <motion.img
              src={LandingPageData.banner.banner_image_list[0].image}
              alt="logo image"
              className="w-[2.563rem] object-cover"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.3, ease: "easeOut" }}
            />

            <div className="relativeflex flex-col items-center justify-center gap-[0.5rem]">
              <motion.img
                loading='lazy'
                src={LandingPageData.banner.banner_image_list[1].image}
                alt="logo image"
                className="w-[3.938rem] object-cover"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
              />
              <motion.img
                loading='lazy'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.5, ease: "easeOut" }}
                src={LandingPageData.banner.banner_image_list[2].image}
                alt="logo image"
                className="w-[3.938rem] object-cover absolute top-[calc(100%+0.5rem)]"
              />
            </div>

            <motion.img
              src={LandingPageData.banner.banner_image_list[3].image}
              alt="logo image"
              className="w-[88px] object-cover"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
      <motion.div
        className='w-full absolute bottom-[5.5vh] lg:bottom-0 md:bottom-[5vh] left-0 z-20'
        initial={{ x: 100, y: 15, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}

      >
        <Marquee
          gradient={true}
          autoFill={true}
          gradientColor="transparent"
          gradientWidth={0}
          speed={30}
          direction="left"
          className="flex items-center "
          play={true}
        >
          {LandingPageData.banner.banner_carousel_list.map((src, idx: number) => (
            <div key={idx} className="mr-[4.125rem]"> {/* 2rem gap */}
              <img loading="lazy"
                src={src.img}
                alt={`brand logo`}
                className="w-[6.625rem] object-cover flex-shrink-0"
              />
            </div>
          ))}
        </Marquee>
      </motion.div>
    </div>
  )
}
