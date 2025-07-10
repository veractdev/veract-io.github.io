"use client";
import React, { useEffect, useState } from "react";

interface Agent {
  id: number;
  name: string;
  image: string;
  position: string;
}
export default function AgentRobot({ agent }: { agent: Agent }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    loaded && (
      <React.Fragment>
        <img
          src="/Images/Agent/polygon.svg"
          className="absolute lg:top-[85%] md:top-[90%] top-[85%] left-[50%] translate-x-[-50%] z-[1] lg:w-max md:w-[23px] w-[15px]"
        />
        <div className="relative z-[100] lg:w-[158.098px] lg:h-[158.098px] md:w-[88.26px] md:h-[88.26px] w-[2.76363rem] h-[2.76363rem] bg-[#1C1C1C] rounded-full flex items-center justify-center">
          <div className="bg-[#D9D9D9] md:blur-[2.1500000953674316px] blur-[1.2px] lg:w-[1.0625rem] lg:h-[0.1875rem] md:w-[9.49px] md:h-[1.67px] w-[4.75px] h-[0.84px] absolute top-[115%] left-[50%] translate-x-[-50%] z-[10]"></div>
          <div className="absolute z-[10] lg:w-[133px] lg:h-[133px] md:w-[74.25px] md:h-[74.25px] w-[37.2px] h-[37.2px] lg:shadow-[inset_0_0_18.19px_-1.33px_rgba(66,133,244,0.95)] shadow-[inset_0_0_5.09px_-0.37px_rgba(66,133,244,0.95)] rounded-full bg-[rgba(66,133,244,0.05)] lg:box-shadow-[0px_0px_18.193px_-1.334px_rgba(66,133,244,0.96)_inset]"></div>
          <img
            src={agent.image}
            alt={agent.name}
            className="absolute lg:w-[72.95px] md:w-[40.72px] w-[20.4px]"
          />
          <div className="absolute top-[120%] left-[50%] translate-x-[-50%] text-[#DDD] text-center dmSansFont lg:text-[16px] md:text-[12px] text-[10px] font-medium leading-normal lg:w-max md:w-max w-[73px]">
            {agent.name}
          </div>
        </div>
      </React.Fragment>
    )
  );
}
