import React from "react";
interface TestimonialProps {
  testimonial: string;
  image: string;
  name: string;
  designation: string;
  quotesImage: string;
  shadow?: string;
}


export default function Casestudy_Testimonial() {

  // Sample data for the testimonial
  const testimonialData : TestimonialProps = {
    testimonial: `"Veract brought our vision to life with precision. The voice-to-text AI solution exceeded expectations—intuitive, responsive, and impactful. Our users love it. A truly seamless collaboration"`,
    image : "/Images/testimonial_avatar.png",
    name: "Gwan Sik",
    designation: "Director @ Thermal Vision",
    quotesImage: "/Images/testimonial_quotes.png",
    shadow : "-30px -20px 1000px rgba(255,122,59,0.5)"
  }

  return (
  <>
  <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8 z-[10]">
  <img src="Images/horizantal_design.png" alt="horizontal line" className="lg:block hidden" />
  <div className="w-full lg:max-w-[47.125rem] bg-transparent flex flex-col lg:flex-row items-center lg:items-stretch">
    <div className="relative w-full lg:w-[13.56rem] h-[20rem] lg:h-auto flex justify-center items-center mb-4 lg:mb-0 relaltive">
      <img src="Images/horizantal_design.png" alt="horizontal line" className="absolute top-[8%] lg:hidden block "/>
      <img src="Images/horizantal_design.png" alt="horizontal line" className="absolute bottom-[8%] lg:hidden block"/>
      <div className="w-fit lg:w-full h-[100%] lg:h-[100%] flex justify-center items-center relative">
        <img src="/Images/vertical_design.png" alt="horizontal line" className="absolute left-0 lg:hidden block"/>
        <img src="/Images/vertical_design.png" alt="horizontal line" className="absolute right-0 lg:hidden block"/>
        <img src={testimonialData.quotesImage} alt="quotes image" className="w-[3.07rem] h-[2.456rem] absolute bottom-[1rem] right-[-4rem] lg:hidden block"/>
        <div className="w-[12rem] h-[16rem] lg:w-full lg:h-full rounded-[1.25rem] bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${testimonialData.image})`,
            boxShadow: testimonialData.shadow,
          }}
        >  
        </div>
      </div>
      <img src="/Images/vertical_design.png" alt="vertical line" className="absolute left-0 top-[-12%] hidden lg:block"/>
      <img src="/Images/vertical_design.png" alt="vertical line" className="absolute right-0 top-[-12%] hidden lg:block"/>
    </div>
    <div className="w-full lg:w-[25.8rem] text-center lg:text-left px-2 lg:p-[1.5rem] flex flex-col justify-center items-center lg:items-start">
      <div className="text-[1rem] lg:text-[1.438rem] tracking-[-0.01em] leading-[1.4em] text-white interFont lg:font-medium font-[600]">
        {testimonialData.testimonial}
      </div>
      <div className="mt-[1.25rem]">
        <div className="text-white text-[1rem] leading-[1.4em] font-medium">
          {testimonialData.name}
        </div>
        <div className="text-[0.875rem] text-white/50 font-medium leading-[1.2em]">
          {testimonialData.designation}
        </div>
      </div>
    </div>
    <div className="w-full lg:w-[7.765rem] flex justify-center lg:justify-end lg:items-end mt-6 lg:mt-0 lg:mb-[2rem]">
    <img src={testimonialData.quotesImage} alt="quotes image" className="w-[5.875rem] h-[4.688rem] hidden lg:block"/>
    </div>
  </div>
  <img src="Images/horizantal_design.png" alt="horizontal line" className="lg:block hidden" />
  </div>
  </>
  );
}
