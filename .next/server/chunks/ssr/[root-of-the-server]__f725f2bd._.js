module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/lib/custom_data.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AgentPageData": (()=>AgentPageData),
    "LandingPageData": (()=>LandingPageData),
    "baseUrl": (()=>baseUrl),
    "caseStudiesHomePageData": (()=>caseStudiesHomePageData),
    "caseStudyData": (()=>caseStudyData),
    "metadata": (()=>metadata),
    "navItems": (()=>navItems),
    "services": (()=>services)
});
const baseUrl = "https://veract-website-assets.s3.ap-south-1.amazonaws.com";
const navItems = [
    {
        id: 1,
        name: "Home",
        link: "/",
        status: "active"
    },
    {
        id: 2,
        name: "Services",
        link: "/services",
        status: "active"
    },
    {
        id: 3,
        name: "Agentic AI",
        icon: `/Images/LandingPage/Banner/Join.svg`,
        link: "/agentic-ai",
        status: "active"
    },
    {
        id: 4,
        name: "Case Studies",
        link: "/case-studies",
        status: "active"
    },
    {
        id: 5,
        name: "Blogs",
        link: "",
        status: "inactive"
    }
];
const caseStudyData = {
    "infrared-thermography": {
        id: 1,
        banner: {
            title: "Enhancing Animal Health with Thermography",
            description: "A reliable, stress-free method for monitoring livestock health and preventing disease outbreaks.",
            image: `${baseUrl}/Images/case-studies/thermal/Hero bg img.png`
        },
        showReel: {
            title: "SHOWREEL",
            video: [
                `${baseUrl}/Images/case-studies/thermal/ShowReel/web view-thermal showwreel.mp4`,
                `${baseUrl}/Images/case-studies/thermal/ShowReel/tab view-thermal showreel.mp4`,
                `${baseUrl}/Images/case-studies/thermal/ShowReel/mobile view-thermal showreel.mp4`
            ],
            youtube_url: "https://www.youtube.com/embed/SI8GxhQg_oA?si=zzuciOt549NiVPer"
        },
        description: {
            title: "A small glimpse",
            description: `
                  <div class="interFont w-full text-[1.5rem] md:text-[1.75rem] lg:text-[2.25rem] text-primary-text-50 font-extralight leading-[1.2em] tracking-[-0.04em]">
                  A thermal imaging system for
                  <span class="text-primary-text"> monitoring buffalo udder health</span> using
                  <span class="text-orange"> infrared thermography</span>
                  <span class="text-primary-text"> —</span>
                  <span class="text-primary-text-70">
                      enabling early mastitis detection, temperature analysis, and session-based tracking
                  </span>
                  with offline support and seamless integration into veterinary workflows.
                  </div>
              `
        },
        challenges: {
            title: "Challenges & Goals",
            indication_icon: "/Images/case-studies/challenges and goals-icon.svg",
            video: [
                `${baseUrl}/Images/case-studies/thermal/bottleneck video- web view.mp4`,
                `${baseUrl}/Images/case-studies/thermal/bottleneck-tab view video.mp4`,
                `${baseUrl}/Images/case-studies/thermal/bottleneck video-mobile view.mp4`
            ],
            // "",
            challenge_description: "BOTTLENECK",
            challenge_solution: "Designing an integrated system that connects thermal cameras and IoT devices to monitor",
            challenge_solution_highlighted: "livestock health with accuracy, reliability, and real-time insights.",
            solution_list: [
                {
                    id: 1,
                    title: "Capture Data Accurately"
                },
                {
                    id: 2,
                    title: "Support Timely Decisions"
                },
                {
                    id: 3,
                    title: "Improve Veterinary Efficiency"
                },
                {
                    id: 4,
                    title: "Visualize Udder Health"
                },
                {
                    id: 5,
                    title: "Ensure System Stability"
                },
                {
                    id: 6,
                    title: "Enable Seamless Communication"
                }
            ]
        },
        services: {
            title: "How we helped",
            description: `
                  <div class="lg:text-[1.875rem] md:text-[1.75rem] text-[1.5rem] text-white leading-[1.2em] lg:w-[34.375rem] md:w-[22.25rem] w-full text-center md:mb-[2.5rem] mb-[0.625rem] tracking-[-0.05em] font-semibold">
                  We built a <span class="text-primary-blue">focused solution</span> to
                  transform livestock health monitoring.
                  </div>
              `,
            service_list: [
                {
                    title: "Health Issue Detection",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/thermal/Services/Group_35986.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Enhance your brand's impact with our corporate video expertise. We create engaging content for businesses, from promotions to training materials.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[8rem]"
                },
                {
                    title: "Seamless Integration",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/thermal/Services/seamless_integration.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Ensured smooth interaction between thermal cameras, IoT devices, and software components.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[8rem]"
                },
                {
                    title: "Health Monitoring System",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/thermal/Services/health_and_monitoring.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Built a comprehensive desktop-based platform tailored for monitoring animal health efficiently.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[10rem]"
                },
                {
                    title: "Actionable Insights",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/thermal/Services/Actionable_insights.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Facilitated timely, data-backed decisions to improve overall animal well-being.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[10rem]"
                },
                {
                    title: "User Experience Focus",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/thermal/Services/Group_35985.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Delivered an intuitive interface that simplifies usage for veterinary and research teams.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[10rem]"
                }
            ]
        },
        key_features: {
            title: "KEY FEATURES",
            indication_color: "#FF7A3B",
            key_features_list: [
                {
                    number: "[01]",
                    title: "Thermal Imaging Integration",
                    img: `${baseUrl}/Images/case-studies/thermal/KeyFeatures/Customizable Interface.webp`,
                    desc: "Enables precise monitoring of temperature variations to identify early signs of health issues."
                },
                {
                    number: "[02]",
                    title: "Real-Time Data Processing",
                    img: `${baseUrl}/Images/case-studies/thermal/KeyFeatures/Seamless Web Integration.webp`,
                    desc: "Supports instant analysis and visualization of thermal data for quick decision-making."
                },
                {
                    number: "[03]",
                    title: "Camera & IoT Synchronization",
                    img: `${baseUrl}/Images/case-studies/thermal/KeyFeatures/Lightweight & Optimized Performance.webp`,
                    desc: "Seamless hardware-software integration with camera and IoT synchronization ensures consistent and accurate data flow."
                },
                {
                    number: "[04]",
                    title: "Low-Latency Data Transfer",
                    img: `${baseUrl}/Images/case-studies/thermal/KeyFeatures/Real-Time Accessibility Controls.webp`,
                    desc: "Uses reliable protocols and low-latency data transfer to ensure smooth and timely communication between components."
                },
                {
                    number: "[05]",
                    title: "User-Friendly Desktop Interface",
                    img: `${baseUrl}/Images/case-studies/thermal/KeyFeatures/Cross-Platform Compatibility.webp`,
                    desc: "A user-friendly desktop interface offers intuitive control over camera functions and thermal data visualization."
                }
            ]
        },
        testimonials: {
            testimonial: "",
            name: "",
            image: "https://picsum.photos/200/300",
            quote_image: `/Images/testimonial_quotes.svg`,
            shadow: "-1.875rem -1.25rem 62.5rem rgba(255,122,59,0.5)",
            profession: "",
            profession_at: ""
        },
        faq: {
            title: "Curious? Check our FAQs",
            faq_list: [
                {
                    id: 1,
                    title: "What is the purpose of the thermal imaging system for buffalo udders?",
                    content: "The system uses infrared thermography to non-invasively monitor buffalo udder health, enabling early detection of mastitis by identifying abnormal temperature patterns."
                },
                {
                    id: 2,
                    title: "How does infrared thermography help in mastitis detection?",
                    content: "Mastitis causes inflammation, which increases local udder temperature. Infrared cameras detect these temperature changes early, often before visible symptoms appear."
                },
                {
                    id: 3,
                    title: "Is infrared thermography system safe for the animals?",
                    content: "Yes, infrared thermography is a non-contact, radiation-free method, making it completely safe and stress-free for buffaloes."
                },
                {
                    id: 4,
                    title: "Can the system track udder health over time?",
                    content: "Absolutely. The system supports session-based tracking, allowing farmers and veterinarians to monitor temperature trends and detect issues early."
                },
                {
                    id: 5,
                    title: "Does the system require an internet connection to work?",
                    content: "The system supports offline functionality, enabling temperature analysis and data storage without a continuous internet connection."
                },
                {
                    id: 6,
                    title: "How easy is it to integrate this system into existing veterinary workflows?",
                    content: "The system is designed for seamless integration with veterinary workflows, supporting data export and compatibility with common veterinary software."
                },
                {
                    id: 7,
                    title: "What kind of temperature analysis does the system provide?",
                    content: "It offers detailed temperature mapping, highlighting hotspots and comparing readings to baseline healthy udder temperatures."
                },
                {
                    id: 8,
                    title: "Can this system reduce losses caused by mastitis?",
                    content: "Yes, by enabling early detection and treatment, it helps reduce mastitis-related production losses and improves overall herd health."
                },
                {
                    id: 9,
                    title: "Is special training required to operate the thermal imaging system?",
                    content: "The system is user-friendly with guided instructions, but basic training helps maximize accurate image capture and interpretation."
                },
                {
                    id: 10,
                    title: "What equipment is needed for this system?",
                    content: "The primary equipment includes an infrared thermal camera and software for image analysis and session tracking."
                }
            ]
        }
    },
    "accessible-web-widget": {
        id: 2,
        banner: {
            title: "Empowering Inclusive Web Experiences through Accessibility",
            description: "A seamless, customizable solution to ensure digital accessibility for users with diverse abilities.",
            image: `${baseUrl}/Images/case-studies/incluway/Incluway_hero_black patch.png`
        },
        showReel: {
            title: "SHOWREEL",
            video: [
                `${baseUrl}/Images/case-studies/incluway/ShowReel/Incluway showreel- web view.mp4`,
                `${baseUrl}/Images/case-studies/incluway/Challenges/TAblet.mp4`,
                `${baseUrl}/Images/case-studies/incluway/Challenges/Mobile.mp4`
            ],
            youtube_url: "https://www.youtube.com/embed/p22KMPdGIv0?si=yTUz-9F6k9d7gNMs"
        },
        description: {
            title: "A small glimpse",
            description: `
                  <div class="interFont w-full text-[1.5rem] md:text-[1.75rem] lg:text-[2.25rem] text-primary-text-50 font-extralight leading-[1.2em] tracking-[-0.04em]">
                  A lightweight, plug-and-play
                  <span class="text-[#009DCC]">accessibility widget</span>
                  designed to
                  <span class="text-primary-text">enhance digital experiences for users with visual, motor, and cognitive impairments.</span> Fully compliant with
                  <span class="text-primary-text">WCAG standards,</span>
                  <span class="text-primary-text-50">
                      it offers real-time personalization, cross-browser support, and performance optimization—seamlessly integrating into any website or platform with minimal setup.
                  </span>
                  </div>
              `
        },
        challenges: {
            title: "Challenges & Goals",
            indication_icon: `/Images/case-studies/incluway/Challenges/icon.svg`,
            video: [
                `${baseUrl}/Images/case-studies/incluway/Challenges/Incluway case study challenge video.mp4`,
                `${baseUrl}/Images/case-studies/incluway/Challenges/Incluway case study challenge video.mp4`,
                `${baseUrl}/Images/case-studies/incluway/Challenges/Incluway case study challenge video.mp4`
            ],
            // "",
            challenge_description: "BOTTLENECK",
            challenge_solution: "Designing an accessibility system that integrates with websites to support users—",
            challenge_solution_highlighted: "while maintaining performance, compliance, and customization.",
            solution_list: [
                {
                    id: 1,
                    title: "Ensure WCAG Compliance"
                },
                {
                    id: 2,
                    title: "Support User Personalization"
                },
                {
                    id: 3,
                    title: "Optimize for Cross-Device Compatibility"
                },
                {
                    id: 4,
                    title: "Enable Easy Integration"
                },
                {
                    id: 5,
                    title: "Maintain High Performance"
                },
                {
                    id: 6,
                    title: "Improve Web Accessibility Awareness"
                }
            ]
        },
        services: {
            title: "How we helped",
            description: `
                  <div class="lg:text-[1.875rem] md:text-[1.75rem] text-[1.5rem] text-white leading-[1.2em] lg:w-[34.375rem] md:w-[22.25rem] w-full text-center md:mb-[2.5rem] mb-[0.625rem] tracking-[-0.05em] font-semibold">
                  We built a focused solution to enhance 
                  <span class="text-primary-blue">digital accessibility</span>
                  </div>
              `,
            service_list: [
                {
                    title: "Inclusive Accessibility Features",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/incluway/Services/Inclusive_Accessibility_Features.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Offered real-time controls to support diverse accessibility needs like text resizing, contrast, screen readers, and animations.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[8rem]"
                },
                {
                    title: "Seamless Integration",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/incluway/Services/Seamless_Integration.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Developed a plug-and-play widget for fast, cross-platform website integration.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[8rem]"
                },
                {
                    title: "Widget Management System",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/incluway/Services/Widget_Management_System.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Built a modular, customizable widget with admin controls to manage display, placement, and features—no coding required.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[10rem]"
                },
                {
                    title: "Actionable Accessibility Data",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/incluway/Services/Actionable_Accessibility_Data.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Enabled tracking of usage and feature adoption to help websites enhance accessibility and inclusivity efforts effectively.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[10rem]"
                },
                {
                    title: "User-Centered Design",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/incluway/Services/markus-spiske-i_dT4tseXD8-unsplash.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Focused on clarity, simplicity, and intuitiveness to deliver an accessible experience for end-users.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[10rem]"
                }
            ]
        },
        key_features: {
            title: "KEY FEATURES",
            indication_color: "#1F8BFF",
            key_features_list: [
                {
                    number: "[01]",
                    title: "Seamless Web Integration",
                    img: `${baseUrl}/Images/case-studies/incluway/KeyFeatures/Seamless Web Integration.webp`,
                    desc: "Effortlessly integrates into any website with a single line of code, ensuring rapid deployment and minimal development effort."
                },
                {
                    number: "[02]",
                    title: "Real-Time Accessibility Controls",
                    img: `${baseUrl}/Images/case-studies/incluway/KeyFeatures/Real-Time Accessibility Controls.webp`,
                    desc: "Offers live adjustments for text size, contrast, animation toggles, and more—empowering users to personalize their browsing experience instantly."
                },
                {
                    number: "[03]",
                    title: "Cross-Platform Compatibility",
                    img: `${baseUrl}/Images/case-studies/incluway/KeyFeatures/Cross-Platform Compatibility.webp`,
                    desc: "Ensures consistent performance across all major browsers and devices, maintaining accessibility regardless of user environment."
                },
                {
                    number: "[04]",
                    title: "Lightweight & Optimized Performance",
                    img: `${baseUrl}/Images/case-studies/incluway/KeyFeatures/Lightweight & Optimized Performance.webp`,
                    desc: "Built with performance in mind, the widget loads quickly, consumes minimal resources, and doesn’t interfere with site speed or SEO."
                },
                {
                    number: "[05]",
                    title: "Customizable Interface",
                    img: `${baseUrl}/Images/case-studies/incluway/KeyFeatures/Customizable Interface.webp`,
                    desc: "Designed with modularity, allowing brands to style, position, and configure the widget to match their visual identity and user needs."
                }
            ]
        },
        testimonials: {
            testimonial: "",
            name: "",
            image: "https://picsum.photos/200/300",
            quote_image: `/Images/case-studies/incluway/Testimonials/quote.svg`,
            shadow: "-1.875rem -1.25rem 62.5rem rgba(66,133,244,1)",
            profession: "",
            profession_at: ""
        },
        faq: {
            title: "Curious? Check our FAQs",
            faq_list: [
                {
                    id: 1,
                    title: "What is the Accessibility Widget?",
                    content: "It is a lightweight, plug-and-play tool designed to enhance digital experiences for users with visual, motor, and cognitive impairments by providing real-time accessibility personalization."
                },
                {
                    id: 2,
                    title: "Is the widget compliant with accessibility standards?",
                    content: "Yes, the widget is fully compliant with WCAG 2.1 standards to ensure inclusive and accessible digital content."
                },
                {
                    id: 3,
                    title: "How easy is it to integrate the widget into my website?",
                    content: "Integration is simple and requires minimal setup. The widget is plug-and-play, compatible with all major browsers and platforms."
                },
                {
                    id: 4,
                    title: "Does the widget support users with motor impairments?",
                    content: "Absolutely. It offers keyboard navigation support and customizable UI controls to assist users with motor disabilities."
                },
                {
                    id: 5,
                    title: "Can the widget personalize accessibility features in real-time?",
                    content: "Yes, it allows real-time personalization to adapt the website interface based on individual user needs."
                },
                {
                    id: 6,
                    title: "Is the widget optimized for performance?",
                    content: "Yes, it is lightweight and designed to minimize impact on website loading times and performance."
                },
                {
                    id: 7,
                    title: "Which browsers does the widget support?",
                    content: "The widget supports all major browsers including Chrome, Firefox, Safari, Edge, and Opera."
                },
                {
                    id: 8,
                    title: "Can this widget help my website meet ADA compliance?",
                    content: "While the widget aids in improving accessibility and aligns with WCAG standards, full ADA compliance depends on overall website practices; this widget is a key tool in your accessibility strategy."
                },
                {
                    id: 9,
                    title: "Is the widget customizable?",
                    content: "Yes, it offers options to customize accessibility settings to fit the unique needs of your user base and branding."
                },
                {
                    id: 10,
                    title: "Does the widget require an internet connection to work?",
                    content: "The widget can operate offline once installed, ensuring accessibility features remain functional without constant internet access."
                }
            ]
        }
    }
};
const LandingPageData = {
    banner: {
        title_primary: "Driving Digital Transformation",
        title_secondary: "with ",
        title_tertiary: "custom",
        typwriting_animation_list: [
            {
                id: 1,
                word: "Mobile Application"
            },
            {
                id: 2,
                word: "Industrial IoT Solutions"
            },
            {
                id: 3,
                word: "Web Application"
            },
            {
                id: 4,
                word: "AI Agentic Workflows"
            }
        ],
        description_primary: "Delivering scalable technology that powers modern digital experiences, AI",
        description_secondary: "systems, and connected IoT solutions.",
        get_in_touch: "Get in touch",
        get_in_touch_arrow: `${baseUrl}/Images/LandingPage/Banner/arrowIconUp.png`,
        view_services_text: "View services",
        banner_CTA_status: "active",
        banner_image_list: [
            {
                id: 1,
                image: `/Images/LandingPage/Banner/BNI_logo.webp`
            },
            {
                id: 2,
                image: `/Images/LandingPage/Banner/clutch.svg`
            },
            {
                id: 3,
                image: `/Images/LandingPage/Banner/5 stars.svg`
            },
            {
                id: 4,
                image: `/Images/LandingPage/Banner/ethercat_.webp`
            }
        ],
        banner_carousel_list: [
            {
                id: 1,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/anyo.webp`
            },
            {
                id: 2,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/bsf.webp`
            },
            {
                id: 3,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/DCM.webp`
            },
            {
                id: 4,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/dhanajaya.webp`
            },
            {
                id: 5,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/evo11ve.webp`
            },
            {
                id: 6,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/IA.webp`
            },
            {
                id: 7,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/ibits.webp`
            },
            {
                id: 8,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/incluway.webp`
            },
            {
                id: 9,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/kivi.webp`
            },
            {
                id: 10,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/mako.webp`
            },
            {
                id: 11,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/navyya.webp`
            },
            {
                id: 12,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/northernarc.webp`
            },
            {
                id: 13,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/oidlabs.webp`
            },
            {
                id: 14,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/osakai.webp`
            },
            {
                id: 15,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/rajdeep.webp`
            },
            {
                id: 16,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/suyash.webp`
            },
            {
                id: 17,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/technoweld.webp`
            },
            {
                id: 18,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/terra-brsr.webp`
            },
            {
                id: 19,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/trackie.webp`
            },
            {
                id: 20,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/vishnupressing.webp`
            },
            {
                id: 21,
                img: `/Images/LandingPage/Banner/carousel_images/client_logos/wasted.webp`
            }
        ]
    },
    showReel: {
        title: "SHOWREEL",
        video: [
            `${baseUrl}/Images/LandingPage/showReel/homepage showreel web view.mp4`,
            `${baseUrl}/Images/LandingPage/showReel/tab view home showreel.mp4`,
            `${baseUrl}/Images/LandingPage/showReel/mobile view home page showreel.mp4`
        ],
        youtube_url: "https://www.youtube.com/embed/pFtxR-O78sY?si=t_x_0UF65Q1YaHFw"
    },
    aboutUs: {
        achievementsList: [
            {
                id: 1,
                category: "clients",
                numbers: "50+",
                description: "Amazing Clients"
            },
            {
                id: 2,
                category: "Industries",
                numbers: "5+",
                description: "Industries"
            },
            {
                id: 3,
                category: "Projects",
                numbers: "70+",
                description: "Successful Projects"
            },
            {
                id: 4,
                category: "Founded",
                numbers: "2016",
                description: "Founded"
            }
        ]
    },
    advantages: {
        advantages_list: [
            {
                title: "Bespoke Software, Tailored to Your Business Needs",
                // /Images/LandingPage/Advantages/Bespoke_Software_Tailored_to_Your_Business_Needs.jpg
                bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Advantages/img1.webp')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                description: "Custom software solutions designed around your workflows — not off-the-shelf",
                gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                blobWidth: "w-[8rem]"
            },
            {
                title: "Digital Transformation Strategy with the Right Technologies",
                // /Images/LandingPage/Advantages/Digital_Transformation_Strategy_with_the_Right_Technologies.jpg
                bg: `bg-[url('/Images/LandingPage/advantages/Digital_Transformation_Strategy_with_the_Right_Technologies.webp')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                description: "Modernize operations with digital tools that serve real business goals",
                gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                blobWidth: "w-[8rem]"
            },
            {
                title: "Flexible Engagement Models for Agile Development",
                // /Images/LandingPage/Advantages/Flexible_Engagement_Models_for_Agile_Development.jpg
                bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Advantages/img3.webp')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                description: "Start small, scale fast, or pause — flexibility built into the process",
                gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                blobWidth: "w-[10rem]"
            },
            {
                title: "Measurable Outcomes Through AI, IoT, and Machine Vision",
                // /Images/LandingPage/Advantages/Measurable_Outcomes_Through_AI_IoT_and_Machine_Vision.jpg
                bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Advantages/img4.webp')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                description: "Drive impact with intelligent systems and real-time performance insights",
                gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                blobWidth: "w-[10rem]"
            }
        ],
        featuredWorks_list: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Learning Platform.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Learning Platform.webp`,
                title: "ed tech",
                description: "education platform",
                status: "inactive",
                route: "edtech"
            },
            {
                id: 2,
                image: `${baseUrl}/Images/case-studies/List/Infrared Health Scan.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Infrared Thermography.webp`,
                title: "infrared thermography",
                description: "thermal imaging detects mastitis in dairy cattle",
                status: "active",
                route: "infrared-thermography"
            },
            {
                id: 3,
                image: `${baseUrl}/Images/case-studies/List/Seasonal E-Commerce.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Seasonal E-Commerce.webp`,
                title: "e-commerce",
                description: "payment enabled e-commerce web application",
                status: "inactive",
                route: "ecommerce"
            },
            {
                id: 4,
                image: `${baseUrl}/Images/case-studies/List/Accessible Web Widget.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Accessible Web Widget.webp`,
                title: "accessibility",
                description: "accessibility project",
                status: "active",
                route: "accessible-web-widget"
            }
        ]
    },
    services: {
        title: "Our Service",
        description: "Take a look at our handpicked case studies showcasing real-world tech solutions. A quick glimpse into the impact we create.",
        service_list: [
            {
                number: "[01]",
                title: "Digital Transformation Strategy for Modern Businesses",
                desc: [
                    "Modernize operations using proven digital transformation tools and workflows.",
                    "Web, mobile, or desktop applications — your stack is fully covered."
                ],
                highlighted_desc: [
                    'Modernize operations using proven <span class="text-primary-blue">digital transformation</span> tools and workflows.',
                    '<span class="text-primary-blue">Web, mobile, or desktop</span> applications — your stack is fully covered.'
                ]
            },
            {
                number: "[02]",
                title: "Development Services for Startup Founders",
                desc: [
                    "Build faster, smarter, and with clarity.",
                    "Our research-backed approach helps founders make informed product decisions."
                ],
                highlighted_desc: [
                    'Build <span class="text-primary-blue">faster, smarter</span>, and with clarity.',
                    'Our <span class="text-primary-blue">research-backed approach</span> helps founders make informed product decisions.'
                ]
            },
            {
                number: "[03]",
                title: "Industrial IoT for Smarter Operations",
                desc: [
                    "Connect IoT devices to monitor, analyze, and automate in real time.",
                    "Improve efficiency, reduce downtime, and act on actionable insights."
                ],
                highlighted_desc: [
                    'Connect <span class="text-primary-blue">IoT devices</span> to monitor, analyze, and automate in real time.',
                    'Improve <span class="text-primary-blue">efficiency</span>, reduce <span class="text-primary-blue">downtime</span>, and act on actionable insights.'
                ]
            },
            {
                number: "[04]",
                title: "AI & Agentic AI for Intelligent Decision-Making",
                desc: [
                    "Leverage AI for smarter decisions and data-driven growth.",
                    "Deploy agentic AI to automate tasks and adapt intelligently."
                ],
                highlighted_desc: [
                    'Leverage <span class="text-primary-blue">AI</span> for smarter decisions and data-driven growth.',
                    'Deploy <span class="text-primary-blue">agentic AI</span> to automate tasks and adapt intelligently.'
                ]
            },
            {
                number: "[05]",
                title: "Machine Vision for Quality Control and Inspection",
                desc: [
                    "Automated defect detection, inspection, and classification at industrial scale.",
                    "Boost precision, reduce errors, and scale with confidence."
                ],
                highlighted_desc: [
                    '<span class="text-primary-blue">Automated defect detection</span>, inspection, and classification at industrial scale.',
                    "Boost precision, reduce errors, and scale with confidence."
                ]
            }
        ]
    },
    we_work_with: {
        title: "We Work With",
        sub_title: "brands in",
        carouselData: [
            {
                id: 1,
                name: "Accessibility",
                image: `${baseUrl}/Images/LandingPage/industries/accessibility.png`
            },
            {
                id: 2,
                name: "Agri Tech",
                image: `${baseUrl}/Images/LandingPage/industries/agri-tech.png`
            },
            {
                id: 3,
                name: "Audit",
                image: `${baseUrl}/Images/LandingPage/industries/Audit.png`
            },
            {
                id: 4,
                name: "E-commerce",
                image: `${baseUrl}/Images/LandingPage/industries/e-commerce.png`
            },
            {
                id: 5,
                name: "Ed-Tech",
                image: `${baseUrl}/Images/LandingPage/industries/Ed-Tech.png`
            },
            {
                id: 6,
                name: "FinTech",
                image: `${baseUrl}/Images/LandingPage/industries/fintech.png`
            },
            {
                id: 7,
                name: "Machine Vision",
                image: `${baseUrl}/Images/LandingPage/industries/machine vision.png`
            },
            {
                id: 8,
                name: "Manufacturing",
                image: `${baseUrl}/Images/LandingPage/industries/manufacturing.png`
            },
            {
                id: 9,
                name: "Sales",
                image: `${baseUrl}/Images/LandingPage/industries/sales.png`
            },
            {
                id: 10,
                name: "Thermal Vision",
                image: `${baseUrl}/Images/LandingPage/industries/thermal vision.png`
            },
            {
                id: 11,
                name: "Wellness",
                image: `${baseUrl}/Images/LandingPage/industries/wellness.png`
            }
        ]
    },
    testimonials: {
        testimonial_list: [
            {
                name: "Hare Priyaa Rajendran",
                quote: `<span class="interFont testimonial_text_blur testimonial_blurred_text">
  I am amazed the way Veract took the initial discussion of our HRMS product MyTrackie.
</span>
<span class="interFont testimonial_white_text">
  They swiftly got into the details and 
</span>
<span class="interFont testimonial_primary_text">
  educated
</span>
<span class="interFont testimonial_white_text">
  me wherever required.
</span>
<span class="interFont testimonial_text_blur testimonial_blurred_text">
  Really thrilled to work with Veract for the software upgrades of our product. I would certainly recommend Veract for product development and technical consulting.
</span>
`,
                image: `${baseUrl}/Images/LandingPage/Testimonial/harepriyaa.jpeg`,
                company: "Geeraj Business Solutions",
                role: "Founder"
            },
            {
                name: "Mahendra Vadivelu",
                quote: `<span class="interFont testimonial_text_blur testimonial_blurred_text">
  We engaged Veract for an Angular project which required custom printing domain knowledge and involved high level of complexity of the legacy system. Veract team took complete ownership of client coordination, project management and project delivery as well.
</span>
<span class="interFont testimonial_white_text">
  Focus on the deliverables and 
</span>
<span class="interFont testimonial_primary_text">
  technical expertise
</span>
<span class="interFont testimonial_white_text">
  stood out during our engagement.
</span>
<span class="interFont testimonial_text_blur testimonial_blurred_text">
  Thank you Veract for all your splendid work in this engagement.
</span>
<span class="interFont testimonial_white_text">
  I will assure you that you will be 
</span>
<span class="interFont testimonial_primary_text">
  our first
</span>
<span class="interFont testimonial_white_text">
  go to team for any outsourcing need.
</span>
  `,
                image: `${baseUrl}/Images/LandingPage/Testimonial/mahendra.jpg`,
                company: "Mako IT Lab",
                role: "CEO"
            },
            {
                name: "Salil Nair",
                quote: `<span class="interFont testimonial_white_text">
  We engaged with Veract team from an 
</span>
<span class="interFont testimonial_primary_text">
  early stage
</span>
<span class="interFont testimonial_white_text">
  and they helped build out our 'KiViStar'
</span>
<span class="interFont testimonial_white_text">
  App from basic day one concept. Their choice of architecture, framework and ability to deliver the product helped us go to market quickly.
</span>
<span class="interFont testimonial_text_blur testimonial_blurred_text">
  This helped us focus on our core work. The team at Veract developed software like their own product! We continue to engage with Veract for our technical development requirements.
</span>
`,
                image: `${baseUrl}/Images/LandingPage/Testimonial/salil.png`,
                company: "Agrosperity Tech Solutions",
                role: "CTO"
            },
            {
                name: "Anand Shah",
                quote: `<span class="interFont testimonial_text_blur testimonial_blurred_text">
  Excellent prompt support in spite of 
</span>
<span class="interFont testimonial_primary_text">
  remote
</span>
<span class="interFont testimonial_white_text">
  location.
</span>
`,
                image: `${baseUrl}/Images/LandingPage/Testimonial/AnanadShah.png`,
                company: "Rajdeep Industrial Products",
                role: "Director"
            },
            {
                name: "Bijoy KT",
                quote: `<span class="interFont testimonial_white_text">
  Our 
</span>
<span class="interFont testimonial_primary_text">
  engagement
</span>
<span class="interFont testimonial_white_text">
  with veract for Datacenter Mart project has been a fantastic 
</span>
<span class="interFont testimonial_primary_text">
  experience.
</span>
<span class="interFont testimonial_text_blur testimonial_blurred_text">
  The team was very prompt and supportive throughout the project. We are very happy with the outcome and we expect to start the second phase soon.
</span>
<span class="interFont testimonial_white_text">
  This is a 
</span>
<span class="interFont testimonial_primary_text">
  very complex
</span>
<span class="interFont testimonial_white_text">
  project because we did not have an exact comparison to show them but they grasped the requirements well and was able to deliver what we expected.
</span>
`,
                image: `${baseUrl}/Images/LandingPage/Testimonial/Bijoy.jpg`,
                company: "Data Center Mart",
                role: "Co-Founder"
            }
        ]
    },
    faq: {
        title: "Curious? Check our FAQs",
        faq_list: [
            {
                id: 1,
                title: "What does Veract.co do?",
                content: "Veract.co helps businesses modernize and automate operations using AI, machine vision, IoT systems, and custom software solutions."
            },
            {
                id: 2,
                title: "Who is veract.co best suited for?",
                content: "We work with startups, small teams, and mid-sized businesses looking to scale intelligently without increasing headcount."
            },
            {
                id: 3,
                title: "What makes veract.co different from other agencies?",
                content: "We don’t just build software — we build intelligent systems that automate decisions, streamline workflows, and deliver measurable business outcomes."
            },
            {
                id: 4,
                title: "What technologies do you use?",
                content: "We use a mix of AI frameworks (LangChain, Gemini, GPT), IoT protocols (Modbus, MQTT, EtherCAT), and full-stack technologies (Python, Node.js, React) tailored to the solution."
            },
            {
                id: 5,
                title: " Do you offer free consultations or demos?",
                content: "Yes — we offer a no-cost consultation to explore automation opportunities, and you can try one AI agent or automation module for free."
            },
            {
                id: 6,
                title: "How can I streamline my business operations with custom software?",
                content: "Custom software automates workflows, integrates data, and reduces manual effort. Tools like internal dashboards or domain-specific platforms are effective entry points."
            },
            {
                id: 7,
                title: "What are the best options for mobile application development agencies?",
                content: "Consider agencies with full-stack capabilities, strong UI/UX, and experience across platforms. Browse portfolios and tech stacks before finalizing — veract.co is one such example."
            }
        ]
    },
    footer: {
        description: "At Veract, we empower digital transformation through custom software—crafting innovative web, mobile, and AI solutions that drive measurable business success.",
        footer_logo_list: [
            {
                id: 1,
                image: `/Images/LandingPage/Footer/BNI_logo.webp`
            },
            {
                id: 2,
                image: `/Images/LandingPage/Banner/clutch.svg`
            },
            {
                id: 3,
                image: `/Images/LandingPage/Banner/5 stars.svg`
            },
            {
                id: 4,
                image: `/Images/LandingPage/Footer/ethercat_.webp`
            }
        ],
        socialMediaIcons: [
            {
                id: 1,
                image: `/Images/LandingPage/Footer/linkedin.svg`,
                link: "https://www.linkedin.com/company/veract-consultancy-private-limited/"
            },
            {
                id: 2,
                image: `/Images/LandingPage/Footer/youtube.svg`,
                link: "https://youtube.com/@veract-consultancy?si=tGt9K1cCpnNgzFkJ"
            },
            {
                id: 3,
                image: `/Images/LandingPage/Footer/whatsapp.svg`,
                link: "https://www.whatsapp.com/channel/0029VahNUEB90x31HeDatt2o"
            },
            {
                id: 4,
                image: `/Images/LandingPage/Footer/insta.svg`,
                link: "https://www.instagram.com/veractconsultancy/"
            }
        ],
        quickLinks: {
            company: {
                title: "Company",
                links: [
                    {
                        id: 1,
                        title: "Agentic AI",
                        link: "/agentic-ai",
                        status: "active"
                    },
                    {
                        id: 2,
                        title: "Services",
                        link: "/services",
                        status: "active"
                    },
                    {
                        id: 3,
                        title: "Case Studies",
                        link: "/case-studies",
                        status: "active"
                    },
                    {
                        id: 4,
                        title: "Contact Us",
                        link: "/contact-us",
                        status: "active"
                    },
                    {
                        id: 5,
                        title: "Blogs",
                        link: "",
                        status: "inactive"
                    }
                ]
            },
            services: {
                title: "Services",
                links: [
                    {
                        id: 1,
                        title: "Digital Transformation",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 2,
                        title: "Development Services",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 3,
                        title: "Internet of things - IoT",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 4,
                        title: "Machine Vision",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 5,
                        title: "Infrared Thermography",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 6,
                        title: "Workflow Automation",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 7,
                        title: "Agentic AI",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 8,
                        title: "Custom Mobile Application",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 9,
                        title: "Custom Web Application",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 10
                    }
                ]
            },
            contact: {
                title: "Contact Us",
                links: [
                    {
                        id: 1,
                        type: "phone",
                        title: "+91 97899 91565"
                    },
                    {
                        id: 2,
                        type: "phone",
                        title: "+91 99628 37650"
                    },
                    {
                        id: 3,
                        type: "phone",
                        title: "+1 7377101523"
                    },
                    {
                        id: 4,
                        type: "email",
                        title: "info@veract.io"
                    }
                ]
            },
            address: {
                title: "Location",
                address: "37, Aspace, Brindavan Street, Srinivasa Nagar, Madipakkam, Chennai - 600 091"
            }
        }
    }
};
const AgentPageData = {
    banner: {
        about: "AI-DRIVEN EFFICIENCY",
        title: "Optimize Your Business Operations with AI Agents",
        subtitle: `<span>Get a free consult, see AI Agent in action, and deploy your <span class="font-bold text-white">first agent—free.</span></span>`,
        book_demo: "Book a free demo",
        view_case_study: "View case studies",
        banner_features: [
            {
                features_icon: `/Images/agent/Banner/Free business consultation.svg`,
                features_title: "Free Business consultation",
                features_subtitle: "Get expert insights into where AI can deliver the most value in your operations."
            },
            {
                features_icon: `/Images/agent/Banner/Live Product Demo.svg`,
                features_title: "Live Product Demo",
                features_subtitle: "Watch how our AI agents automate real tasks across your tools — customized to your case."
            },
            {
                features_icon: `/Images/agent/Banner/Deploy 1 agent.svg`,
                features_title: "Deploy 1 AI Agent Free",
                features_subtitle: "Test, drive one fully trained AI agent for your business — no commitment, no cost."
            }
        ]
    },
    ourprocess: {
        pageTitle: "Our Process",
        title: "Our Simple, Smart, and Scalable Process",
        description: "We design, develop, and implement automation tools that help you work smarter, not harder",
        cards: [
            {
                id: 1,
                header: "Smart Analyzing",
                subHeader: "We assess your business goals, challenges, and processes to identify where custom AI agents deliver maximum impact.",
                video: "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4"
            },
            {
                id: 2,
                header: "AI Agent Development",
                subHeader: "Our team designs and develops intelligent AI agents, trained and fine-tuned to adapt to your specific workflows and use cases.",
                video: "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4"
            },
            {
                id: 3,
                header: "Seamless Integration",
                subHeader: "We embed your custom AI agent into your systems, tools, and processes, ensuring seamless interaction with minimal disruption.",
                video: "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4"
            },
            {
                id: 4,
                header: "Continuous Optimization",
                subHeader: "We continuously monitor your AI agent’s performance, enhance its capabilities, and retrain it to improve outcomes over time.",
                video: "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4"
            }
        ]
    },
    faq: {
        title: "Curious? Check our FAQs",
        faq_list: [
            {
                id: 1,
                title: 'What is Agentic AI?',
                content: 'Agentic AI refers to autonomous AI agents that use memory, tools, and reasoning to plan and act toward business goals without constant human input.'
            },
            {
                id: 2,
                title: 'How does veract.co implement Agentic AI?',
                content: 'We design agents using LangChain, LangGraph, Gemini, and GPT-4o — enabling them to integrate with platforms like Slack, Notion, Excel, and SAP to automate work.'
            },
            {
                id: 3,
                title: 'What tasks can your AI agents perform?',
                content: 'Tasks like client intake, communication, billing, ticket escalation, status updates, and sales follow-up — all powered by goal-driven logic and coordination.'
            },
            {
                id: 4,
                title: 'What is the difference between AI agents and traditional automation?',
                content: 'AI agents operate with autonomy — they plan, reason, and decide across tasks. Traditional automation executes predefined steps without adapting to context.'
            },
            {
                id: 5,
                title: 'Which tasks are commonly automated using agent-based AI?',
                content: 'Common examples include email replies, CRM updates, onboarding flows, meeting summaries, and multi-step business process orchestration.'
            },
            {
                id: 6,
                title: 'How do businesses integrate AI agents with existing tools?',
                content: 'AI agents can connect to tools like Slack, Google Sheets, Notion, or SAP via APIs. Platforms like LangChain and Gemini are often used by teams like veract.co to build these layers.'
            },
            {
                id: 7,
                title: 'What are some real-world applications of language models in business?',
                content: 'Language models are used in document understanding, smart support systems, feedback classification, and report summarization.'
            },
            {
                id: 8,
                title: 'Seeking AI and machine learning solutions tailored to healthcare—any leads?',
                content: 'In healthcare, AI is used for patient monitoring, diagnostics, and smart triage. veract.co has built systems in this space with a focus on compliance and usability.'
            },
            {
                id: 9,
                title: 'Do I need to replace my current software to use these agents?',
                content: 'No — our agents layer over your existing tools. They act like intelligent assistants working across your current stack.'
            },
            {
                id: 10,
                title: 'Can I test an AI agent before buying?',
                content: 'Yes — we provide a live demo and a free trial deployment of one AI agent into your business workflow.'
            }
        ]
    }
};
const caseStudiesHomePageData = {
    header: "Our Projects",
    subHeader: "From designing intelligent concepts to delivering scalable solutions, we're your agile, expert-driven team making technology work for you!",
    caseStudiesTitleList: [
        {
            id: 1,
            name: "Thermal Vision"
        },
        {
            id: 2,
            name: "Accessibility"
        },
        {
            id: 3,
            name: "Chat bot"
        },
        {
            id: 4,
            name: "Ed Tech"
        },
        {
            id: 5,
            name: "Machine Vision"
        },
        {
            id: 6,
            name: "Wellness"
        },
        {
            id: 7,
            name: "Industry Platform"
        },
        {
            id: 8,
            name: "Ecommerce"
        },
        {
            id: 9,
            name: "Sales"
        },
        {
            id: 10,
            name: "Audio video"
        }
    ],
    caseStudiesList: {
        thermalvision: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Infrared Health Scan.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Infrared Thermography.webp`,
                header: "Infrared Thermography",
                subHeader: "Infrared Imaging for Animal Health",
                routeTo: "/case-studies/infrared-thermography"
            }
        ],
        accessibility: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Accessible Web Widget.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Accessible Web Widget.webp`,
                header: "Accessible Web Widget",
                subHeader: "Smart Widget for Enhanced Digital Access",
                routeTo: "/case-studies/accessible-web-widget"
            }
        ],
        chatbot: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/AI Chat Assistant.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/AI Chat Assistant.webp`,
                header: "AI Chat Assistant",
                subHeader: "Conversational AI for Real-Time Support",
                routeTo: ""
            }
        ],
        edtech: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Learning Platform.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Learning Platform.webp`,
                header: "Learning Platform",
                subHeader: "AI-Based Learning and Course Portal",
                routeTo: ""
            }
        ],
        machinevision: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Visual Inspection AI.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Visual Inspection AI.webp`,
                header: "Visual Inspection AI",
                subHeader: "AI Visual QC for Industrial Inspection",
                routeTo: ""
            }
        ],
        wellness: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Digital Wellness App.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Digital Wellness.webp`,
                header: "Digital Wellness",
                subHeader: "Health & Wellness App for Daily Tracking",
                routeTo: ""
            }
        ],
        industryplatform: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Smart Industry Portal.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Smart Industry Portal.webp`,
                header: "Smart Industry Portal",
                subHeader: "Innovative Data Center Platform",
                routeTo: ""
            }
        ],
        ecommerce: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Seasonal E-Commerce.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Seasonal E-Commerce.webp`,
                header: "Seasonal E-Commerce",
                subHeader: "Online Store for Seasonal Organic Goods",
                routeTo: ""
            }
        ],
        sales: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Sales Dashboard.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Sales Dashboard.webp`,
                header: "Sales Dashboard",
                subHeader: "Quote & Enquiry Management Dashboard",
                routeTo: ""
            }
        ],
        audiovideo: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/AV Room Designer.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Audio Visual Interior.webp`,
                header: "Audio Visual Interior",
                subHeader: "Immersive AV Conference Room Planner",
                routeTo: ""
            }
        ]
    },
    faq: {
        title: "Curious? Check our FAQs",
        faq_list: [
            {
                id: 1,
                title: "What types of projects are featured in veract.co's case studies?",
                content: 'Our portfolio includes AI-powered systems, machine vision platforms, wellness apps, ecommerce solutions, accessibility tools, and dashboards built for various industries.'
            },
            {
                id: 2,
                title: "Are all of your case studies AI projects?",
                content: "Many use AI — such as chat assistants, vision models, or analytics — but others focus on user experience, automation, or platform engineering without direct AI."
            },
            {
                id: 3,
                title: "What industries are represented in your case studies?",
                content: "We’ve delivered solutions for agriculture, education, ecommerce, accessibility, wellness, manufacturing, and enterprise tech."
            },
            {
                id: 4,
                title: "Can I request a live demo of any project?",
                content: "Yes — we can walk you through any project and explore how similar outcomes can be tailored to your business."
            },
            {
                id: 5,
                title: "What technologies do these projects use?",
                content: "We use full-stack frameworks like React, Node.js, and Python, alongside AI/ML libraries, OCR, OpenCV, IoT protocols, and integrations with tools like Notion, Slack, and SAP."
            },
            {
                id: 6,
                title: "Are these solutions scalable to my organization?",
                content: "Yes. All systems are built to scale — whether you're piloting a feature or rolling it out enterprise-wide."
            },
            {
                id: 7,
                title: "Do any projects combine hardware and software?",
                content: "Yes — some projects involve camera-based vision systems, IoT sensors, and real-time analytics combined with custom software dashboards."
            },
            {
                id: 8,
                title: "What tech stack powers most of these solutions?",
                content: "Common stacks include Python, Node.js, React, MongoDB, LangChain, OpenCV, and various cloud APIs — chosen based on problem fit and scale."
            },
            {
                id: 9,
                title: "Where can I source the best React Native app development services?",
                content: "React Native is ideal for shared-codebase mobile development. Agencies experienced in JS-heavy stacks, such as veract.co, often provide tailored solutions."
            },
            {
                id: 10,
                title: "How are tools like OCR or computer vision used in real-world apps?",
                content: "OCR is used to extract structured data from documents. Vision is applied in defect detection, thermal analysis, and layout inspection — often in manufacturing and diagnostics."
            },
            {
                id: 11,
                title: "What types of problems are solved in your case studies?",
                content: "Projects address challenges in inspection automation, wellness tracking, accessibility compliance, ecommerce personalization, and enterprise visibility."
            },
            {
                id: 12,
                title: "Can you help me find top Flutter app development companies?",
                content: "Look for teams that deliver smooth UI/UX and native performance across devices. veract.co, among others, builds production-grade Flutter apps for startups and enterprises."
            }
        ]
    }
};
const metadata = [
    {
        slug: "infrared-thermography",
        title: "Infrared Thermography",
        description: "Thermal Imaging System for Buffalo Udder Health Monitoring",
        openGraph: {
            title: "Thermal Imaging System for Buffalo Udder Health Monitoring",
            description: "Monitor buffalo udder health with infrared thermography...",
            type: "website"
        },
        twitter: {
            card: "summary_large_image",
            title: "Thermal Imaging System for Buffalo Udder Health Monitoring",
            description: "Smart infrared system for mastitis detection in buffaloes."
        },
        keywords: [
            "buffalo udder health",
            "mastitis detection",
            "thermal imaging",
            "infrared thermography",
            "veterinary technology",
            "livestock health monitoring",
            "dairy farm management",
            "non-invasive diagnosis",
            "animal health AI",
            "smart veterinary system"
        ],
        author: "Veract.co",
        language: "en",
        subject: "Thermal Imaging System for Buffalo Udder Health Monitoring",
        industry: "Infrared Thermography",
        image: `${baseUrl}/Images/infrared-thermography.jpg`,
        url: "https://veract.co/case-studies/infrared-thermography",
        geo: {
            region: "IN-TN",
            placename: "Velachery, Chennai",
            position: "12.9784;80.2214",
            icbm: "12.9784, 80.2214"
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Infrared Thermography",
            alternateName: "Thermal Imaging System for Buffalo Udder Health Monitoring",
            url: "https://veract.co/case-studies/infrared-thermography",
            author: {
                "@type": "Organization",
                name: "Veract.co",
                url: "https://veract.co"
            }
        }
    },
    {
        slug: "accessible-web-widget",
        title: "Lightweight Accessibility Widget | WCAG-Compliant & Plug-and-Play",
        description: "Enhance website accessibility for users with visual, motor, and cognitive impairments. Our lightweight, WCAG-compliant widget offers real-time personalization, cross-browser support, and easy integration.",
        openGraph: {
            title: "Lightweight Accessibility Widget | WCAG-Compliant & Plug-and-Play",
            description: "Boost your website's inclusivity with our easy-to-integrate accessibility widget supporting visual, motor, and cognitive impairments. Fully WCAG-compliant and optimized for performance.",
            type: "website"
        },
        twitter: {
            card: "summary_large_image",
            title: "Lightweight Accessibility Widget | WCAG-Compliant & Plug-and-Play",
            description: "Enhance website accessibility with our lightweight widget designed for all users. Real-time personalization and seamless integration."
        },
        keywords: [
            "accessibility widget",
            "WCAG compliance",
            "digital accessibility",
            "accessibility plugin",
            "visual impairment support",
            "motor impairment accessibility",
            "cognitive accessibility tool",
            "ADA compliance",
            "inclusive web design",
            "accessibility software"
        ],
        author: "Veract.co",
        language: "en",
        subject: "Lightweight Accessibility Widget | WCAG-Compliant & Plug-and-Play",
        industry: "Accessibility, Web Development",
        image: `${baseUrl}/Images/accessibility-widget-preview.png`,
        url: "https://veract.co/case-studies/accessible-web-widget",
        geo: {
            region: "IN-TN",
            placename: "Velachery, Chennai",
            position: "12.9784;80.2214",
            icbm: "12.9784, 80.2214"
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Lightweight Accessibility Widget",
            alternateName: "WCAG-Compliant & Plug-and-Play Accessibility Tool",
            url: "https://veract.co/case-studies/accessible-web-widget",
            applicationCategory: "AccessibilityTool",
            operatingSystem: "All"
        }
    }
];
const services = [
    {
        id: '01',
        // title: 'Digital Transformation Strategy for Modern Businesses',
        title: `<span class='interFont text-[1.25rem] md:text-[1.625rem] lg:text-[1.875rem] text-[#FFFFFF] font-medium leading-normal'>Digital Transformation Strategy for <span class='text-primary-blue'>Modern Businesses</span></span>`,
        service_array: [
            {
                service_icon: '/Images/services/icons/ai-computer.svg',
                service_title: 'Legacy System Modernization'
            },
            {
                service_icon: '/Images/services/icons/algorithm.svg',
                service_title: 'Process Automation & Workflow Digitization'
            },
            {
                service_icon: '/Images/services/icons/laptop.svg',
                service_title: 'Business Dashboards & Reporting Systems'
            },
            {
                service_icon: '/Images/services/icons/stash_integrations-light.svg',
                service_title: 'System Integrations Across Departments & Tools'
            }
        ],
        service_CTA: [
            {
                image: '/Images/services/images/smart_industry_portal.svg',
                CTA_title: 'Smart Industry Portal',
                status: 'inactive',
                routeTo: ''
            },
            {
                image: '/Images/services/images/accessible_web_widget.svg',
                CTA_title: 'Accessibility Web Widget',
                status: 'active',
                routeTo: '/case-studies/accessible-web-widget'
            }
        ]
    },
    {
        id: '02',
        // title: 'Development Services for Startup Founders',
        title: `<span class='interFont text-[1.25rem] md:text-[1.625rem] lg:text-[1.875rem] text-[#FFFFFF] font-medium leading-normal'>Development Services for <span class='text-primary-blue'>Startup Founders</span></span>`,
        service_array: [
            {
                service_icon: '/Images/services/icons/computer-video.svg',
                service_title: 'MVP & Prototype Development'
            },
            {
                service_icon: '/Images/services/icons/laptop-phone-sync.svg',
                service_title: 'Custom SaaS & Web Application Development'
            },
            {
                service_icon: '/Images/services/icons/phone-developer-mode.svg',
                service_title: 'Modular Feature Development for Scalable Apps'
            },
            {
                service_icon: '/Images/services/icons/api.svg',
                service_title: 'Integration of Third-party APIs & Platforms'
            }
        ],
        service_CTA: [
            {
                image: '/Images/services/images/learning_platform.svg',
                CTA_title: 'Learning Platform',
                status: 'inactive',
                routeTo: ''
            },
            {
                image: '/Images/services/images/Digital_wellness.svg',
                CTA_title: 'Digital Wellness',
                status: 'inactive',
                routeTo: ''
            }
        ]
    },
    {
        id: '03',
        // title: 'Industrial IoT for Smarter Operations',
        title: `<span class='interFont text-[1.25rem] md:text-[1.625rem] lg:text-[1.875rem] text-[#FFFFFF] font-medium leading-normal'>Industrial IoT for <span class='text-primary-blue'>Smarter Operations</span></span>`,
        service_array: [
            {
                service_icon: '/Images/services/icons/ai-phone-02.svg',
                service_title: 'IoT-Enabled App Development'
            },
            {
                service_icon: '/Images/services/icons/ai-laptop.svg',
                service_title: 'Remote Monitoring Interfaces'
            },
            {
                service_icon: '/Images/services/icons/carbon_iot-platform.svg',
                service_title: 'Sensor Integration & Visualization'
            },
            {
                service_icon: '/Images/services/icons/tabler_eye-spark.svg',
                service_title: 'Smart Factory & Equipment Tracking'
            }
        ],
        service_CTA: [
            {
                image: '/Images/services/images/infrared_thermography.svg',
                CTA_title: 'Infrared Thermography',
                status: 'active',
                routeTo: '/case-studies/infrared-thermography'
            }
        ]
    },
    {
        id: '04',
        // title: 'AI & Agentic AI for Intelligent Decision-Making',
        title: `<span class='interFont text-[1.25rem] md:text-[1.625rem] lg:text-[1.875rem] text-[#FFFFFF] font-medium leading-normal'>AI & Agentic AI for <span class='text-primary-blue'>Intelligent Decision-Making</span></span>`,
        service_array: [
            {
                service_icon: '/Images/services/icons/ai-chat-01.svg',
                service_title: 'AI-Powered Decision Support Tools'
            },
            {
                service_icon: '/Images/services/icons/elements.svg',
                service_title: 'Task Automation & Workflow Bots'
            },
            {
                service_icon: '/Images/services/icons/ai-file.svg',
                service_title: 'Document Intelligence & Invoice Parsing'
            },
            {
                service_icon: '/Images/services/icons/robot-01.svg',
                service_title: 'Agentic AI Systems for Business Logic'
            }
        ],
        service_CTA: [
            {
                image: '/Images/services/images/task_management.svg',
                CTA_title: 'Task Management',
                status: 'inactive',
                routeTo: ''
            },
            {
                image: '/Images/services/images/invoice_mapping.svg',
                CTA_title: 'Invoice Mapping',
                status: 'inactive',
                routeTo: ''
            }
        ]
    },
    {
        id: '05',
        // title: 'Machine Vision for Quality Control and Inspection',
        title: `<span class='interFont text-[1.25rem] md:text-[1.625rem] lg:text-[1.875rem] text-[#FFFFFF] font-medium leading-normal'>Machine Vision for <span class='text-primary-blue'>Quality Control and Inspection</span></span>`,
        service_array: [
            {
                service_icon: '/Images/services/icons/camera-ai.svg',
                service_title: 'AI for Visual Quality Inspection'
            },
            {
                service_icon: '/Images/services/icons/cctv-camera.svg',
                service_title: 'Camera-Based Defect Detection'
            },
            {
                service_icon: '/Images/services/icons/laptop-performance.svg',
                service_title: 'Production Line Monitoring Solutions'
            },
            {
                service_icon: '/Images/services/icons/bitcoin-eye.svg',
                service_title: 'Embedded Vision System Development'
            }
        ],
        service_CTA: [
            {
                image: '/Images/services/images/visual_inspection_ai.svg',
                CTA_title: 'Visual Inspection AI',
                status: 'inactive',
                routeTo: ''
            }
        ]
    },
    {
        id: '06',
        // title: 'Generative AI & GPT',
        title: `<span class='interFont text-[1.25rem] md:text-[1.625rem] lg:text-[1.875rem] text-[#FFFFFF] font-medium leading-normal'>Generative AI & GPT for <span class='text-primary-blue'>workplace productivity</span></span>`,
        service_array: [
            {
                service_icon: '/Images/services/icons/chat-bot.svg',
                service_title: 'Custom AI Chatbots & Assistants'
            },
            {
                service_icon: '/Images/services/icons/artificial-intelligence-06.svg',
                service_title: 'Generative AI Content Automation'
            },
            {
                service_icon: '/Images/services/icons/chat-gpt.svg',
                service_title: 'GPT/LLM Integration for Business flows'
            },
            {
                service_icon: '/Images/services/icons/ai-brain-04.svg',
                service_title: 'Knowledge Management Assistants'
            }
        ],
        service_CTA: [
            {
                image: '/Images/services/images/sara.svg',
                CTA_title: 'AI Chat Assistant',
                status: 'inactive',
                routeTo: ''
            }
        ]
    }
];
}}),
"[project]/lib/globalState.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCaseStudyState": (()=>getCaseStudyState),
    "getNavbarState": (()=>getNavbarState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const getNavbarState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((set)=>({
        navbarState: null,
        setNavbarState: (navbarState)=>set({
                navbarState
            })
    }));
const getCaseStudyState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((set)=>({
        caseStudyState: null,
        setCaseStudyState: (caseStudyState)=>set({
                caseStudyState
            })
    }));
}}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn),
    "isMobile": (()=>isMobile),
    "isTablet": (()=>isTablet),
    "isValidSlug": (()=>isValidSlug)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function isMobile() {
    // if (typeof window === 'undefined') return false;
    // return window.innerWidth < 768;
    if (!window) return false;
    if (window && "undefined" !== undefined) {
        return window.innerWidth < 768;
    }
}
function isTablet() {
    // if (typeof window === 'undefined') return false;
    // return window.innerWidth >= 768 && window.innerWidth <= 1024;
    if (!window) return false;
    if (window && "undefined" !== undefined) {
        return window.innerWidth >= 768 && window.innerWidth <= 1024;
    }
}
function isValidSlug(slug) {
    const validSlugs = [
        "infrared-thermography",
        "accessible-web-widget"
    ];
    return validSlugs.includes(slug);
}
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/components/layout/Navbar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$globalState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/globalState.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Navbar() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isHamburgerMenu, setIsHamburgerMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { navbarState, setNavbarState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$globalState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNavbarState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLoaded(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!pathname) return;
        if (pathname === "/") {
            setNavbarState(1);
        } else if (pathname === "/services") {
            setNavbarState(2);
        } else if (pathname === "/case-studies" || Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caseStudyData"]).some((key)=>pathname === `/case-studies/${key}`)) {
            setNavbarState(4);
        } else if (pathname === "/agentic-ai") {
            setNavbarState(3);
        } else if (pathname === "/contact-us") {
            setNavbarState(6);
        } else {
            setNavbarState(0); // default/fallback
        }
    }, [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
        };
        // Initial check
        handleResize();
        // Add resize listener
        window.addEventListener("resize", handleResize);
        // Cleanup
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // outside click handler to close the hamburger menu
    // and scroll handler to close the hamburger menu on scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsHamburgerMenu(false);
            }
        };
        const handleScroll = ()=>{
            setIsHamburgerMenu(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex fixed z-[999] items-center justify-center select-none ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobile"])() ? "top-[0.625rem] pb-[0.375rem]" : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTablet"])() ? "top-[0.625rem] pb-[0.375rem]" : "top-[1.875rem] pb-[0.375rem]"}`}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: menuRef,
                className: `lg:w-[56.25rem] md:w-[40.813rem] w-[21.875rem] ${isHamburgerMenu ? "h-max" : "h-[3.5rem]"} rounded-[2.75rem] flex ${isHamburgerMenu ? "flex-col" : "flex-row"} items-center lg:justify-between bg-background backdrop-blur-[0.563rem] ${isHamburgerMenu ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobile"])() ? "py-[6.5rem_1.25rem]" : "py-[4.125rem_1.25rem]"}` : "p-[0.375rem_0.438rem_0.375rem_1.25rem]"} backdrop-blur-[0.563rem] transform transform-gpu transition-all duration-300 ease-in`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        loading: "lazy",
                        src: `/Images/LandingPage/Navbar/veract-logo-white-font.svg`,
                        alt: "veract-logo",
                        className: `
                                absolute left-[1.25rem] w-[9.5rem] h-[2.75rem] object-contain cursor-pointer 
                                transition-all duration-500 ease-in 
                                ${isHamburgerMenu ? "top-[1.875rem]" : "top-[0.25rem]"}
                                lg:static lg:top-auto lg:left-auto
                            `,
                        onClick: ()=>{
                            sessionStorage.clear();
                            router.push("/");
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Navbar.tsx",
                        lineNumber: 109,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex ${isHamburgerMenu ? "flex-col" : "flex-row"} items-center justify-center ${isHamburgerMenu && "opacity-0 animate-fade-in"}`,
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${isHamburgerMenu ? "" : " max-sm:hidden max-md:hidden max-lg:hidden"} relative flex items-center justify-center group`,
                                    onClick: ()=>{
                                        if (item.status !== 'inactive') {
                                            sessionStorage.clear();
                                            setNavbarState(item.id);
                                            if (item.status == 'active') {
                                                router.push(item.link);
                                            }
                                        }
                                    },
                                    children: [
                                        item.id === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `/Images/LandingPage/Banner/Join.svg`,
                                            alt: "star icon",
                                            className: `absolute top-[7px] ${navbarState !== item.id ? 'group-hover:top-[5px]' : ''} right-[9px] transition-all duration-300 ease-in-out`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Navbar.tsx",
                                            lineNumber: 148,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `syneFont ${item.id === 3 ? 'p-[0.875rem_1.75rem_0.875rem_1rem] ' : 'p-[0.875rem_1rem] '} text-[1rem] leading-[1em] 
                                            ${item.status == 'active' && navbarState !== item.id ? `${item.id == 3 ? 'group-hover:p-[11px_1.75rem_15px_16px]' : 'group-hover:p-[11px_16px_15px_16px]'}` : ''}
                                            tracking-[-0.05em] text-nowrap ${navbarState === item.id && item.status == 'active' ? "text-primary-blue" : "text-white"} font-semibold ${item.status == 'inactive' ? "opacity-50 pointer-events-none" : "cursor-pointer group-hover:bg-[#FFFFFF1A] group-hover:text-primary-blue"}  
                                            transition-all duration-300 ease-in-out rounded-[1.625rem] 
                                            `,
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Navbar.tsx",
                                            lineNumber: 150,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute bottom-0 h-[0.125rem] rounded-[0.688rem] w-0 ${navbarState === item.id && item.status == 'active' ? "w-[calc(100%-3.563rem)]" : "w-0"} group-hover:w-[calc(100%-3.563rem)] ${item.status == 'active' ? 'bg-primary-blue' : ''} transition-all duration-300`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Navbar.tsx",
                                            lineNumber: 162,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/app/components/layout/Navbar.tsx",
                                    lineNumber: 131,
                                    columnNumber: 33
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    sessionStorage.clear();
                                    router.push("/contact-us");
                                },
                                className: `${isHamburgerMenu ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobile"])() ? "mt-[3.875rem]" : "mt-[3.125rem]"}` : "max-sm:hidden max-md:hidden max-lg:hidden"} syneFont hover:bg-[#4285F4] hover:text-white ${navbarState === 6 ? "bg-[#4285F4] text-white" : "bg-[#FFFFFF] text-black"} font-bold leading-[1.2em] tracking-[0em] p-[0.563rem_2.063rem] rounded-[1.875rem] cursor-pointer transition-all duration-300 ease-in-out ${!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTablet"])() ? "ml-[.625rem]" : ""} text-nowrap`,
                                children: "Talk to us"
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Navbar.tsx",
                                lineNumber: 170,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/layout/Navbar.tsx",
                        lineNumber: 127,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `min-lg:hidden fixed ${isHamburgerMenu ? "top-[1.875rem] right-[.625rem]" : "right-[.438rem]"} w-[2.75rem] h-[2.75rem] rounded-full ${isHamburgerMenu ? "bg-transparent" : "bg-[#FFFFFF1A]"} flex items-center justify-center transform transition-all duration-500 ease-in`,
                        onClick: ()=>{
                            setIsHamburgerMenu(!isHamburgerMenu);
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-col gap-[0.438rem] ${isHamburgerMenu ? "items-center" : "items-end"} justify-center transition-all duration-300 ease-in`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-[1.375rem] h-[0.125rem] bg-[#FFFFFF] transition-all duration-300 ease-in ${isHamburgerMenu ? "absolute rotate-45" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Navbar.tsx",
                                    lineNumber: 198,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${isHamburgerMenu ? "hidden" : ""} w-[.75rem] h-[0.125rem] bg-[#FFFFFF]`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Navbar.tsx",
                                    lineNumber: 202,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-[1.375rem] h-[0.125rem] bg-[#FFFFFF] transition-all duration-300 ease-in ${isHamburgerMenu ? "absolute -rotate-45" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Navbar.tsx",
                                    lineNumber: 206,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/layout/Navbar.tsx",
                            lineNumber: 194,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Navbar.tsx",
                        lineNumber: 184,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Navbar.tsx",
                lineNumber: 99,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/layout/Navbar.tsx",
            lineNumber: 90,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/layout/Navbar.tsx",
        lineNumber: 88,
        columnNumber: 9
    }, this);
}
}}),
"[project]/app/components/layout/Landing_Page/Footer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Footer = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(function Footer(props, ref) {
    const details = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LandingPageData"].footer;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const circleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showGlow, setShowGlow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const coords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const [loader, setLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Animate using RAF to prevent stuttering
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let animationFrame;
        const animate = ()=>{
            const circle = circleRef.current;
            if (circle) {
                circle.setAttribute("cx", String(coords.current.x));
                circle.setAttribute("cy", String(coords.current.y));
            }
            animationFrame = requestAnimationFrame(animate);
        };
        animationFrame = requestAnimationFrame(animate);
        return ()=>cancelAnimationFrame(animationFrame);
    }, []);
    const handleMouseMove = (e)=>{
        const svg = svgRef.current;
        if (!svg) return;
        const point = svg.createSVGPoint();
        point.x = e.clientX;
        point.y = e.clientY;
        const ctm = svg.getScreenCTM();
        if (!ctm) return;
        const local = point.matrixTransform(ctm.inverse());
        coords.current = {
            x: local.x,
            y: local.y
        };
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        requestAnimationFrame(()=>{
            setLoader(true);
        });
    }, []);
    return loader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col items-center justify-center relative bg-primary-text scrollSnap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ref: svgRef,
                viewBox: "0 20.34 156.69 33.59",
                className: "w-[902px] h-[342px] hidden lg:block",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                id: "text-clip",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M10.40 53.44L0 26.15L7.79 26.15L13.06 41.70Q13.50 43.07 13.76 44.58Q14.01 46.09 14.11 47.29L14.31 47.29Q14.38 46.00 14.66 44.53Q14.94 43.07 15.41 41.70L20.65 26.15L28.44 26.15L18.04 53.44L10.40 53.44ZM43.60 25.63Q47.39 25.63 50.12 27.09Q52.86 28.54 54.35 31.30Q55.83 34.06 55.83 38.04L55.83 41.65L38.23 41.65Q38.35 44.80 40.12 46.59Q41.89 48.39 45.04 48.39Q47.66 48.39 49.83 47.85Q52.00 47.31 54.30 46.24L54.30 52.00Q52.27 53.00 50.06 53.47Q47.85 53.93 44.70 53.93Q40.60 53.93 37.44 52.42Q34.28 50.90 32.48 47.80Q30.69 44.70 30.69 39.99Q30.69 35.21 32.31 32.02Q33.94 28.83 36.84 27.23Q39.75 25.63 43.60 25.63M43.65 30.93Q41.48 30.93 40.05 32.32Q38.62 33.72 38.40 36.69L48.85 36.69Q48.83 35.03 48.25 33.74Q47.68 32.45 46.55 31.69Q45.41 30.93 43.65 30.93ZM77.12 25.63Q77.69 25.63 78.43 25.70Q79.17 25.76 79.64 25.85L79.08 32.84Q78.71 32.71 78.04 32.65Q77.37 32.59 76.88 32.59Q75.44 32.59 74.08 32.96Q72.73 33.33 71.66 34.14Q70.58 34.96 69.96 36.29Q69.34 37.62 69.34 39.55L69.34 53.44L61.89 53.44L61.89 26.15L67.53 26.15L68.63 30.74L68.99 30.74Q69.80 29.35 71.01 28.19Q72.22 27.03 73.77 26.33Q75.32 25.63 77.12 25.63ZM95.78 25.59Q101.27 25.59 104.20 27.98Q107.13 30.37 107.13 35.25L107.13 53.44L101.93 53.44L100.49 49.73L100.29 49.73Q99.12 51.20 97.90 52.12Q96.68 53.05 95.09 53.49Q93.51 53.93 91.24 53.93Q88.82 53.93 86.90 53.00Q84.99 52.08 83.89 50.16Q82.79 48.24 82.79 45.29Q82.79 40.94 85.84 38.88Q88.89 36.82 95.00 36.60L99.73 36.45L99.73 35.25Q99.73 33.11 98.61 32.10Q97.49 31.10 95.48 31.10Q93.51 31.10 91.60 31.67Q89.70 32.23 87.79 33.08L85.33 28.05Q87.50 26.90 90.20 26.25Q92.90 25.59 95.78 25.59M99.73 40.80L96.85 40.89Q93.24 40.99 91.83 42.19Q90.43 43.38 90.43 45.34Q90.43 47.05 91.43 47.77Q92.43 48.49 94.04 48.49Q96.44 48.49 98.08 47.07Q99.73 45.65 99.73 43.04L99.73 40.80ZM125.88 53.93Q121.83 53.93 118.97 52.45Q116.11 50.98 114.62 47.88Q113.13 44.78 113.13 39.94Q113.13 34.94 114.83 31.77Q116.53 28.61 119.54 27.12Q122.56 25.63 126.54 25.63Q129.37 25.63 131.43 26.18Q133.50 26.73 135.03 27.49L132.84 33.25Q131.08 32.54 129.57 32.09Q128.05 31.64 126.54 31.64Q124.58 31.64 123.29 32.56Q122.00 33.47 121.36 35.30Q120.73 37.13 120.73 39.89Q120.73 42.60 121.41 44.38Q122.09 46.17 123.39 47.03Q124.68 47.90 126.54 47.90Q128.86 47.90 130.66 47.28Q132.47 46.66 134.18 45.53L134.18 51.90Q132.47 52.98 130.60 53.45Q128.74 53.93 125.88 53.93ZM152.00 48.00Q153.22 48.00 154.38 47.75Q155.54 47.51 156.69 47.14L156.69 52.69Q155.49 53.22 153.72 53.58Q151.95 53.93 149.85 53.93Q147.41 53.93 145.47 53.14Q143.53 52.34 142.42 50.38Q141.31 48.41 141.31 44.90L141.31 31.74L137.74 31.74L137.74 28.59L141.85 26.10L143.99 20.34L148.75 20.34L148.75 26.15L156.40 26.15L156.40 31.74L148.75 31.74L148.75 44.90Q148.75 46.46 149.65 47.23Q150.54 48.00 152.00 48.00Z"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: "glow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                        in: "SourceGraphic",
                                        stdDeviation: "500",
                                        result: "blur"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "blur"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "SourceGraphic"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "#1c1c1c",
                        pointerEvents: "visiblePainted",
                        d: "M10.40 53.44L0 26.15L7.79 26.15L13.06 41.70Q13.50 43.07 13.76 44.58Q14.01 46.09 14.11 47.29L14.31 47.29Q14.38 46.00 14.66 44.53Q14.94 43.07 15.41 41.70L20.65 26.15L28.44 26.15L18.04 53.44L10.40 53.44ZM43.60 25.63Q47.39 25.63 50.12 27.09Q52.86 28.54 54.35 31.30Q55.83 34.06 55.83 38.04L55.83 41.65L38.23 41.65Q38.35 44.80 40.12 46.59Q41.89 48.39 45.04 48.39Q47.66 48.39 49.83 47.85Q52.00 47.31 54.30 46.24L54.30 52.00Q52.27 53.00 50.06 53.47Q47.85 53.93 44.70 53.93Q40.60 53.93 37.44 52.42Q34.28 50.90 32.48 47.80Q30.69 44.70 30.69 39.99Q30.69 35.21 32.31 32.02Q33.94 28.83 36.84 27.23Q39.75 25.63 43.60 25.63M43.65 30.93Q41.48 30.93 40.05 32.32Q38.62 33.72 38.40 36.69L48.85 36.69Q48.83 35.03 48.25 33.74Q47.68 32.45 46.55 31.69Q45.41 30.93 43.65 30.93ZM77.12 25.63Q77.69 25.63 78.43 25.70Q79.17 25.76 79.64 25.85L79.08 32.84Q78.71 32.71 78.04 32.65Q77.37 32.59 76.88 32.59Q75.44 32.59 74.08 32.96Q72.73 33.33 71.66 34.14Q70.58 34.96 69.96 36.29Q69.34 37.62 69.34 39.55L69.34 53.44L61.89 53.44L61.89 26.15L67.53 26.15L68.63 30.74L68.99 30.74Q69.80 29.35 71.01 28.19Q72.22 27.03 73.77 26.33Q75.32 25.63 77.12 25.63ZM95.78 25.59Q101.27 25.59 104.20 27.98Q107.13 30.37 107.13 35.25L107.13 53.44L101.93 53.44L100.49 49.73L100.29 49.73Q99.12 51.20 97.90 52.12Q96.68 53.05 95.09 53.49Q93.51 53.93 91.24 53.93Q88.82 53.93 86.90 53.00Q84.99 52.08 83.89 50.16Q82.79 48.24 82.79 45.29Q82.79 40.94 85.84 38.88Q88.89 36.82 95.00 36.60L99.73 36.45L99.73 35.25Q99.73 33.11 98.61 32.10Q97.49 31.10 95.48 31.10Q93.51 31.10 91.60 31.67Q89.70 32.23 87.79 33.08L85.33 28.05Q87.50 26.90 90.20 26.25Q92.90 25.59 95.78 25.59M99.73 40.80L96.85 40.89Q93.24 40.99 91.83 42.19Q90.43 43.38 90.43 45.34Q90.43 47.05 91.43 47.77Q92.43 48.49 94.04 48.49Q96.44 48.49 98.08 47.07Q99.73 45.65 99.73 43.04L99.73 40.80ZM125.88 53.93Q121.83 53.93 118.97 52.45Q116.11 50.98 114.62 47.88Q113.13 44.78 113.13 39.94Q113.13 34.94 114.83 31.77Q116.53 28.61 119.54 27.12Q122.56 25.63 126.54 25.63Q129.37 25.63 131.43 26.18Q133.50 26.73 135.03 27.49L132.84 33.25Q131.08 32.54 129.57 32.09Q128.05 31.64 126.54 31.64Q124.58 31.64 123.29 32.56Q122.00 33.47 121.36 35.30Q120.73 37.13 120.73 39.89Q120.73 42.60 121.41 44.38Q122.09 46.17 123.39 47.03Q124.68 47.90 126.54 47.90Q128.86 47.90 130.66 47.28Q132.47 46.66 134.18 45.53L134.18 51.90Q132.47 52.98 130.60 53.45Q128.74 53.93 125.88 53.93ZM152.00 48.00Q153.22 48.00 154.38 47.75Q155.54 47.51 156.69 47.14L156.69 52.69Q155.49 53.22 153.72 53.58Q151.95 53.93 149.85 53.93Q147.41 53.93 145.47 53.14Q143.53 52.34 142.42 50.38Q141.31 48.41 141.31 44.90L141.31 31.74L137.74 31.74L137.74 28.59L141.85 26.10L143.99 20.34L148.75 20.34L148.75 26.15L156.40 26.15L156.40 31.74L148.75 31.74L148.75 44.90Q148.75 46.46 149.65 47.23Q150.54 48.00 152.00 48.00Z",
                        onMouseEnter: ()=>setShowGlow(true),
                        onMouseLeave: ()=>setShowGlow(false),
                        onMouseMove: handleMouseMove
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    showGlow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        ref: circleRef,
                        r: 10,
                        fill: "#004FD1",
                        filter: "url(#glow)",
                        clipPath: "url(#text-clip)",
                        style: {
                            pointerEvents: "none"
                        },
                        className: "w-[80.33px] h-[119.31px] blur-[8px]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden block openSansFont text-[6.563rem] md:text-[14.875rem] text-[#1C1C1C] font-bold leading-[1.2em] tracking-[0em] mt-[7.375rem] md:mt-0 z-[10]",
                children: "veract"
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center gap-[88px] pb-[15px] rounded-[1.375rem] bg-[#0F0E14] lg:mt-[-7.95rem] md:mt-[-6.95rem] mt-[-2.95rem] z-[100]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex z-[100] md:flex-row flex-col lg:w-[70rem] w-full h-max  gap-[77px] md:gap-[60px] lg:gap-[142px] md:pt-[79px] pt-[48px] md:px-[50px] px-[26px] md:justify-center justify-start items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-[165px] items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:w-[272px] md:w-[228px] w-full h-max flex flex-col items-start justify-center gap-[28px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "openSansFont text-[3.25rem] text-white font-bold leading-[1.2em] tracking-[0em]",
                                                children: [
                                                    "ver",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-primary-blue",
                                                        children: "act"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 22
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "openSansFont lg:text-[1.125rem] md:text-[1rem] text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em]",
                                                children: details.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-end justify-center gap-[32px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: details.footer_logo_list[0].image,
                                                        alt: "logo image",
                                                        className: "w-[41px] object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative flex flex-col items-center justify-center gap-[0.5rem] md:transform md:scale-[150%] lg:transform lg:scale-[100%]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                loading: "lazy",
                                                                src: details.footer_logo_list[1].image,
                                                                alt: "logo image",
                                                                className: "w-[56px] object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                loading: "lazy",
                                                                src: details.footer_logo_list[2].image,
                                                                alt: "logo image",
                                                                className: "w-[56px] object-cover absolute top-[calc(100%+0.5rem)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: details.footer_logo_list[3].image,
                                                        alt: "logo image",
                                                        className: "w-[88px] object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex flex-col items-center justify-center gap-[0.625rem]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row items-center justify-center gap-[0.625rem]",
                                                children: details.socialMediaIcons.slice(0, 2).map((icon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: icon.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-[2.5rem] h-[2.5rem] rounded-full bg-white flex items-center justify-center cursor-pointer",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                loading: "lazy",
                                                                src: icon.image,
                                                                alt: "social-media icon"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, icon.id, false, {
                                                            fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, icon.id, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row items-center justify-center gap-[0.625rem]",
                                                children: details.socialMediaIcons.slice(2, 4).map((icon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: icon.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-[2.5rem] h-[2.5rem] rounded-full bg-white flex items-center justify-center cursor-pointer",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                loading: "lazy",
                                                                src: icon.image,
                                                                alt: "social-media icon"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, icon.id, false, {
                                                            fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, icon.id, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start justify-center md:gap-[100px] gap-[44px] mt-[12px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row items-start justify-start lg:gap-[113px] md:gap-[44px] gap-[23px] flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-start justify-center gap-[1.25rem] md:w-[130px] w-[116px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "openSansFont text-[16px] lg:text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]",
                                                        children: details.quickLinks.company.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-start justify-center gap-[0.625rem]",
                                                        children: details.quickLinks.company.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `openSansFont text-[14px] md:text-[1rem] lg:text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] ${link.status == "active" ? "cursor-pointer" : "opacity-50 pointer-events-none"}`,
                                                                onClick: ()=>{
                                                                    if (link.status == "active") {
                                                                        const currentScrollPosition = window.scrollY || window.pageYOffset;
                                                                        sessionStorage.setItem(props.sessionId || "footer-landing-page", currentScrollPosition.toString());
                                                                        router.push(link.link);
                                                                    }
                                                                },
                                                                children: link.title
                                                            }, link.id, false, {
                                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-start justify-center gap-[1.25rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "openSansFont text-[16px] md:text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]",
                                                        children: details.quickLinks.services.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-start justify-center gap-[0.625rem]",
                                                        children: details.quickLinks.services.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `openSansFont text-[14px] md:text-[1rem] lg:text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] ${link.status == "active" ? "cursor-pointer" : "opacity-50 pointer-events-none"}`,
                                                                onClick: ()=>{
                                                                    if (link.status == "active") {
                                                                        router.push(link.link);
                                                                    }
                                                                },
                                                                children: link.title
                                                            }, link.id, false, {
                                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row items-start md:justify-center justify-start lg:gap-[101px] md:gap-[32px] gap-[23px] flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-start justify-center gap-[1.25rem] lg:w-max md:w-[130px] w-[116px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "openSansFont text-[16px] md:text-[1rem] lg:text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]",
                                                        children: details.quickLinks.contact.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-start justify-center gap-[0.625rem]",
                                                        children: details.quickLinks.contact.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: link.type === "phone" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: `tel:${link.title.replace(/\s+/g, "")}`,
                                                                    className: "openSansFont text-[14px] md:text-[1rem] lg:text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer",
                                                                    children: link.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 27
                                                                }, this) : link.type === "email" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: `mailto:${link.title}`,
                                                                    className: "openSansFont text-[14px] md:text-[1rem] lg:text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer",
                                                                    children: link.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "openSansFont text-[14px] md:text-[1rem] lg:text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer",
                                                                    children: link.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                    lineNumber: 261,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, link.id, false, {
                                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-start md:justify-start justify-center gap-[1.25rem] md-w-[180px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "openSansFont text-[16px] lg:text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]",
                                                        children: details.quickLinks.address.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://maps.app.goo.gl/raqAmwGuLW77jdLf8",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "lg:w-[15.75rem] w-[184px] openSansFont text-[14px] md:text-[1rem] lg:text-[1.125rem] text-[#8F9FA3] font-normal md:leading-[1.2em] leading-[1.6em] tracking-[0em] pr-[1rem] md:pr-[0rem]",
                                                            children: details.quickLinks.address.address
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden flex flex-col items-center justify-center gap-[0.625rem]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row items-center justify-center gap-[0.625rem]",
                                        children: details.socialMediaIcons.slice(0, 2).map((icon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: icon.link,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[2.5rem] h-[2.5rem] rounded-full bg-white flex items-center justify-center cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        loading: "lazy",
                                                        src: icon.image,
                                                        alt: "social-media icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 23
                                                    }, this)
                                                }, icon.id, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 21
                                                }, this)
                                            }, icon.id, false, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 288,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row items-center justify-center gap-[0.625rem]",
                                        children: details.socialMediaIcons.slice(2, 4).map((icon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: icon.link,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[2.5rem] h-[2.5rem] rounded-full bg-white flex items-center justify-center cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        loading: "lazy",
                                                        src: icon.image,
                                                        alt: "social-media icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 23
                                                    }, this)
                                                }, icon.id, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 21
                                                }, this)
                                            }, icon.id, false, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 309,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: ref,
                        className: "md:w-[13.375rem] w-full text-[0.75rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] flex flex-col items-center justify-center z-20 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "© 2025 — Veract Consultancy Pvt. Ltd."
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                lineNumber: 331,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "All Rights reserved"
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
        lineNumber: 55,
        columnNumber: 7
    }, this);
});
const __TURBOPACK__default__export__ = Footer;
}}),
"[project]/app/components/layout/ContactUs/contact_us.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Contact_Us)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-phone-input-2/lib/lib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Landing_Page/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__parsePhoneNumber__as__parsePhoneNumberFromString$3e$__ = __turbopack_context__.i("[project]/node_modules/libphonenumber-js/min/exports/parsePhoneNumber.js [app-ssr] (ecmascript) <export parsePhoneNumber as parsePhoneNumberFromString>");
"use client";
;
;
;
;
;
;
;
;
function Contact_Us() {
    // Form input control fields
    const [firstName, setFirstName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [lastName, setLastName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [companyName, setCompanyName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [mobileNumber, setMobileNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("91");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("+91");
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submissionFailed, setSubmissionFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const footerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Touched fields for onBlur tracking
    const [touchedFields, setTouchedFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        firstName: false,
        email: false,
        mobileNumber: false
    });
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLenis"])();
    // Error messages
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        firstName: "",
        email: "",
        mobileNumber: ""
    });
    const handleBlur = (field)=>{
        setTouchedFields((prev)=>({
                ...prev,
                [field]: true
            }));
        // this line is commented out for future purpose and error red are for placeholder purpose in future changes with respect to design
        switch(field){
            case "firstName":
                setErrors((prev)=>({
                        ...prev,
                        firstName: firstName.trim() === "" ? "*Required" : !isValidName(firstName) ? "Please enter a valid name" : ""
                    }));
                break;
            case "email":
                setErrors((prev)=>({
                        ...prev,
                        email: email.trim() === "" ? "*Required" : !isValidEmail(email) ? "Please enter a valid mail ID" : ""
                    }));
                break;
            case "mobileNumber":
                setErrors((prev)=>({
                        ...prev,
                        mobileNumber: isOnlyCountryCode(mobileNumber, countryCode) || mobileNumber.trim() === "" ? "*Required" : !isValidMobileNumber(mobileNumber) ? "Please enter a valid mobile number" : ""
                    }));
                break;
        }
    };
    //check if the mobile number is only the country code
    const isOnlyCountryCode = (mobile, code)=>{
        return mobile === code.replace("+", "");
    };
    // Validate email format
    const isValidEmail = (email)=>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    // Validate name format (only letters and spaces)
    const isValidName = (name)=>{
        return /^[a-zA-Z\s]+$/.test(name);
    };
    // Validate mobile number (not empty)
    const isValidMobileNumber = (mobile)=>{
        try {
            const phoneNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__parsePhoneNumber__as__parsePhoneNumberFromString$3e$__["parsePhoneNumberFromString"])("+" + mobile);
            if (!phoneNumber) return false;
            return phoneNumber.isValid();
        } catch (e) {
            return false;
        }
    };
    // Check if the form is valid
    // This function checks if all required fields are filled correctly
    const formValid = firstName.trim() !== "" && isValidEmail(email) && mobileNumber.trim() !== "" && !isOnlyCountryCode(mobileNumber, countryCode) && isValidMobileNumber(mobileNumber);
    // This function handles the form submission
    const handleSubmitContact = async ()=>{
        if (!formValid || isLoading) return;
        setIsLoading(true);
        try {
            const response = await fetch("/api/contact-us", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: `${firstName} ${lastName}`.trim(),
                    email,
                    phone: `+${mobileNumber}`,
                    message,
                    company: companyName
                })
            });
            const data = await response.json();
            if (data.success) {
                resetFormFields();
                setSubmitted(true);
                setTimeout(()=>setSubmitted(false), 3000);
            } else {
                setSubmissionFailed(true);
                resetFormFields();
                setTimeout(()=>setSubmissionFailed(false), 3000);
            }
        } catch (error) {
            console.log(error);
            setSubmissionFailed(true);
            resetFormFields();
            setTimeout(()=>setSubmissionFailed(false), 3000);
        } finally{
            setIsLoading(false);
        }
    };
    // Reset form fields to initial state
    const resetFormFields = ()=>{
        setFirstName("");
        setLastName("");
        setCompanyName("");
        setEmail("");
        setMobileNumber("91");
        setMessage("");
        setCountryCode("+91");
        setTouchedFields({
            firstName: false,
            email: false,
            mobileNumber: false
        });
        setErrors({
            firstName: "",
            email: "",
            mobileNumber: ""
        });
    };
    //loading component
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLoaded(true);
    }, []);
    // Prevent scroll on wheel event when dropdown is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function wheelHandler(e) {
            if (e.target instanceof HTMLElement && e.target.closest(".custom-phone-dropdown")) {
                e.stopPropagation();
            }
        }
        document.addEventListener("wheel", wheelHandler, {
            passive: false,
            capture: true
        });
        return ()=>document.removeEventListener("wheel", wheelHandler, {
                capture: true
            });
    }, []);
    // Scroll to top on component load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (loaded && lenis) {
            lenis.scrollTo(0, {
                duration: 1,
                easing: (t)=>t
            }); // linear scroll to top
        }
    }, [
        loaded,
        lenis
    ]);
    // Restore scroll position from session storage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedScrollPosition = sessionStorage.getItem("footer-contact-us");
        if (savedScrollPosition) {
            setTimeout(()=>{
                // Restore the saved scroll position
                const scrollPosition = parseInt(savedScrollPosition);
                if (!isNaN(scrollPosition)) {
                    window.scrollTo(0, scrollPosition);
                }
                sessionStorage.clear();
            }, 100);
        }
    }, []);
    return loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-white flex flex-col items-center justify-center w-full h-max bg-[#0d0d0d] pb-[40px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dmSansFont mt-[160px] text-center text-[#4285F4] text-[36px] tracking-[-3.8px] leading-[90px] font-medium",
                children: "Got an idea?"
            }, void 0, false, {
                fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full p-[0_1.875rem] md:p-[0_3.125rem] lg:p-[0_230px] syneFont text-center text-white text-[36px] md:text-[54px] lg:text-[86px] tracking-[-3.4px] md:tracking-[-3.8px] leading-[55px] md:leading-[54px] lg:leading-[90px] font-semibold",
                children: "Let's build something great together"
            }, void 0, false, {
                fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                lineNumber: 216,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full p-[0_1.875rem] md:p-[0_3.125rem] lg:p-[0_120px] flex flex-col lg:flex-row items-start justify-center gap-[1.25rem] mt-[90px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-[888px] rounded-[30px] p-[11px] border border-white/8 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "dmSansFont flex flex-col border border-white/8 rounded-[20px] p-[1.875rem] md:p-[40px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row  w-full items-center gap-[24px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full md:w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[14px] font-bold",
                                                    children: "First name*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    type: "text",
                                                    value: firstName,
                                                    onChange: (e)=>{
                                                        const value = e.target.value;
                                                        setFirstName(value);
                                                        if (touchedFields.firstName) {
                                                            if (value.trim() === "") {
                                                                setErrors((prev)=>({
                                                                        ...prev,
                                                                        firstName: "*Required"
                                                                    }));
                                                            } else if (!isValidName(value)) {
                                                                setErrors((prev)=>({
                                                                        ...prev,
                                                                        firstName: "Please enter a valid name"
                                                                    }));
                                                            } else {
                                                                setErrors((prev)=>({
                                                                        ...prev,
                                                                        firstName: ""
                                                                    }));
                                                            }
                                                        }
                                                    },
                                                    onBlur: ()=>handleBlur("firstName"),
                                                    placeholder: "First name",
                                                    className: `mt-[14px] w-full h-[52px] text-[14px] font-medium rounded-[5px] px-[20px] text-white placeholder-white/60 bg-white/10 backdrop-blur-md border ${errors.firstName && touchedFields.firstName ? "border-[#FF4040]" : "border-white/15"} shadow-[0_4px_30px_rgba(0,0,0,0.1)] outline-none focus:ring-[1px] ${errors.firstName && touchedFields.firstName ? "focus:ring-[#FF4040]" : "focus:ring-[#4287F5]"} transition-all duration-300 ease-in-out`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this),
                                                errors.firstName && touchedFields.firstName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#FF4040] text-[12px] mt-[4px] absolute top-full left-0",
                                                    children: errors.firstName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full md:w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[14px] font-bold",
                                                    children: "Last name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: lastName,
                                                    onChange: (e)=>setLastName(e.target.value),
                                                    placeholder: "Last name",
                                                    className: "mt-[14px] w-full h-[52px] text-[14px] font-medium rounded-[5px] px-[20px] text-white placeholder-white/60 bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] outline-none focus:ring-[1px] focus:ring-[#4287F5] transition-all duration-300 ease-in-out"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-[30px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[14px] font-bold",
                                            children: "Company name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 283,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: companyName,
                                            onChange: (e)=>setCompanyName(e.target.value),
                                            placeholder: "Company name",
                                            className: "mt-[14px] w-full h-[52px] text-[14px] font-medium rounded-[5px] px-[20px] text-white placeholder-white/60 bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] outline-none focus:ring-[1px] focus:ring-[#4287F5] transition-all duration-300 ease-in-out"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                    lineNumber: 282,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row w-full items-center gap-[24px] mt-[30px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full md:w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[14px] font-bold",
                                                    children: "Email*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    type: "email",
                                                    value: email,
                                                    onChange: (e)=>{
                                                        const value = e.target.value;
                                                        setEmail(value);
                                                        if (touchedFields.email) {
                                                            setErrors((prev)=>({
                                                                    ...prev,
                                                                    email: value.trim() === "" ? "*Required" : !isValidEmail(value) ? "Please enter a valid mail ID" : ""
                                                                }));
                                                        }
                                                    },
                                                    onBlur: ()=>handleBlur("email"),
                                                    placeholder: "you@company.com",
                                                    className: `mt-[14px] w-full h-[52px] text-[14px] font-medium rounded-[5px] px-[20px] text-white placeholder-white/60 bg-white/10 backdrop-blur-md border-[0.5px] ${errors.email && touchedFields.email ? "border-[#FF4040]" : "border-white/15"} shadow-[0_4px_30px_rgba(0,0,0,0.1)] outline-none focus:ring-[1px] ${errors.email && touchedFields.email ? "focus:ring-[#FF4040]" : "focus:ring-[#4287F5]"} transition-all duration-300 ease-in-out`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 19
                                                }, this),
                                                errors.email && touchedFields.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#FF4040] text-[12px] mt-[4px] absolute top-full left-0",
                                                    children: errors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full md:w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[14px] font-bold",
                                                    children: "Mobile number*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `mt-[14px] relative rounded-[5px] transition-all duration-300 ease-in-out border-solid focus:ring-[1px] border border-white/20 ${errors.mobileNumber && touchedFields.mobileNumber ? "border-0 focus-within:ring-[#FF4040]" : " focus-within:ring-[#4287F5]"} focus-within:ring-[1px]`,
                                                    onBlur: ()=>{
                                                        setTimeout(()=>{
                                                            if (!document.activeElement?.closest(".react-tel-input")) {
                                                                handleBlur("mobileNumber");
                                                            }
                                                        }, 100);
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            country: "in",
                                                            value: mobileNumber,
                                                            onChange: (phone, countryData)=>{
                                                                setMobileNumber(phone);
                                                                setCountryCode(`+${countryData.dialCode}`);
                                                                if (touchedFields.mobileNumber) {
                                                                    setErrors((prev)=>({
                                                                            ...prev,
                                                                            mobileNumber: phone.trim() === "" ? "*Required" : !isValidMobileNumber(phone) ? "Please enter a valid mobile number" : ""
                                                                        }));
                                                                }
                                                            },
                                                            inputStyle: {
                                                                width: "100%",
                                                                height: "52px",
                                                                borderRadius: "5px",
                                                                background: "rgba(255, 255, 255, 0.1)",
                                                                border: errors.mobileNumber && touchedFields.mobileNumber ? "1px solid red" : "0px solid rgba(255, 255, 255, 0.1)",
                                                                paddingLeft: "50px",
                                                                color: "white"
                                                            },
                                                            buttonStyle: {
                                                                background: "transparent",
                                                                border: "none"
                                                            },
                                                            dropdownStyle: {
                                                                backgroundColor: "#1a1a1a",
                                                                color: "#fff",
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                overflowY: "auto",
                                                                maxHeight: "200px",
                                                                gap: "10px"
                                                            },
                                                            containerStyle: {
                                                                width: "100%",
                                                                height: "52px"
                                                            },
                                                            dropdownClass: "custom-phone-dropdown"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 21
                                                        }, this),
                                                        errors.mobileNumber && touchedFields.mobileNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#FF4040] text-[12px] mt-[4px] absolute top-full left-0",
                                                            children: errors.mobileNumber
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                            lineNumber: 407,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 335,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-[30px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[14px] font-bold",
                                            children: "Message"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 417,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: message,
                                            onChange: (e)=>setMessage(e.target.value),
                                            placeholder: "Tell us a little about your enquiry...",
                                            className: "mt-[14px] w-full h-[100px] text-[14px] font-medium rounded-[5px] p-[18px] text-white placeholder-white/60 bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] outline-none focus:ring-[1px] focus:ring-[#4287F5] transition-all duration-300 ease-in-out"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                    lineNumber: 416,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `text-nowrap mt-[30px] w-full px-[77px] py-[12px] flex items-center justify-center rounded-[5px] transition-all duration-300 ease-in-out ${formValid && !isLoading && !submitted && !submissionFailed ? "bg-[#4285F4] cursor-pointer text-white border-[3px] border-white/15 contact_us_shadow" : isLoading ? "bg-[#4285F4]/80 text-white border-[3px] border-white/15 contact_us_shadow opacity-50" : submitted ? "bg-[#4285F4] pointer-events-none text-white cursor-default border-[3px] border-white/15 contact_us_shadow" : submissionFailed ? "bg-[#FF4040]/15 pointer-events-none text-[#FF4040] border-[3px] border-white/15 error_contact_us_shadow" : "bg-[#4285F4] pointer-events-none text-white border-[3px] border-white/15 contact_us_shadow opacity-50"}`,
                                    onClick: ()=>{
                                        if (formValid && !submitted && !isLoading) handleSubmitContact();
                                    },
                                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/Icons/contact-us/loader.png",
                                        alt: "loader",
                                        className: "w-[22px] h-[22px] animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                        lineNumber: 445,
                                        columnNumber: 19
                                    }, this) : submitted ? "Thank You" : submissionFailed ? "Something went wrong" : "Submit Now"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                    lineNumber: 427,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col md:flex-row lg:flex-col flex-wrap gap-[1.5rem] items-start justify-between max-w-full lg:max-w-[292px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-[calc(50%-1.5rem)] lg:w-full dmSansFont rounded-[30px] p-[11px] border border-white/8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col border border-white/8 rounded-[20px] p-[36px] md:p-[40px] gap-[14px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-[10px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/Icons/contact-us/mail.svg",
                                                    alt: "mail-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[16px] font-bold",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[#0055FE] rounded-[8px] px-[10px] py-[4px] text-[12px] font-bold",
                                                    children: "24/7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 465,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/horizantal_design.png`,
                                            alt: "design-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 472,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "mailto:info@veract.io",
                                            className: "text-[16px] font-medium text-white/50 hover:text-white cursor-pointer",
                                            children: "info@veract.io"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 476,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                    lineNumber: 464,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                lineNumber: 463,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-[calc(50%-1.5rem)] lg:w-full rounded-[30px] p-[11px] border border-white/8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col border border-white/8 rounded-[20px] p-[36px] md:p-[40px] gap-[14px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-[10px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/Icons/contact-us/contact.svg",
                                                    alt: "contact-us-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[16px] font-bold",
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 492,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 487,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/horizantal_design.png`,
                                            alt: "design-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 494,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+919789991565",
                                            className: "text-[16px] font-medium text-white/50 hover:text-white cursor-pointer",
                                            children: "+91 97899 91565"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 498,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+919962837650",
                                            className: "text-[16px] font-medium text-white/50 hover:text-white cursor-pointer",
                                            children: "+91 99628 37650"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 504,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+17377101523",
                                            className: "text-[16px] font-medium text-white/50 hover:text-white cursor-pointer",
                                            children: "+1 7377101523"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 510,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                    lineNumber: 486,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                lineNumber: 485,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-[calc(50%-1.5rem)] lg:w-full rounded-[30px] p-[11px] border border-white/8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col border border-white/8 rounded-[20px] p-[36px] md:p-[40px] gap-[14px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-[10px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/Icons/contact-us/location.svg",
                                                    alt: "loaction-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[16px] font-bold",
                                                    children: "Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 521,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/horizantal_design.png`,
                                            alt: "design-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 528,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://maps.app.goo.gl/raqAmwGuLW77jdLf8",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-[16px] font-medium text-white/50 hover:text-white",
                                            children: "37, Aspace, Brindavan Street, Srinivasa Nagar, Madipakkam, Chennai - 600 091"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                            lineNumber: 532,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                    lineNumber: 520,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                                lineNumber: 519,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                        lineNumber: 461,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                lineNumber: 219,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ref: footerRef,
                sessionId: "footer-contact-us"
            }, void 0, false, {
                fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
                lineNumber: 545,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/layout/ContactUs/contact_us.tsx",
        lineNumber: 212,
        columnNumber: 7
    }, this);
}
}}),
"[project]/app/contact-us/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// import LenisProvider from '@/app/LenisProvider';
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$ContactUs$2f$contact_us$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/ContactUs/contact_us.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Page() {
    return(// <LenisProvider>
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-screen flex items-center justify-center flex-col bg-[#0d0d0d] select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/contact-us/page.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$ContactUs$2f$contact_us$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/contact-us/page.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/contact-us/page.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this));
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__f725f2bd._.js.map