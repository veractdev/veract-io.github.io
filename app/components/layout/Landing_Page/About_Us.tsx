'use client'
import { achievements } from "@/lib/custom_data";
import React, { useEffect, useState } from "react";

export default function About_Us() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    loaded && (
      <div className="w-full h-max bg-[#0D0D0D] flex items-center justify-center pb-[6.188rem] relative z-20">
        <div className="w-[100%] h-[24.5rem] bg-[#030810] relative rounded-[36px]">
          <img
            src="/Images/LandingPage/AboutUs/about_us_bg.png"
            className="absolute top-0 object-center object-cover w-[100%] h-[100%] rounded-[36px]"
          />
          <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
            <div className="roaming-ball1" />
            <div className="roaming-ball2" />
            <div className="roaming-ball3" />
            <div className="roaming-ball4" />
            <div className="roaming-ball2" />
            <div className="roaming-ball3" />
          </div>
          <div className="syneFont w-full h-full text-white flex items-center justify-start relative gap-[5rem]">
            {/* First two items in a row */}
            <div className="flex flex-row w-[50%] gap-[5rem] justify-end">
              {achievements.slice(0, 2).map((category, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-[20px] items-center w-fit lg:w-[254px]"
                >
                  <div className="text-[54px] tracking-[-1.9px] leading-[50px] text-center">
                    {category.numbers}
                  </div>
                  <div className="text-[32px] tracking-[-1.9px] leading-[50px] text-center">
                    {category.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Last two items in a column */}
            <div className="flex flex-row w-[50%] gap-[5rem] justify-start">
              {achievements.slice(2, 4).map((category, index) => (
                <div
                  key={index + 2}
                  className="flex flex-col gap-[20px] items-center w-fit lg:w-[254px]"
                >
                  <div className="text-[54px] tracking-[-1.9px] leading-[50px] text-center">
                    {category.numbers}
                  </div>
                  <div className="text-[32px] tracking-[-1.9px] leading-[50px] text-center">
                    {category.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
