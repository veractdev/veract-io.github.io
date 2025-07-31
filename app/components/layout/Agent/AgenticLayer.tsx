"use client";
import React, { useEffect, useState } from "react";
import AgentTitle from "./AgentTitle";
import { isMobile, isTablet } from "../../../../lib/utils";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AgenticLayer() {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    loaded && (
      <div>
        <AgentTitle title="Agentic Layer" title_description="Transform Your Existing Stack with Intelligent Automation" description="Automation that works with what you already use — effortlessly,
            intelligently, reliably."/>
        <div className="flex md:flex-row flex-col items-center justify-center lg:pb-[13.563rem] pb-[8.5rem]">
          <div className="relative lg:w-[25.063rem] lg:h-[25.063rem] md:w-[13.66906rem] md:h-[14.25881rem] w-[13.625rem] h-[13.625rem] rounded-full flex items-center justify-center overflow-visible">
            <div className="absolute agenticLayerBase lg:w-[25.063rem] lg:h-[25.063rem] md:w-[13.66906rem] md:h-[14.25881rem] w-[13.625rem] h-[13.625rem] rounded-full z-0"></div>
            <motion.div
              initial={{ opacity: 0, top: isMobile() ? 0 : isTablet() ? -100 : -100, left: isMobile() ? 0 : isTablet() ? -100 : -100, scale: 0.25 }}
              whileInView={{ opacity: 1, top: isMobile() ? '1.25rem' : isTablet() ? 28 : 51, left: isMobile() ? 0 : isTablet() ? 30 : 51, scale: 1 }}
              transition={{
                duration: 0.75,
                ease: 'easeInOut'
              }}
              viewport={{ amount: 0.5, once: isTablet() ? false : true }} // similar to entry 5% cover 35%
              className="absolute z-20 lg:top-[3.188rem] lg:left-[3.188rem] md:top-[1.77rem] md:left-[1.87rem] top-[1.25rem] lg:w-[24.625rem] lg:h-[24.625rem] md:w-[13.66906rem] md:h-[14.25881rem] w-[13.625rem] h-[13.625rem] pointer-events-none animate-agentic-layer"
              style={{
                filter: "url(#filter0_g_1_1075)",
                // mask: "url(#intersectionMask)",
                // WebkitMask: "url(#intersectionMask)",
              }}
            >
              <img loading="lazy"
                src={`/Images/agent/AgenticLayer/agentic_layer_overlay.svg`}
                // src='https://picsum.photos/200/300'
                alt="agenticLayer_distorted"
                className="object-cover w-full h-full rounded-full"
              />
            </motion.div>

            {/* animate-agentic-layer-opacity */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: 'easeIn'
              }}
              viewport={{ amount: 0.5 }} // similar to entry 5% cover 35%
              className="absolute z-30 text-[#FAFAFA] syneFont lg:text-[3.75rem] md:text-[1.875rem] text-[1.625rem] text-center font-semibold lg:leading-[3.75rem] leading-[2.03863rem] lg:top-[11rem] lg:left-[8.813rem] md:top-[6.5rem] md:left-[4.5rem] top-[6rem] lg:w-[65%] md:w-[7.935rem] w-[6.875rem]"
            >
              Ai Agent Layer
            </motion.div>

            <svg className="absolute w-0 h-0" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
              <filter
                id="filter0_g_1_1075"
                x="0"
                y="0"
                width="100%"
                height="100%"
                filterUnits="objectBoundingBox"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.01"
                  numOctaves="3"
                  seed="9055"
                >
                  <animate
                    attributeName="baseFrequency"
                    dur="10s"
                    values="0.01;0.02;0.01"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feDisplacementMap
                  in2="turbulence"
                  in="shape"
                  scale="20"
                  xChannelSelector="R"
                  yChannelSelector="G"
                  result="displacedImage"
                />
                <feMerge>
                  <feMergeNode in="displacedImage" />
                </feMerge>
              </filter>

              {/* <mask id="intersectionMask">
                <rect width="100%" height="100%" fill="black" />
                <circle cx="197px" cy="197px" r="197px" fill="white" />
              </mask> */}
            </svg>
          </div>
          {/* animate-agentic-layer-opacity */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: 'easeIn'
            }}
            viewport={{ amount: 0.5 }} // similar to entry 5% cover 35%
            className="flex lg:top-[3.188rem] lg:left-[3.375rem] relative scale-125 md:scale-100 lg:scale-125 transform translate-y-[0.625rem] md:translate-y-0"
          >
            <img loading="lazy"
              src={`/Images/agent/agenticLayerVeins.svg`}
              alt="agenticLayer_2"
              className="md:rotate-0 lg:w-[20.111rem] lg:h-[15.642rem] md:w-[11.16331rem] md:h-[8.68256rem]  w-[8.60706rem] h-[6.69438rem] rotate-[90deg] scale-130 md:scale-170 lg:scale-190 "
            />
          </motion.div>
          <div className="relative">
            <img loading="lazy"
              src={`/Images/agent/top-blur.svg`}
              alt="blurry effect"
              className="absolute top-[-3.188rem] left-[-3.375rem] z-10 md:animate-agentic-layer-opacity md:opacity-100 opacity-0"
            />
            <img loading="lazy"
              src={`/Images/agent/bottom-blur.svg`}
              alt="blurry effect"
              className="absolute md:bottom-[-5.313rem] bottom-[-6.375rem] left-[-3.375rem] z-10 md:animate-agentic-layer-opacity md:opacity-100 opacity-0"
            />

            <motion.div
              initial={{ boxShadow: 'none' }}
              whileInView={{ boxShadow: '0px 0px 12px 1px #008FFF inset' }}
              transition={{
                duration: 0.5,
                ease: 'easeIn'
              }}
              viewport={{ amount: 0.5 }} // similar to entry 5% cover 35%
              className="relative z-20 lg:top-[3.188rem] lg:left-[3.375rem] flex flex-col lg:w-[25.688rem] md:w-[14.25rem]  w-[18.079rem] h-max lg:pt-[3.563rem] lg:pb-[3.125rem] pb-[2.22rem] pt-[2.51rem] rounded-[1.875rem] bg-[#0D0D0D]"
              style={isMobile() ? { boxShadow: '0px 0px 12px 1px #008FFF inset' } : {}}
            >
              <div className="flex flex-col lg:pl-[2.563rem] pl-[1.8rem] lg:pr-[4.25rem] pr-[2.99rem] lg:gap-[1.563rem] md:gap-[0.87rem]  gap-[1.1rem] lg:pb-[6.313rem] md:pb-[1.69rem] pb-[4.54rem]">
                <div className="flex flex-row lg:gap-[0.813rem] md:gap-[0.45rem] gap-[0.57181rem]">
                  <div>
                    <img loading="lazy"
                      src={`/Images/agent/ai-magic.svg`}
                      alt="bulletin point"
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                  </div>
                  <div className="text-[#D9D9D9] dmSansFont lg:text-[1.25rem] text-[0.875rem] font-normal leading-normal">
                    Automate repetitive tasks
                  </div>
                </div>
                <div className="flex flex-row lg:gap-[0.813rem] md:gap-[0.45rem] gap-[0.57181rem]">
                  <div>
                    <img loading="lazy"
                      src={`/Images/agent/ai-magic.svg`}
                      alt="bulletin point"
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                  </div>
                  <div className="text-[#D9D9D9] dmSansFont lg:text-[1.25rem] text-[0.875rem] font-normal leading-normal">
                    Unify Disconnected Tools
                  </div>
                </div>
                <div className="flex flex-row lg:gap-[0.813rem] md:gap-[0.45rem] gap-[0.57181rem]">
                  <div>
                    <img loading="lazy"
                      src={`/Images/agent/ai-magic.svg`}
                      alt="bulletin point"
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                  </div>
                  <div className="text-[#D9D9D9] dmSansFont lg:text-[1.25rem] text-[0.875rem] font-normal leading-normal">
                    Accelerate Decision Making
                  </div>
                </div>
                <div className="flex flex-row lg:gap-[0.813rem] md:gap-[0.45rem] gap-[0.57181rem]">
                  <div>
                    <img loading="lazy"
                      src={`/Images/agent/ai-magic.svg`}
                      alt="bulletin point"
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                  </div>
                  <div className="text-[#D9D9D9] dmSansFont lg:text-[1.25rem] text-[0.875rem] font-normal leading-normal">
                    Boost Team Efficiency
                  </div>
                </div>
                <div className="flex flex-row lg:gap-[0.813rem] md:gap-[0.45rem] gap-[0.57181rem]">
                  <div>
                    <img loading="lazy"
                      src={`/Images/agent/ai-magic.svg`}
                      alt="bulletin point"
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                  </div>
                  <div className="text-[#D9D9D9] dmSansFont lg:text-[1.25rem] text-[0.875rem] font-normal leading-normal">
                    Scale Without Hiring
                  </div>
                </div>
              </div>
              <div className="text-white text-center dmSansFont lg:text-[1.25rem] text-[0.875rem] font-normal leading-normal md:pl-[1.17rem] md:pr-[1.21rem] pl-[2.5rem] pr-[3.25rem] pb-[2.813rem]">
                Your tools stay the same. The way you work changes forever!
              </div>
              <div className="lg:px-[3.625rem] md:px-[1.99rem] px-[2.55rem]">
                <div
                  onClick={() => {
                    router.push("/contact-us");
                  }}
                  className="flex lg:px-[0.875rem] lg:py-[0.375rem] md:py-[0.21rem] md:px-[0.49rem] px-[0.62rem] py-[0.26rem] justify-center items-center gap-[0.625rem] bg-[#4285F4] lg:rounded-[10px] rounded-[0.43988rem] text-center dmSansFont lg:text-[1.25rem] md:text-[0.69388rem] text-[0.875rem] font-normal leading-normal text-white cursor-pointer">
                  Supercharge Your Tools Now
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    )
  );
}
