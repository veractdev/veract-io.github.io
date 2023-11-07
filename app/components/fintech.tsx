'use client';
import React, { useState, useEffect } from 'react';


import DashboardDetails from './dashboardPortfolio';

import '../styles/styles.css';
import '../styles/mediaQuery.css'
import '../styles/testimonials.css';

export default function FinTech(){
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
                                <div className='caseHeaderTitle_mobile flex flex-wrap pl-5'> Credit Risk Assessment and Risk Profiling </div>
                                <div className='caseHeaderIcon_mobile pt-5 pb-11 pl-5'>Northern Arc Capital is a platform in the financial services sector set up primarily with the mission of catering to the diverse credit requirements of under-served households and businesses.</div>

                        </div>
                        <div className='ChallengeSolutionContainer_mobile'>
                            <div className='ChallengeContainer_mobile'>    
                                <div className="challenges_mobile">Challenges</div>
                                <div className='challengesContent_mobile'>Northern arc needed a team with financial domain and technical expertise to build their investor portal. They had the need to mitigate risk profile, risk analytics etc</div>
                                <div className='flex flex-col pt-6'>
                                        {/* <div className='challengePoints_mobile'>Live chat.</div>
                                        <div className='challengePoints_mobile'>Video audio streaming.</div>
                                        <div className='challengePoints_mobile'>Chat bot integration. </div> */}
                                </div>
                            </div>
                            <div className='ChallengeContainer_mobile'>
                                <div className="challenges_mobile">Solution</div>
                                <div className='challengesContent_mobile'>Veract combined its financial domain expertise with core development skills and deployed risk profiling in their investor tracking portal</div>
                                <div className='flex flex-col pt-6'>
                                        {/* <div className='solutionPoints_mobile'>Architecture.</div>
                                        <div className='solutionPoints_mobile'>Framework.</div>
                                        <div className='solutionPoints_mobile'>Choice of tools.</div> */}
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
                                            <div className='techText_mobile pb-3'>Angular</div>
                                            <div className='techText_mobile pb-3'>Springboot</div>
                                            <div className='techText_mobile pb-3'>Postgres</div>
                                            <div className='techText_mobile pb-3'>Kibana</div>

                                        </div>
                                        <div className="flex flex-col md:gap-6">
                                            <div className='techText_mobile pb-3'>Elastic Search</div>
                                            <div className='techText_mobile pb-3'>Node js</div>

                                        </div>     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                </div>
            </div>
        </div>
    )
}