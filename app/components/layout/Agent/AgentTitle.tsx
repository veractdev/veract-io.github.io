'use client'
import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AgentTitle({ title, title_description, description }: { title: string, title_description: string, description: string }) {

  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!loaded || !sectionRef.current) return;
  
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);
  
    // Refresh ScrollTrigger layout
    ScrollTrigger.refresh();
  
    return () => ctx.revert();
  }, [loaded]);
  

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    loaded && (
      <div ref={sectionRef} className="w-full h-max max-h-[80vh] flex flex-col items-center justify-center gap-[45px] lg:px-[70px] px-[2.03863rem]">
          <div className="flex flex-row items-center justify-center gap-[10px] rounded-[10px] bg-[linear-gradient(181deg,rgba(0,85,254,0.08)_0.51%,rgba(153,153,153,0.10)_99.49%)] relative px-[14px] py-[6px]">
            <div className="absolute top-[2px] w-[61px] h-[1px] bg-[linear-gradient(90deg,rgba(66,133,244,0)_0%,#4285F4_50%,rgba(66,133,244,0)_100%)]"></div>
            <div className="w-[10px] h-[10px] bg-[#FAFAFA] rounded-full"></div>
            <div className="text-white text-center dmSansFont md:text-[1.625rem] text-[14px] font-normal leading-normal">{title}</div>
        </div>
          <div className="text-[#FAFAFA] text-center syneFont lg:text-[54px] md:text-[50px] text-[1.75rem] font-semibold leading-normal max-w-[1139px] md:px-0 px-[7.5px]">
            {title_description}
          </div>
          <div className="text-[#CECECE] text-center dmSansFont md:text-[1.625rem] text-[1.125rem] font-normal leading-normal lg:pb-[136px]  pb-[6.94rem] max-w-[652px]">
            {description}
          </div>
        </div>
    )
  );
}


