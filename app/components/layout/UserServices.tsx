"use client";
import { isMobile, isTablet } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export default function UserServices() {
  const cardCount = 5;
  const [openedArr, setOpenedArr] = useState(Array(cardCount).fill(false));
  const [scaledArr, setScaledArr] = useState(Array(cardCount).fill(false));

  // Card data array
  const cards = [
    {
      title: "Health Issue Detection",
      bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
      description:
        "Enhance your brand's impact with our corporate video expertise. We create engaging content for businesses, from promotions to training materials.",
        gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[8rem]",
    },
    {
      title: "Seamless Integration",
      bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
      description:
        "Ensured smooth interaction between thermal cameras, IoT devices, and software components.",
        gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[8rem]",
    },
    {
      title: "Health Monitoring System",
      bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
      description:
        "Built a comprehensive desktop-based platform tailored for monitoring animal health efficiently.",
        gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[10rem]",
    },
    {
      title: "Actionable Insights",
      bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
      description:
        "Facilitated timely, data-backed decisions to improve overall animal well-being.",
        gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[10rem]",
    },
    {
      title: "User Experience Focus",
      bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
      description: "Delivered an intuitive interface that simplifies usage for veterinary and research teams.",
      gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
      blobWidth: "w-[10rem]",
      // isTall: true,
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!isMobile() && !isTablet()) {
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
    }
  }, []);

  // Handle card click for open/close with delayed bg swap
  const handleCardClick = (idx: number) => {
    if ((isMobile() || isTablet())) {
      if (openedArr[idx]) {
        // Close: reset both immediately
        setScaledArr(arr => {
          const newArr = [...arr];
          newArr[idx] = false;
          return newArr;
        });
        setOpenedArr(arr => {
          const newArr = [...arr];
          newArr[idx] = false;
          return newArr;
        });
      } else {
        // Open: scale first, then fade out
        setOpenedArr(arr => {
          const newArr = [...arr];
          newArr[idx] = true;
          return newArr;
        });
        setTimeout(() => {
          setScaledArr(arr => {
            const newArr = [...arr];
            newArr[idx] = true;
            return newArr;
          });
        }, 300);
      }
    }
  };

  return (
    <div className="flex justify-center flex-col items-center syneFont relative z-200 bg-[#0d0d0d] py-[4.5rem] md:py-[6.25rem] lg:py-[0rem] border-t border-[#0d0d0d] md:border-t-0">
      <div className="flex lg:flex-col md:flex-col flex-col-reverse justify-center items-center z-1">
        <div className="text-[#868586] lg:text-[1rem] md:text-[1rem] text-[14px] leading-[1.4em] lg:mb-[10px] mb-[2.5rem] geistFont">
          HOW WE HELPED
        </div>
        <div className="lg:text-[30px] md:text-[28px] text-[24px] text-white leading-[1.2em] lg:w-[550px] md:w-[356px] w-full text-center lg:mb-[2.5rem] mb-[10px] tracking-[-0.05em] font-semibold">
          We built a <span className="text-[#4285f4]">focused solution</span> to
          transform livestock health monitoring.
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-col flex-col items-center justify-center lg:gap-[10px] gap-[15px] lg:w-max w-full">
        <div className="flex flex-col lg:gap-[10px] gap-[15px] lg:w-max w-full">
          {/* First row */}
          <div className="flex lg:w-max lg:flex-row md:flex-row flex-col lg:gap-[10px] gap-[15px] justify-center items-center">
            {cards.slice(0, 2).map((card, idx) => (
              <div
                key={card.title}
                className={`group relative transition-all duration-700 ease-in-out ${
                  (isMobile() || isTablet()) && openedArr[idx] ? 'h-[191px]' : (idx === 0 ? 'lg:h-[376px] lg:w-[544px]' : 'lg:h-[376px] lg:w-[272px]')
                } md:w-[349px] md:h-[376px] w-[80%] h-[161px] overflow-clip rounded-[30px]`}
                onClick={() => handleCardClick(idx)}
              >
                {/* Animated background for mobile click */}
                <div
                  className={`absolute inset-0 z-0 transition-all duration-700 ease-in-out ${
                    isMobile()|| isTablet() && openedArr[idx] ? 'scale-200' : 'scale-100'
                  } ${(isMobile() || isTablet()) && scaledArr[idx] ? 'opacity-30' : 'opacity-100'} ${card.bg}`}
                  style={{ borderRadius: '30px' }}
                ></div>
                {/* Overlay image or black with 50% opacity when opened on mobile */}
                {(isMobile() || isTablet()) && openedArr[idx] && (
                  <div className="absolute inset-0 bg-black/50 z-10" style={{ borderRadius: '30px' }}></div>
                )}
                {/* Overlay for text clarity */}
                <div className="absolute top-0 left-0 w-full h-[100%] bg-[linear-gradient(165deg,_#000000_0%,_rgba(0,0,0,0)_100%)] opacity-[0.79] z-10"></div>
                <div className={`opacity-0 blob-placeholder left-[-3rem] top-[-3rem] absolute h-[30rem] ${card.blobWidth} rotate-[18deg] overflow-hidden bg-white/5 backdrop-blur-[5rem] transition-all duration-300 ease-in z-20`}></div>
                <div
                  className={
                    `absolute lg:top-[12px] md:top-[12px] top-[20px] left-[20px] lg:text-[26px] md:text-[26px] leading-[1.5em] text-[22px] font-semibold md:tracking-[-0.05em] tracking-[-0.07em] lg:text-white lg:transition-all lg:duration-700 lg:ease-in ${cards[4].gradient} bg-clip-text text-transparent   ` +
                    ((isMobile()||isTablet()) && openedArr[idx]
                      ? `${card.gradient} bg-clip-text text-transparent `
                      : `text-white group-hover:top-[2.5rem] group-hover:left-[2.5rem] group-hover:${card.gradient} group-hover:bg-clip-text group-hover:text-transparent lg:w-[50%]`)
                  }
                  style={{ zIndex: 30 }}
                >
                  {card.title}
                </div>
                {(isMobile() || isTablet()) && openedArr[idx] ? (
                  <div className="absolute md:bottom-[40px] bottom-[20px] left-[20px] mr-[20px] interFont text-white text-[14px] font-light tracking-[-0.04em] leading-[1.5em] z-30">
                    {card.description}
                  </div>
                ) : (
                  <div className="lg:opacity-0 absolute  md:bottom-[40px] bottom-[20px] left-[20px] interFont text-white md:text-[18px] text-[14px] tracking-[-0.04em] leading-[1.5em] cursor-pointer z-30">
                    Learn More →
                  </div>
                )}
                <div className="absolute interFont lg:bottom-[2.5rem] md:bottom-[40px] bottom-[20px] left-[1rem] text-[15px] font-light leading-[1.5em] text-white/80 opacity-0 transition-all duration-700 ease-in group-hover:opacity-100 group-hover:left-[2.5rem] lg:right-[2.5rem] z-30">
                  {card.description}
                </div>
              </div>
            ))}
          </div>
          {/* Second row */}
          <div className="flex lg:w-max lg:flex-row md:flex-row flex-col lg:gap-[10px] gap-[15px] items-center justify-center">
            {cards.slice(2, 4).map((card, idx) => (
              <div
                key={card.title}
                className={`group relative transition-all duration-700 ease-in-out ${
                  (isMobile() || isTablet()) && openedArr[idx + 2] ? 'h-[191px]' : (idx === 1 ? 'lg:h-[376px] lg:w-[544px]' : 'lg:h-[376px] lg:w-[272px]')
                } md:w-[349px] md:h-[376px] w-[80%] h-[161px] overflow-clip rounded-[30px]`}
                onClick={() => handleCardClick(idx + 2)}
              >
                {/* Animated background for mobile click */}
                <div
                  className={`absolute inset-0 z-0 transition-all duration-700 ease-in-out ${
                    (isMobile() || isTablet()) && openedArr[idx + 2] ? 'scale-200' : 'scale-100'
                  } ${(isMobile() || isTablet()) && scaledArr[idx + 2] ? 'opacity-30' : 'opacity-100'} ${card.bg}`}
                  style={{ borderRadius: '30px' }}
                ></div>
                {/* Overlay image or black with 50% opacity when opened on mobile */}
                {(isMobile() || isTablet()) && openedArr[idx + 2] && (
                  <div className="absolute inset-0 bg-black/50 z-10" style={{ borderRadius: '30px' }}></div>
                )}
                {/* Overlay for text clarity */}
                <div className="absolute top-0 left-0 w-full h-[100%] bg-[linear-gradient(165deg,_#000000_0%,_rgba(0,0,0,0)_100%)] opacity-[0.79] z-10"></div>
                <div className={`opacity-0 blob-placeholder left-[-3rem] top-[-3rem] absolute h-[30rem] ${card.blobWidth} rotate-[18deg] overflow-hidden bg-white/5 backdrop-blur-[5rem] transition-all duration-300 ease-in z-20`}></div>
                <div
                  className={
                    `absolute lg:top-[12px] md:top-[12px] top-[20px] left-[20px] lg:text-[26px] md:text-[26px]  text-[22px] font-semibold tracking-[-0.07em] lg:text-white lg:transition-all lg:duration-700 lg:ease-in ${cards[4].gradient} bg-clip-text text-transparent   ` +
                    ((isMobile() || isTablet()) && openedArr[idx + 2]
                      ? `${card.gradient} bg-clip-text text-transparent`
                      : `text-white group-hover:top-[2.5rem] group-hover:left-[2.5rem] group-hover:${card.gradient} group-hover:bg-clip-text group-hover:text-transparent lg:w-[50%] md:w-[60%]`)
                  }
                  style={{ zIndex: 30 }}
                >
                  {card.title}
                </div>
                {(isMobile() || isTablet()) && openedArr[idx + 2] ? (
                  <div className="absolute md:bottom-[40px] bottom-[20px] left-[20px] mr-[20px] interFont text-white md:text-[15px] font-light text-[14px] tracking-[-0.04em] leading-[1.5em] z-30">
                    {card.description}
                  </div>
                ) : (
                  <div className="lg:opacity-0 absolute md:bottom-[40px] bottom-[20px] left-[20px] interFont text-white md:text-[18px]  text-[14px] tracking-[-0.04em] leading-[1.5em] cursor-pointer z-30">
                    Learn More →
                  </div>
                )}
                <div className="absolute interFont lg:bottom-[2.5rem] md:bottom-[40px] bottom-[20px] left-[1rem] text-[15px] font-light leading-[1.5em] text-white/80 opacity-0 transition-all duration-700 ease-in group-hover:opacity-100 group-hover:left-[2.5rem] lg:right-[2.5rem] z-30">
                  {card.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* The tall card on the right */}
        <div
          className={`group relative transition-all duration-700 ease-in-out lg:h-[762px] lg:w-[248px] md:w-[708px] md:h-[376px] w-[80%] ${isMobile() && openedArr[4] ? 'h-[191px]' : 'h-[161px]'} overflow-clip rounded-[30px] hover:bg-black`}
          onClick={() => handleCardClick(4)}
        >
          {/* Animated background for mobile click */}
          <div
            className={`absolute inset-0 z-0 transition-all duration-700 ease-in-out ${
              (isMobile() || isTablet()) && openedArr[4] ? 'scale-200' : 'scale-100'
            } ${(isMobile() || isTablet()) && scaledArr[4] ? 'opacity-30' : 'opacity-100'} ${cards[4].bg}`}
            style={{ borderRadius: '30px' }}
          ></div>
          {/* Overlay image or black with 50% opacity when opened on mobile */}
          {(isMobile() || isTablet()) && openedArr[4] && (
            <div className="absolute inset-0 bg-black/50 z-10" style={{ borderRadius: '30px' }}></div>
          )}
          <div className="absolute top-0 left-0 w-full h-[100%] bg-[linear-gradient(165deg,_#000000_0%,_rgba(0,0,0,0)_100%)] opacity-[0.79] z-10"></div>
          <div className="opacity-0 blob-placeholder left-[-13rem] top-[-3rem] absolute h-[100rem] w-[10rem] rotate-[9deg] overflow-hidden bg-white/5 backdrop-blur-[5rem] transition-all duration-300 ease-in z-20"></div>
          <div
                  className={
                    `absolute  lg:top-[12px] md:top-[12px] top-[20px] left-[20px] lg:text-[26px] md:text-[26px] text-[22px] tracking-[-0.07em] lg:text-white lg:transition-all lg:duration-700 lg:ease-in ${cards[4].gradient} bg-clip-text text-transparent   ` +
                    ((isMobile() || isTablet()) && openedArr[4]
                      ? `${cards[4].gradient} bg-clip-text text-transparent`
                      : `text-white group-hover:top-[2.5rem] group-hover:left-[2.5rem] group-hover:${cards[4].gradient} group-hover:bg-clip-text group-hover:text-transparent lg:w-[75%]`)
                  }
                  style={{ zIndex: 30 }}
          >
            {cards[4].title}
          </div>
          {(isMobile() || isTablet()) && openedArr[4] ? (
            <div className="absolute md:bottom-[40px] bottom-[20px] left-[20px] mr-[20px] interFont text-white text-[14px] tracking-[-0.04em] leading-[1.5em] z-30">
              {cards[4].description}
            </div>
          ) : (
            <div className="lg:opacity-0 absolute md:bottom-[40px] bottom-[20px] left-[20px] interFont text-white md:text-[18px] text-[14px] tracking-[-0.04em] leading-[1.5em] z-30">
              Learn More →
            </div>
          )}
          <div className="absolute interFont lg:bottom-[2.5rem] md:bottom-[40px] bottom-[20px] left-[1rem] text-[15px] font-light leading-[1.5em] text-white/80 opacity-0 transition-all duration-700 ease-in group-hover:opacity-100 group-hover:left-[2.5rem] lg:right-[2.5rem] z-30">
            {cards[4].description}
          </div>
        </div>
      </div>
    </div>
  );
}
