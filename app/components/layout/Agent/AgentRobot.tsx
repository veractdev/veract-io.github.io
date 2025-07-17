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
        <img loading="lazy"
          src="/Images/agent/polygon.svg"
          className="absolute lg:top-[85%] md:top-[90%] top-[85%] left-[50%] translate-x-[-50%] z-[1] lg:w-max md:w-[1.438rem] w-[0.938rem]"
        />
        <div className="relative z-[100] lg:w-[9.881rem] lg:h-[9.881rem] md:w-[5.516rem] md:h-[5.516rem] w-[2.76363rem] h-[2.76363rem] bg-[#1C1C1C] rounded-full flex items-center justify-center">
          <div className="bg-[#D9D9D9] md:blur-[2.1500000953674316px] blur-[1.2px] lg:w-[1.0625rem] lg:h-[0.1875rem] md:w-[9.49px] md:h-[1.67px] w-[4.75px] h-[0.84px] absolute top-[115%] left-[50%] translate-x-[-50%] z-[10]"></div>
          <div className="absolute z-[10] lg:w-[8.313rem] lg:h-[8.313rem] md:w-[4.641rem] md:h-[4.641rem] w-[2.325rem] h-[2.325rem] lg:shadow-[inset_0_0_18.19px_-1.33px_rgba(66,133,244,0.95)] shadow-[inset_0_0_5.09px_-0.37px_rgba(66,133,244,0.95)] rounded-full bg-[rgba(66,133,244,0.05)] lg:box-shadow-[0px_0px_18.193px_-1.334px_rgba(66,133,244,0.96)_inset]"></div>
          <img loading="lazy"
            src={agent.image}
            alt={agent.name}
            className="absolute lg:w-[4.559rem] md:w-[2.545rem] w-[1.275rem]"
          />
          <div className="absolute top-[120%] left-[50%] translate-x-[-50%] text-[#DDD] text-center dmSansFont lg:text-[1rem] md:text-[0.75rem] text-[0.625rem] font-medium leading-normal lg:w-max md:w-max w-[4.563rem]">
            {agent.name}
          </div>
        </div>
      </React.Fragment>
    )
  );
}
