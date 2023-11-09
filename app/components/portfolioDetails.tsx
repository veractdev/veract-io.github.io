'use client';
import React, { useState, useEffect } from 'react';


import DashboardDetails from './dashboardPortfolio';

import '../styles/styles.css';
import '../styles/mediaQuery.css'
import '../styles/testimonials.css';
import { usePathname, useSearchParams,useRouter } from 'next/navigation'

export default function PortfolioDetails(){

    const router = useRouter();
    const searchParams = useSearchParams()
    console.log(searchParams?.get("id"));
    let section = searchParams?.get("id") ?? "";

    useEffect(() => {
        if (section) {
            console.log(section);
          const targetSection = section;
    
          if (typeof targetSection === 'string') {
            const sectionElement = document.getElementById(targetSection);
    
            if (sectionElement) {
              sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
          window.history.replaceState(null, '', '/CaseStudyPage')

        }
      }, []);
 
    const scrollToSection = (sectionId:string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        if(section) {

        }
      };
    
      const handleMenuClick = (sectionId:string) => {
        scrollToSection(sectionId);
      };
    

    const portfolio=[
        {
            id:'content1',
            caseTitle:'Health and Wellness Web and Mobile App',
            caseTitleContent:'Anyo is a health and wellness app that addresses the significant issue of mental health.',
            stampImage: "",
            caseImage:'/portfolio/wellnessPurple.png',
            challenges:'The founders of Anyo were looking for a one-stop shop for technical advice and development for their live chat-enabled platform with streaming audio, video along with chatbots.',
            challengePoints:'',
            solution:"Within five months, Veract's team of architects and developers created their four online portals and the Anyo mobile app making crucial choices on architecture, framework etc",
            solutionPoints:'',
            services:'Software architecture, Technology consulting, Software development, Deployment',
            platform:'Mobile, Web ',
            techstack:'Flutter, Angular, LoopBack, MongoDB, Elasticsearch',
            name: "",
            designation: "",
            company: "",
            clientSpeak:"",
            seperator: <hr className='separatorPortfolio'></hr>
        },
        {
            id:'content2',
            caseTitle:'Sales Enquiry and Quote Management',
            caseTitleContent:'Rajdeep is a pune-based distributor of industrial products with multiple principals, multiple products, in multiple locations.',
            stampImage: "",
            caseImage:'/portfolio/salesPurple.png',
            challenges:"Salesman attrition, inconsistent data, quotation production and reporting were the client's pain concerns. Customer was searching for a solution that would operate with SAP integration and fit into their usual routine. On top is the complete offline functionality due to poor network connectivity phases.",
            challengePoints:'',
            solution:'Veract created a mobile and online application that seamlessly integrated with the customers existing software.',
            solutionPoints:'',
            services:'Software architecture, Technology consulting, Software development, Deployment',
            platform:'Mobile,Web',
            techstack:'Redis,Bootstrap,Express.js,IndexedDB,MongoDB,Google APIs,jQuery',
            name: "ANAND SHAH",
            designation: "DIRECTOR",
            company: "RAJDEEP INDUSTRIAL PRODUCTS",
            clientSpeak:"Excellent prompt support in spite of remote location.",
            seperator: <hr className='separatorPortfolio'></hr>
        },
        {
            id:'content3',
            caseTitle:'Machine Vision for Manufacturing Quality Control',
            caseTitleContent:'A sheet metal pressings manufacturing company.',
            stampImage: "/portfolio/artificial-intelligence.png",
            caseImage:'factoryCase.png',
            challenges:'Over 5 million pieces of parts must go through a comprehensive visual inspection each month. Hand inspection was tedious and, as inspector fatigue set in, accuracy levels dropped',
            challengePoints:'',
            solution:"Veract created a proprietary AI-powered visual inspection tool to increase productivity and stop problems with part rejections and recalls later on. For the manufacturer, the solution was a complete success due to its cost-effectiveness.",
            solutionPoints:'',
            services:'Software architecture, Technology consulting, Software development, Deployment, End to end vision systems',
            platform:'Web',
            techstack:'Python, Keras, TensorFlow, PyTorch',
            name: "",
            designation: "",
            company: "",
            clientSpeak:"",
            seperator: <hr className='separatorPortfolio'></hr>
        },
        {
            id:'content4',
            caseTitle:'Quality Documentation for Metal Foundry',
            caseTitleContent:'An automated quality report generation system was needed by the Grey Iron and Ductile Iron Foundry in order to submit reports to customers.',
            stampImage: "",
            // caseImage:'portfolio/fintechPurple.png',
            challenges:'Submission of parts necessitates the submission of high-quality documentation on spectrometer readings, pouring properties, mould properties and sand properties.',
            challengePoints:' ',
            solution:'A one-stop shop that combines machine maintenance, defect prediction, CAPA follow-up, test certificate and other quality documents.',
            solutionPoints:'',
            services:'Software architecture, Technology consulting, Software development, Deployment',
            platform:'Web',
            techstack:'Bootstrap,Express.js,jQuery,MongoDB,Redis,IndexedDB,Google APIs',
            name: "",
            designation: "",
            company: "",
            clientSpeak:"",
            seperator: <hr className='separatorPortfolio'></hr>
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
        //     techstack:' Bootstrap,Redis,Express.js,Indexeddb,Jquery,Google API,MongoDB',
        //     name: "",
        //     designation: "",
        //     company: "",
        //     clientSpeak:""
        // },
        {
            id:'content5',
            caseTitle:'Agriculture Finance Ecosystem Web Application ',
            caseTitleContent:'Agrosperity KiVi is a phygital platform that makes it easy for farmers and other rural and agribusiness owners to obtain funds quickly and effectively.',
            stampImage: "",
            caseImage:'/portfolio/agriPurple.png',
            challenges:'Kivi was seeking a development partner to fully assume responsibility for the design, development and implementation of Vision to text, Map interfaces for loan eligibility data, loan documents automation, dashboards with multiple authentication levels',
            challengePoints:'',
            solution:'Veract architects set up the platform and assumed complete ownership of the product and made critical choices of architecture, framework to enable rapid development.',
            solutionPoints:'',
            services:'Software architecture, Technology consulting, Software development, Deployment',
            platform:'web',
            techstack:' Java,Spring Boot,PostgreSQL,Nginx,Kafka,Elasticsearch,Google APIs,CI/CD,Angular,Kibana',
            name: "Salil Nair",
            designation: "CTO",
            company: "Agrosperity Tech Solutions",
            clientSpeak:"We engaged with Veract team from an early stage and they helped build out our 'KiViStar' App from basic day one concept. Their choice of architecture, framework and ability to deliver the product helped us go to market quickly. This helped us focus on our core work.",
            seperator: <hr className='separatorPortfolio'></hr>
        },
        // {
        //     id:'content6',
        //     caseTitle:'Machine vision for manufacturing quality control',
        //     caseTitleContent:'A sheet metal pressings manufacturing company.',
        //     stampImage: "",
        //     caseImage:'/portfolio/hrPurple.png',
        //     challenges:'The components require intricate visual inspection on parts with throughput over 5 Million pcs/month. Manual inspection was tedious and accuracy was dropping on fatigue .',
        //     challengePoints:'',
        //     solution:'Veract developed a homegrown AI based visual inspection application to improve efficiency and prevent downstream issues of part rejections and recalls. The cost effective nature of the solution made it a winner all the way for the manufacturer!',
        //     solutionPoints:'',
        //     services:'Software architecture consulting Software development Deployment',
        //     platform:'Web application',
        //     techstack:' Python,keras,Tensor flow,Pytorch',
        //     name: "",
        //     designation: "",
        //     company: "",
        //     clientSpeak:""
        // },
        {
            id:'content6',
            caseTitle:' Credit Risk Assessment and Risk Profiling ',
            caseTitleContent:'Northern Arc Capital is a financial services platform that was established primarily to meet various credit needs of businesses and households that are underserved.',
            stampImage: "",
            caseImage:'/portfolio/fintechPurple.png',
            challenges:'For the construction of their investor portal, Northern Arc Capital required a team with technical and financial domain experience. They needed to reduce risk by using risk analytics, risk profiles, etc.',
            challengePoints:' ',
            solution:'Veract implemented risk profiling in their investor tracking portal by fusing their core development skills with their expertise in financial domain.',
            solutionPoints:'',
            services:'Software architecture, Technology consulting, Software development, Deployment',
            platform:'Web',
            techstack:'Angular,Spring Boot,PostgreSQL,Kibana,Elasticsearch,Node.js',
            name: "",
            designation: "",
            company: "",
            clientSpeak:"",
            seperator: <div className="pb-16"></div>
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

        window.scrollY >= 1400 && window.scrollY < 2600 ? setSalesColor("white"): setSalesColor("#7f7f7f");
        window.scrollY >= 1400 && window.scrollY < 2600  ? setSalesImage("/dashboard/salesWhite.png"): setSalesImage("/dashboard/salesGrey.png");

        window.scrollY >= 2800 && window.scrollY <= 3600 ? setManufacturingColor_1("white"): setManufacturingColor_1("#7f7f7f");
        window.scrollY >= 2800 && window.scrollY <= 3600 ? setManufacturingImage_1("/dashboard/manufacturingWhite.png"): setManufacturingImage_1("/dashboard/manufacturingGrey.png");

        window.scrollY > 3800 && window.scrollY <= 4500 ? setManufacturingColor_2("white"): setManufacturingColor_2("#7f7f7f");
        window.scrollY > 3800 && window.scrollY <= 4500 ? setManufacturingImage_2("/dashboard/manufacturingWhite.png"): setManufacturingImage_2("/dashboard/manufacturingGrey.png");

        // window.scrollY >= 1400  && window.scrollY <3000  ? setWellnessColor("white"): setWellnessColor("#7f7f7f");
        // window.scrollY >= 1400  && window.scrollY <3000  ? setWellnessImage('/dashboard/wellnessWhite.png'): setWellnessImage('/dashboard/wellnessGrey.png');

        // window.scrollY > 3000 && window.scrollY <=3800  ? setSalesColor("white"): setSalesColor("#7f7f7f");
        // window.scrollY > 3000 && window.scrollY <=3800  ? setSalesImage("/dashboard/salesWhite.png"): setSalesImage("/dashboard/salesGrey.png");

        window.scrollY > 4500 && window.scrollY <=5100   ? setAgriColor("white"): setAgriColor("#7f7f7f");
        window.scrollY > 4500 && window.scrollY <=5100   ? setAgriImage("/dashboard/agriWhite.png"): setAgriImage("/dashboard/agriGrey.png");

        // window.scrollY > 4500 && window.scrollY <=5200   ? setHrColor("white"): setHrColor("#7f7f7f");
        // window.scrollY > 4500 && window.scrollY <=5200   ? setHrImage("/dashboard/hrWhite.png"): setHrImage("/dashboard/hrGrey.png");

        window.scrollY > 5300   ? setFinColor("white"): setFinColor("#7f7f7f");
        window.scrollY > 5300   ? setFinImage("/dashboard/finWhite.png"): setFinImage("/dashboard/finGrey.png");
    }
    useEffect(()=>{
        window.addEventListener("scroll",section1);
    })

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const container = document.getElementById('container'); // Replace 'container' with your element's ID
          const threshold = 100; // Adjust the scroll threshold as needed
    
          if (container) {
            container.style.top = scrollY > threshold ? '77px' : '147px'; // Adjust the desired heights
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  


    return(
        <div>
            <div className="desktopCaseStudy">
                <div id="portfolioDetails" className='fontFamily'>
                    <div className='dashboard' id="container" style={{overflow: "auto"}}>
                        <div className='menuDetails'>
                            <div className='menuRowDetails' onClick={() =>handleMenuClick('content1')}>
                                <div><img src={wellnessImage} className="w-8"/></div>
                                <div style={{color:wellnessColor}} className='flex items-center'>Wellness</div>
                            </div>
                            <div className='menuRowDetails' onClick={() =>handleMenuClick('content2')}>
                                <div><img src={salesImage} className="w-8"/></div>
                                <div style={{color:salesColor}} className='flex items-center'>Sales</div>
                            </div>
                            <div className='menuRowDetails ' onClick={() =>handleMenuClick('content3')}>
                            
                                <div><img src={manufacturingImage_1} className="w-8"/></div>
                                <div style={{color:manufacturingColor_1}} className='flex items-center'>Machine Vision</div>
                                
                            </div>
                            <div className='menuRowDetails ' onClick={() =>handleMenuClick('content4')}>
                            
                                <div><img src={manufacturingImage_2} className="w-8"/></div>
                                <div style={{color:manufacturingColor_2}} className='flex items-center'>Manufacturing</div>
                                
                            </div>
                            <div className='menuRowDetails'onClick={() =>handleMenuClick('content5')}>
                                <div><img src={agriImage} className="w-8"/></div>
                                <div style={{color:agriColor}} className='flex items-center'>Agri Tech</div>
                            </div>
                            <div className='menuRowDetails' onClick={() =>handleMenuClick('content6')}>
                                <div><img src={finImage} className="w-8"/></div>
                                <div style={{color:finColor}}className='flex items-center'>Fin Tech</div>
                            </div>
                        </div>
                    </div>
                    {portfolio.map((item)=>(
                        //  id={item.id}
                        <section key={item.id} id={item.id} >
                        <div className='caseDetails' id={item.id} >
                        <div className='caseHeader'>
                            <div className='caseHeaderIconContent pt-12'> 
                                <div className="flex flex-row-reverse">
                                </div>
                                <div className='caseHeaderTitle'>{item.caseTitle} </div>
                                <div className='caseHeaderIcon'>{item.caseTitleContent}</div>
                            </div>
                                <div className='caseHeaderContent pt-11'><img src={item.caseImage} className='w-24 pt-5'/></div>
                        </div>
                        <div className='ChallengeSolutionContainer'>
                            <div className='ChallengeContainer'>    
                                <div className="challenges">Challenges</div>
                                <div className='challengesContent'>{item.challenges}</div>
                                <div className='flex flex-col pt-6'>
                                    {item.challengePoints.split(',').map((challenge,index)=>(
                                        <div key={index} className='challengePoints'>{challenge}</div>
                                    ))}
                                </div>
                            </div>
                            <div className='ChallengeContainer'>
                                <div className="challenges">Solution</div>
                                <div className='challengesContent'>{item.solution} </div>
                                <div className='flex flex-col pt-6'>
                                    {item.solutionPoints.split(',').map((solution,index)=>(
                                        <div key={index} className='solutionPoints'>{solution}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='BottomContainer'>
                            <div className='mainContainer'>
                                <div className='serviceContainer'>
                                    <div className='ServiceImage'><img src="caseStudies/vehicle.png" className='w-16'/></div>
                                    <div className='serviceHeader'>Services</div>
                                    <div className='flex flex-col'>
                                    {item.services.split(',').map((service,index)=>(
                                        <div key={index} className='challengePoints'>{service}</div>
                                    ))}
                                    </div>
                                    {/* <div className='serviceText'>Software architecture consulting </div>
                                    <div className='serviceText'>Software development</div>
                                    <div className='serviceText'>Deployment</div> */}
                                    {/* <div className='serviceUsed flex flex-col'>
                                    {item.services.split(',').map((service,index)=>(
                                        <div key={index} className='serviceText' >{service}</div>
                                    ))}
                                    </div> */}
                                </div>
                                <div className='platformContainer'>
                                    <div className='ServiceImage pt-12'><img src="caseStudies/web.png" className='w-16'/></div>
                                    <div className='serviceHeader'>Platform</div>
                                    
                                    {item.platform.split(',').map((temp,index)=>(
                                
                                        <div className='PlatformText'>{temp}</div> 
                            
                                    ))}
                                </div>
                            </div>
                            <div className="techstackContainer">
                                <div className='techImageTitle '>
                                    <div className='ServiceImage'><img src="caseStudies/tech-service.png" className='w-16 pt-1'/></div>
                                    <div className='serviceHeader'>Techstack</div>
                                </div>
                                <div  className='techContent '>
                                {item.techstack.split(',').map((stack,index)=>(
                                
                                    <div key={index} className='techText'>{stack}</div>
                                
                                ))}
                                </div>
                            </div>
                        </div>
                        {item.id === "content2" && (
                            <div className='flex items-center justify-center'>
                                <img src="/output/sales.png" className=''/>
                            </div>
                        
                        )}
                        {item.id === "content1" && (
                            <div className='flex items-center justify-center'>
                                <img src="/output/anyoFinalOutput.png" className=''/>
                            </div>
                        
                        )}
                         
                         {item.clientSpeak?.length !== 0 && (
                        <div className='testimonialContainer'>
                            {/* <div className='engagementContainer'>
                                <div className="challenges">Phase of Engagement</div>
                                <div className='challengesContent flex items-center justify-center'>Growth</div>
                            </div> */}
                            <div className='clientContainer md:gap-4'>
                            <div className='flex pt-2'>
                                <div className="challenges">Clients Speak</div>
                            </div>
                            <div className='flex pt-2 flex-row md:gap-3'>
                                <div className=""><i className="quotes"></i></div>
                                <div className='flex items-center'><span className='title whitespace-nowrap'>{item.name} - {item.designation}, </span><span className='title highlight '>{item.company}</span></div>
                            </div>
                            {/* <div className="challengesContent">We engaged with Veract team from an early stage and they helped build out our 'KiViStar' App from basic day one concept. Their choice of architecture, framework and ability to deliver the product helped us go to market quickly. This helped us focus on our core work.  The team at Veract developed software like their own product! We continue to engage with Veract for our technical development requirements.</div> */}
                            <div className="challengesContent pl-2 pr-2 flex-wrap pb-2">{item.clientSpeak}</div>
                            </div>
                        </div>
                        )}
                        
                        {item.seperator}
                        {/* <hr className='separatorPortfolio'></hr> */}
                    </div>  
                    </section>
                    ))} 
                    
                </div>
            </div>
           
           
            <div className="mobileCaseStudy">
             <div id="portfolioDetails" className='fontFamily'>
                    {portfolio.map((item)=>(
                    <div key ={item.id} className='caseDetails_mobile' id={item.id}>
                        <div className='caseHeader_mobile'>                                
                                <div className='caseHeaderTitle_mobile flex flex-wrap pl-5'>{item.caseTitle} </div>
                                <div className='caseHeaderIcon_mobile pt-5 pb-11 pl-5'>{item.caseTitleContent}</div>

                        </div>
                        <div className='ChallengeSolutionContainer_mobile'>
                            <div className='ChallengeContainer_mobile'>    
                                <div className="challenges_mobile">Challenges</div>
                                <div className='challengesContent_mobile'>{item.challenges}</div>
                                <div className='flex flex-col pt-6'>
                                    {item.challengePoints.split(',').map((challenge,index)=>(
                                        <div key={index} className='challengePoints_mobile'>{challenge}</div>
                                    ))}
                                </div>
                            </div>
                            <div className='ChallengeContainer_mobile'>
                                <div className="challenges_mobile">Solution</div>
                                <div className='challengesContent_mobile'>{item.solution} </div>
                                <div className='flex flex-col pt-6'>
                                    {item.solutionPoints.split(',').map((solution,index)=>(
                                        <div key={index} className='solutionPoints_mobile'>{solution}</div>
                                    ))}
                                </div>
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
                                    <div className='PlatformText_mobile pt-2'>Mobile</div>
                                    <div className='PlatformText_mobile pt-2'>and</div>
                                    <div className='PlatformText_mobile pt-2'>Web applications</div>
                                </div>
                            </div>
                        </div> 
                        <div className="pt-2.5 pl-5 pr-5 pb-10">
                            <div className="techstackContainer_mobile">
                                    <div className='techImageTitle_mobile pl-20 pr-20'>
                                        <div className='ServiceImage'><img src="caseStudies/tech-service.png" className='w-16 pt-1'/></div>
                                        <div className='serviceHeader_mobile pt-2'>Techstack</div>
                                    </div>
                                <div  className='techContent_mobile'>
                                    {item.techstack.split(',').map((stack,index)=>(
                                    
                                        <div key={index} className='techText_mobile'>{stack}</div>
                                    
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="pb-5">
                            {item.clientSpeak?.length !== 0 && (
                            <div className='testimonialContainer_mobile'>
                                <div className='clientContainer md:gap-4'>
                                <div className='flex pt-2'>
                                    <div className="challenges_mobile">Clients Speak</div>
                                </div>
                                <div className='flex pt-2 flex-col md:gap-3'>
                                    <div className="pb-5"><i className="quotes"></i></div>
                                    <div className='flex flex-col items-center pb-5'>
                                        <div className='title_mobile whitespace-nowrap'>{item.name} - {item.designation}, </div>
                                        <div className='title_mobile highlight pl-3'>{item.company}</div>
                                    </div>
                                </div>
                                <div className="challengesContent_mobile pl-2 pr-2 flex-wrap pb-2">{item.clientSpeak}</div>
                                </div>
                            </div>
                            )}
                        </div>
                        
                        {item.id === "content2" && (
                            <div className="pl-5">
                                <div className='flex items-center justify-center'>
                                    <img src="/output/sales.png" className=''/>
                                </div>
                            </div>
                            
                        
                        )}
                        {item.id === "content1" && (
                            <div className="pl-5">
                                <div className='flex items-center justify-center'>
                                    <img src="/output/anyoFinalOutput.png" className=''/>
                                </div>
                            </div>
                        )}
                        
                        {/* {item.seperator} */}
                        {/* <hr className='separatorPortfolio'></hr>  */}
                    </div>  
                    ))} 
                    
                </div>
            </div>
        </div>
    )
}