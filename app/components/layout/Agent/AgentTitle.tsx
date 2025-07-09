'use client'
import React, { useEffect, useState } from "react";

export default function AgentTitle({ title, title_description, description }: { title: string, title_description: string, description: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    loaded && (
      <div className="w-full h-max flex flex-col items-center justify-center gap-[45px] lg:px-[70px] px-[2.03863rem] lg:pt-[69px] pt-[3.75rem]">
          {/* <AgentTitle title="Agentic Layer" /> */}
          <div className="flex flex-row items-center justify-center gap-[10px] rounded-[10px] bg-[linear-gradient(181deg,rgba(0,85,254,0.08)_0.51%,rgba(153,153,153,0.10)_99.49%)] relative px-[14px] py-[6px]">
            <div className="absolute top-[2px] w-[61px] h-[1px] bg-[linear-gradient(90deg,rgba(66,133,244,0)_0%,#4285F4_50%,rgba(66,133,244,0)_100%)]"></div>
            <div className="w-[10px] h-[10px] bg-[#FAFAFA] rounded-full"></div>
            <div className="text-white text-center dmSansFont md:text-[26px] text-[14px] font-normal leading-normal">{title}</div>
        </div>
          <div className="text-[#FAFAFA] text-center syneFont lg:text-[54px] md:text-[50px] text-[28px] font-semibold leading-normal max-w-[1139px]">
            {title_description}
          </div>
          <div className="text-[#CECECE] text-center dmSansFont md:text-[26px] text-[18px] font-normal leading-normal lg:pb-[136px]  pb-[6.94rem] max-w-[652px]">
            {description}
          </div>
        </div>
    )
  );
}


