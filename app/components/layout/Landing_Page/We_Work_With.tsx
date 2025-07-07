"use client";
import { LandingPageData } from "@/lib/custom_data";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function We_Work_With() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    loaded && (
      <div className="w-full h-[100vh] bg-[#0D0D0D] text-white flex flex-col items-center justify-center px-[1rem] pt-[6.25rem] pb-[4.4375rem] relative z-20">
        <div className="text-center mb-[2.5rem]">
          <div className="uppercase syneFont text-[2.25rem] lg:text-[4.5rem] md:text-[4.5rem] tracking-[0em] leading-[1.2em] font-bold text-[#fff]">
            {LandingPageData.we_work_with.title}
          </div>
          <div className="uppercase syneFont text-[2.25rem] lg:text-[4.5rem] md:text-[4.5rem] tracking-[0em] leading-[1.2em] font-bold text-[#4285F4]">
            {LandingPageData.we_work_with.sub_title}
          </div>
        </div>
        <div className="w-full [@media(min-width:1550px)]:w-[80%] [@media(min-width:1600px)]:w-[90%] py-[1.5rem] rotate-[-3deg] mt-[3.1875rem]">
          <Marquee
            gradient={true}
            autoFill={true}
            gradientColor="#0D0D0D"
            gradientWidth={100}
            speed={50}
            direction="right"
            className="flex items-center gap-4"
          >
            {LandingPageData.we_work_with.carouselData.map((brand, index) => (
              <div
                key={index}
                className="chakraPetchFont w-[18.75rem] h-[7.875rem] lg:h-[12.5rem] md:h-[12.5rem] flex items-center justify-center text-white text-[2.25rem] font-medium"
                style={{
                  backgroundImage: `url(${brand.image})`,
                  marginLeft: index !== 0 ? "0.625rem" : "-0.3125rem",
                }}
              >
                {brand.name}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    )
  );
}
