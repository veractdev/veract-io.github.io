'use client';
import Link from 'next/link';
import '../styles/styles.css';
import '../styles/mediaQuery.css';
import { useEffect, useState } from 'react';
// import RotatingCircle from './rotatingCases'

export default function Casestudies() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          
        }
      };
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const triggerPoint = window.innerHeight * 2.0; // Adjust this value as needed
            setIsVisible(scrollTop > triggerPoint);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div  className="pt-12 pb-12 ">
            <div className="flex flex-col  case-studies portfolioFonts ">
                <div className="flex flex-col case-studies-content   ">
                    <div className={`scroll-animationPortfolio ${isVisible ? 'visiblesectionName' : ''}`}>
                        <div className="flex case-studies-content-top items-center justify-center flex flex-row md:gap-6 ">
                            <hr className="separator"></hr>
                            <div className='section-title mobilePaddingHeader'>
                                CASE <span className='section-title-highlight'>STUDIES</span>
                            </div>
                            <hr className="separator"></hr>
                        </div>
                        {/* <div className='section-desc'>
                            We simply want to make sure your brand is getting the nourishment it needs and that our service is providing the best bang for your buck.
                        </div> */}
                    </div>

                </div>
                <div className='desktopPortfolio'>
                <div className='items-list flex  flex-wrap pt-1 pb-4   '>
                {/* manufacturingHover */}
                    <div className='item flex flex-col contentWidth navbarCursor manufacturingHover md:w-1/3 p-4' >
                    {/* onClick={() => scrollToSection("ContactUS")} */}
                    
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleManufacturing' : ''}`}>

                            
                     
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/manufacturingOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4 '>MANUFACTURING</div>
                                </div>
                                <div className=''>
                                <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc manufacturingDesc'>
                                Digitizing manufacturing process in low tech adoption workforce in high dust & temp environment.</div>        
                        </div>
                          
                        {/* <div className='manufacturingArrow  '> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>  
                    {/* wellnessHover */}
                    <div className='item flex flex-col contentWidth navbarCursor wellnessHover  md:w-1/3 p-4' onClick={() => scrollToSection("ContactUS")} >
                
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleWellness' : ''}`}>
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/wellnessOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4'>WELLNESS</div>
                                </div>
                                <div className=''>
                                  <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc wellnessDesc'>
                                New age startup looking to launch mental health and wellness app.
                            </div>
                            {/* <div className='pl-52'><img src='resizedLogo/anyo-logo.png' className='w-20 pt-10  '/></div> */}
                        </div>
                       
                        {/* <div className='wellnessArrow  '> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>
                    {/* salesHover */}
                    <div className='item flex flex-col contentWidth navbarCursor salesHover md:w-1/3 p-4' onClick={() => scrollToSection("ContactUS")}>
                   
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleSales' : ''}`}>
                            <div className='flex flex-row  justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/salesOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4'>SALES</div>
                                </div>
                                <div className=''>
                                  <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc salesDesc'>
                                Sales resource attrition leads to lost opportunities. Improved key metrics in a multi product, location sales environment.                    </div>
                        </div>
                      
                        {/* <div className='salesArrow'> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>
                    {/* agriHover */}
                    <div className='item flex flex-col contentWidth navbarCursor agriHover md:w-1/3 p-4' onClick={() => scrollToSection("ContactUS")}>
                    
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleAgri' : ''}`}>
                            <div className='flex flex-row  justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/agriOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4' >AGRI TECH</div>
                                </div>
                                <div className=''>
                                  <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc agriDesc'>
                                End  to end solution in the exciting area of farmer supply chain.</div>
                        </div>
                     
                        {/* <div className='agriArrow'> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>
                    {/* hrHover */}
                    <div className='item flex flex-col contentWidth navbarCursor hrHover md:w-1/3 p-4' onClick={() => scrollToSection("ContactUS")}>
                   
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleHr' : ''}`}>
                            <div className='flex flex-row justify-between mb-2'>
                                <div className="flex flex-row">
                                <div  className='w-8 '><img src="portfolio/hrOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4'>HR TECH</div>
                                </div>
                                <div className=''>
                                  <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc hrDesc'>
                                Seamless integration of recruitment process.</div>
                        </div>
                       
                        {/* <div className='hrArrow'> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>
                    {/* fintechHover */}
                    <div className='item flex flex-col contentWidth navbarCursor fintechHover md:w-1/3 p-4 ' onClick={() => scrollToSection("ContactUS")}>
                    
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleFintech' : ''}`}>
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 ' ><img src="portfolio/fintechOrange.png"/></div>
                                <div className='item-title flex textColorLogo pl-4'>FINTECH</div>
                                </div>
                                <div className=''>
                                 <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc fintechDesc'>
                                Implementation with well established finance and micro lending company.</div>
                               
                        </div>
                 
                        {/* <div className='fintechArrow'> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>
                </div>
               
                </div>
                {/* <div className='desktopPortfolio' id="Testimonials"></div> */}
                <div className='mobilePortfolio'>
                <div className='items-list flex  flex-wrap pt-1 pb-4   '>
                {/* manufacturingHover */}
                    <div className='item flex flex-col contentWidth manufacturingHover md:w-1/3 p-4'>
                        
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleManufacturing' : ''}`}>
                            
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/manufacturingOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4 '>MANUFACTURING</div>
                                </div>
                                <div className='infoIconMobile ' onClick={() => scrollToSection("ContactUS")}>
                                 <img src="images/info.png" className='flex items-center justify-center  w-4 h-4'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc manufacturingDesc'>
                                Digitizing manufacturing process in low tech adoption workforce in high dust & temp environment.</div>        
                            </div>
                           
                        {/* <div className='manufacturingArrow  '> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>  
                    {/* wellnessHover */}
                    <div className='item flex flex-col contentWidth wellnessHover  md:w-1/3 p-4' >
                       
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleWellness' : ''}`}>
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/wellnessOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4'>WELLNESS</div>
                                </div>
                                <div className='infoIconMobile' onClick={() => scrollToSection("ContactUS")}>
                                <img src="images/info.png" className='flex items-center justify-center  w-4 h-4'></img>  
                                </div>
                            </div>
                            <div className='flex flex-row item-desc wellnessDesc'>
                                New age startup looking to launch mental health and wellness app.
                            </div>
                        </div>
                       
                        {/* <div className='wellnessArrow  '> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>
                    {/* salesHover */}
                    <div className='item flex flex-col contentWidth salesHover md:w-1/3 p-4' onClick={() => scrollToSection("ContactUS")}>
                      
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleSales' : ''}`}>
                            <div className='flex flex-row  justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/salesOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4'>SALES</div>
                                </div>
                                <div className='infoIconMobile' onClick={() => scrollToSection("ContactUS")}>
                                 <img src="images/info.png" className='w-4 h-4'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc salesDesc'>
                                Sales resource attrition leads to lost opportunities. Improved key metrics in a multi product, location sales environment.                    </div>
                        </div>
                      
                        {/* <div className='salesArrow'> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>
                    {/* agriHover */}
                    <div className='item flex flex-col contentWidth agriHover md:w-1/3 p-4' onClick={() => scrollToSection("ContactUS")}>
                      
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleAgri' : ''}`}>
                            <div className='flex flex-row  justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/agriOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4' >AGRI TECH</div>
                                </div>
                                <div className='infoIconMobile' onClick={() => scrollToSection("ContactUS")}>
                                 <img src="images/info.png" className='w-4 h-4'></img>
                                </div>
                            </div>
                            <div className='flex flex-row item-desc agriDesc'>
                                End  to end solution in the exicting area of farmer supply chain.</div>
                        </div>
                        
                        {/* <div className='agriArrow'> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>
                    {/* hrHover */}
                    <div className='item flex flex-col contentWidth hrHover md:w-1/3 p-4'>
                        
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleHr' : ''}`}>
                            <div className='flex flex-row justify-between mb-2'>
                                <div className="flex flex-row">
                                <div  className='w-8 '><img src="portfolio/hrOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4'>HR TECH</div>
                                </div>
                                <div className='infoIconMobile' onClick={() => scrollToSection("ContactUS")}>
                                  <img src="images/info.png" className='w-4 h-4'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc hrDesc'>
                                Seamless integration of recruitment process.</div>
                        </div>
                        
                        {/* <div className='hrArrow'> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>
                    {/* fintechHover */}
                    <div className='item flex flex-col contentWidth fintechHover md:w-1/3 p-4 '>
                        
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleFintech' : ''}`}>
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 ' ><img src="portfolio/fintechOrange.png"/></div>
                                <div className='item-title flex textColorLogo pl-4'>FINTECH</div>
                                </div>
                                <div className='infoIconMobile' onClick={() => scrollToSection("ContactUS")}>
                                  <img src="images/info.png" className='w-4 h-4'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc fintechDesc'>
                                Implementation with well established finance and micro lending company.</div>
                               
                        </div>
                      
                        {/* <div className='fintechArrow'> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>
                </div>
                </div>
                
            </div>
            <div className='' id="Testimonials"></div>

        </div>
    )
}