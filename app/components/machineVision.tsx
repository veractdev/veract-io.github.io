'use client';
import React, { useState, useEffect } from 'react';


import DashboardDetails from './dashboardPortfolio';

import '../styles/styles.css';
import '../styles/mediaQuery.css'
import '../styles/testimonials.css';

export default function MachineVision(){
    const scrollToSection = (sectionId:string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      const handleMenuClick = (sectionId:string) => {
        scrollToSection(sectionId);
      };
    

    const portfolio=[
        {
            id:'content1',
            caseTitle:'Health and wellness web  and mobile app ',
            caseTitleContent:'Anyo is a health and wellness app tackling the important challenge of mental well being .',
            stampImage: "",
            caseImage:'portfolio/wellnessPurple.png',
            challenges:'Anyo founding team were in search of one stop solution - technical consulting and development for their product that had',
            challengePoints:'Live chat.,Video audio streaming.,Chat bot integration. ',
            solution:"Veract's team of architects and developers built the anyo mobile app, their four web portals within 5 months. ",
            solutionPoints:'Architecture.,Framework.,Choice of tools.',
            services:'Software architecture consulting Software development Deployment',
            platform:'Mobile and Web application',
            techstack:' Java,Springboot,Postgres,nginx,Kafka,Elastic search,Google APIs,CI/CD,Angular,Kibana',
            name: "",
            designation: "",
            company: "",
            clientSpeak:""
        },
        {
            id:'content2',
            caseTitle:'Sales enquiry and quote management  ',
            caseTitleContent:'Rajdeep is a multi principal,multi product,multi location industrial products distributor based out of pune.  ',
            stampImage: "",
            caseImage:'portfolio/salesPurple.png',
            challenges:"Client's pain points were salesmen attrition, lack of data continuity, quotation generation and reporting. They were looking for a solution to these with an ability to fit into their regular workflow including SAP integration. They also wanted the application to work offline.",
            challengePoints:'',
            solution:'Veract developed a web and mobile application with seamless integration with other software applications customer has been using',
            solutionPoints:'',
            services:'Software architecture consulting Software development Deployment',
            platform:'Web application',
            techstack:' Bootstrap,Redis,Express.js,Indexdb,Jquery,Google API,Mongodb',
            name: "",
            designation: "",
            company: "",
            clientSpeak:""
        },
        {
            id:'content3',
            caseTitle:'Machine vision for manufacturing quality control',
            caseTitleContent:'A sheet metal pressings manufacturing company.',
            stampImage: "portfolio/artificial-intelligence.png",
            caseImage:'factoryCase.png',
            challenges:'The components require intricate visual inspection  on parts with throughput over',
            challengePoints:' 5 Million pcs/month,Manual inspection was tedious, Dropping accuracy levels on fatigue ',
            solution:"Veract developed a homegrown AI based visual inspection application to improve efficiency and prevent downstream issues of part rejections and recalls. The cost effective nature of the solution made it a winner all the way for the manufacturer!",
            solutionPoints:'',
            services:'Software architecture consulting Software development Deployment',
            platform:'Web application',
            techstack:' Python,Keras,Tensor flow,Pytorch',
            name: "",
            designation: "",
            company: "",
            clientSpeak:""
        },
        {
            id:'content4',
            caseTitle:' Quality documentation for metal foundry   ',
            caseTitleContent:'Grey iron and ductile iron foundry looking for an automated quality report generation for customer submission . ',
            stampImage: "",
            // caseImage:'portfolio/fintechPurple.png',
            challenges:'Parts submission require quality documents to be submitted regarding spectrometer reading ,sand properties,pouring properties,mould properties .',
            challengePoints:' ',
            solution:'One stop solution that consolidates all quality documents along with CAPA followup, machine maintenance and defect prediction.',
            solutionPoints:'',
            services:'Software architecture consulting Software development Deployment',
            platform:'Web application',
            techstack:'Bootstrap,Express.js,Jquery,Mongodb,Redis,Indexdb,Google API',
            name: "",
            designation: "",
            company: "",
            clientSpeak:""
        },
        // {
        //     id:'content2',
        //     caseTitle:'Health and wellness web  and mobile app ',
        //     caseTitleContent:'Anyo is a health and wellness app tackling the important challenge of mental well being .',
        //     stampImage: "",
        //     caseImage:'portfolio/wellnessPurple.png',
        //     challenges:'Anyo founding team were in search of one stop solution - technical consulting and development for their product that had',
        //     challengePoints:'Live chat,Video audio streaming ,Chat bot integration. ',
        //     solution:"Veract's team of architects and developers built the anyo mobile app, their four web portals within 5 months. ",
        //     solutionPoints:'Architecture,Framework,Choice of tools',
        //     services:'Software architecture consulting Software development Deployment',
        //     platform:'Mobile and Web application',
        //     techstack:' Java,Springboot,Postgres,nginx,Kafka,Elastic search,Google APIs,CI/CD,Angular,Kibana',
        //     name: "",
        //     designation: "",
        //     company: "",
        //     clientSpeak:""
        // },
        // {
        //     id:'content3',
        //     caseTitle:'Sales enquiry and quote management  ',
        //     caseTitleContent:'Rajdeep is a multi principal,multi product,multi location industrial products distributor based out of pune.  ',
        //     stampImage: "",
        //     caseImage:'portfolio/salesPurple.png',
        //     challenges:"Client's pain points were salesmen attrition, lack of data continuity, quotation generation and reporting. They were looking for a solution to these with an ability to fit into their regular workflow including SAP integration. They also wanted the application to work offline.",
        //     challengePoints:'',
        //     solution:'Veract developed a web and mobile application with seamless integration with other software applications customer has been using',
        //     solutionPoints:'',
        //     services:'Software architecture consulting Software development Deployment',
        //     platform:'Web application',
        //     techstack:' Bootstrap,Redis,Express.js,Indexeddb,Jquery,Google API,Mongodb',
        //     name: "",
        //     designation: "",
        //     company: "",
        //     clientSpeak:""
        // },
        {
            id:'content5',
            caseTitle:'Agriculture finance ecosystem web application ',
            caseTitleContent:'KiVi by agrosperity is a phygital platform that seamlessly enables farmers and agri, rural entrepreneurs to access timely and efficient capital.',
            stampImage: "",
            caseImage:'portfolio/agriPurple.png',
            challenges:'Kivi  was looking for a development partner to completely take over the  design ,development and deployment of loan eligiblity data ',
            challengePoints:'Vision to text ,Map interfaces,Multi level authentication ,Dashboards  ',
            solution:'Veract architects took end to end ownership of the product and setup the platform making crucial',
            solutionPoints:'Architecture,Framework,Turnaround time',
            services:'Software architecture consulting Software development Deployment',
            platform:'Progressive web application',
            techstack:' Java,Springboot,Postgres,nginx,Kafka,Elastic search,Google APIs,CI/CD,Angular,Kibana',
            name: "Salil Nair",
            designation: "CTO",
            company: "Agrosperity Tech Solutions",
            clientSpeak:"We engaged with Veract team from an early stage and they helped build out our 'KiViStar' App from basic day one concept. Their choice of architecture, framework and ability to deliver the product helped us go to market quickly. This helped us focus on our core work.",
        },
        {
            id:'content6',
            caseTitle:'Machine vision for manufacturing quality control',
            caseTitleContent:'A sheet metal pressings manufacturing company.',
            stampImage: "",
            caseImage:'/portfolio/hrPurple.png',
            challenges:'The components require intricate visual inspection on parts with throughput over 5 Million pcs/month. Manual inspection was tedious and accuracy was dropping on fatigue .',
            challengePoints:'',
            solution:'Veract developed a homegrown AI based visual inspection application to improve efficiency and prevent downstream issues of part rejections and recalls. The cost effective nature of the solution made it a winner all the way for the manufacturer!',
            solutionPoints:'',
            services:'Software architecture consulting Software development Deployment',
            platform:'Web application',
            techstack:' Python,keras,Tensor flow,Pytorch',
            name: "",
            designation: "",
            company: "",
            clientSpeak:""
        },
        {
            id:'content7',
            caseTitle:' Credit risk assessment and risk profiling ',
            caseTitleContent:'Northern Arc Capital is a platform in the financial services sector set up primarily with the mission of catering to the diverse credit requirements of under-served households and businesses.',
            stampImage: "",
            caseImage:'portfolio/fintechPurple.png',
            challenges:'Northern arc needed a team with financial domain and technical expertise to build their investor portal. They had the need to mitigate risk profile, risk analytics etc',
            challengePoints:' ',
            solution:'Veract combined its financial domain expertise with core development skills and deployed risk profiling in their investor tracking portal',
            solutionPoints:'',
            services:'Software architecture consulting Software development Deployment',
            platform:'Web application',
            techstack:'Angular,Springboot,Postgres,Kibana,Elastic search,Node js',
            name: "",
            designation: "",
            company: "",
            clientSpeak:""
        },
        
        
        
       
    ]
    const [manufacturingColor_1, setManufacturingColor_1] = useState('#7f7f7f');
    const [manufacturingImage_1, setManufacturingImage_1] = useState('/dashboard/manufacturingGrey.png');
    const [manufacturingColor_2, setManufacturingColor_2] = useState('#7f7f7f');
    const [manufacturingImage_2, setManufacturingImage_2] = useState('/dashboard/manufacturingGrey.png');
    const [wellnessColor, setWellnessColor] = useState('white');
    const [wellnessImage, setWellnessImage] = useState('/dashboard/wellnessWhite.png');
    const [salesColor, setSalesColor] = useState('#7f7f7f');
    const [salesImage, setSalesImage] = useState('/dashboard/salesGrey.png');
    const [agriColor, setAgriColor] = useState('#7f7f7f');
    const [agriImage, setAgriImage] = useState('/dashboard/agriGrey.png');
    const [hrColor, setHrColor] = useState('#7f7f7f');
    const [hrImage, setHrImage] = useState('/dashboard/hrGrey.png');
    const [finColor, setFinColor] = useState('#7f7f7f');
    const [finImage, setFinImage] = useState('/dashboard/finGrey.png');
    const section1=()=>{

        window.scrollY === 0  || window.scrollY < 1400  ? setWellnessColor("white"): setWellnessColor("#7f7f7f");
        window.scrollY < 1400  || window.scrollY === 0  ? setWellnessImage('/dashboard/wellnessWhite.png'): setWellnessImage('/dashboard/wellnessGrey.png');

        window.scrollY >= 1400 && window.scrollY < 3000  ? setSalesColor("white"): setSalesColor("#7f7f7f");
        window.scrollY >= 1400 && window.scrollY < 3000  ? setSalesImage("/dashboard/salesWhite.png"): setSalesImage("/dashboard/salesGrey.png");

        window.scrollY > 3000 && window.scrollY <= 3800 ? setManufacturingColor_1("white"): setManufacturingColor_1("#7f7f7f");
        window.scrollY > 3000 && window.scrollY <= 3800 ? setManufacturingImage_1("/dashboard/manufacturingWhite.png"): setManufacturingImage_1("/dashboard/manufacturingGrey.png");

        window.scrollY > 3000 && window.scrollY <= 3800 ? setManufacturingColor_2("white"): setManufacturingColor_2("#7f7f7f");
        window.scrollY > 3000 && window.scrollY <= 3800 ? setManufacturingImage_2("/dashboard/manufacturingWhite.png"): setManufacturingImage_2("/dashboard/manufacturingGrey.png");

        // window.scrollY >= 1400  && window.scrollY <3000  ? setWellnessColor("white"): setWellnessColor("#7f7f7f");
        // window.scrollY >= 1400  && window.scrollY <3000  ? setWellnessImage('/dashboard/wellnessWhite.png'): setWellnessImage('/dashboard/wellnessGrey.png');

        // window.scrollY > 3000 && window.scrollY <=3800  ? setSalesColor("white"): setSalesColor("#7f7f7f");
        // window.scrollY > 3000 && window.scrollY <=3800  ? setSalesImage("/dashboard/salesWhite.png"): setSalesImage("/dashboard/salesGrey.png");

        window.scrollY > 3800 && window.scrollY <=4500   ? setAgriColor("white"): setAgriColor("#7f7f7f");
        window.scrollY > 3800 && window.scrollY <=4500   ? setAgriImage("/dashboard/agriWhite.png"): setAgriImage("/dashboard/agriGrey.png");

        window.scrollY > 4500 && window.scrollY <=5200   ? setHrColor("white"): setHrColor("#7f7f7f");
        window.scrollY > 4500 && window.scrollY <=5200   ? setHrImage("/dashboard/hrWhite.png"): setHrImage("/dashboard/hrGrey.png");

        window.scrollY > 5200   ? setFinColor("white"): setFinColor("#7f7f7f");
        window.scrollY > 5200   ? setFinImage("/dashboard/finWhite.png"): setFinImage("/dashboard/finGrey.png");
    }
    useEffect(()=>{
        window.addEventListener("scroll",section1);
    })

    
    return(
        <div>

            <div className="mobileCaseStudy">
            <div id="portfolioDetails" className='fontFamily'>
                    <div className='caseDetails_mobile'>
                        <div className='caseHeader_mobile'>                                
                                <div className='caseHeaderTitle_mobile flex flex-wrap pl-5'>Machine Vision for Manufacturing Quality Control</div>
                                <div className='caseHeaderIcon_mobile pt-5 pb-11 pl-5'>A sheet metal pressings manufacturing company.</div>

                        </div>
                        <div className='ChallengeSolutionContainer_mobile'>
                            <div className='ChallengeContainer_mobile'>    
                                <div className="challenges_mobile">Challenges</div>
                                <div className='challengesContent_mobile'>The components require intricate visual inspection  on parts with throughput over</div>
                                <div className='flex flex-col pt-6'>
                                        <div className='challengePoints_mobile'> 5 Million pcs/month.</div>
                                        <div className='challengePoints_mobile'>Manual inspection was tedious.</div>
                                        <div className='challengePoints_mobile'>Dropping accuracy levels on fatigue. </div>
                                </div>
                            </div>
                            <div className='ChallengeContainer_mobile'>
                                <div className="challenges_mobile">Solution</div>
                                <div className='challengesContent_mobile'>Veract developed a homegrown AI based visual inspection application to improve efficiency and prevent downstream issues of part rejections and recalls. The cost effective nature of the solution made it a winner all the way for the manufacturer!</div>
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
                                    <div className='techText_mobile pb-3'>Python</div>
                                    <div className='techText_mobile pb-3'>Keras</div>
                                    <div className='techText_mobile pb-3'>Tensor flow</div>
                                    <div className='techText_mobile pb-3'>Pytorch</div>
                                    </div>     
                                </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                </div>   
            {/* <div id="portfolioDetails" className='fontFamily'>
                    <div className='caseDetails_mobile'>
                        <div className='caseHeader_mobile'>
                                <div className="pt-15">
                                <div className='caseHeaderTitle_mobile pl-5 pt-20'>Machine vision for manufacturing quality control</div>
                                </div>
                                <div className='caseHeaderIcon_mobile pt-11 pb-11 pl-2'>A sheet metal pressings manufacturing company.</div>

                        </div>
                        <div className='ChallengeSolutionContainer_mobile'>
                            <div className='ChallengeContainer_mobile'>    
                                <div className="challenges_mobile">Challenges</div>
                                <div className='challengesContent_mobile'>The components require intricate visual inspection  on parts with throughput over</div>
                                <div className='flex flex-col pt-6'>
                                        <div className='challengePoints_mobile'>5 Million pcs/month.</div>
                                        <div className='challengePoints_mobile'>Manual inspection was tedious.</div>
                                        <div className='challengePoints_mobile'>Dropping accuracy levels on fatigue.</div>
                                </div>
                            </div>
                            <div className='ChallengeContainer_mobile'>
                                <div className="challenges_mobile">Solution</div>
                                <div className='challengesContent_mobile'>Veract developed a homegrown AI based visual inspection application to improve efficiency and prevent downstream issues of part rejections and recalls. The cost effective nature of the solution made it a winner all the way for the manufacturer!</div>
                                <div className='solutionPoints_mobile pt-5'></div>
                                <div className='solutionPoints_mobile'></div>
                                <div className='solutionPoints_mobile'></div>
                            </div>
                        </div>
                        <div className='BottomContainer_mobile pt-10'>
                            <div className='mainContainer'>
                                <div className='serviceContainer_mobile'>
                                    <div className='ServiceImage'><img src="caseStudies/vehicle.png" className='w-16'/></div>
                                    <div className='serviceHeader_mobile pt-2'>Services</div>
                                    <div className='serviceText_mobile pt-2'>Software architecture consulting </div>
                                    <div className='serviceText_mobile pt-2'>Software development</div>
                                    <div className='serviceText_mobile pt-2'>Deployment</div>
                                </div>
                                <div className='platformContainer_mobile'>
                                    <div className='ServiceImage'><img src="caseStudies/web.png" className='w-16'/></div>
                                    <div className='serviceHeader_mobile pt-2'>Platform</div>
                                    <div className='PlatformText_mobile pt-2'>Mobile and Web application</div>
                                    
                                </div>
                            </div>
                        </div> 
                        <div className="pt-10">
                            <div className="techstackContainer_mobile pt-5">
                                    <div className='techImageTitle '>
                                        <div className='ServiceImage'><img src="caseStudies/tech-service.png" className='w-16 pt-1'/></div>
                                        <div className='serviceHeader_mobile pt-2'>Techstack</div>
                                    </div>
                                    <div  className='techContent_mobile'>    
                                        <div className='techText_mobile'>Python</div>
                                        <div className='techText_mobile'>Keras</div>
                                        <div className='techText_mobile'>Tensor flow</div>
                                        <div className='techText_mobile'>Pytorch</div>
                                </div>
                            </div>
                        </div>
                        <div className='testimonialContainer'>
                            <div className='clientContainer md:gap-4'>
                            <div className='flex pt-2 flex-row md:gap-3'>
                            </div>
                            </div>
                        </div>
                        
                        <hr className='separatorPortfolio'></hr> 
                    </div>  
                    
                </div> */}
            </div>
        </div>
    )
}