import React from "react";

export default function Casestudy_Testimonial() {
  return (
    <div className="w-full h-[100vh] bg-black flex flex-col items-center justify-center ">
    <img src='Images/horizantal.png' alt="horizantal line"/>      
    <div className="max-w-[47.125rem] h-[18.75rem] bg-transparent flex">   
      <div className="w-[13.56rem] relative">
          <div className="w-full h-full rounded-[0.75rem] bg-no-repeat bg-center bg-cover shadow-[-30px_-20px_1000px_rgba(255,122,59,0.5)]" style={{ backgroundImage: "url('/Images/testimonial_avatar.png')" }}></div> 
          <img src='/Images/vertical.png' alt="vertical line" className="absolute left-0 top-[-15%]"/>      
          <img src='/Images/vertical.png' alt="vertical line" className="absolute right-0 top-[-15%]"/>   
      </div>
      <div className="w-[25.8rem] bg-transperent flex flex-col justify-center items-start p-[1.5rem]">
            <div className="text-[1.438rem] tracking-[-0.01em] leading-[1.4em] text-left text-white interFont font-medium">" Veract brought our vision to life with precision. The voice-to-text AI solution exceeded expectations—intuitive, responsive, and impactful. Our users love it. A truly seamless collaboration "</div>
            <div className="mt-[1.25rem]">
                <div className="text-left text-white text-[1rem] leading-[1.4em] font-medium">Gwan Sik</div>
                <div className="text-[0.875rem] text-white/50 font-medium leading-[1.2em]">Director @ Thermal Vision</div>
            </div>
      </div>
      <div className="w-[7.765rem] flex flex-col flex-end items-center justify-end"><img src='/Images/testimonial_quotes.png' className="mb-[2.75rem]"/></div>
    </div>
    <img src='Images/horizantal.png' alt="horizantal line"/>       
    </div>
  );
}
