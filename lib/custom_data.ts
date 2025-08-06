export const baseUrl =
  "https://veract-website-assets.s3.ap-south-1.amazonaws.com";

export const navItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
    status: "active",
  },
  {
    id: 2,
    name: "Services",
    link: "/services",
    status: "active",
  },
  {
    id: 3,
    name: "Agentic AI",
    icon: `/Images/LandingPage/Banner/Join.svg`,
    link: "/agentic-ai",
    status: "active",
  },
  {
    id: 4,
    name: "Case Studies",
    link: "/case-studies",
    status: "active",
  },
  {
    id: 5,
    name: "Blogs",
    link: "",
    status: "inactive",
  },
];

export const caseStudyData = {
  "infrared-thermography": {
    id: 1,
    banner: {
      title: "Enhancing Animal Health with Thermography",
      description:
        "A reliable, stress-free method for monitoring livestock health and preventing disease outbreaks.",
      image: `${baseUrl}/Images/case-studies/thermal/Hero bg img.png`,
    },
    showReel: {
      title: "SHOWREEL",
      video: [
        `${baseUrl}/Images/case-studies/thermal/ShowReel/web view-thermal showwreel.mp4`,
        `${baseUrl}/Images/case-studies/thermal/ShowReel/tab view-thermal showreel.mp4`,
        `${baseUrl}/Images/case-studies/thermal/ShowReel/mobile view-thermal showreel.mp4`,
      ],
      youtube_url:
        "https://www.youtube.com/embed/SI8GxhQg_oA?si=zzuciOt549NiVPer",
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
              `,
    },
    challenges: {
      title: "Challenges & Goals",
      indication_icon: "/Images/case-studies/challenges and goals-icon.svg",
      video: [
        `${baseUrl}/Images/case-studies/thermal/bottleneck video- web view.mp4`,
        `${baseUrl}/Images/case-studies/thermal/bottleneck-tab view video.mp4`,
        `${baseUrl}/Images/case-studies/thermal/bottleneck video-mobile view.mp4`,
      ],
      // "",
      challenge_description: "BOTTLENECK",
      challenge_solution:
        "Designing an integrated system that connects thermal cameras and IoT devices to monitor",
      challenge_solution_highlighted:
        "livestock health with accuracy, reliability, and real-time insights.",
      solution_list: [
        {
          id: 1,
          title: "Capture Data Accurately",
        },
        {
          id: 2,
          title: "Support Timely Decisions",
        },
        {
          id: 3,
          title: "Improve Veterinary Efficiency",
        },
        {
          id: 4,
          title: "Visualize Udder Health",
        },
        {
          id: 5,
          title: "Ensure System Stability",
        },
        {
          id: 6,
          title: "Enable Seamless Communication",
        },
      ],
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
          description:
            "Enhance your brand's impact with our corporate video expertise. We create engaging content for businesses, from promotions to training materials.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[8rem]",
        },
        {
          title: "Seamless Integration",
          bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/thermal/Services/seamless_integration.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
          description:
            "Ensured smooth interaction between thermal cameras, IoT devices, and software components.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[8rem]",
        },
        {
          title: "Health Monitoring System",
          bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/thermal/Services/health_and_monitoring.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
          description:
            "Built a comprehensive desktop-based platform tailored for monitoring animal health efficiently.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
        {
          title: "Actionable Insights",
          bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/thermal/Services/Actionable_insights.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
          description:
            "Facilitated timely, data-backed decisions to improve overall animal well-being.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
        {
          title: "User Experience Focus",
          bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/thermal/Services/Group_35985.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
          description:
            "Delivered an intuitive interface that simplifies usage for veterinary and research teams.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
      ],
    },
    key_features: {
      title: "KEY FEATURES",
      indication_color: "#FF7A3B",
      key_features_list: [
        {
          number: "[01]",
          title: "Thermal Imaging Integration",
          img: `${baseUrl}/Images/case-studies/thermal/KeyFeatures/Customizable Interface.webp`,
          desc: "Enables precise monitoring of temperature variations to identify early signs of health issues.",
        },
        {
          number: "[02]",
          title: "Real-Time Data Processing",
          img: `${baseUrl}/Images/case-studies/thermal/KeyFeatures/Seamless Web Integration.webp`,
          desc: "Supports instant analysis and visualization of thermal data for quick decision-making.",
        },
        {
          number: "[03]",
          title: "Camera & IoT Synchronization",
          img: `${baseUrl}/Images/case-studies/thermal/KeyFeatures/Lightweight & Optimized Performance.webp`,
          desc: "Seamless hardware-software integration with camera and IoT synchronization ensures consistent and accurate data flow.",
        },
        {
          number: "[04]",
          title: "Low-Latency Data Transfer",
          img: `${baseUrl}/Images/case-studies/thermal/KeyFeatures/Real-Time Accessibility Controls.webp`,
          desc: "Uses reliable protocols and low-latency data transfer to ensure smooth and timely communication between components.",
        },
        {
          number: "[05]",
          title: "User-Friendly Desktop Interface",
          img: `${baseUrl}/Images/case-studies/thermal/KeyFeatures/Cross-Platform Compatibility.webp`,
          desc: "A user-friendly desktop interface offers intuitive control over camera functions and thermal data visualization.",
        },
      ],
    },
    testimonials: {
      testimonial: "",
      name: "",
      image: "https://picsum.photos/200/300",
      quote_image: `/Images/testimonial_quotes.svg`,
      shadow: "-1.875rem -1.25rem 62.5rem rgba(255,122,59,0.5)",
      profession: "",
      profession_at: "",
    },
    faq: {
      title: "Curious? Check our FAQs",
      faq_list: [
        {
          id: 1,
          title:
            "What is the purpose of the thermal imaging system for buffalo udders?",
          content:
            "The system uses infrared thermography to non-invasively monitor buffalo udder health, enabling early detection of mastitis by identifying abnormal temperature patterns.",
        },
        {
          id: 2,
          title: "How does infrared thermography help in mastitis detection?",
          content:
            "Mastitis causes inflammation, which increases local udder temperature. Infrared cameras detect these temperature changes early, often before visible symptoms appear.",
        },
        {
          id: 3,
          title: "Is infrared thermography system safe for the animals?",
          content:
            "Yes, infrared thermography is a non-contact, radiation-free method, making it completely safe and stress-free for buffaloes.",
        },
        {
          id: 4,
          title: "Can the system track udder health over time?",
          content:
            "Absolutely. The system supports session-based tracking, allowing farmers and veterinarians to monitor temperature trends and detect issues early.",
        },
        {
          id: 5,
          title: "Does the system require an internet connection to work?",
          content:
            "The system supports offline functionality, enabling temperature analysis and data storage without a continuous internet connection.",
        },
        {
          id: 6,
          title:
            "How easy is it to integrate this system into existing veterinary workflows?",
          content:
            "The system is designed for seamless integration with veterinary workflows, supporting data export and compatibility with common veterinary software.",
        },
        {
          id: 7,
          title: "What kind of temperature analysis does the system provide?",
          content:
            "It offers detailed temperature mapping, highlighting hotspots and comparing readings to baseline healthy udder temperatures.",
        },
        {
          id: 8,
          title: "Can this system reduce losses caused by mastitis?",
          content:
            "Yes, by enabling early detection and treatment, it helps reduce mastitis-related production losses and improves overall herd health.",
        },
        {
          id: 9,
          title:
            "Is special training required to operate the thermal imaging system?",
          content:
            "The system is user-friendly with guided instructions, but basic training helps maximize accurate image capture and interpretation.",
        },
        {
          id: 10,
          title: "What equipment is needed for this system?",
          content:
            "The primary equipment includes an infrared thermal camera and software for image analysis and session tracking.",
        },
      ],
    },
  },
  "accessible-web-widget": {
    id: 2,
    banner: {
      title: "Empowering Inclusive Web Experiences through Accessibility",
      description:
        "A seamless, customizable solution to ensure digital accessibility for users with diverse abilities.",
      image: `${baseUrl}/Images/case-studies/incluway/Incluway_hero_black patch.png`,
    },
    showReel: {
      title: "SHOWREEL",
      video: [
        `${baseUrl}/Images/case-studies/incluway/ShowReel/Incluway showreel- web view.mp4`,
        `${baseUrl}/Images/case-studies/incluway/Challenges/TAblet.mp4`,
        `${baseUrl}/Images/case-studies/incluway/Challenges/Mobile.mp4`,
      ],
      youtube_url:
        "https://www.youtube.com/embed/p22KMPdGIv0?si=yTUz-9F6k9d7gNMs",
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
              `,
    },
    challenges: {
      title: "Challenges & Goals",
      indication_icon: `/Images/case-studies/incluway/Challenges/icon.svg`,
      video: [
        `${baseUrl}/Images/case-studies/incluway/Challenges/Incluway case study challenge video.mp4`,
        `${baseUrl}/Images/case-studies/incluway/Challenges/Incluway case study challenge video.mp4`,
        `${baseUrl}/Images/case-studies/incluway/Challenges/Incluway case study challenge video.mp4`,
      ],
      // "",
      challenge_description: "BOTTLENECK",
      challenge_solution:
        "Designing an accessibility system that integrates with websites to support users—",
      challenge_solution_highlighted:
        "while maintaining performance, compliance, and customization.",
      solution_list: [
        {
          id: 1,
          title: "Ensure WCAG Compliance",
        },
        {
          id: 2,
          title: "Support User Personalization",
        },
        {
          id: 3,
          title: "Optimize for Cross-Device Compatibility",
        },
        {
          id: 4,
          title: "Enable Easy Integration",
        },
        {
          id: 5,
          title: "Maintain High Performance",
        },
        {
          id: 6,
          title: "Improve Web Accessibility Awareness",
        },
      ],
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
          description:
            "Offered real-time controls like text resizing, contrast modes, screen reader compatibility, and animation toggles to serve users with varied accessibility needs.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[8rem]",
        },
        {
          title: "Seamless Integration",
          bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/incluway/Services/Seamless_Integration.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
          description:
            "Developed a plug-and-play widget that can be embedded on any website with minimal code—supporting fast adoption and cross-platform reliability.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[8rem]",
        },
        {
          title: "Widget Management System",
          bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/incluway/Services/Widget_Management_System.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
          description:
            "Built a modular, customizable web-based widget with admin control for managing display, placement, and feature toggling without code changes.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
        {
          title: "Actionable Accessibility Data",
          bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/incluway/Services/Actionable_Accessibility_Data.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
          description:
            "Enabled tracking of widget usage and accessibility feature adoption to help website owners improve their inclusivity efforts.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
        {
          title: "User-Centered Design",
          bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/incluway/Services/markus-spiske-i_dT4tseXD8-unsplash.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
          description:
            "Focused on clarity, simplicity, and intuitiveness to deliver an accessible experience for end-users.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
      ],
    },
    key_features: {
      title: "KEY FEATURES",
      indication_color: "#1F8BFF",
      key_features_list: [
        {
          number: "[01]",
          title: "Seamless Web Integration",
          img: `${baseUrl}/Images/case-studies/incluway/KeyFeatures/Seamless Web Integration.webp`,
          desc: "Effortlessly integrates into any website with a single line of code, ensuring rapid deployment and minimal development effort.",
        },
        {
          number: "[02]",
          title: "Real-Time Accessibility Controls",
          img: `${baseUrl}/Images/case-studies/incluway/KeyFeatures/Real-Time Accessibility Controls.webp`,
          desc: "Offers live adjustments for text size, contrast, animation toggles, and more—empowering users to personalize their browsing experience instantly.",
        },
        {
          number: "[03]",
          title: "Cross-Platform Compatibility",
          img: `${baseUrl}/Images/case-studies/incluway/KeyFeatures/Cross-Platform Compatibility.webp`,
          desc: "Ensures consistent performance across all major browsers and devices, maintaining accessibility regardless of user environment.",
        },
        {
          number: "[04]",
          title: "Lightweight & Optimized Performance",
          img: `${baseUrl}/Images/case-studies/incluway/KeyFeatures/Lightweight & Optimized Performance.webp`,
          desc: "Built with performance in mind, the widget loads quickly, consumes minimal resources, and doesn’t interfere with site speed or SEO.",
        },
        {
          number: "[05]",
          title: "Customizable Interface",
          img: `${baseUrl}/Images/case-studies/incluway/KeyFeatures/Customizable Interface.webp`,
          desc: "Designed with modularity, allowing brands to style, position, and configure the widget to match their visual identity and user needs.",
        },
      ],
    },
    testimonials: {
      testimonial: "",
      name: "",
      image: "https://picsum.photos/200/300",
      quote_image: `/Images/case-studies/incluway/Testimonials/quote.svg`,
      shadow: "-1.875rem -1.25rem 62.5rem rgba(66,133,244,1)",
      profession: "",
      profession_at: "",
    },
    faq: {
      title: "Curious? Check our FAQs",
      faq_list: [
        {
          id: 1,
          title: "What is the Accessibility Widget?",
          content:
            "It is a lightweight, plug-and-play tool designed to enhance digital experiences for users with visual, motor, and cognitive impairments by providing real-time accessibility personalization.",
        },
        {
          id: 2,
          title: "Is the widget compliant with accessibility standards?",
          content:
            "Yes, the widget is fully compliant with WCAG 2.1 standards to ensure inclusive and accessible digital content.",
        },
        {
          id: 3,
          title: "How easy is it to integrate the widget into my website?",
          content:
            "Integration is simple and requires minimal setup. The widget is plug-and-play, compatible with all major browsers and platforms.",
        },
        {
          id: 4,
          title: "Does the widget support users with motor impairments?",
          content:
            "Absolutely. It offers keyboard navigation support and customizable UI controls to assist users with motor disabilities.",
        },
        {
          id: 5,
          title:
            "Can the widget personalize accessibility features in real-time?",
          content:
            "Yes, it allows real-time personalization to adapt the website interface based on individual user needs.",
        },
        {
          id: 6,
          title: "Is the widget optimized for performance?",
          content:
            "Yes, it is lightweight and designed to minimize impact on website loading times and performance.",
        },
        {
          id: 7,
          title: "Which browsers does the widget support?",
          content:
            "The widget supports all major browsers including Chrome, Firefox, Safari, Edge, and Opera.",
        },
        {
          id: 8,
          title: "Can this widget help my website meet ADA compliance?",
          content:
            "While the widget aids in improving accessibility and aligns with WCAG standards, full ADA compliance depends on overall website practices; this widget is a key tool in your accessibility strategy.",
        },
        {
          id: 9,
          title: "Is the widget customizable?",
          content:
            "Yes, it offers options to customize accessibility settings to fit the unique needs of your user base and branding.",
        },
        {
          id: 10,
          title: "Does the widget require an internet connection to work?",
          content:
            "The widget can operate offline once installed, ensuring accessibility features remain functional without constant internet access.",
        },
      ],
    },
  },
};

export const LandingPageData = {
  banner: {
    title_primary: "Driving Digital Transformation",
    title_secondary: "with ",
    title_tertiary: "custom",
    typwriting_animation_list: [
      {
        id: 1,
        word: "Mobile Application", //mobile app
      },
      {
        id: 2,
        word: "Industrial IoT Solutions", //web app
      },
      {
        id: 3,
        word: "Web Application", //AI
      },
      {
        id: 4,
        word: "AI Agentic Workflows", //IoT
      },
    ],
    description_primary:
      "Delivering scalable technology that powers modern digital experiences, AI",
    description_secondary: "systems, and connected IoT solutions.",
    get_in_touch: "Get in touch",
    get_in_touch_arrow: `${baseUrl}/Images/LandingPage/Banner/arrowIconUp.png`,
    view_services_text: "View services", //View services
    banner_CTA_status: "active",
    banner_image_list: [
      {
        id: 1,
        image: `/Images/LandingPage/Banner/BNI_logo.webp`,
      },
      {
        id: 2,
        image: `/Images/LandingPage/Banner/clutch.svg`,
      },
      {
        id: 3,
        image: `/Images/LandingPage/Banner/5 stars.svg`,
      },
      {
        id: 4,
        image: `/Images/LandingPage/Banner/ethercat_.webp`,
      },
    ],
    banner_carousel_list: [
      {
        id: 1,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/anyo.webp`,
      },
      {
        id: 2,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/bsf.webp`,
      },
      {
        id: 3,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/DCM.webp`,
      },
      {
        id: 4,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/dhanajaya.webp`,
      },
      {
        id: 5,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/evo11ve.webp`,
      },
      {
        id: 6,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/IA.webp`,
      },
      {
        id: 7,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/ibits.webp`,
      },
      {
        id: 8,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/incluway.webp`,
      },
      {
        id: 9,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/kivi.webp`,
      },
      {
        id: 10,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/mako.webp`,
      },
      {
        id: 11,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/navyya.webp`,
      },
      {
        id: 12,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/northernarc.webp`,
      },
      {
        id: 13,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/oidlabs.webp`,
      },
      {
        id: 14,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/osakai.webp`,
      },
      {
        id: 15,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/rajdeep.webp`,
      },
      {
        id: 16,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/suyash.webp`,
      },
      {
        id: 17,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/technoweld.webp`,
      },
      {
        id: 18,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/terra-brsr.webp`,
      },
      {
        id: 19,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/trackie.webp`,
      },
      {
        id: 20,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/vishnupressing.webp`,
      },
      {
        id: 21,
        img: `/Images/LandingPage/Banner/carousel_images/client_logos/wasted.webp`,
      }
    ],
  },
  showReel: {
    title: "SHOWREEL",
    video: [
      `${baseUrl}/Images/LandingPage/showReel/homepage showreel web view.mp4`,
      `${baseUrl}/Images/LandingPage/showReel/tab view home showreel.mp4`,
      `${baseUrl}/Images/LandingPage/showReel/mobile view home page showreel.mp4`,
    ],
    youtube_url:
      "https://www.youtube.com/embed/pFtxR-O78sY?si=t_x_0UF65Q1YaHFw",
  },
  aboutUs: {
    achievementsList: [
      {
        id: 1,
        category: "clients",
        numbers: "50+",
        description: "Amazing Clients",
      },
      {
        id: 2,
        category: "Industries",
        numbers: "5+",
        description: "Industries",
      },
      {
        id: 3,
        category: "Projects",
        numbers: "70+",
        description: "Successful Projects",
      },
      {
        id: 4,
        category: "Founded",
        numbers: "2016",
        description: "Founded",
      },
    ],
  },
  advantages: {
    advantages_list: [
      {
        title: "Bespoke Software, Tailored to Your Business Needs",
        // /Images/LandingPage/Advantages/Bespoke_Software_Tailored_to_Your_Business_Needs.jpg
        bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Advantages/img1.webp')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
        description:
          "Custom software solutions designed around your workflows — not off-the-shelf",
        gradient:
          "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[8rem]",
      },
      {
        title: "Digital Transformation Strategy with the Right Technologies",
        // /Images/LandingPage/Advantages/Digital_Transformation_Strategy_with_the_Right_Technologies.jpg
        bg: `bg-[url('/Images/LandingPage/advantages/Digital_Transformation_Strategy_with_the_Right_Technologies.webp')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
        description:
          "Modernize operations with digital tools that serve real business goals",
        gradient:
          "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[8rem]",
      },
      {
        title: "Flexible Engagement Models for Agile Development",
        // /Images/LandingPage/Advantages/Flexible_Engagement_Models_for_Agile_Development.jpg
        bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Advantages/img3.webp')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
        description:
          "Start small, scale fast, or pause — flexibility built into the process",
        gradient:
          "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[10rem]",
      },
      {
        title: "Measurable Outcomes Through AI, IoT, and Machine Vision",
        // /Images/LandingPage/Advantages/Measurable_Outcomes_Through_AI_IoT_and_Machine_Vision.jpg
        bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Advantages/img4.webp')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
        description:
          "Drive impact with intelligent systems and real-time performance insights",
        gradient:
          "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[10rem]",
      },
    ],
    featuredWorks_list: [
      {
        id: 1,
        image: `${baseUrl}/Images/case-studies/List/Learning Platform.webp`,
        hover_image: `${baseUrl}/Images/case-studies/List/Hover/Learning Platform.webp`,
        title: "ed tech",
        description: "education platform",
        status: "inactive",
        route: "edtech",
      },
      {
        id: 2,
        image: `${baseUrl}/Images/case-studies/List/Infrared Health Scan.webp`,
        hover_image: `${baseUrl}/Images/case-studies/List/Hover/Infrared Thermography.webp`,
        title: "infrared thermography",
        description: "thermal imaging detects mastitis in dairy cattle",
        status: "active",
        route: "infrared-thermography",
      },
      {
        id: 3,
        image: `${baseUrl}/Images/case-studies/List/Seasonal E-Commerce.webp`,
        hover_image: `${baseUrl}/Images/case-studies/List/Hover/Seasonal E-Commerce.webp`,
        title: "e-commerce",
        description: "payment enabled e-commerce web application",
        status: "inactive",
        route: "ecommerce",
      },
      {
        id: 4,
        image: `${baseUrl}/Images/case-studies/List/Accessible Web Widget.webp`,
        hover_image: `${baseUrl}/Images/case-studies/List/Hover/Accessible Web Widget.webp`,
        title: "accessibility",
        description: "accessibility project",
        status: "active",
        route: "accessible-web-widget",
      },
    ],
  },
  services: {
    title: "Our Service",
    description:
      "Take a look at our handpicked case studies showcasing real-world tech solutions. A quick glimpse into the impact we create.",
    service_list: [
      {
        number: "[01]",
        title: "Digital Transformation Strategy for Modern Businesses",
        desc: [
          "Modernize operations using proven digital transformation tools and workflows.",
          "Web, mobile, or desktop applications — your stack is fully covered.",
        ],
        highlighted_desc: [
          'Modernize operations using proven <span class="text-primary-blue">digital transformation</span> tools and workflows.',
          '<span class="text-primary-blue">Web, mobile, or desktop</span> applications — your stack is fully covered.',
        ],
      },
      {
        number: "[02]",
        title: "Development Services for Startup Founders",
        desc: [
          "Build faster, smarter, and with clarity.",
          "Our research-backed approach helps founders make informed product decisions.",
        ],
        highlighted_desc: [
          'Build <span class="text-primary-blue">faster, smarter</span>, and with clarity.',
          'Our <span class="text-primary-blue">research-backed approach</span> helps founders make informed product decisions.',
        ],
      },
      {
        number: "[03]",
        title: "Industrial IoT for Smarter Operations",
        desc: [
          "Connect IoT devices to monitor, analyze, and automate in real time.",
          "Improve efficiency, reduce downtime, and act on actionable insights.",
        ],
        highlighted_desc: [
          'Connect <span class="text-primary-blue">IoT devices</span> to monitor, analyze, and automate in real time.',
          'Improve <span class="text-primary-blue">efficiency</span>, reduce <span class="text-primary-blue">downtime</span>, and act on actionable insights.',
        ],
      },
      {
        number: "[04]",
        title: "AI & Agentic AI for Intelligent Decision-Making",
        desc: [
          "Leverage AI for smarter decisions and data-driven growth.",
          "Deploy agentic AI to automate tasks and adapt intelligently.",
        ],
        highlighted_desc: [
          'Leverage <span class="text-primary-blue">AI</span> for smarter decisions and data-driven growth.',
          'Deploy <span class="text-primary-blue">agentic AI</span> to automate tasks and adapt intelligently.',
        ],
      },
      {
        number: "[05]",
        title: "Machine Vision for Quality Control and Inspection",
        desc: [
          "Automated defect detection, inspection, and classification at industrial scale.",
          "Boost precision, reduce errors, and scale with confidence.",
        ],
        highlighted_desc: [
          '<span class="text-primary-blue">Automated defect detection</span>, inspection, and classification at industrial scale.',
          "Boost precision, reduce errors, and scale with confidence.",
        ],
      },
    ],
  },
  we_work_with: {
    title: "We Work With",
    sub_title: "brands in",
    carouselData: [
      {
        id: 1,
        name: "Accessibility",
        image: `${baseUrl}/Images/LandingPage/industries/accessibility.png`,
      },
      {
        id: 2,
        name: "Agri Tech",
        image: `${baseUrl}/Images/LandingPage/industries/agri-tech.png`,
      },
      {
        id: 3,
        name: "Audit",
        image: `${baseUrl}/Images/LandingPage/industries/Audit.png`,
      },
      {
        id: 4,
        name: "E-commerce",
        image: `${baseUrl}/Images/LandingPage/industries/e-commerce.png`,
      },
      {
        id: 5,
        name: "Ed-Tech",
        image: `${baseUrl}/Images/LandingPage/industries/Ed-Tech.png`,
      },
      {
        id: 6,
        name: "FinTech",
        image: `${baseUrl}/Images/LandingPage/industries/fintech.png`,
      },
      {
        id: 7,
        name: "Machine Vision",
        image: `${baseUrl}/Images/LandingPage/industries/machine vision.png`,
      },
      {
        id: 8,
        name: "Manufacturing",
        image: `${baseUrl}/Images/LandingPage/industries/manufacturing.png`,
      },
      {
        id: 9,
        name: "Sales",
        image: `${baseUrl}/Images/LandingPage/industries/sales.png`,
      },
      {
        id: 10,
        name: "Thermal Vision",
        image: `${baseUrl}/Images/LandingPage/industries/thermal vision.png`,
      },
      {
        id: 11,
        name: "Wellness",
        image: `${baseUrl}/Images/LandingPage/industries/wellness.png`,
      },
    ],
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
        role: "Founder",
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
        role: "CEO",
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
        role: "CTO",
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
        role: "Director",
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
        role: "Co-Founder",
      },
    ],
  },
  faq: {
    title: "Curious? Check our FAQs",
    faq_list: [
      {
        id: 1,
        title: "What does Veract.co do?",
        content: "Veract.co helps businesses modernize and automate operations using AI, machine vision, IoT systems, and custom software solutions.",
      },
      {
        id: 2,
        title: "Who is veract.co best suited for?",
        content: "We work with startups, small teams, and mid-sized businesses looking to scale intelligently without increasing headcount.",
      },
      {
        id: 3,
        title: "What makes veract.co different from other agencies?",
        content: "We don’t just build software — we build intelligent systems that automate decisions, streamline workflows, and deliver measurable business outcomes.",
      },
      {
        id: 4,
        title: "What technologies do you use?",
        content: "We use a mix of AI frameworks (LangChain, Gemini, GPT), IoT protocols (Modbus, MQTT, EtherCAT), and full-stack technologies (Python, Node.js, React) tailored to the solution.",
      },
      {
        id: 5,
        title: " Do you offer free consultations or demos?",
        content: "Yes — we offer a no-cost consultation to explore automation opportunities, and you can try one AI agent or automation module for free.",
      },
      {
        id: 6,
        title: "How can I streamline my business operations with custom software?",
        content: "Custom software automates workflows, integrates data, and reduces manual effort. Tools like internal dashboards or domain-specific platforms are effective entry points.",
      },
      {
        id: 7,
        title: "What are the best options for mobile application development agencies?",
        content: "Consider agencies with full-stack capabilities, strong UI/UX, and experience across platforms. Browse portfolios and tech stacks before finalizing — veract.co is one such example.",
      },
    ],
  },
  footer: {
    description:
      "At Veract, we empower digital transformation through custom software—crafting innovative web, mobile, and AI solutions that drive measurable business success.",
    footer_logo_list: [
      {
        id: 1,
        image: `/Images/LandingPage/Footer/BNI_logo.webp`,
      },
      {
        id: 2,
        image: `/Images/LandingPage/Banner/clutch.svg`,
      },
      {
        id: 3,
        image: `/Images/LandingPage/Banner/5 stars.svg`,
      },
      {
        id: 4,
        image: `/Images/LandingPage/Footer/ethercat_.webp`,
      },
    ],
    socialMediaIcons: [
      {
        id: 1,
        image: `/Images/LandingPage/Footer/linkedin.svg`,
        link: "https://www.linkedin.com/company/veract-consultancy-private-limited/",
      },
      {
        id: 2,
        image: `/Images/LandingPage/Footer/youtube.svg`,
        link: "https://youtube.com/@veract-consultancy?si=tGt9K1cCpnNgzFkJ",
      },
      {
        id: 3,
        image: `/Images/LandingPage/Footer/whatsapp.svg`,
        link: "https://www.whatsapp.com/channel/0029VahNUEB90x31HeDatt2o",
      },
      {
        id: 4,
        image: `/Images/LandingPage/Footer/insta.svg`,
        link: "https://www.instagram.com/veractconsultancy/",
      },
    ],
    quickLinks: {
      company: {
        title: "Company",
        links: [
          {
            id: 1,
            title: "Agentic AI",
            link: "/agentic-ai",
            status: "active",
          },
          {
            id: 2,
            title: "Services",
            link: "/services",
            status: "active",
          },
          {
            id: 3,
            title: "Case Studies",
            link: "/case-studies",
            status: "active",
          },
          {
            id: 4,
            title: "Contact Us",
            link: "/contact-us",
            status: "active",
          },
          {
            id: 5,
            title: "Blogs",
            link: "",
            status: "inactive",
          },
        ],
      },
      services: {
        title: "Services",
        links: [
          {
            id: 1,
            title: "Digital Transformation",
            link: "",
            status: "inactive",
          },
          {
            id: 2,
            title: "Development Services",
            link: "",
            status: "inactive",
          },
          {
            id: 3,
            title: "Internet of things - IoT",
            link: "",
            status: "inactive",
          },
          {
            id: 4,
            title: "Machine Vision",
            link: "",
            status: "inactive",
          },
          {
            id: 5,
            title: "Infrared Thermography",
            link: "",
            status: "inactive",
          },
          {
            id: 6,
            title: "Workflow Automation",
            link: "",
            status: "inactive",
          },
          {
            id: 7,
            title: "Agentic AI",
            link: "",
            status: "inactive",
          },
          {
            id: 8,
            title: "Custom Mobile Application",
            link: "",
            status: "inactive",
          },
          {
            id: 9,
            title: "Custom Web Application",
            link: "",
            status: "inactive",
          },
          {
            id: 10,
          },
        ],
      },
      contact: {
        title: "Contact Us",
        links: [
          {
            id: 1,
            type: "phone",
            title: "+91 97899 91565",
          },
          {
            id: 2,
            type: "phone",
            title: "+91 99628 37650",
          },
          {
            id: 3,
            type: "phone",
            title: "+1 7377101523",
          },
          {
            id: 4,
            type: "email",
            title: "info@veract.io",
          },
        ],
      },
      address: {
        title: "Location",
        address:
          "37, Aspace, Brindavan Street, Srinivasa Nagar, Madipakkam, Chennai - 600 091",
      },
    },
  },
};

export const AgentPageData = {
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
        features_subtitle:
          "Get expert insights into where AI can deliver the most value in your operations.",
      },
      {
        features_icon: `/Images/agent/Banner/Live Product Demo.svg`,
        features_title: "Live Product Demo",
        features_subtitle:
          "Watch how our AI agents automate real tasks across your tools — customized to your case.",
      },
      {
        features_icon: `/Images/agent/Banner/Deploy 1 agent.svg`,
        features_title: "Deploy 1 AI Agent Free",
        features_subtitle:
          "Test, drive one fully trained AI agent for your business — no commitment, no cost.",
      },
    ],
  },
  ourprocess: {
    pageTitle: "Our Process",
    title: "Our Simple, Smart, and Scalable Process",
    description:
      "We design, develop, and implement automation tools that help you work smarter, not harder",
    cards: [
      {
        id: 1,
        header: "Smart Analyzing",
        subHeader:
          "We assess your business goals, challenges, and processes to identify where custom AI agents deliver maximum impact.",
        video:
          "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
        // "",
      },
      {
        id: 2,
        header: "AI Agent Development",
        subHeader:
          "Our team designs and develops intelligent AI agents, trained and fine-tuned to adapt to your specific workflows and use cases.",
        video:
          "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
        // "",
      },
      {
        id: 3,
        header: "Seamless Integration",
        subHeader:
          "We embed your custom AI agent into your systems, tools, and processes, ensuring seamless interaction with minimal disruption.",
        video:
          "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
        // "",
      },
      {
        id: 4,
        header: "Continuous Optimization",
        subHeader:
          "We continuously monitor your AI agent’s performance, enhance its capabilities, and retrain it to improve outcomes over time.",
        video:
          "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
        // "",
      },
    ],
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
      },
    ]
  }
};

export const caseStudiesHomePageData = {
  header: "Our Projects",
  subHeader:
    "From designing intelligent concepts to delivering scalable solutions, we're your agile, expert-driven team making technology work for you!",
  caseStudiesTitleList: [
    { id: 1, name: "Thermal Vision" },
    { id: 2, name: "Accessibility" },
    { id: 3, name: "Chat bot" },
    { id: 4, name: "Ed Tech" },
    { id: 5, name: "Machine Vision" },
    { id: 6, name: "Wellness" },
    { id: 7, name: "Industry Platform" },
    { id: 8, name: "Ecommerce" },
    { id: 9, name: "Sales" },
    { id: 10, name: "Audio video" },
  ],
  caseStudiesList: {
    thermalvision: [
      {
        id: 1,
        image: `${baseUrl}/Images/case-studies/List/Infrared Health Scan.webp`,
        hover_image: `${baseUrl}/Images/case-studies/List/Hover/Infrared Thermography.webp`,
        header: "Infrared Thermography",
        subHeader: "Infrared Imaging for Animal Health",
        routeTo: "/case-studies/infrared-thermography",
      },
    ],
    accessibility: [
      {
        id: 1,
        image: `${baseUrl}/Images/case-studies/List/Accessible Web Widget.webp`,
        hover_image: `${baseUrl}/Images/case-studies/List/Hover/Accessible Web Widget.webp`,
        header: "Accessible Web Widget",
        subHeader: "Smart Widget for Enhanced Digital Access",
        routeTo: "/case-studies/accessible-web-widget",
      },
    ],
    chatbot: [
      {
        id: 1,
        image: `${baseUrl}/Images/case-studies/List/AI Chat Assistant.webp`,
        hover_image: `${baseUrl}/Images/case-studies/List/Hover/AI Chat Assistant.webp`,
        header: "AI Chat Assistant",
        subHeader: "Conversational AI for Real-Time Support",
        routeTo: "",
      },
    ],
    edtech: [
      {
        id: 1,
        image: `${baseUrl}/Images/case-studies/List/Learning Platform.webp`,
        hover_image: `${baseUrl}/Images/case-studies/List/Hover/Learning Platform.webp`,
        header: "Learning Platform",
        subHeader: "AI-Based Learning and Course Portal",
        routeTo: "",
      },
    ],
    machinevision: [
      {
        id: 1,
        image: `${baseUrl}/Images/case-studies/List/Visual Inspection AI.webp`,
        hover_image: `${baseUrl}/Images/case-studies/List/Hover/Visual Inspection AI.webp`,
        header: "Visual Inspection AI",
        subHeader: "AI Visual QC for Industrial Inspection",
        routeTo: "",
      },
    ],
    wellness: [
      {
        id: 1,
        image: `${baseUrl}/Images/case-studies/List/Digital Wellness App.webp`,
        hover_image: `${baseUrl}/Images/case-studies/List/Hover/Digital Wellness.webp`,
        header: "Digital Wellness",
        subHeader: "Health & Wellness App for Daily Tracking",
        routeTo: "",
      },
    ],
    industryplatform: [
      {
        id: 1,
        image: `${baseUrl}/Images/case-studies/List/Smart Industry Portal.webp`,
        hover_image: `${baseUrl}/Images/case-studies/List/Hover/Smart Industry Portal.webp`,
        header: "Smart Industry Portal",
        subHeader: "Innovative Data Center Platform",
        routeTo: "",
      },
    ],
    ecommerce: [
      {
        id: 1,
        image: `${baseUrl}/Images/case-studies/List/Seasonal E-Commerce.webp`,
        hover_image: `${baseUrl}/Images/case-studies/List/Hover/Seasonal E-Commerce.webp`,
        header: "Seasonal E-Commerce",
        subHeader: "Online Store for Seasonal Organic Goods",
        routeTo: "",
      },
    ],
    sales: [
      {
        id: 1,
        image: `${baseUrl}/Images/case-studies/List/Sales Dashboard.webp`,
        hover_image: `${baseUrl}/Images/case-studies/List/Hover/Sales Dashboard.webp`,
        header: "Sales Dashboard",
        subHeader: "Quote & Enquiry Management Dashboard",
        routeTo: "",
      },
    ],
    audiovideo: [
      {
        id: 1,
        image: `${baseUrl}/Images/case-studies/List/AV Room Designer.webp`,
        hover_image: `${baseUrl}/Images/case-studies/List/Hover/Audio Visual Interior.webp`,
        header: "Audio Visual Interior",
        subHeader: "Immersive AV Conference Room Planner",
        routeTo: "",
      },
    ],
  },
  faq: {
    title: "Curious? Check our FAQs",
    faq_list: [
      {
        id: 1,
        title: "What types of projects are featured in veract.co's case studies?",
        content: 'Our portfolio includes AI-powered systems, machine vision platforms, wellness apps, ecommerce solutions, accessibility tools, and dashboards built for various industries.',
      },
      {
        id: 2,
        title: "Are all of your case studies AI projects?",
        content: "Many use AI — such as chat assistants, vision models, or analytics — but others focus on user experience, automation, or platform engineering without direct AI.",
      },
      {
        id: 3,
        title: "What industries are represented in your case studies?",
        content: "We’ve delivered solutions for agriculture, education, ecommerce, accessibility, wellness, manufacturing, and enterprise tech.",
      },
      {
        id: 4,
        title: "Can I request a live demo of any project?",
        content: "Yes — we can walk you through any project and explore how similar outcomes can be tailored to your business.",
      },
      {
        id: 5,
        title: "What technologies do these projects use?",
        content: "We use full-stack frameworks like React, Node.js, and Python, alongside AI/ML libraries, OCR, OpenCV, IoT protocols, and integrations with tools like Notion, Slack, and SAP.",
      },
      {
        id: 6,
        title: "Are these solutions scalable to my organization?",
        content: "Yes. All systems are built to scale — whether you're piloting a feature or rolling it out enterprise-wide.",
      },
      {
        id: 7,
        title: "Do any projects combine hardware and software?",
        content: "Yes — some projects involve camera-based vision systems, IoT sensors, and real-time analytics combined with custom software dashboards.",
      },
      {
        id: 8,
        title: "What tech stack powers most of these solutions?",
        content: "Common stacks include Python, Node.js, React, MongoDB, LangChain, OpenCV, and various cloud APIs — chosen based on problem fit and scale.",
      },
      {
        id: 9,
        title: "Where can I source the best React Native app development services?",
        content: "React Native is ideal for shared-codebase mobile development. Agencies experienced in JS-heavy stacks, such as veract.co, often provide tailored solutions.",
      },
      {
        id: 10,
        title: "How are tools like OCR or computer vision used in real-world apps?",
        content: "OCR is used to extract structured data from documents. Vision is applied in defect detection, thermal analysis, and layout inspection — often in manufacturing and diagnostics.",
      },
      {
        id: 11,
        title: "What types of problems are solved in your case studies?",
        content: "Projects address challenges in inspection automation, wellness tracking, accessibility compliance, ecommerce personalization, and enterprise visibility.",
      },
      {
        id: 12,
        title: "Can you help me find top Flutter app development companies?",
        content: "Look for teams that deliver smooth UI/UX and native performance across devices. veract.co, among others, builds production-grade Flutter apps for startups and enterprises.",
      },
    ]
  }
};

export const metadata = [
  {
    slug: "infrared-thermography",
    title: "Infrared Thermography",
    description: "Thermal Imaging System for Buffalo Udder Health Monitoring",
    openGraph: {
      title: "Thermal Imaging System for Buffalo Udder Health Monitoring",
      description: "Monitor buffalo udder health with infrared thermography...",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Thermal Imaging System for Buffalo Udder Health Monitoring",
      description: "Smart infrared system for mastitis detection in buffaloes.",
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
      "smart veterinary system",
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
      icbm: "12.9784, 80.2214",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: "Infrared Thermography",
      alternateName:
        "Thermal Imaging System for Buffalo Udder Health Monitoring",
      url: "https://veract.co/case-studies/infrared-thermography",
      author: {
        "@type": "Organization",
        name: "Veract.co",
        url: "https://veract.co",
      },
    },
  },
  {
    slug: "accessible-web-widget",
    title: "Lightweight Accessibility Widget | WCAG-Compliant & Plug-and-Play",
    description:
      "Enhance website accessibility for users with visual, motor, and cognitive impairments. Our lightweight, WCAG-compliant widget offers real-time personalization, cross-browser support, and easy integration.",
    openGraph: {
      title:
        "Lightweight Accessibility Widget | WCAG-Compliant & Plug-and-Play",
      description:
        "Boost your website's inclusivity with our easy-to-integrate accessibility widget supporting visual, motor, and cognitive impairments. Fully WCAG-compliant and optimized for performance.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Lightweight Accessibility Widget | WCAG-Compliant & Plug-and-Play",
      description:
        "Enhance website accessibility with our lightweight widget designed for all users. Real-time personalization and seamless integration.",
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
      "accessibility software",
    ],
    author: "Veract.co",
    language: "en",
    subject:
      "Lightweight Accessibility Widget | WCAG-Compliant & Plug-and-Play",
    industry: "Accessibility, Web Development",
    image: `${baseUrl}/Images/accessibility-widget-preview.png`,
    url: "https://veract.co/case-studies/accessible-web-widget",
    geo: {
      region: "IN-TN",
      placename: "Velachery, Chennai",
      position: "12.9784;80.2214",
      icbm: "12.9784, 80.2214",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Lightweight Accessibility Widget",
      alternateName: "WCAG-Compliant & Plug-and-Play Accessibility Tool",
      url: "https://veract.co/case-studies/accessible-web-widget",
      applicationCategory: "AccessibilityTool",
      operatingSystem: "All",
    },
  },
];

export const services = [
  {
    id: '01',
    // title: 'Digital Transformation Strategy for Modern Businesses',
    title: `<span class='interFont text-[1.25rem] md:text-[1.625rem] lg:text-[1.875rem] text-[#FFFFFF] font-medium leading-normal'>Digital Transformation Strategy for <span class='text-primary-blue'>Modern Businesses</span></span>`,
    service_array: [
      {
        service_icon: '/Images/services/icons/ai-computer.svg',
        service_title: 'Legacy System Modernization',
      },
      {
        service_icon: '/Images/services/icons/algorithm.svg',
        service_title: 'Process Automation & Workflow Digitization',
      },
      {
        service_icon: '/Images/services/icons/laptop.svg',
        service_title: 'Business Dashboards & Reporting Systems',
      },
      {
        service_icon: '/Images/services/icons/stash_integrations-light.svg',
        service_title: 'System Integrations Across Departments & Tools',
      }
    ],
    service_CTA: [
      {
        image: '/Images/services/images/smart_industry_portal.svg',
        CTA_title: 'Smart Industry Portal',
        status: 'inactive',
        routeTo: '',
      },
      {
        image: '/Images/services/images/accessible_web_widget.svg',
        CTA_title: 'Accessibility Web Widget',
        status: 'active',
        routeTo: '/case-studies/accessible-web-widget',
      },
    ]
  },
  {
    id: '02',
    // title: 'Development Services for Startup Founders',
    title: `<span class='interFont text-[1.25rem] md:text-[1.625rem] lg:text-[1.875rem] text-[#FFFFFF] font-medium leading-normal'>Development Services for <span class='text-primary-blue'>Startup Founders</span></span>`,
    service_array: [
      {
        service_icon: '/Images/services/icons/computer-video.svg',
        service_title: 'MVP & Prototype Development',
      },
      {
        service_icon: '/Images/services/icons/laptop-phone-sync.svg',
        service_title: 'Custom SaaS & Web Application Development',
      },
      {
        service_icon: '/Images/services/icons/phone-developer-mode.svg',
        service_title: 'Modular Feature Development for Scalable Apps',
      },
      {
        service_icon: '/Images/services/icons/api.svg',
        service_title: 'Integration of Third-party APIs & Platforms',
      }
    ],
    service_CTA: [
      {
        image: '/Images/services/images/learning_platform.svg',
        CTA_title: 'Learning Platform',
        status: 'inactive',
        routeTo: '',
      },
      {
        image: '/Images/services/images/Digital_wellness.svg',
        CTA_title: 'Digital Wellness',
        status: 'inactive',
        routeTo: '',
      },
    ]
  },
  {
    id: '03',
    // title: 'Industrial IoT for Smarter Operations',
    title: `<span class='interFont text-[1.25rem] md:text-[1.625rem] lg:text-[1.875rem] text-[#FFFFFF] font-medium leading-normal'>Industrial IoT for <span class='text-primary-blue'>Smarter Operations</span></span>`,
    service_array: [
      {
        service_icon: '/Images/services/icons/ai-phone-02.svg',
        service_title: 'IoT-Enabled App Development',
      },
      {
        service_icon: '/Images/services/icons/ai-laptop.svg',
        service_title: 'Remote Monitoring Interfaces',
      },
      {
        service_icon: '/Images/services/icons/carbon_iot-platform.svg',
        service_title: 'Sensor Integration & Visualization',
      },
      {
        service_icon: '/Images/services/icons/tabler_eye-spark.svg',
        service_title: 'Smart Factory & Equipment Tracking',
      }
    ],
    service_CTA: [
      {
        image: '/Images/services/images/infrared_thermography.svg',
        CTA_title: 'Infrared Thermography',
        status: 'active',
        routeTo: '/case-studies/infrared-thermography',
      },
    ]
  },
  {
    id: '04',
    // title: 'AI & Agentic AI for Intelligent Decision-Making',
    title: `<span class='interFont text-[1.25rem] md:text-[1.625rem] lg:text-[1.875rem] text-[#FFFFFF] font-medium leading-normal'>AI & Agentic AI for <span class='text-primary-blue'>Intelligent Decision-Making</span></span>`,
    service_array: [
      {
        service_icon: '/Images/services/icons/ai-chat-01.svg',
        service_title: 'AI-Powered Decision Support Tools',
      },
      {
        service_icon: '/Images/services/icons/elements.svg',
        service_title: 'Task Automation & Workflow Bots',
      },
      {
        service_icon: '/Images/services/icons/ai-file.svg',
        service_title: 'Document Intelligence & Invoice Parsing',
      },
      {
        service_icon: '/Images/services/icons/robot-01.svg',
        service_title: 'Agentic AI Systems for Business Logic',
      }
    ],
    service_CTA: [
      {
        image: '/Images/services/images/task_management.svg',
        CTA_title: 'Task Management',
        status: 'inactive',
        routeTo: '',
      },
      {
        image: '/Images/services/images/invoice_mapping.svg',
        CTA_title: 'Invoice Mapping',
        status: 'inactive',
        routeTo: '',
      },
    ]
  },
  {
    id: '05',
    // title: 'Machine Vision for Quality Control and Inspection',
    title: `<span class='interFont text-[1.25rem] md:text-[1.625rem] lg:text-[1.875rem] text-[#FFFFFF] font-medium leading-normal'>Machine Vision for <span class='text-primary-blue'>Quality Control and Inspection</span></span>`,
    service_array: [
      {
        service_icon: '/Images/services/icons/camera-ai.svg',
        service_title: 'AI for Visual Quality Inspection',
      },
      {
        service_icon: '/Images/services/icons/cctv-camera.svg',
        service_title: 'Camera-Based Defect Detection',
      },
      {
        service_icon: '/Images/services/icons/laptop-performance.svg',
        service_title: 'Production Line Monitoring Solutions',
      },
      {
        service_icon: '/Images/services/icons/bitcoin-eye.svg',
        service_title: 'Embedded Vision System Development',
      }
    ],
    service_CTA: [
      {
        image: '/Images/services/images/visual_inspection_ai.svg',
        CTA_title: 'Visual Inspection AI',
        status: 'inactive',
        routeTo: '',
      },
    ]
  },
  {
    id: '06',
    // title: 'Generative AI & GPT',
    title: `<span class='interFont text-[1.25rem] md:text-[1.625rem] lg:text-[1.875rem] text-[#FFFFFF] font-medium leading-normal'>Generative AI & GPT for <span class='text-primary-blue'>workplace productivity</span></span>`,
    service_array: [
      {
        service_icon: '/Images/services/icons/chat-bot.svg',
        service_title: 'Custom AI Chatbots & Assistants',
      },
      {
        service_icon: '/Images/services/icons/artificial-intelligence-06.svg',
        service_title: 'Generative AI Content Automation',
      },
      {
        service_icon: '/Images/services/icons/chat-gpt.svg',
        service_title: 'GPT/LLM Integration for Business flows',
      },
      {
        service_icon: '/Images/services/icons/ai-brain-04.svg',
        service_title: 'Knowledge Management Assistants',
      }
    ],
    service_CTA: [
      {
        image: '/Images/services/images/sara.svg',
        CTA_title: 'AI Chat Assistant',
        status: 'inactive',
        routeTo: '',
      }
    ]
  },
]
