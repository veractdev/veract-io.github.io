"use client";
import { AgentPageData, LandingPageData } from "@/lib/custom_data";
import React, { useEffect, useState } from "react";

export default function AgentBanner() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    loaded && (
      <div className="w-full h-max overflow-scroll flex flex-col items-center justify-start bg-[#0d0d0d] pt-[107px] pb-[100px]">
        <div className="flex flex-col items-center justify-center relative">
          <div className="w-[800px] h-[700px] absolute z-0 left-1/2 top-0 -translate-x-1/2 animate-spin [animation-duration:6s] [animation-timing-function:linear]" style={{backgroundImage:`url(${'/Images/agent/radar_component_banner.png'})`,backgroundRepeat:"no-repeat", backgroundPosition:"center" , backgroundSize:"contain"}}></div>
          <div className="w-[800px] h-[500px] absolute bottom-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[#0d0d0d]/50 backdrop-blur-md [mask-image:linear-gradient(to_top,black_85%,transparent_100%)]"></div>
          </div>
          <div className="text-white w-[100%] flex flex-col items-center justify-center mt-[107px] z-5">
            <div className="p-[2px] rounded-[26px] bg-[linear-gradient(105deg,_rgb(41,52,255)_-2%,_rgba(36,65,212,0)_50%)]">
              <div className="pl-[16px] pr-[16px] pt-[8px] pb-[8px] bg-black rounded-[26px] text-[#8AA5FF] font-semibold">
                {AgentPageData.banner.about}
              </div>
            </div>
            <div className="text-[50px] text-wrap w-[45%] text-center font-medium tracking-[-0.01em] leading-[1.2em] mt-[12px]">
              {AgentPageData.banner.title}
            </div>
            <div className="text-[16px] text-wrap w-[30%] text-center text-white/70 font-normal tracking-[-0.02em] leading-[1.6em] mt-[12px]">
              {AgentPageData.banner.subtitle}
            </div>
            <div className="flex items-center justify-center mt-[14px] gap-[15px]">
              <div className="relative overflow-hidden w-[170px] h-[36px] text-nowrap text-white rounded-[6px] cursor-pointer flex items-center justify-center bg-primary-blue group">
                <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  <div className="flex items-center justify-center h-[36px] w-full font-medium">
                    {AgentPageData.banner.book_demo}
                    <img
                      src={LandingPageData.banner.get_in_touch_arrow}
                      alt="arrow_icon"
                      className="w-[1rem] h-[1rem] object-contain ml-[0.25rem]"
                    />
                  </div>
                  <div className="flex items-center justify-center h-[36px] w-full font-medium">
                    {AgentPageData.banner.book_demo}
                    <img
                      src={LandingPageData.banner.get_in_touch_arrow}
                      alt="arrow_icon"
                      className="w-[1rem] h-[1rem] object-contain ml-[0.25rem] rotate-45"
                    />
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden w-[170px] h-[36px] text-nowrap text-white rounded-[6px] cursor-pointer flex items-center justify-center bg-[#0d0d0d]/80 group border border-[#FFFFFF]/10">
                <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  <div className="flex items-center justify-center h-[36px] w-full font-medium mt-[-0.15rem]">
                    {AgentPageData.banner.view_case_study}
                  </div>
                  <div className="flex items-center justify-center h-[36px] w-full font-medium mt-[-0.1rem]">
                    {AgentPageData.banner.view_case_study}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[90%] lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] pl-[40px] pr-[40px] mt-[46px] z-5">
            {AgentPageData.banner.banner_features.map((feature, index) => (
              <div
                key={index}
                className={`interFont bg-[radial-gradient(96%_96%_at_50%_7.5%,_#121426_0%,_#000000_100%)] 
                          w-full rounded-[16px] p-[32px] border-[#222222] 
                          shadow-[0px_1px_2px_0px_#000000] border border-t-[#8AA5FF]/70 
                          ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <img src={feature.features_icon} alt={feature.features_title} />
                <div className="text-[22px] mt-[24px] tracking-[-0.02em] leading-[28px] text-white font-bold">
                  {feature.features_title}
                </div>
                <div className="text-[16px] mt-[16px] tracking-[-0.02em] leading-[1.6em] text-white/70 font-medium">
                  {feature.features_subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
