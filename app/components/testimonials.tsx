'use client';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/testimonials.css';
import '../styles/mediaQuery.css';
// import '../styles/styles.css';
import { useEffect, useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Hare Priyaa Rajendran",
      designation: "Founder",
      company: "Geeraj Business Solutions",
      image: "images/harepriyaa.jpeg",
      content: "I am amazed the way Veract took the initial discussion of our HRMS product MyTrackie. They swiftly got into the details and educated me wherever required. Really thrilled to work with Veract for the software upgrades of our product. I would certainly recommend Veract for product development and technical consulting."
    },
    {
      id: 2,
      name: "Mahendra Vadivelu",
      designation: "CEO",
      company: "Mako IT Lab",
      image: "images/mahendra.jpg",
      content: "We  engaged Veract for an Angular project which required custom printing domain knowledge and involved high level of complexity of the legacy system. Veract team  took complete ownership of client coordination, project management and project delivery as well. Focus on the deliverables and technical expertise stood out during our engagement. Thank you Veract for all your splendid work in this engagement. I will assure you that you will be our first go to team for any outsourcing need."
    },
    {
      id: 3,
      name: "Salil Nair",
      designation: "CTO",
      company: "Agrosperity Tech Solutions",
      image: "images/salilModified.png",
      content: "We engaged with Veract team from an early stage and they helped build out our 'KiViStar' App from basic day one concept. Their choice of architecture, framework and ability to deliver the product helped us go to market quickly. This helped us focus on our core work.  The team at Veract developed software like their own product! We continue to engage with Veract for our technical development requirements."
    }
   
    // {
    //   id: 4,
    //   name: "Name4",
    //   designation: "Desig4",
    //   company: "Company4",
    //   image: "testProfile.jpeg",
    //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    // },
  ];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = window.innerHeight * 3; // Adjust this value as needed
      setIsVisible(scrollTop > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="testimonialsMain fontFamilyNav mt-6" >
      <div className={`scroll-animationTestimonials ${isVisible ? 'visiblesectionName' : ''}`}>
        <div className="flex items-center justify-center">
          <hr className='separator'></hr>
          <div className='section-title mobilePaddingHeader'>
            CLIENTS <span className='section-title-highlight'>SPEAK</span>
          </div>
          <hr className='separator'></hr>
        </div>
      </div>
      <div className="testimonial mt-16 mb-16 md:ml-24 md:mr-24">
        <Carousel
          showStatus={false}
          infiniteLoop={true}
          dynamicHeight={false}
          autoPlay={true}
          interval={10000}
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50}
          showThumbs={false}
        >
          {testimonials.map((item) => (
            <div key={item.id} className=" testimonialAlignment pb-20">
              <div className="testimonialAlignmentImage  ">
                <div className={`scroll-animationY ${isVisible ? 'visibleFounderProfileTestimonial' : ''}`}>
                  <div className="MobileImageWidth "><img src={item.image} alt="slides" className="rounded-image" /></div>
                  <div className="quotesVisibleMobileName"><span className='title whitespace-nowrap'>{item.name} - {item.designation}, </span><span className='title highlight '>{item.company}</span></div>
                </div>
              </div>
              <div className="flex flex-col w-4/5">
                <div className={`scroll-animationY ${isVisible ? 'visibleFounderContent' : ''}`}>
                  <div className="flex flex-row mb-10 items-center">
                    <div className="quotesVisible"><i className="quotes"></i></div>
                    <div className="quotesVisible"><span className='title'>{item.name} - {item.designation}, </span><span className='title highlight'>{item.company}</span></div>
                  </div>
                  <div className="quotesVisibleMobile"><i className="quotes"></i></div>
                  <div className="text ml-10">
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            </div>
            
          ))}
        </Carousel>
      </div>
      <div  id="ContactUS" className="pb-8"></div>
    </div>
  );
}