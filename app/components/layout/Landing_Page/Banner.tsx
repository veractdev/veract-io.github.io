'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Marquee from 'react-fast-marquee';
import { LandingPageData } from '@/lib/custom_data';

export default function Banner() {
  const [translateY, setTranslateY] = useState<number>(0);
  const [translateY2, setTranslateY2] = useState<number>(0);
  const [rotateX, setRotateX] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [opacity, setOpacity] = useState<number>(1);
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [hoveredTouch, setHoveredTouch] = useState(false);
  const [hoveredServices, setHoveredServices] = useState(false);

  // Background Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setTranslateY(scrollY / 2.5);
      setTranslateY2(scrollY / 6);
      setRotateX(Math.min(scrollY / 10, 20));
      setScale(Math.max(0.88, 1 - scrollY / 300 / 2));
      setOpacity(Math.max(0.65, 1 - scrollY / 600 / 2));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <div className="fixed top-0 select-none pt-[5.938rem] px-[5.438rem] w-full h-[100vh] overflow-hidden perspective-[75rem] flex items-center justify-center bg-black"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* background image */}
      <img
        src={`/Images/case-studies/case_study_banner_image.png`}
        alt={`placeholder image`}
        className="absolute w-full h-full object-cover"
        style={{
          transform: `translateY(-${translateY}px) rotateX(-${rotateX}deg) scale(${scale})`,
          transformOrigin: 'center center',
          transition: 'transform 0.1s ease',
        }}
      />
      {/* text overlays */}
      <div
        className=" w-[calc(100%-2.5rem)] lg:w-auto relative z-10 text-center text-white flex flex-col items-center justify-center gap-[2.188rem] md:gap-[0.625rem] lg:gap-[.625rem]"
        style={{
          opacity: opacity,
          transform: `scale(${scale}) translateY(${translateY2}px)`,
          transition: 'transform 0.1s ease',
        }}
      >
        {/* Main content */}
        <div className='z-10 text-center pt-[8.375rem] '>
          <div className="text-[3rem] font-semibold w-[55.938rem] syneFont mx-auto pb-[0.625rem] leading-[1.1em] tracking-[-0.179rem]">
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
              className="inline"
            >
              {LandingPageData.banner.title_primary}
            </motion.span>
            <motion.span
              className="inline"
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
              transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}

            >
              <span className="inline-flex items-baseline whitespace-nowrap">
                <span className="text-white">{LandingPageData.banner.title_secondary}&nbsp;</span>
                <span className="text-primary-blue w-[8ch] text-left overflow-hidden">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </span>
            </motion.span>
          </div>
          <motion.div className="interFont text-[1.125rem] font-medium w-[37.188rem] leading-[1.5em] mx-auto pb-[0.625rem] tracking-[-0.02em] space-y-1">
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
            className=' flex items-center justify-center gap-[0.938rem] pb-[2.688rem]'>
            <div
              onMouseEnter={() => setHoveredTouch(true)}
              onMouseLeave={() => setHoveredTouch(false)}
              className="bg-primary-blue relative overflow-hidden w-[7.75rem] h-[2.25rem] text-white rounded-full cursor-pointer flex items-center justify-center interFont text-[0.938rem]"
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
                <img
                  src={LandingPageData.banner.get_in_touch_arrow}
                  alt="arrow_icon"
                  className={`w-[1rem] h-[1rem] object-contain `}
                />
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
                <img
                  src={LandingPageData.banner.get_in_touch_arrow}
                  alt="arrow_icon"
                  className={`w-[1rem] h-[1rem] object-contain rotate-45`}
                />
              </motion.div>
            </div>
            <div
              onMouseEnter={() => setHoveredServices(true)}
              onMouseLeave={() => setHoveredServices(false)}
              className="bg-[#0D0D0D] relative overflow-hidden w-[7.75rem] h-[2.25rem] border border-gray-700 text-white rounded-full cursor-pointer flex items-center justify-center interFont text-[0.938rem]"
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
          <div className="flex items-start justify-center gap-[1.5rem]">
            <motion.img
              src={LandingPageData.banner.banner_image_list[0].image}
              alt="BNI"
              className="w-[2.563rem] object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1, ease: "easeOut" }}
            />

            <div className="flex flex-col items-center justify-center gap-[0.08rem]">
              <motion.img
                src={LandingPageData.banner.banner_image_list[1].image}
                alt="Clutch"
                className="w-[3.938rem] object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
              />

              <motion.img
                src={LandingPageData.banner.banner_image_list[2].image}
                alt="Stars"
                className="w-[3.938rem] object-cover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
              />
            </div>

            <motion.img
              src={LandingPageData.banner.banner_image_list[3].image}
              alt="EtherCat"
              className="w-[3.563rem] object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
            />
          </div>
        </div>
        <motion.div
          className='w-[95%]'
          initial={{ x: 100, y: 15, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
        >
          <Marquee
            gradient={true}
            autoFill={true}
            gradientColor="black"
            gradientWidth={100}
            speed={30}
            direction="left" // or "right" as needed
            className="flex items-center "
            play={true}
          >
            {LandingPageData.banner.banner_carousel_list.map((src, idx) => (
              <div key={idx} className="mr-[4.125rem]"> {/* 2rem gap */}
                <img
                  src={src.img}
                  alt={`${src.img.split('/').pop()?.split('.').shift()}`}
                  className="w-[6.625rem] object-cover flex-shrink-0"
                />
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </div>
  )
}
