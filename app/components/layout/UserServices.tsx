"use client";
import React, { useEffect, useState } from "react";

export default function UserServices() {
  
  useEffect(()=>{
        const cards = document.querySelectorAll(".group");
        const blobs = document.querySelectorAll(".blob-placeholder");
      
        let lastActiveIndex: number | null = null;
      
        const handleMouseOver = (idx: number) => {
          // Reverse previous
          if (lastActiveIndex !== null && lastActiveIndex !== idx) {
            blobs[lastActiveIndex]?.classList.remove("animate-blob-move");
            blobs[lastActiveIndex]?.classList.add("animate-blob-reverse");
          }
      
          // Animate current
          blobs[idx]?.classList.remove("animate-blob-reverse");
          blobs[idx]?.classList.add("animate-blob-move");
      
          lastActiveIndex = idx;
        };
      
        const handleMouseLeave = (idx: number) => {
          blobs[idx]?.classList.remove("animate-blob-move");
          blobs[idx]?.classList.add("animate-blob-reverse");
      
          lastActiveIndex = null;
        };
      
        cards.forEach((card, idx) => {
          const cardEl = card as HTMLElement;
      
          const mouseOverHandler = () => handleMouseOver(idx);
          const mouseLeaveHandler = () => handleMouseLeave(idx);
      
          cardEl.addEventListener("mouseenter", mouseOverHandler);
          cardEl.addEventListener("mouseleave", mouseLeaveHandler);
      
          // Save both for cleanup
          (cardEl as any)._mouseOverHandler = mouseOverHandler;
          (cardEl as any)._mouseLeaveHandler = mouseLeaveHandler;
        });
      
        return () => {
          cards.forEach((card) => {
            const cardEl = card as any;
            cardEl.removeEventListener("mouseenter", cardEl._mouseOverHandler);
            cardEl.removeEventListener("mouseleave", cardEl._mouseLeaveHandler);
          });
        };
  },[])
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="text-[#868586] text-[1rem] leading-[1.4em] mb-[10px]">HOW WE HELPED</div>
      <div className="text-[36px] leading-[1.2em] w-[550px] text-center mb-[2.5rem]">We built a <span className="text-[#4285f4]">focused solution</span> to transform livestock health monitoring.</div>
      <div className="flex flex-row items-center justify-center gap-[10px]">
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-row gap-[10px]">
            <div className="group relative h-[376px] w-[544px] overflow-clip rounded-[30px] bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')] transition-all duration-500 ease-in">
              <div className="opacity-0 blob-placeholder left-[-3rem] top-[-3rem] absolute h-[30rem] w-[8rem] rotate-[18deg] overflow-hidden bg-white/5 backdrop-blur-[5rem] transition-all duration-300 ease-in"></div>
              <div className="absolute top-[1rem] left-[1rem] text-[26px] text-white transition-all duration-700 ease-in group-hover:top-[3rem] group-hover:left-[3rem] group-hover:bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)] group-hover:bg-clip-text group-hover:text-transparent">
                Health Issue Detection
              </div>
              <div className="absolute bottom-[3rem] left-[1rem] pr-[2rem] text-[15px] text-white/80 opacity-0 transition-all duration-700 ease-in group-hover:opacity-100 group-hover:left-[3rem]">
                Enhance your brand's impact with our corporate video expertise. We
                create engaging content for businesses, from promotions to
                training materials.
              </div>
            </div>
            <div className="group relative h-[376px] w-[272px] overflow-clip rounded-[30px] bg-amber-950 hover:bg-black">
            <div className="opacity-0 blob-placeholder left-[-3rem] top-[-3rem] absolute h-[30rem] w-[8rem] rotate-[18deg] overflow-hidden bg-white/5 backdrop-blur-[5rem] transition-all duration-300 ease-in"></div>
              <div className="absolute top-[1rem] left-[1rem] text-[26px] text-white transition-all duration-700 ease-in group-hover:top-[3rem] group-hover:left-[3rem] group-hover:bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)] group-hover:bg-clip-text group-hover:text-transparent right-[1rem]">
                Seamless Integration
              </div>
              <div className="absolute bottom-[3rem] left-[1rem] pr-[2rem] text-[15px] text-white/80 opacity-0 transition-all duration-700 ease-in group-hover:opacity-100 group-hover:left-[3rem]">
              Ensured smooth interaction between thermal cameras, IoT devices, and software components.
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[10px]">
            <div className="group relative h-[376px] w-[272px] overflow-clip rounded-[30px] bg-amber-950 hover:bg-black">
            <div className="opacity-0 blob-placeholder left-[-3rem] top-[-3rem] absolute h-[30rem] w-[10rem] rotate-[18deg] overflow-hidden bg-white/5 backdrop-blur-[5rem] transition-all duration-300 ease-in"></div>
              <div className="absolute top-[1rem] left-[1rem] text-[26px] text-white transition-all duration-700 ease-in group-hover:top-[3rem] group-hover:left-[3rem] group-hover:bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)] group-hover:bg-clip-text group-hover:text-transparent pr-[3rem] right-[1rem]">
                Health Monitoring System
              </div>
              <div className="absolute bottom-[3rem] left-[1rem] pr-[2rem] text-[15px] text-white/80 opacity-0 transition-all duration-700 ease-in group-hover:opacity-100 group-hover:left-[3rem]">
              Built a comprehensive desktop-based platform tailored for monitoring animal health efficiently.
              </div>
            </div>
            <div className="group relative h-[376px] w-[544px] overflow-clip rounded-[30px] bg-amber-950 hover:bg-black">
            <div className="opacity-0 blob-placeholder left-[-3rem] top-[-3rem] absolute h-[30rem] w-[10rem] rotate-[18deg] overflow-hidden bg-white/5 backdrop-blur-[5rem] transition-all duration-300 ease-in"></div>
              <div className="absolute top-[1rem] left-[1rem] text-[26px] text-white transition-all duration-700 ease-in group-hover:top-[3rem] group-hover:left-[3rem] group-hover:bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)] group-hover:bg-clip-text group-hover:text-transparent">
                Actionable Insights
              </div>
              <div className="absolute bottom-[3rem] left-[1rem] pr-[2rem] text-[15px] text-white/80 opacity-0 transition-all duration-700 ease-in group-hover:opacity-100 group-hover:left-[3rem]">
              Facilitated timely, data-backed decisions to improve overall animal well-being.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative h-[762px] w-[248px] overflow-clip rounded-[30px] bg-amber-950 hover:bg-black">
        <div className="opacity-0 blob-placeholder left-[-13rem] top-[-3rem] absolute h-[100rem] w-[10rem] rotate-[9deg] overflow-hidden bg-white/5 backdrop-blur-[5rem] transition-all duration-300 ease-in"></div>
          <div className="absolute top-[1rem] left-[1rem] text-[26px] text-white transition-all duration-700 ease-in group-hover:top-[3rem] group-hover:left-[3rem] group-hover:bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)] group-hover:bg-clip-text group-hover:text-transparent right-[1rem] pr-[2rem]">
            User Experience Focus
          </div>
          <div className="absolute bottom-[3rem] left-[1rem] pr-[2rem] text-[15px] text-white/80 opacity-0 transition-all duration-700 ease-in group-hover:opacity-100 group-hover:left-[3rem]">
          Delivered an intuitive interface that simplifies usage for veterinary and research teams.
          </div>
        </div>
      </div>
    </div>
  );
}
