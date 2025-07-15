"use client";
import { isMobile, isTablet } from "@/lib/utils";
import React, { useEffect, useState } from "react";

type user_services_props = {
  title: string;
  description: string;
  service_list: {
    title: string;
    bg: string;
    description: string;
    gradient: string;
    blobWidth: string;
  }[];
}
export default function UserServices({ user_services_props }: { user_services_props: user_services_props }) {
  const cardCount = 5;
  const [openedArr, setOpenedArr] = useState(Array(cardCount).fill(false));
  const [scaledArr, setScaledArr] = useState(Array(cardCount).fill(false));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      if (typeof window === 'undefined') return;
      if (!isMobile() && !isTablet()) {
        const cards = document.querySelectorAll(".services-group");
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
          (cardEl as HTMLElement & { _mouseOverHandler?: () => void; _mouseLeaveHandler?: () => void })._mouseOverHandler = mouseOverHandler;
          (cardEl as HTMLElement & { _mouseOverHandler?: () => void; _mouseLeaveHandler?: () => void })._mouseLeaveHandler = mouseLeaveHandler;
        });

        return () => {
          cards.forEach((card) => {
            const cardEl = card as HTMLElement & { _mouseOverHandler?: () => void; _mouseLeaveHandler?: () => void };
            if (cardEl._mouseOverHandler) {
              cardEl.removeEventListener("mouseenter", cardEl._mouseOverHandler);
            }
            if (cardEl._mouseLeaveHandler) {
              cardEl.removeEventListener("mouseleave", cardEl._mouseLeaveHandler);
            }
          });
        };
      }
    }
  }, [loaded]);

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

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    loaded && (
      <div className="flex justify-center flex-col items-center syneFont relative z-200 bg-primary-text py-[4.5rem] md:py-[6.25rem] lg:py-[0rem] border-t border-primary-text md:border-t-0 lg:mt-[8.563rem]">
        <div className="flex lg:flex-col md:flex-col flex-col-reverse justify-center items-center z-1">
          <div className="text-[#868586] lg:text-[1rem] md:text-[1rem] text-[0.875rem] leading-[1.4em] md:mb-[0.625rem] mb-[2.5rem] geistFont">
            {user_services_props.title}
          </div>
          <div dangerouslySetInnerHTML={{ __html: user_services_props.description }} />
        </div>
        <div className="flex lg:flex-row md:flex-col flex-col items-center justify-center lg:gap-[0.625rem] gap-[0.938rem] lg:w-max w-full">
          <div className="flex flex-col lg:gap-[0.625rem] gap-[0.938rem] lg:w-max w-full">
            {/* First row */}
            <div className="flex lg:w-max lg:flex-row md:flex-row flex-col lg:gap-[0.625rem] gap-[0.938rem] justify-center items-center">
              {user_services_props.service_list.slice(0, 2).map((card, idx) => (
                <div
                  key={card.title}
                  className={`group services-group relative transition-all duration-700 ease-in-out ${(isMobile() || isTablet()) && openedArr[idx] ? 'h-[11.938rem]' : (idx === 0 ? 'lg:h-[23.5rem] lg:w-[34rem]' : 'lg:h-[23.5rem] lg:w-[17rem]')
                    } md:w-[21.813rem] md:h-[23.5rem] w-[80%] h-[10.063rem] overflow-clip rounded-[1.875rem]`}
                  onClick={() => handleCardClick(idx)}
                >
                  {/* Animated background for mobile click */}
                  <div
                    className={`absolute inset-0 z-0 transition-all duration-700 ease-in-out ${(isMobile() || isTablet()) && openedArr[idx] ? 'scale-200' : 'scale-100'
                      } ${(isMobile() || isTablet()) && scaledArr[idx] ? 'opacity-30' : 'opacity-100'} ${card.bg}`}
                    style={{ borderRadius: '1.875rem' }}
                  ></div>
                  {/* Overlay image or black with 50% opacity when opened on mobile */}
                  {(isMobile() || isTablet()) && openedArr[idx] && (
                    <div className="absolute inset-0 bg-black/50 z-10" style={{ borderRadius: '1.875rem' }}></div>
                  )}
                  {/* Overlay for text clarity */}
                  <div className="absolute top-0 left-0 w-full h-[100%] bg-[linear-gradient(165deg,_#000000_0%,_rgba(0,0,0,0)_100%)] opacity-[0.79] z-10"></div>
                  <div className={`opacity-0 blob-placeholder left-[-3rem] top-[-3rem] absolute h-[30rem] ${card.blobWidth} rotate-[18deg] overflow-hidden bg-white-5 backdrop-blur-[5rem] transition-all duration-300 ease-in z-201`}></div>
                  <div
                    className={
                      `absolute lg:top-[0.75rem] md:top-[0.75rem] top-[1.25rem] left-[1.25rem] lg:text-[1.625rem] md:text-[1.625rem] leading-[1.5em] text-[1.375rem] font-semibold md:tracking-[-0.05em] tracking-[-0.07em] lg:text-white lg:transition-all lg:duration-700 lg:ease-in ${card.gradient} bg-clip-text text-transparent ease-in duration-300 transition-all  ` +
                      ((isMobile() || isTablet()) && openedArr[idx]
                        ? `${card.gradient} bg-clip-text text-transparent  md:left-[2.5rem] md:top-[2.5rem] ease-in duration-300 transition-all  `
                        : `text-white group-hover:top-[2.5rem] group-hover:left-[2.5rem] group-hover:${card.gradient} group-hover:bg-clip-text group-hover:text-transparent lg:w-[50%]`)
                    }
                    style={{ zIndex: 30 }}
                  >
                    {card.title}
                  </div>
                  {(isMobile() || isTablet()) && openedArr[idx] ? (
                    <div className="absolute md:bottom-[2.5rem] bottom-[1.25rem] left-[1.25rem] mr-[1.25rem] interFont text-white text-[0.875rem] font-light tracking-[-0.04em] leading-[1.5em] z-30">
                      {card.description}
                    </div>
                  ) : (
                    <div className="lg:opacity-0 absolute  md:bottom-[2.5rem] bottom-[1.25rem] left-[1.25rem] interFont text-white md:text-[1.125rem] text-[0.875rem] tracking-[-0.04em] leading-[1.5em] cursor-pointer z-30">
                      Learn More →
                    </div>
                  )}
                  <div className="absolute interFont lg:bottom-[2.5rem] md:bottom-[2.5rem] bottom-[1.25rem] left-[1rem] text-[0.938rem] font-light leading-[1.5em] text-white-80 opacity-0 transition-all duration-700 ease-in group-hover:opacity-100 group-hover:left-[2.5rem] lg:right-[2.5rem] z-30">
                    {card.description}
                  </div>
                </div>
              ))}
            </div>
            {/* Second row */}
            <div className="flex lg:w-max lg:flex-row md:flex-row flex-col lg:gap-[0.625rem] gap-[0.938rem] items-center justify-center">
              {user_services_props.service_list.slice(2, 4).map((card, idx) => (
                <div
                  key={card.title}
                  className={`group services-group relative transition-all duration-700 ease-in-out ${(isMobile() || isTablet()) && openedArr[idx + 2] ? 'h-[11.938rem]' : (idx === 1 ? 'lg:h-[23.5rem] lg:w-[34rem]' : 'lg:h-[23.5rem] lg:w-[17rem]')
                    } md:w-[21.813rem] md:h-[23.5rem] w-[80%] h-[10.063rem] overflow-clip rounded-[1.875rem]`}
                  onClick={() => handleCardClick(idx + 2)}
                >
                  {/* Animated background for mobile click */}
                  <div
                    className={`absolute inset-0 z-0 transition-all duration-700 ease-in-out ${(isMobile() || isTablet()) && openedArr[idx + 2] ? 'scale-200' : 'scale-100'
                      } ${(isMobile() || isTablet()) && scaledArr[idx + 2] ? 'opacity-30' : 'opacity-100'} ${card.bg}`}
                    style={{ borderRadius: '1.875rem' }}
                  ></div>
                  {/* Overlay image or black with 50% opacity when opened on mobile */}
                  {(isMobile() || isTablet()) && openedArr[idx + 2] && (
                    <div className="absolute inset-0 bg-black/50 z-10" style={{ borderRadius: '1.875rem' }}></div>
                  )}
                  {/* Overlay for text clarity */}
                  <div className="absolute top-0 left-0 w-full h-[100%] bg-[linear-gradient(165deg,_#000000_0%,_rgba(0,0,0,0)_100%)] opacity-[0.79] z-10"></div>
                  <div className={`opacity-0 blob-placeholder left-[-3rem] top-[-3rem] absolute h-[30rem] ${card.blobWidth} rotate-[18deg] overflow-hidden bg-white-5 backdrop-blur-[5rem] transition-all duration-300 ease-in z-20`}></div>
                  <div
                    className={
                      `absolute lg:top-[0.75rem] md:top-[0.75rem] top-[1.25rem] left-[1.25rem] lg:text-[1.625rem] md:text-[1.625rem]  text-[1.375rem] font-semibold tracking-[-0.07em] lg:text-white lg:transition-all lg:duration-700 lg:ease-in ${card.gradient} bg-clip-text text-transparent ease-in duration-300 transition-all  ` +
                      ((isMobile() || isTablet()) && openedArr[idx + 2]
                        ? `${card.gradient} bg-clip-text text-transparent md:left-[2.5rem] md:top-[2.5rem] md:w-[60%] ease-in duration-300 transition-all`
                        : `text-white group-hover:top-[2.5rem] group-hover:left-[2.5rem] group-hover:${card.gradient} group-hover:bg-clip-text group-hover:text-transparent lg:w-[50%] md:w-[60%]`)
                    }
                    style={{ zIndex: 30 }}
                  >
                    {card.title}
                  </div>
                  {(isMobile() || isTablet()) && openedArr[idx + 2] ? (
                    <div className="absolute md:bottom-[2.5rem] bottom-[1.25rem] left-[1.25rem] mr-[1.25rem] interFont text-white md:text-[0.938rem] font-light text-[0.875rem] tracking-[-0.04em] leading-[1.5em] z-30 ">
                      {card.description}
                    </div>
                  ) : (
                    <div className="lg:opacity-0 absolute md:bottom-[2.5rem] bottom-[1.25rem] left-[1.25rem] interFont text-white md:text-[1.125rem]  text-[0.875rem] tracking-[-0.04em] leading-[1.5em] cursor-pointer z-30">
                      Learn More →
                    </div>
                  )}
                  <div className="absolute interFont lg:bottom-[2.5rem] md:bottom-[2.5rem] bottom-[1.25rem] left-[1rem] text-[0.938rem] font-light leading-[1.5em] text-white-80 opacity-0 transition-all duration-700 ease-in group-hover:opacity-100 group-hover:left-[2.5rem] lg:right-[2.5rem] z-30">
                    {card.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* The tall card on the right */}
          <div
            className={`group services-group relative transition-all duration-700 ease-in-out lg:h-[47.625rem] lg:w-[15.5rem] md:w-[44.25rem] md:h-[23.5rem] w-[80%] ${isMobile() && openedArr[4] ? 'h-[11.938rem]' : 'h-[10.063rem]'} overflow-clip rounded-[1.875rem] hover:bg-black`}
            onClick={() => handleCardClick(4)}
          >
            {/* Animated background for mobile click */}
            <div
              className={`absolute inset-0 z-0 transition-all duration-700 ease-in-out ${(isMobile() || isTablet()) && openedArr[4] ? 'scale-200' : 'scale-100'
                } ${(isMobile() || isTablet()) && scaledArr[4] ? 'opacity-30' : 'opacity-100'} ${user_services_props.service_list[4].bg}`}
              style={{ borderRadius: '1.875rem' }}
            ></div>
            {/* Overlay image or black with 50% opacity when opened on mobile */}
            {(isMobile() || isTablet()) && openedArr[4] && (
              <div className="absolute inset-0 bg-black/50 z-10" style={{ borderRadius: '1.875rem' }}></div>
            )}
            <div className="absolute top-0 left-0 w-full h-[100%] bg-[linear-gradient(165deg,_#000000_0%,_rgba(0,0,0,0)_100%)] opacity-[0.79] z-10"></div>
            <div className="opacity-0 blob-placeholder left-[-13rem] top-[-3rem] absolute h-[100rem] w-[10rem] rotate-[9deg] overflow-hidden bg-white-5 backdrop-blur-[5rem] transition-all duration-300 ease-in z-20"></div>
            <div
              className={
                `absolute  lg:top-[0.75rem] md:top-[0.75rem] top-[1.25rem] left-[1.25rem] lg:text-[1.625rem] md:text-[1.625rem] text-[1.375rem] lg:font-semibold md:font-semibold font-semibold tracking-[-0.07em] lg:text-white lg:transition-all lg:duration-700 lg:ease-in ${user_services_props.service_list[4].gradient} bg-clip-text text-transparent ease-in duration-300 transition-all  ` +
                ((isMobile() || isTablet()) && openedArr[4]
                  ? `${user_services_props.service_list[4].gradient} font-semibold bg-clip-text text-transparent  md:left-[2.5rem] md:top-[2.5rem] md:w-[60%] ease-in duration-300 transition-all `
                  : `text-white group-hover:top-[2.5rem] group-hover:left-[2.5rem] group-hover:${user_services_props.service_list[4].gradient} group-hover:bg-clip-text group-hover:text-transparent lg:w-[75%]`)
              }
              style={{ zIndex: 30 }}
            >
              {user_services_props.service_list[4].title}
            </div>
            {(isMobile() || isTablet()) && openedArr[4] ? (
              <div className="absolute md:bottom-[2.5rem] bottom-[1.25rem] left-[1.25rem] mr-[1.25rem] interFont text-white text-[0.875rem] tracking-[-0.04em] leading-[1.5em] z-30">
                {user_services_props.service_list[4].description}
              </div>
            ) : (
              <div className="lg:opacity-0 absolute md:bottom-[2.5rem] bottom-[1.25rem] left-[1.25rem] interFont text-white md:text-[1.125rem] text-[0.875rem] tracking-[-0.04em] leading-[1.5em] z-30">
                Learn More →
              </div>
            )}
            <div className="absolute interFont lg:bottom-[2.5rem] md:bottom-[2.5rem] bottom-[1.25rem] left-[1rem] text-[0.938rem] font-light leading-[1.5em] text-white-80 opacity-0 transition-all duration-700 ease-in group-hover:opacity-100 group-hover:left-[2.5rem] lg:right-[2.5rem] z-30">
              {user_services_props.service_list[4].description}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
