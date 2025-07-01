'use client'
import React, { useEffect, useState } from "react";

interface TestimonialProps {
  testimonial: string;
  image: string;
  name: string;
  designation: string;
  quotesImage: string;
  shadow?: string;
}

export default function Casestudy_Testimonial() {
  const [loaded, setLoaded] = useState(false)
  const testimonialData: TestimonialProps = {
    testimonial: `"Veract brought our vision to life with precision. The voice-to-text AI solution exceeded expectations—intuitive, responsive, and impactful. Our users love it. A truly seamless collaboration"`,
    // image: "/Images/testimonial_avatar.png",
    image: "https://www.veract.io/images/harepriyaa.jpeg",
    name: "Gwan Sik",
    designation: "Director @ Thermal Vision",
    quotesImage: "/Images/testimonial_quotes.svg",
    shadow: "-1.875rem -1.25rem 62.5rem rgba(255,122,59,0.5)",
  };

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    loaded && (
      <div className="interFont w-full h-[100vh] flex flex-col justify-center items-center syneFont relative z-200 bg-primary-text pb-[5rem]">
        <img
          src="Images/horizantal_design.png"
          alt="horizantal_design"
          className="hidden lg:block md:block"
        />
        <div className="w-[90%] h-[30.625rem] bg-transparent flex flex-col items-center justify-center relative z-200 lg:flex-row lg:w-[41.25rem] lg:h-[18.75rem] md:flex-row md:w-[41.25rem] md:h-[18.75rem]">
          <img
            src="/Images/vertical_design.png"
            alt="vertical line"
            className="hidden lg:block md:block"
          />
          <img
            src="Images/horizantal_design.png"
            alt="horizantal_design"
            className="block lg:hidden md:hidden"
          />
          <div className="flex w-[13.4375rem] h-[13.4375rem] relative lg:h-[18.75rem] lg:w-[45%] md:h-[18.75rem] md:w-[45%]">
            <img
              src="/Images/vertical_design.png"
              alt="vertical line"
              className="absolute top-[-1.5625rem] left-0 h-[20rem]"
            />
            <img
              src={testimonialData.image}
              alt={testimonialData.name}
              className="w-full h-full object-cover object-top bg-transparent rounded-[1.25rem]"
              style={{ boxShadow: testimonialData.shadow }}
            />
            <img
              src="/Images/vertical_design.png"
              alt="vertical line"
              className="absolute top-[-1.5625rem] right-0 h-[20rem]"
            />
            <img
              src={testimonialData.quotesImage}
              alt="Quotes"
              className="absolute w-[2.5rem] h-[1.875rem] right-[-25%] bottom-0 block lg:hidden md:hidden"
            />
          </div>
          <img
            src="Images/horizantal_design.png"
            alt="horizantal_design"
            className="block lg:hidden md:hidden"
          />
          <img
            src="/Images/vertical_design.png"
            alt="vertical line"
            className="hidden lg:block md:block"
          />
          <div className="flex w-full h-full bg-transparent flex-col items-center justify-center relative p-[1rem] pl-[1.5rem] lg:h-[18.75rem] lg:items-start md:h-[18.75rem] md:items-start">
            <div className="text-[1.125rem] text-white lg:text-[1.4375rem] md:text-[1.4375rem] leading-[1.4em] tracking-[-0.01em] text-center lg:text-left md:text-left font-[500]">
              {testimonialData.testimonial}
            </div>
            <div className="mt-[1.25rem]">
              <div className="text-[1rem] text-white text-center lg:text-left md:text-left font-[500]">
                {testimonialData.name}
              </div>
              <div className="text-[0.875rem] text-white-50 text-center lg:text-left md:text-left font-[400]">
                {testimonialData.designation}
              </div>
            </div>
            <img
              src={testimonialData.quotesImage}
              alt="Quotes"
              className="absolute lg:right-[-6.125rem] lg:bottom-[2.25rem] md:right-[-1.25rem] md:bottom-[2.25rem] hidden lg:block md:block"
            />
          </div>
        </div>
        <img
          src="Images/horizantal_design.png"
          alt="horizantal_design"
          className="hidden lg:block md:block"
        />
      </div>
    )
  );
}
