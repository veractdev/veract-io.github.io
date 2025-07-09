"use client";
import React, { useEffect, useState } from "react";
import AgentTitle from "./AgentTitle";
import { isMobile } from "../../../../lib/utils";

export default function AgenticLayer() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    loaded && (
      <div>
        <AgentTitle title="Agentic Layer" title_description="Transform Your Existing Stack with Intelligent Automation" description="Automation that works with what you already use — effortlessly,
            intelligently, reliably."/>
        <div className="flex md:flex-row flex-col items-center justify-center lg:pb-[217px] pb-[136px]">
          <div className="relative lg:w-[401px] lg:h-[401px] md:w-[13.66906rem] md:h-[14.25881rem] w-[218px] h-[218px] rounded-full flex items-center justify-center overflow-visible">
            <div className="absolute agenticLayerBase lg:w-[401px] lg:h-[401px] md:w-[13.66906rem] md:h-[14.25881rem] w-[218px] h-[218px] rounded-full z-0"></div>
            <div
              className="absolute z-20 lg:top-[51px] lg:left-[51px] md:top-[1.77rem] md-[1.87rem] top-[1.25rem] lg:w-[394px] lg:h-[394px] md:w-[13.66906rem] md:h-[14.25881rem] w-[218px] h-[218px] pointer-events-none animate-agentic-layer"
              style={{
                filter: "url(#filter0_g_1_1075)",
                mask: "url(#intersectionMask)",
                WebkitMask: "url(#intersectionMask)",
              }}
            >
              <img
                src="/Images/agent/agenticLayer.png"
                alt="agenticLayer_distorted"
                className="object-cover w-full h-full rounded-full"
              />
            </div>

            <div className="absolute z-30 text-[#FAFAFA] syneFont lg:text-[60px] md:text-[30px] text-[26px] text-center font-semibold lg:leading-[60px] leading-[2.03863rem] lg:top-[176px] lg:left-[141px] md:top-[6.5rem] md:left-[4.5rem] top-[6rem] lg:w-full md:w-[7.935rem] w-[6.875rem] animate-agentic-layer-opacity">
              Ai Agent Layer
            </div>

            <svg className="absolute w-0 h-0">
              <filter
                id="filter0_g_1_1075"
                x="-40"
                y="-40"
                width="481"
                height="481"
                filterUnits="userSpaceOnUse"
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
                  scale="48"
                  xChannelSelector="R"
                  yChannelSelector="G"
                  result="displacedImage"
                />
                <feMerge>
                  <feMergeNode in="displacedImage" />
                </feMerge>
              </filter>

              <mask id="intersectionMask">
                <rect width="100%" height="100%" fill="black" />
                <circle cx="197px" cy="197px" r="197px" fill="white" />
              </mask>
            </svg>
          </div>
          <div className="flex lg:top-[51px] lg:left-[54px] relative animate-agentic-layer-opacity">
            <img
              src="/Images/agent/agenticLayerVeins.svg"
              alt="agenticLayer_2"
            className="md:rotate-0 lg:w-[321.774px] lg:h-[250.269px] md:w-[11.16331rem] md:h-[8.68256rem]  w-8.60706rem] h-[6.69438rem] rotate-[90deg]"
            />
          </div>
          <div className="relative">
            <img
              src="/Images/agent/top-blur.svg"
              alt="blurry effect"
              className="absolute top-[-51px] left-[-54px] z-10 md:animate-agentic-layer-opacity md:opacity-100 opacity-0"
            />
            <img
              src="/Images/agent/bottom-blur.svg"
              alt="blurry effect"
              className="absolute md:bottom-[-85px] bottom-[-102px] left-[-54px] z-10 md:animate-agentic-layer-opacity md:opacity-100 opacity-0"
            />

            <div className="relative z-20 lg:top-[51px] lg:left-[54px] flex flex-col lg:w-[411px] md:w-[14.25rem]  w-[289.26px] h-max lg:pt-[57px] lg:pb-[50px] pb-[2.22rem] pt-[2.51rem] rounded-[30px] bg-[#0D0D0D] animate-agentic-layer-shadow"
            style={isMobile() ? {boxShadow: '0px 0px 12px 1px #008FFF inset'} : {}}
            >
              <div className="flex flex-col lg:pl-[41px] pl-[1.8rem] lg:pr-[68px] pr-[2.99rem] lg:gap-[25px] md:gap-[0.87rem]  gap-[1.1rem] lg:pb-[101px] md:pb-[1.69rem] pb-[4.54rem]">
                <div className="flex flex-row lg:gap-[13px] md:gap-[0.45rem] gap-[0.57181rem]">
                  <div>
                    <img
                      src="/Images/agent/ai-magic.svg"
                      alt="bulletin point"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                  <div className="text-[#D9D9D9] dmSansFont lg:text-[20px] text-[0.875rem] font-normal leading-normal">
                    Automate repetitive tasks
                  </div>
                </div>
                <div className="flex flex-row lg:gap-[13px] md:gap-[0.45rem] gap-[0.57181rem]">
                  <div>
                    <img
                      src="/Images/agent/ai-magic.svg"
                      alt="bulletin point"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                  <div className="text-[#D9D9D9] dmSansFont lg:text-[20px] text-[0.875rem] font-normal leading-normal">
                    Unify Disconnected Tools
                  </div>
                </div>
                <div className="flex flex-row lg:gap-[13px] md:gap-[0.45rem] gap-[0.57181rem]">
                  <div>
                    <img
                      src="/Images/agent/ai-magic.svg"
                      alt="bulletin point"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                  <div className="text-[#D9D9D9] dmSansFont lg:text-[20px] text-[0.875rem] font-normal leading-normal">
                    Accelerate Decision Making
                  </div>
                </div>
                <div className="flex flex-row lg:gap-[13px] md:gap-[0.45rem] gap-[0.57181rem]">
                  <div>
                    <img
                      src="/Images/agent/ai-magic.svg"
                      alt="bulletin point"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                  <div className="text-[#D9D9D9] dmSansFont lg:text-[20px] text-[0.875rem] font-normal leading-normal">
                    Boost Team Efficiency
                  </div>
                </div>
                <div className="flex flex-row lg:gap-[13px] md:gap-[0.45rem] gap-[0.57181rem]">
                  <div>
                    <img
                      src="/Images/agent/ai-magic.svg"
                      alt="bulletin point"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                  <div className="text-[#D9D9D9] dmSansFont lg:text-[20px] text-[0.875rem] font-normal leading-normal">
                    Scale Without Hiring
                  </div>
                </div>
              </div>
              <div className="text-white text-center dmSansFont lg:text-[20px] text-[0.875rem] font-normal leading-normal md:pl-[1.17rem] md:pr-[1.21rem] pl-[40px] pr-[52px] pb-[45px]">
                Your tools stay the same. The way you work changes forever!
              </div>
              <div className="lg:px-[58px] md:px-[1.99rem] px-[2.55rem]">
                <div className="flex lg:px-[14px] lg:py-[6px] md:py-[0.21rem] md:px-[0.49rem] px-[0.62rem] py-[0.26rem] justify-center items-center gap-[10px] bg-[#4285F4] lg:rounded-[10px] rounded-[0.43988rem] text-center dmSansFont lg:text-[20px] md:text-[0.69388rem] text-[0.875rem] font-normal leading-normal text-white">
                  Supercharge Your Tools Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
