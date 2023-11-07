'use client';
import React, { useState, useEffect } from 'react';


import DashboardDetails from './dashboardPortfolio';

import '../styles/styles.css';
import '../styles/mediaQuery.css'
import '../styles/testimonials.css';

export default function AgriTech(){
    const scrollToSection = (sectionId:string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      const handleMenuClick = (sectionId:string) => {
        scrollToSection(sectionId);
      };
        
    return(
        <div>

            <div className="mobileCaseStudy">
            <div id="portfolioDetails" className='fontFamily'>
                    <div className='caseDetails_mobile'>
                        <div className='caseHeader_mobile'>                                
                                <div className='caseHeaderTitle_mobile flex flex-wrap pl-5'>Agriculture Finance Ecosystem Web Application </div>
                                <div className='caseHeaderIcon_mobile pt-5 pb-11 pl-5'>KiVi by agrosperity is a phygital platform that seamlessly enables farmers and agri, rural entrepreneurs to access timely and efficient capital.</div>

                        </div>
                        <div className='ChallengeSolutionContainer_mobile'>
                            <div className='ChallengeContainer_mobile'>    
                                <div className="challenges_mobile">Challenges</div>
                                <div className='challengesContent_mobile'>Kivi  was looking for a development partner to completely take over the  design ,development and deployment of loan eligiblity data </div>
                                <div className='flex flex-col pt-6'>
                                        <div className='challengePoints_mobile'>Vision to text.</div>
                                        <div className='challengePoints_mobile'>Map interfaces.</div>
                                        <div className='challengePoints_mobile'>Multi level authentication. </div>
                                        <div className='challengePoints_mobile'>Dashboards.</div>
                                </div>  
                            </div>
                            <div className='ChallengeContainer_mobile'>
                                <div className="challenges_mobile">Solution</div>
                                <div className='challengesContent_mobile'>Veract architects took end to end ownership of the product and setup the platform making crucial</div>
                                <div className='flex flex-col pt-6'>
                                        <div className='solutionPoints_mobile'>Architecture.</div>
                                        <div className='solutionPoints_mobile'>Framework.</div>
                                        <div className='solutionPoints_mobile'>Turnaround time.</div>
                                </div>
                            </div>
                        </div>
                        <div className='BottomContainer_mobile pt-10'>
                            <div className='mainContainer'>
                                <div className='serviceContainer_mobile'>
                                    <div className='ServiceImage'><img src="/caseStudies/vehicle.png" className='w-16'/></div>
                                    <div className='serviceHeader_mobile pt-2'>Services</div>
                                    <div className='serviceText_mobile pt-2'>Software architecture consulting </div>
                                    <div className='serviceText_mobile pt-2'>Software development</div>
                                    <div className='serviceText_mobile pt-2'>Deployment</div>
                                </div>
                                <div className='platformContainer_mobile'>
                                    <div className='ServiceImage'><img src="/caseStudies/web.png" className='w-16'/></div>
                                    <div className='serviceHeader_mobile pt-2'>Platform</div>
                                    <div className='PlatformText_mobile pt-2'>Mobile</div>
                                    <div className='PlatformText_mobile pt-2'>and</div>
                                    <div className='PlatformText_mobile pt-2'>Web applications</div>
                                </div>
                            </div>
                        </div> 
                        <div className="pt-2.5 pl-5 pr-5 pb-10">
                            <div className="techstackContainer_mobile">
                                    <div className='techImageTitle_mobile pl-20 pr-20'>
                                        <div className='ServiceImage'><img src="/caseStudies/tech-service.png" className='w-16 pt-1'/></div>
                                        <div className='serviceHeader_mobile pt-2'>Techstack</div>
                                    </div>
                                <div className='techContent_mobile'>
                                <div className="flex flex-row justify-around pt-6">
                                        <div className="flex flex-col md:gap-6">
                                            <div className='techText_mobile pb-3'>Java</div>
                                            <div className='techText_mobile pb-3'>Springboot</div>
                                            <div className='techText_mobile pb-3'>Postgres</div>
                                            <div className='techText_mobile pb-3'>nginx</div>
                                            <div className='techText_mobile pb-3'>kafka</div>

                                        </div>
                                        <div className="flex flex-col md:gap-6">
                                            <div className='techText_mobile pb-3'>Elastic Search</div>
                                            <div className='techText_mobile pb-3'>Google APIs</div>
                                            <div className='techText_mobile pb-3'>CI/CD</div>
                                            <div className='techText_mobile pb-3'>Angular</div>
                                            <div className='techText_mobile pb-3'>Kibana</div>

                                        </div>     
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pb-5">
                            <div className='testimonialContainer_mobile'>
                                <div className='clientContainer md:gap-4'>
                                <div className='flex pt-2'>
                                    <div className="challenges_mobile">Clients Speak</div>
                                </div>
                                <div className='flex pt-2 flex-col md:gap-3'>
                                    <div className="pb-5"><i className="quotes"></i></div>
                                    <div className='flex flex-col items-center pb-5'>
                                        <div className='title_mobile whitespace-nowrap'>Salil Nair - CTO</div>
                                        <div className='title_mobile highlight pl-3'>Agrosperity Tech Solutions</div>
                                    </div>
                                </div>
                                <div className="challengesContent_mobile pl-2 pr-2 flex-wrap pb-2">We engaged with Veract team from an early stage and they helped build out our 'KiViStar' App from basic day one concept. Their choice of architecture, framework and ability to deliver the product helped us go to market quickly. This helped us focus on our core work.</div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                </div>
            </div>
        </div>
    )
}