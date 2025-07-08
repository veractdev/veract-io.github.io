"use client";
import React, { useEffect, useState } from "react";
import AgentTitle from "./AgentTitle";

export default function AgenticLayer() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    loaded && (
      <div>
        <div className="w-full h-max flex flex-col items-center justify-center gap-[45px] px-[70px] pt-[69px]">
          <AgentTitle title="Agentic Layer" />
          <div className="text-[#FAFAFA] text-center syneFont text-[54px] font-semibold leading-normal">
            Transform Your Existing Stack with Intelligent Automation
          </div>
          <div className="text-[#CECECE] text-center dmSansFont text-[26px] font-normal leading-normal pb-[136px]">
            Automation that works with what you already use — effortlessly,
            intelligently, reliably.
          </div>
        </div>
        <div className="flex flex-row items-center justify-center pb-[217px]">
          <div className=" w-[401px] h-[401px] rounded-full agenticLayerBase relative flex items-center justify-center overflow-visible">
            <div className="absolute z-20 top-[51px] left-[54px] w-[394px] h-[394px]">
              <img
                src="/Images/agent/agenticLayer.png"
                alt="agenticLayer_1"
                className="object-cover"
              />
            </div>

          </div>
          <div className="flex top-[51px] left-[54px] relative">
            <img
              src="/Images/agent/agenticLayerVeins.svg"
              alt="agenticLayer_2"
              className="w-[321.774px] h-[250.269px]"
            />
          </div>
          <div className="relative">
          <img src="/Images/agent/top-blur.svg" alt="blurry effect" className="absolute top-[-51px] left-[-54px] z-10" />
            <img src="/Images/agent/bottom-blur.svg" alt="blurry effect" className="absolute bottom-[-102px] left-[-54px] z-10" />

          <div className="relative z-20 top-[51px] left-[54px] flex flex-col w-[411px] h-max pt-[57px] pb-[50px] rounded-[30px] bg-[#0D0D0D] shadow-[0px_0px_12px_1px_#008FFF_inset]">
            <div className="flex flex-col pl-[41px] pr-[68px] gap-[25px] pb-[101px]">
              <div className="flex flex-row gap-[13px]">
                <div>
                  <img
                    src="/Images/agent/ai-magic.svg"
                    alt="bulletin point"
                    className="w-[24px] h-[24px]"
                  />
                </div>
                <div className="text-[#D9D9D9] dmSansFont text-[20px] font-normal leading-normal">
                  Automate repetitive tasks
                </div>
              </div>
              <div className="flex flex-row gap-[13px]">
                <div>
                  <img
                    src="/Images/agent/ai-magic.svg"
                    alt="bulletin point"
                    className="w-[24px] h-[24px]"
                  />
                </div>
                <div className="text-[#D9D9D9] dmSansFont text-[20px] font-normal leading-normal">
                  Unify Disconnected Tools
                </div>
              </div>
              <div className="flex flex-row gap-[13px]">
                <div>
                  <img
                    src="/Images/agent/ai-magic.svg"
                    alt="bulletin point"
                    className="w-[24px] h-[24px]"
                  />
                </div>
                <div className="text-[#D9D9D9] dmSansFont text-[20px] font-normal leading-normal">
                  Accelerate Decision Making
                </div>
              </div>
              <div className="flex flex-row gap-[13px]">
                <div>
                  <img
                    src="/Images/agent/ai-magic.svg"
                    alt="bulletin point"
                    className="w-[24px] h-[24px]"
                  />
                </div>
                <div className="text-[#D9D9D9] dmSansFont text-[20px] font-normal leading-normal">
                  Boost Team Efficiency
                </div>
              </div>
              <div className="flex flex-row gap-[13px]">
                <div>
                  <img
                    src="/Images/agent/ai-magic.svg"
                    alt="bulletin point"
                    className="w-[24px] h-[24px]"
                  />
                </div>
                <div className="text-[#D9D9D9] dmSansFont text-[20px] font-normal leading-normal">
                  Scale Without Hiring
                </div>
              </div>
            </div>
            <div className="text-white text-center dmSansFont text-[20px] font-normal leading-normal pl-[40px] pr-[52px] pb-[45px]">
              Your tools stay the same. The way you work changes forever!
            </div>
            <div className="px-[58px]">
              <div className="flex w-[295px] px-[14px] py-[6px] justify-center items-center gap-[10px] bg-[#4285F4] rounded-[10px] text-center dmSansFont text-[20px] font-normal leading-normal text-white">
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
