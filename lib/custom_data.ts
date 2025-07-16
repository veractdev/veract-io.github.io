export const navItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
    status: "active"
  },
  {
    id: 2,
    name: "Services",
    link: "/",
    status: "inactive"
  },
  {
    id: 3,
    name: "Custom Agent",
    link: "/agent",
    status: "active"
  },
  {
    id: 4,
    name: "Case Studies",
    link: "/case-studies",
    status: "active"
  },
  // {
  //   id: 5,
  //   name: "Contact Us",
  //   link: "/contact-us",
  //   status:"inactive"
  // },
  {
    id: 5,
    name: "Blogs",
    link: "/",
    status: "inactive"
  }
];

export const caseStudyData = {
  "thermal": {
    id: 1,
    banner: {
      title: "Enhancing Animal Health with Thermography",
      description:
        "A reliable, stress-free method for monitoring livestock health and preventing disease outbreaks.",
      image: "/Images/case-studies/thermal/Hero bg img.png",
    },
    showReel: {
      title: "SHOWREEL",
      video:
        [
          '/Images/case-studies/thermal/ShowReel/web view-thermal showwreel.mp4',
          '/Images/case-studies/thermal/ShowReel/tab view-thermal showreel.mp4',
          '/Images/case-studies/thermal/ShowReel/mobile view-thermal showreel.mp4',
        ],
      // "",
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
        '/Images/case-studies/thermal/bottleneck video- web view.mp4',
        '/Images/case-studies/thermal/bottleneck-tab view video.mp4',
        '/Images/case-studies/thermal/bottleneck video-mobile view.mp4'
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
          title: "Enable Seamless Communication",
        },
        {
          id: 2,
          title: "Enable Seamless Communication",
        },
        {
          id: 3,
          title: "Enable Seamless Communication",
        },
        {
          id: 4,
          title: "Enable Seamless Communication",
        },
        {
          id: 5,
          title: "Enable Seamless Communication",
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
          bg: "bg-[url('/Images/case-studies/thermal/Services/Group_35986.png')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
          description:
            "Enhance your brand's impact with our corporate video expertise. We create engaging content for businesses, from promotions to training materials.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[8rem]",
        },
        {
          title: "Seamless Integration",
          bg: "bg-[url('/Images/case-studies/thermal/Services/seamless_integration.jpg')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
          description:
            "Ensured smooth interaction between thermal cameras, IoT devices, and software components.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[8rem]",
        },
        {
          title: "Health Monitoring System",
          bg: "bg-[url('/Images/case-studies/thermal/Services/health_and_monitoring.png')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
          description:
            "Built a comprehensive desktop-based platform tailored for monitoring animal health efficiently.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
        {
          title: "Actionable Insights",
          bg: "bg-[url('/Images/case-studies/thermal/Services/Actionable_insights.png')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
          description:
            "Facilitated timely, data-backed decisions to improve overall animal well-being.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
        {
          title: "User Experience Focus",
          bg: "bg-[url('/Images/case-studies/thermal/Services/Group_35985.png')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
          description:
            "Delivered an intuitive interface that simplifies usage for veterinary and research teams.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
      ],
    },
    key_features: {
      title: "Key Features",
      indication_color: "#FF7A3B",
      key_features_list: [
        {
          number: "[01]",
          title: "Thermal Imaging Integration",
          img: "/Images/case-studies/thermal/KeyFeatures/Customizable Interface.webp",
          desc: "Enables precise monitoring of temperature variations to identify early signs of health issues.",
        },
        {
          number: "[02]",
          title: "Real-Time Data Processing",
          img: "/Images/case-studies/thermal/KeyFeatures/Seamless Web Integration.webp",
          desc: "Enables precise monitoring of temperature variations to identify early signs of health issues.",
        },
        {
          number: "[03]",
          title: "Camera & IoT Synchronization",
          img: "/Images/case-studies/thermal/KeyFeatures/Lightweight & Optimized Performance.webp",
          desc: "Enables precise monitoring of temperature variations to identify early signs of health issues.",
        },
        {
          number: "[04]",
          title: "Low-Latency Data Transfer",
          img: "/Images/case-studies/thermal/KeyFeatures/Real-Time Accessibility Controls.webp",
          desc: "Enables precise monitoring of temperature variations to identify early signs of health issues.",
        },
        {
          number: "[05]",
          title: "User-Friendly Desktop Interface",
          img: "/Images/case-studies/thermal/KeyFeatures/Cross-Platform Compatibility.webp",
          desc: "Enables precise monitoring of temperature variations to identify early signs of health issues.",
        },
      ],
    },
    testimonials: {
      testimonial: "",
      name: "",
      image: "",
      quote_image: "/Images/testimonial_quotes.svg",
      shadow: "-1.875rem -1.25rem 62.5rem rgba(255,122,59,0.5)",
      profession: "",
      profession_at: "",
    },
  },
  "incluway": {
    id: 2,
    banner: {
      title: "Empowering Inclusive Web Experiences through Accessibility",
      description:
        "A seamless, customizable solution to ensure digital accessibility for users with diverse abilities.",
      image: "/Images/case-studies/incluway/Incluway_hero_black patch.png",
    },
    showReel: {
      title: "SHOWREEL",
      video:
        [
          '/Images/case-studies/incluway/ShowReel/Incluway showreel- web view.mp4',
          '/Images/case-studies/incluway/ShowReel/Incluway showreel- tab view.mp4',
          '/Images/case-studies/incluway/ShowReel/Incluway showreel Mobile view.mp4',
        ],
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
      indication_icon: "/Images/case-studies/incluway/Challenges/icon.svg",
      video: [
        "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
        "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
        "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4"
      ],
      // "",
      challenge_description: "BOTTLENECK",
      challenge_solution:
        "Designing an accessibility system that integrates with websites to support users—while maintaining performance, compliance, and customization.",
      challenge_solution_highlighted:
        "livestock health with accuracy, reliability, and real-time insights.",
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
          bg: "bg-[url('/Images/case-studies/incluway/Services/Inclusive_Accessibility_Features.png')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
          description:
            "Offered real-time controls like text resizing, contrast modes, screen reader compatibility, and animation toggles to serve users with varied accessibility needs.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[8rem]",
        },
        {
          title: "Seamless Integration",
          bg: "bg-[url('/Images/case-studies/incluway/Services/Seamless_Integration.png')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
          description:
            "Developed a plug-and-play widget that can be embedded on any website with minimal code—supporting fast adoption and cross-platform reliability.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[8rem]",
        },
        {
          title: "Widget Management System",
          bg: "bg-[url('/Images/case-studies/incluway/Services/Widget_Management_System.png')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
          description:
            "Built a modular, customizable web-based widget with admin control for managing display, placement, and feature toggling without code changes.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
        {
          title: "Actionable Accessibility Data",
          bg: "bg-[url('/Images/case-studies/incluway/Services/Actionable_Accessibility_Data.png')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
          description:
            "Enabled tracking of widget usage and accessibility feature adoption to help website owners improve their inclusivity efforts.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
        {
          title: "User-Centered Design",
          bg: "bg-[url('/Images/case-studies/incluway/Services/markus-spiske-i_dT4tseXD8-unsplash.jpg')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
          description:
            "Focused on clarity, simplicity, and intuitiveness to deliver an accessible experience for end-users.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
      ],
    },
    key_features: {
      title: "Key Features",
      indication_color: "#1F8BFF",
      key_features_list: [
        {
          number: "[01]",
          title: "Seamless Web Integration",
          img: "/Images/case-studies/incluway/KeyFeatures/Seamless Web Integration.webp",
          desc: "Effortlessly integrates into any website with a single line of code, ensuring rapid deployment and minimal development effort.",
        },
        {
          number: "[02]",
          title: "Real-Time Accessibility Controls",
          img: "/Images/case-studies/incluway/KeyFeatures/Real-Time Accessibility Controls.webp",
          desc: "Offers live adjustments for text size, contrast, animation toggles, and more—empowering users to personalize their browsing experience instantly.",
        },
        {
          number: "[03]",
          title: "Cross-Platform Compatibility",
          img: "/Images/case-studies/incluway/KeyFeatures/Cross-Platform Compatibility.webp",
          desc: "Ensures consistent performance across all major browsers and devices, maintaining accessibility regardless of user environment.",
        },
        {
          number: "[04]",
          title: "Lightweight & Optimized Performance",
          img: "/Images/case-studies/incluway/KeyFeatures/Lightweight & Optimized Performance.webp",
          desc: "Built with performance in mind, the widget loads quickly, consumes minimal resources, and doesn’t interfere with site speed or SEO.",
        },
        {
          number: "[05]",
          title: "Customizable Interface",
          img: "/Images/case-studies/incluway/KeyFeatures/Customizable Interface.webp",
          desc: "Designed with modularity, allowing brands to style, position, and configure the widget to match their visual identity and user needs.",
        },
      ],
    },
    testimonials: {
      testimonial:
        "",
      name: "",
      image: "",
      quote_image: "/Images/case-studies/incluway/Testimonials/quote.svg",
      shadow: "-1.875rem -1.25rem 62.5rem rgba(66,133,244,1)",
      profession: "",
      profession_at: "",
    },
  }
};

export const LandingPageData = {
  banner: {
    title_primary: "Driving Digital Transformation",
    title_secondary: "with",
    title_tertiary: "custom",
    typwriting_animation_list: [
      {
        id: 1,
        word: "mobile app", //mobile app
      },
      {
        id: 2,
        word: "web solution", //web app
      },
      {
        id: 3,
        word: "ai powered solution", //AI
      },
      {
        id: 4,
        word: "iot solution", //IoT
      }
    ],
    description_primary:
      "Delivering scalable technology that powers modern digital experiences, AI",
    description_secondary: "systems, and connected IoT solutions.",
    get_in_touch: "Get in touch",
    get_in_touch_arrow: "/Images/LandingPage/Banner/arrowIconUp.png",
    view_services_text: "View services", //View services
    banner_CTA_status: 'active',
    banner_image_list: [
      {
        id: 1,
        image: "/Images/LandingPage/Banner/BNI.svg",
      },
      {
        id: 2,
        image: "/Images/LandingPage/Banner/Clutch.svg",
      },
      {
        id: 3,
        image: "/Images/LandingPage/Banner/5 stars.svg",
      },
      {
        id: 4,
        image: "/Images/LandingPage/Banner/Ethercat_logo.svg",
      },
    ],
    banner_carousel_list: [
      {
        id: 1,
        img: "/Images/LandingPage/Banner/carousel_images/ibits_logo.svg",
      },
      {
        id: 2,
        img: "/Images/LandingPage/Banner/carousel_images/evo11ve_logo.svg",
      },
      {
        id: 3,
        img: "/Images/LandingPage/Banner/carousel_images/mako-logo (1) 1.svg",
      },
      {
        id: 4,
        img: "/Images/LandingPage/Banner/carousel_images/suyash-logo.svg",
      },
      {
        id: 5,
        img: "/Images/LandingPage/Banner/carousel_images/anyo-logo (1) 1.svg",
      },
    ],
  },
  showReel: {
    title: "SHOWREEL",
    video:
      ["/Images/LandingPage/showReel/web-showreel.mp4","/Images/LandingPage/showReel/tab-showreel.mp4","/Images/LandingPage/showReel/mobile-showreel.mp4"]
    // "",
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
        bg: "bg-[url('/Images/LandingPage/Advantages/img1.webp')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
        description: "Custom software solutions designed around your workflows — not off-the-shelf",
        gradient:
          "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[8rem]",
      },
      {
        title: "Digital Transformation Strategy with the Right Technologies",
        // /Images/LandingPage/Advantages/Digital_Transformation_Strategy_with_the_Right_Technologies.jpg
        bg: "bg-[url('/Images/LandingPage/Advantages/img2.jpg')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
        description: "Modernize operations with digital tools that serve real business goals",
        gradient:
          "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[8rem]",
      },
      {
        title: "Flexible Engagement Models for Agile Development",
        // /Images/LandingPage/Advantages/Flexible_Engagement_Models_for_Agile_Development.jpg
        bg: "bg-[url('/Images/LandingPage/Advantages/img3.webp')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
        description: "Start small, scale fast, or pause — flexibility built into the process",
        gradient:
          "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[10rem]",
      },
      {
        title: "Measurable Outcomes Through AI, IoT, and Machine Vision",
        // /Images/LandingPage/Advantages/Measurable_Outcomes_Through_AI_IoT_and_Machine_Vision.jpg
        bg: "bg-[url('/Images/LandingPage/Advantages/img4.webp')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
        description: "Drive impact with intelligent systems and real-time performance insights",
        gradient:
          "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[10rem]",
      },
    ],
    featuredWorks_list: [
      {
        id: 1,
        image: "/Images/LandingPage/FeaturedWorks/accessibility.png",
        hover_image: "https://picsum.photos/200/300",
        title: "accessibility",
        description: "accessibility project",
        status: "active",
        route: 'incluway',
      },
      {
        id: 2,
        image: "/Images/LandingPage/FeaturedWorks/thermal.png",
        hover_image: "https://picsum.photos/200/300",
        title: "infrared thermography",
        description: "thermal imaging detects mastitis in dairy cattle",
        status: "active",
        route: 'thermal',
      },
      {
        id: 3,
        image: "/Images/LandingPage/FeaturedWorks/Ecom.png",
        hover_image: "https://picsum.photos/200/300",
        title: "e-commerce",
        description: "payment enabled e-commerce web application",
        status: "inactive",
        route: 'ecommerce',
      },
      {
        id: 4,
        image: "/Images/LandingPage/FeaturedWorks/Evo11ve.png",
        hover_image: "https://picsum.photos/200/300",
        title: "ed tech",
        description: "education platform",
        status: "inactive",
        route: 'edtech',
      },
    ],
  },
  services: {
    title: "Our Service",
    description: "Take a look at our handpicked case studies showcasing real-world tech solutions.A quick glimpse into the impact we create.",
    service_list: [
      {
        number: "[01]",
        title: "Digital Transformation Strategy for Modern Businesses",
        desc: [
          'Modernize operations using proven digital transformation tools and workflows.',
          'Web, mobile, or desktop applications — your stack is fully covered.'
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
          'Build faster, smarter, and with clarity.',
          'Our research-backed approach helps founders make informed product decisions.'
        ],
        highlighted_desc: [
          'Build <span class="text-primary-blue">faster, smarter</span>, and with clarity.',
          'Our research-backed approach helps founders make informed <span class="text-primary-blue">product decisions</span>.'
        ]
      },
      {
        number: "[03]",
        title: "Industrial IoT for Smarter Operations",
        desc: [
          'Connect IoT devices to monitor, analyze, and automate in real time.',
          'Improve efficiency, reduce downtime, and act on actionable insights.'
        ],
        highlighted_desc: [
          'Connect <span class="text-primary-blue">IoT devices</span> to monitor, analyze, and automate in real time.',
          'Improve <span class="text-primary-blue">efficiency</span>, reduce <span class="text-primary-blue">downtime</span>, and act on actionable <span class="text-primary-blue">insights</span>.'
        ]
      },
      {
        number: "[04]",
        title: "AI & Agentic AI for Intelligent Decision-Making",
        desc: [
          'Leverage AI for smarter decisions and data-driven growth.',
          'Deploy agentic AI to automate tasks and adapt intelligently.'
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
          'Automated defect detection, inspection, and classification at industrial scale.',
          'Boost precision, reduce errors, and scale with confidence.'
        ],
        highlighted_desc: [
          'Automated defect <span class="text-primary-blue">detection, inspection</span>, and classification at industrial scale.',
          'Boost precision, <span class="text-primary-blue">reduce errors</span>, and scale with <span class="text-primary-blue">confidence</span>.'
        ]
      },
    ]
  },
  we_work_with: {
    title: "We Work With",
    sub_title: "brands in",
    carouselData: [
      {
        id: 1,
        name: "Accessibility",
        image: "/Images/LandingPage/industries/accessibility.png",
      },
      {
        id: 2,
        name: "Agri Tech",
        image: "/Images/LandingPage/industries/agri-tech.png",
      },
      {
        id: 3,
        name: "Audit",
        image: "/Images/LandingPage/industries/Audit.png",
      },
      {
        id: 4,
        name: "E-commerce",
        image: "/Images/LandingPage/industries/e-commerce.png",
      },
      {
        id: 5,
        name: "Ed-Tech",
        image: "/Images/LandingPage/industries/Ed-Tech.png",
      },
      {
        id: 6,
        name: "FinTech",
        image: "/Images/LandingPage/industries/fintech.png",
      },
      {
        id: 7,
        name: "Machine Vision",
        image: "/Images/LandingPage/industries/machine vision.png",
      },
      {
        id: 8,
        name: "Manufacturing",
        image: "/Images/LandingPage/industries/manufacturing.png",
      },
      {
        id: 9,
        name: "Sales",
        image: "/Images/LandingPage/industries/sales.png",
      },
      {
        id: 10,
        name: "Thermal Vision",
        image: "/Images/LandingPage/industries/thermal vision.png",
      },
      {
        id: 11,
        name: "Wellness",
        image: "/Images/LandingPage/industries/wellness.png",
      },
    ],
  },
  testimonials: {
    testimonial_list: [
      {
        name: "hare priya",
        quote: "I am amazed the way Veract took the initial discussion of our HRMS product MyTrackie. They swiftly got into the details and educated me wherever required. Really thrilled to work with Veract for the software upgrades of our product. I would certainly recommend Veract for product development and technical consulting.",
        image: "/Images/LandingPage/Testimonial/harepriyaa.jpeg",
        company: "",
      },
      {
        name: "Mahendra vadivelu",
        quote: "We engaged Veract for an Angular project which required custom printing domain knowledge and involved high level of complexity of the legacy system. Veract team took complete ownership of client coordination, project management and project delivery as well. Focus on the deliverables and technical expertise stood out during our engagement. Thank you Veract for all your splendid work in this engagement. I will assure you that you will be our first go to team for any outsourcing need.",
        image: "/Images/LandingPage/Testimonial/mahendra.jpg",
        company: "",
      },
      {
        name: "salil nair",
        quote: "We engaged with Veract team from an early stage and they helped build out our 'KiViStar' App from basic day one concept. Their choice of architecture, framework and ability to deliver the product helped us go to market quickly. This helped us focus on our core work. The team at Veract developed software like their own product! We continue to engage with Veract for our technical development requirements.",
        image: "/Images/LandingPage/Testimonial/salil.png",
        company: "",
      },
      {
        name: "anand shah",
        quote: "Excellent prompt support in spite of remote location. ",
        image: "/Images/LandingPage/Testimonial/AnanadShah.png",
        company: "",
      },
      {
        name: "Bijoy kt",
        quote: "Our engagement with veract for Datacenter Mart project has been a fantastic experience. The team was very prompt and supportive throughout the project. We are very happy with the outcome and we expect to start the second phase soon. This is a very complex project because we did not have an exact comparison to show them but they grasped the requirements well and was able to deliver what we expected.",
        image: "/Images/LandingPage/Testimonial/Bijoy.jpg",
        company: "",
      },
    ],
  },
  footer: {
    description:
      "At Veract, we craft custom software with precision and innovation—driving business success through web, mobile, and AI excellence.",
    socialMediaIcons: [
      {
        id: 1,
        image: "/Images/LandingPage/Footer/linkedin.svg",
        link: "https://www.linkedin.com/company/veract-consultancy-private-limited/",
      },
      {
        id: 2,
        image: "/Images/LandingPage/Footer/youtube.svg",
        link: "https://youtube.com/@veract-consultancy?si=tGt9K1cCpnNgzFkJ",
      },
      {
        id: 3,
        image: "/Images/LandingPage/Footer/whatsapp.svg",
        link: "https://www.whatsapp.com/channel/0029VahNUEB90x31HeDatt2o",
      },
      {
        id: 4,
        image: "/Images/LandingPage/Footer/insta.svg",
        link: "https://www.instagram.com/veractconsultancy/",
      },
    ],
    quickLinks: {
      company: {
        title: "Company",
        links: [
          {
            id: 1,
            title: "Home",
            link: "/",
            status: "active"
          },
          {
            id: 2,
            title: "Services",
            link: "",
            status: "inactive"
          },
          {
            id: 3,
            title: "Custom Agent",
            link: "/agent",
            status: "active"
          },
          {
            id: 4,
            title: "Case Studies",
            link: "/case-studies",
            status: "active"
          },
          {
            id: 5,
            title: "Contact Us",
            link: "/contact-us",
            status: "active"
          },
          {
            id: 6,
            title: "Blogs",
            link: "",
            status: "inactive"
          }
        ],
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
            title: "Industrial IoT",
            link: "",
            status: "inactive"
          },
          {
            id: 4,
            title: "Machine Vision",
            link: "",
            status: "inactive"
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
    subtitle:
      "Unlock productivity like never before. Get a free consultation, see our AI agents in action, and deploy 1 intelligent agent in your workflow-at no cost",
    book_demo: "Book a free demo",
    view_case_study: "View case studies",
    banner_features: [
      {
        features_icon: "/Images/agent/Banner/Free business consultation.svg",
        features_title: "Free Business consultation",
        features_subtitle:
          "Get expert insights into where AI can deliver the most value in your operations.",
      },
      {
        features_icon: "/Images/agent/Banner/Live Product Demo.svg",
        features_title: "Live Product Demo",
        features_subtitle:
          "Watch how our AI agents automate real tasks across your tools — customized to your case.",
      },
      {
        features_icon: "/Images/agent/Banner/Deploy 1 agent.svg",
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
};

export const caseStudiesHomePageData = {
  header: "Our Projects",
  subHeader: "From coming up with creative concepts to delivering outstanding campaigns, we're your friendly, fun-loving crew ready to turn your project dreams into reality!",
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
        image: "/Images/case-studies/List/Infrared Health Scan.webp",
        hover_image: "https://picsum.photos/200/300",
        header: "Infrared Thermography",
        subHeader: "Infrared Imaging for Animal Health",
        routeTo: "/case-studies/thermal",
      },
    ],
    accessibility: [
      {
        id: 1,
        image: "/Images/case-studies/List/Accessible Web Widget.webp",
        hover_image: "https://picsum.photos/200/300",
        header: "Accessible Web Widget",
        subHeader: "Smart Widget for Enhanced Digital Access",
        routeTo: "/case-studies/incluway",
      },
    ],
    chatbot: [
      {
        id: 1,
        image: "/Images/case-studies/List/AI Chat Assistant.webp",
        hover_image: "https://picsum.photos/200/300",
        header: "AI Chat Assistant",
        subHeader: "Conversational AI for Real-Time Support",
        routeTo: "",
      },
    ],
    edtech: [
      {
        id: 1,
        image: "/Images/case-studies/List/Learning Platform.webp",
        hover_image: "https://picsum.photos/200/300",
        header: "Learning Platform",
        subHeader: "AI-Based Learning and Course Portal",
        routeTo: "",
      },
    ],
    machinevision: [
      {
        id: 1,
        image: "/Images/case-studies/List/Visual Inspection AI.webp",
        hover_image: "https://picsum.photos/200/300",
        header: "Visual Inspection AI",
        subHeader: "AI Visual QC for Industrial Inspection",
        routeTo: "",
      },
    ],
    wellness: [
      {
        id: 1,
        image: "/Images/case-studies/List/Digital Wellness App.webp",
        hover_image: "https://picsum.photos/200/300",
        header: "Digital Wellness",
        subHeader: "Health & Wellness App for Daily Tracking",
        routeTo: "",
      },
    ],
    industryplatform: [
      {
        id: 1,
        image: "/Images/case-studies/List/Smart Industry Portal.webp",
        hover_image: "https://picsum.photos/200/300",
        header: "Smart Industry Portal",
        subHeader: "Innovative Data Center Platform",
        routeTo: "",
      },
    ],
    ecommerce: [
      {
        id: 1,
        image: "/Images/case-studies/List/Seasonal E-Commerce.webp",
        hover_image: "https://picsum.photos/200/300",
        header: "Seasonal E-Commerce",
        subHeader: "Online Store for Seasonal Organic Goods",
        routeTo: "",
      },
    ],
    sales: [
      {
        id: 1,
        image: "/Images/case-studies/List/Sales Dashboard.webp",
        hover_image: "https://picsum.photos/200/300",
        header: "Sales Dashboard",
        subHeader: "Quote & Enquiry Management Dashboard",
        routeTo: "",
      },
    ],
    audiovideo: [
      {
        id: 1,
        image: "/Images/case-studies/List/AV Room Designer.webp",
        hover_image: "https://picsum.photos/200/300",
        header: "Audio Visual Interior",
        subHeader: "Immersive AV Conference Room Planner",
        routeTo: "",
      },
    ],
  },
};
