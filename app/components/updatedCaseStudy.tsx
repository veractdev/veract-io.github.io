'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import '../styles/styles.css';
import '../styles/mediaQuery.css'
import '../styles/testimonials.css';

export default function UpdatedCaseStudy() {

    const router = useRouter();
    const searchParams = useSearchParams();

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [selectedTab, setSelectedTab] = useState<number>();
    const [showsite,setShowSite]=useState(true);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        console.log(section, "section to scroll");
        if (section) {
            section.scrollIntoView();
        }
    };
    const handleMenuClick = (sectionId: string) => {
        const removePrefix = sectionId.replace('content', '');
        const parseToInt = parseInt(removePrefix, 10);
        setSelectedTab(parseToInt);
        scrollToSection(sectionId);
    };
    const sideNavDetails = [
        {
            id: 'content1',
            title: 'Ed Tech',
            titleImage: '/updatedCaseStudiesIcon/edTech.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/edTechSelected.svg',
            hasAi: true,
        },
        {
            id: 'content2',
            title: 'Machine Vision',
            titleImage: '/updatedCaseStudiesIcon/machinVision.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/machineVisionSelected.svg',
            hasAi: true,
        },
        {
            id: 'content3',
            title: 'Wellness',
            titleImage: '/updatedCaseStudiesIcon/wellness.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/wellnessSelected.svg',
            hasAi: false,
        },
        {
            id: 'content4',
            title: 'Industry Platform',
            titleImage: '/updatedCaseStudiesIcon/social.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/socialSelected.svg',
            hasAi: false,
        },
        {
            id: 'content5',
            title: 'Manufacturing',
            titleImage: '/updatedCaseStudiesIcon/manufacturring.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/manufacturingSelected.svg',
            hasAi: false,
        },
        {
            id: 'content6',
            title: 'Agri Tech',
            titleImage: '/updatedCaseStudiesIcon/agriTech.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/agriTechSelected.svg',
            hasAi: false,
        },
        {
            id: 'content7',
            title: 'E-Commerce',
            titleImage: '/updatedCaseStudiesIcon/eCom.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/eComSelected.svg',
            hasAi: false,
        },
        {
            id: 'content8',
            title: 'Sales',
            titleImage: '/updatedCaseStudiesIcon/sales.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/salesSelected.svg',
            hasAi: false,
        },
        {
            id: 'content9',
            title: 'Audit',
            titleImage: '/updatedCaseStudiesIcon/audit.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/auditSelected.svg',
            hasAi: true,
        },
        {
            id: 'content10',
            title: 'Fin Tech',
            titleImage: '/updatedCaseStudiesIcon/finTech.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/finTechSelected.svg',
            hasAi: false,
        },
    ];
    const portfolio = [
        {
            id: 'content1',
            caseTitle: ' AI-enabled Edtech platform',
            caseTitleContent: 'Evolve is an edtech platform that revolutionizes augmented learning',
            stampImage: "",
            caseImage: '/portfolio/edTechCaseImage.png',
            challenges: 'A custom-built, voice-to-text enabled personalized AI coach',
            challengePoints: ' ',
            solution: 'Veract team designed and Developed a desktop app with integrated voice-to-text functionality.Implemented noise cancellation features.Included chat capabilities.',
            solutionPoints: '',
            services: 'Software architecture, Technology consulting,Front end development,Back end development,Deployment',
            platform: 'Desktop application',
            techstack: 'Next JS,Electron,NodeJS,MongoDB,Express,Elastic Search',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>,
            referenceImage: [
                // {
                //     id: 1,
                //     image: '/output/portfolio_one.svg',
                // }
                {
                    id: 1,
                    image: '/updatedCaseStudiesIcon/evollveFinal.svg',
                }
            ]
        },
        {
            id: 'content2',
            caseTitle: 'Machine Vision for Manufacturing Quality Control',
            caseTitleContent: 'A sheet metal pressings manufacturing company.',
            stampImage: "/portfolio/artificial-intelligence.png",
            caseImage: '/factoryCase.png',
            challenges: 'Over 5 million pieces of parts must go through a comprehensive visual inspection each month. Hand inspection was tedious and, as inspector fatigue set in, accuracy levels dropped',
            challengePoints: '',
            solution: "Veract created a proprietary AI-powered visual inspection tool to increase productivity and stop problems with part rejections and recalls later on. For the manufacturer, the solution was a complete success due to its cost-effectiveness.",
            solutionPoints: '',
            services: 'Software architecture, Technology consulting, Software development, Deployment, End to end vision systems',
            platform: 'Web',
            techstack: 'Python, Keras, TensorFlow, PyTorch',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>
        },
        {
            id: 'content3',
            caseTitle: 'Health and Wellness Web and Mobile App',
            caseTitleContent: 'Anyo is a health and wellness app that addresses the significant issue of mental health.',
            stampImage: "",
            caseImage: '/portfolio/wellnessPurple.png',
            challenges: 'The founders of Anyo were looking for a one-stop shop for technical advice and development for their live chat-enabled platform with streaming audio, video along with chatbots.',
            challengePoints: '',
            solution: "Within five months, Veract's team of architects and developers created their four online portals and the Anyo mobile app making crucial choices on architecture, framework etc",
            solutionPoints: '',
            services: 'Software architecture, Technology consulting, Software development, Deployment',
            platform: 'Mobile, Web ',
            techstack: 'Flutter, Angular, LoopBack, MongoDB, Elasticsearch',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>,
            referenceImage: [
                // {
                //     id: 1,
                //     image: '/output/portfolio_wellness.svg'
                // }, 
                {
                    id: 1,
                    image: '/updatedCaseStudiesIcon/anyoFinal.svg'
                },                
                {
                    id: 2,
                    image: '/output/anyo_image.svg'
                }
            ]
        },
        {
            id: 'content4',
            caseTitle: 'Social platform for the fast-growing data center businesses.',
            caseTitleContent: 'Data Center Mart is an initiative of IBITS',
            stampImage: "",
            caseImage: '/portfolio/network.png',
            challenges: 'comprehensive platform tailored for the data center industry. This site will enable users to create posts, comment, like, and share content. Additionally, it will feature a marketplace for products and services and a directory of suppliers specializing in data center solutions.',
            challengePoints: ' ',
            solution: 'Designed and deployed a web and responsive app ',
            solutionPoints: '',
            services: 'Design Software architecture,Technology consulting,Front end development,Back end development,Deployment',
            platform: 'Web application',
            techstack: 'Next JS,Node JS,Mongo DB',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>,
            referenceImage: [
                {
                    id: 1,
                    image: '/updatedCaseStudiesIcon/dcmFinal.svg'
                },
            ]
        },
        {
            id: 'content5',
            caseTitle: 'Quality Documentation for Metal Foundry',
            caseTitleContent: 'An automated quality report generation system was needed by the Grey Iron and Ductile Iron Foundry in order to submit reports to customers.',
            stampImage: "",
            caseImage: '/output/quality_documetation_logo.svg',
            challenges: 'Submission of parts necessitates the submission of high-quality documentation on spectrometer readings, pouring properties, mould properties and sand properties.',
            challengePoints: ' ',
            solution: 'A one-stop shop that combines machine maintenance, defect prediction, CAPA follow-up, test certificate and other quality documents.',
            solutionPoints: '',
            services: 'Software architecture, Technology consulting, Software development, Deployment',
            platform: 'Web',
            techstack: 'Bootstrap,Express.js,jQuery,MongoDB,Redis,IndexedDB,Google APIs',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>
        },
        {
            id: 'content6',
            caseTitle: 'Agriculture Finance Ecosystem Web Application ',
            caseTitleContent: 'Agrosperity KiVi is a phygital platform that makes it easy for farmers and other rural and agribusiness owners to obtain funds quickly and effectively.',
            stampImage: "",
            caseImage: '/portfolio/agriPurple.png',
            challenges: 'Kivi was seeking a development partner to fully assume responsibility for the design, development and implementation of Vision to text, Map interfaces for loan eligibility data, loan documents automation, dashboards with multiple authentication levels',
            challengePoints: '',
            solution: 'Veract architects set up the platform and assumed complete ownership of the product and made critical choices of architecture, framework to enable rapid development.',
            solutionPoints: '',
            services: 'Software architecture, Technology consulting, Software development, Deployment',
            platform: 'web',
            techstack: ' Java,Spring Boot,PostgreSQL,Nginx,Kafka,Elasticsearch,Google APIs,CI/CD,Angular,Kibana',
            name: "Salil Nair",
            designation: "CTO",
            company: "Agrosperity Tech Solutions",
            clientSpeak: "We engaged with Veract team from an early stage and they helped build out our 'KiViStar' App from basic day one concept. Their choice of architecture, framework and ability to deliver the product helped us go to market quickly. This helped us focus on our core work.",
            seperator: <hr className='separatorPortfolio'></hr>
        },
        {
            id: 'content7',
            caseTitle: 'E-commerce site for agricultural produce',
            caseTitleContent: 'Beanstalk operates in the exciting farm-to-table space',
            stampImage: "",
            caseImage: '/portfolio/grocery-store.png',
            challenges: 'Payment enabled E-COM site in time for customers produce season',
            challengePoints: ' ',
            solution: 'Veract team developed and deployed a payment enabled custom designed web application ',
            solutionPoints: '',
            services: 'Software architecture,Technology consulting,Front end development,Back end development ,Deployment',
            platform: 'Responsive web application',
            techstack: 'Next JS,Express,Node JS,Redis,PostgreSQL,Razorpay',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>,
            referenceImage: [
                // {
                //     id: 1,
                //     image: '/output/portfoilio_beanstalk.svg',
                // 
                            // }                
                {
                    id: 1,
                    image: '/updatedCaseStudiesIcon/beanstalkFinal.svg',
                }
            ]

        },
        {
            id: 'content8',
            caseTitle: 'Sales Enquiry and Quote Management',
            caseTitleContent: 'Rajdeep is a pune-based distributor of industrial products with multiple principals, multiple products, in multiple locations.',
            stampImage: "",
            caseImage: '/portfolio/salesPurple.png',
            challenges: "Salesman attrition, inconsistent data, quotation production and reporting were the client's pain concerns. Customer was searching for a solution that would operate with SAP integration and fit into their usual routine. On top is the complete offline functionality due to poor network connectivity phases.",
            challengePoints: '',
            solution: 'Veract created a mobile and online application that seamlessly integrated with the customers existing software.',
            solutionPoints: '',
            services: 'Software architecture, Technology consulting, Software development, Deployment',
            platform: 'Mobile,Web',
            techstack: 'Redis,Bootstrap,Express.js,IndexedDB,MongoDB,Google APIs,jQuery',
            name: "ANAND SHAH",
            designation: "DIRECTOR",
            company: "RAJDEEP INDUSTRIAL PRODUCTS",
            clientSpeak: "Excellent prompt support in spite of remote location.",
            seperator: <hr className='separatorPortfolio'></hr>,
            referenceImage: [
                {
                    id: 1,
                    image: '/updatedCaseStudiesIcon/salesFinal.svg',
                }
            ]
        },
        {
            id: 'content9',
            caseTitle: 'Data extraction for the audit industry',
            caseTitleContent: 'Financial audit firm with over 100 associates',
            stampImage: "",
            caseImage: '/portfolio/invoice.png',
            challenges: 'Audit firm looking to reduce manual data entry processes required for compliance.',
            challengePoints: ' ',
            solution: 'Veract team developed and deployed a easy to use Large language model +OCR based custom trained data extraction capablity ',
            solutionPoints: '',
            services: 'Software architecture,Technology consulting,Front end development,Back end development ,Deployment',
            platform: 'Web application',
            techstack: 'Python,Fast API,Next JS,React JS',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>
        },
        {
            id: 'content10',
            caseTitle: ' Credit Risk Assessment and Risk Profiling ',
            caseTitleContent: 'Northern Arc Capital is a financial services platform that was established primarily to meet various credit needs of businesses and households that are underserved.',
            stampImage: "",
            caseImage: '/portfolio/fintechPurple.png',
            challenges: 'For the construction of their investor portal, Northern Arc Capital required a team with technical and financial domain experience. They needed to reduce risk by using risk analytics, risk profiles, etc.',
            challengePoints: ' ',
            solution: 'Veract implemented risk profiling in their investor tracking portal by fusing their core development skills with their expertise in financial domain.',
            solutionPoints: '',
            services: 'Software architecture, Technology consulting, Software development, Deployment',
            platform: 'Web',
            techstack: 'Angular,Spring Boot,PostgreSQL,Kibana,Elasticsearch,Node.js',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <div className="pb-16"></div>
        },
    ]

    const section1 = () => {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const middlePosition = scrollPosition + windowHeight * 0.75;

        // const activeMenu = portfolio.find((item) => {
        //     const element = document.getElementById(item.id);
        //     if (element) {
        //         const elementTop = element.offsetTop;
        //         const elementBottom = elementTop + element.offsetHeight;
        //         return elementTop <= middlePosition && middlePosition <= elementBottom;
        //     }
        //     return false;
        // });
    }

    // useEffect(() => {
    //     section1();
    //     window.addEventListener("scroll", section1);
    // })

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollTop = window.scrollY;
    //         const triggerPoint = window.innerHeight * 0.05; // Adjust this value as needed
    //         setIsVisible(scrollTop > triggerPoint);
    //     };


    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = "Veract";
        const section = searchParams?.get("id") ?? "";
        console.log("from portfolio : ", section);

        if (section) {
            handleMenuClick(section);
            setSelectedTab(parseInt(section.replace('content', ''), 10)); // Set the selected tab based on the section
        } else {
            setSelectedTab(1); // Default to the first tab if no section is provided
        }

        // Delay setting isLoading to false to ensure the loader is visible
        setTimeout(() => {
            setIsLoading(false);
        }, 500); // Adjust the timeout duration as needed

        window.history.replaceState(null, '', '/updatedCaseStudy');
    }, [searchParams]);

    useEffect(() => {
        if (!isLoading && selectedTab && showsite) {
            scrollToSection(`content${selectedTab}`);
            setShowSite(false)
        }
    }, [isLoading, selectedTab]);

    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef<any>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = contentRefs.current.indexOf(entry.target);
                        setSelectedTab(index + 1);
                    }
                });
            },
            {
                root: null,
                threshold: 0.1, // Adjust threshold as needed
            }
        );

        contentRefs.current.forEach((ref: Element) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            contentRefs.current.forEach((ref: Element) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div>
            {isLoading ? (
                <div className="loader">Loading...</div> // Ensure this loader has appropriate styles
            ) : (
                <div className="desktopCaseStudy">
                    <div id="portfolioDetails" className='fontFamily'>
                        <div className={`dashboard ${isVisible ? 'h-[86.75vh]' : 'h-[74.5vh]'} overflow-auto`} id="container">
                            {sideNavDetails.map((item: any, index: any) => (
                                <div key={index} className='menuRowDetails ' onClick={() => { handleMenuClick(item.id) }}>
                                    <img src={`${selectedTab === index + 1 ? `${item.selectedTitleImage}` : `${item.titleImage}`}`} className="w-8" />
                                    <div className={`flex items-center ${selectedTab === index + 1 ? `text-white` : `text-[#7F7F7F]`}`}>{item.title}</div>
                                    {item.hasAi && (
                                        <img src='/updatedCaseStudiesIcon/aiStamp.svg' alt='' className='' />
                                    )}
                                </div>
                            ))}
                        </div>
                        {portfolio.map((item, index) => (
                            <section className='ml-[4%]' key={item.id} id={item.id} ref={(el) => {(contentRefs.current[index] = el)}}>
                                <div className={`caseDetails ${item.id === 'content1' ? 'pt-[10%]' : 'pt-[5%]'}`}>
                                    <div className='w-[95%] flex flex-col gap-[1rem] mt-[2rem] pb-[1rem]'>
                                        <div className='flex flex-row gap-[2.688rem] items-center mt-[0.5rem]'>
                                            <img src={item.caseImage} alt="" className='w-[4.563rem] aspect-square' />
                                            <div className='text-[32px] font-semibold text-[#4285f4]'>{item.caseTitle}</div>
                                        </div>
                                        <div className='text-[18px] font-normal text-black'>{item.caseTitleContent}</div>
                                    </div>
                                    <div className='w-[95%] flex flex-row justify-between'>
                                        <div className='w-[45%] p-[2rem] bg-white rounded-[26px] flex flex-col gap-[0.5rem] caseStudyContainerBoxShadow'>
                                            <div className='text-[18px] text-[#4285f4] font-semibold text-center'>Challenges</div>
                                            <div className='text-[16px] text-black font-normal'>{item.challenges}</div>
                                        </div>
                                        <div className='w-[45%] p-[2rem] bg-white rounded-[26px] flex flex-col gap-[0.5rem] caseStudyContainerBoxShadow'>
                                            <div className='text-[18px] text-[#4285f4] font-semibold text-center'>Solution</div>
                                            <div className='text-[16px] text-black font-normal'>{item.solution}</div>
                                        </div>
                                    </div>
                                    <div className='w-[95%] flex flex-row justify-between mt-[2rem]'>
                                        <div className='w-[30%] max-h-[17rem] p-[2rem] bg-white rounded-[26px] flex flex-col items-center gap-[0.5rem] caseStudyContainerBoxShadow'>
                                            <img src="/caseStudies/vehicle.png" className='w-[3.625rem] aspect-square' />
                                            <div className='text-[18px] text-[#4285f4] font-semibold text-center'>Services</div>
                                            <div className='flex flex-col'>
                                                {item.services.split(',').map((service, index) => (
                                                    <div key={index} className='text-[16px] text-black font-normal text-center'>{service}</div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='w-[30%] max-h-[17rem] p-[2rem] bg-white rounded-[26px] flex flex-col items-center gap-[0.5rem] caseStudyContainerBoxShadow'>
                                            <img src="/caseStudies/web.png" className='w-[3.625rem] aspect-square' />
                                            <div className='text-[18px] text-[#4285f4] font-semibold text-center'>Platform</div>
                                            <div className='flex flex-col gap-[0.25rem] mt-[0.25rem]'>
                                                {item.platform.split(',').map((temp) => (
                                                    <div className='PlatformText'>{temp}</div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='w-[30%] max-h-[17rem] p-[2rem] bg-white rounded-[26px] flex flex-col items-center gap-[0.5rem] caseStudyContainerBoxShadow'>
                                            <img src="/caseStudies/tech-service.png" className='w-[3.625rem] aspect-square' />
                                            <div className='text-[18px] text-[#4285f4] font-semibold text-center'>Techstack</div>
                                            <div className='flex flex-row gap-[1.25rem]'>
                                                <div className='flex flex-col gap-[0.25rem]'>
                                                    {item.techstack.split(',').slice(0, 4).map((stack, index) => (
                                                        <div key={index} className='techText text-center'>{stack}</div>
                                                    ))}
                                                </div>
                                                <div className='flex flex-col gap-[0.25rem]'>
                                                    {item.techstack.split(',').slice(4, 8).map((stack, index) => (
                                                        <div key={index} className='techText text-center'>{stack}</div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {item.clientSpeak?.length !== 0 && (
                                        <div className='testimonialContainer'>
                                            <div className='clientContainer md:gap-4'>
                                                <div className='flex pt-2'>
                                                    <div className="challenges">Clients Speak</div>
                                                </div>
                                                <div className='flex pt-2 flex-row md:gap-3'>
                                                    <div className=""><i className="quotes"></i></div>
                                                    <div className='flex items-center'><span className='title whitespace-nowrap'>{item.name} - {item.designation}, </span><span className='title highlight '>{item.company}</span></div>
                                                </div>
                                                <div className="challengesContent pl-2 pr-2 flex-wrap pb-2">{item.clientSpeak}</div>
                                            </div>
                                        </div>
                                    )}
                                    {item.referenceImage?.map((item: any, index: any) => (
                                        <div key={index} className="pl-5">
                                            <div className='flex items-center justify-center'>
                                                <img src={item.image} className='' />
                                            </div>
                                        </div>
                                    ))}
                                    {item.seperator}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
