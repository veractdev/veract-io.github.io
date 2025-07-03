'use client';
import React from "react";
import Marquee from "react-fast-marquee";

export default function We_Work_With() {
  return (
    <div className="w-full min-h-screen bg-[#0D0D0D] text-white flex flex-col items-center justify-center px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-semibold">WE WORK WITH</h2>
        <h2 className="text-3xl md:text-5xl font-semibold">BRANDS IN</h2>
      </div>

      <div className="w-[100%] py-6 rotate-[-3deg]">
        <Marquee
          gradient={true}
          gradientColor="#0D0D0D"
          gradientWidth={100}
          speed={50}
          pauseOnHover={true}
          direction="right"
          className="flex items-center gap-4"
        >
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-[300px] h-[200px] bg-amber-500 flex items-center justify-center text-black font-bold text-xl"
                style={index != 0 ? {marginLeft: "10px"} : {marginLeft: "-5px"}}
              >
                Logo {index + 1}
              </div>
            ))}
        </Marquee>
      </div>
    </div>
  );
}
