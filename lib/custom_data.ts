export const navItems = [
  {
    id: 1,
    name: "Case Studies",
    link: "/case-studies",
  },
  // {
  //   id: 2,
  //   name: "Services",
  //   link: "/services/web-development",
  // },
  // {
  //   id: 3,
  //   name: "Industries",
  //   link: "/industries/healthcare",
  // },
  // {
  //   id: 4,
  //   name: "Company",
  //   link: "/company/about",
  // },
  // {
  //   id: 5,
  //   name: "Blogs",
  //   link: "/blogs/latest",
  // },
];

export const caseStudyData = {
  "thermal": {
    id: 1,
    banner: {
      title: "Enhancing Animal Health with Thermography",
      description:
        "A reliable, stress-free method for monitoring livestock health and preventing disease outbreaks.",
      image: "/Images/case-studies/case_study_banner_image.png",
    },
    showReel: {
      title: "SHOWREEL",
      video:
        "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
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
      video:
        "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
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
          bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
          description:
            "Enhance your brand's impact with our corporate video expertise. We create engaging content for businesses, from promotions to training materials.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[8rem]",
        },
        {
          title: "Seamless Integration",
          bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
          description:
            "Ensured smooth interaction between thermal cameras, IoT devices, and software components.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[8rem]",
        },
        {
          title: "Health Monitoring System",
          bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
          description:
            "Built a comprehensive desktop-based platform tailored for monitoring animal health efficiently.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
        {
          title: "Actionable Insights",
          bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
          description:
            "Facilitated timely, data-backed decisions to improve overall animal well-being.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
        {
          title: "User Experience Focus",
          bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
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
      key_features_list: [
        {
          number: "[01]",
          title: "Thermal Imaging Integration",
          img: "/Images/CaseStudies/Thermal/img1.jpg",
          desc: "Enables precise monitoring of temperature variations to identify early signs of health issues.",
        },
        {
          number: "[02]",
          title: "Real-Time Data Processing",
          img: "/Images/CaseStudies/Thermal/img1.jpg",
          desc: "Enables precise monitoring of temperature variations to identify early signs of health issues.",
        },
        {
          number: "[03]",
          title: "Camera & IoT Synchronization",
          img: "/Images/CaseStudies/Thermal/img1.jpg",
          desc: "Enables precise monitoring of temperature variations to identify early signs of health issues.",
        },
        {
          number: "[04]",
          title: "Low-Latency Data Transfer",
          img: "/Images/CaseStudies/Thermal/img1.jpg",
          desc: "Enables precise monitoring of temperature variations to identify early signs of health issues.",
        },
        {
          number: "[05]",
          title: "User-Friendly Desktop Interface",
          img: "/Images/CaseStudies/Thermal/img1.jpg",
          desc: "Enables precise monitoring of temperature variations to identify early signs of health issues.",
        },
      ],
    },
    testimonials: {
      testimonial:
        "Veract brought our vision to life with precision. The voice-to-text AI solution exceeded expectations—intuitive, responsive, and impactful. Our users love it. A truly seamless collaboration",
      name: "Harepriyaa",
      image: "https://www.veract.io/images/harepriyaa.jpeg",
      quote_image: "/Images/testimonial_quotes.svg",
      shadow: "-1.875rem -1.25rem 62.5rem rgba(255,122,59,0.5)",
      profession: "Director",
      profession_at: "Thermal vision",
    },
  },
  "incluway": {
    id: 2,
    banner: {
      title: "Empowering Inclusive Web Experiences through Accessibility",
      description:
        "A seamless, customizable solution to ensure digital accessibility for users with diverse abilities.",
      image: "/Images/case-studies/incluway_background.png",
    },
    showReel: {
      title: "SHOWREEL",
      video:
        "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
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
      video:
        "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
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
          bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
          description:
            "Enhance your brand's impact with our corporate video expertise. We create engaging content for businesses, from promotions to training materials.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[8rem]",
        },
        {
          title: "Seamless Integration",
          bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
          description:
            "Ensured smooth interaction between thermal cameras, IoT devices, and software components.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[8rem]",
        },
        {
          title: "Health Monitoring System",
          bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
          description:
            "Built a comprehensive desktop-based platform tailored for monitoring animal health efficiently.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
        {
          title: "Actionable Insights",
          bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
          description:
            "Facilitated timely, data-backed decisions to improve overall animal well-being.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
        {
          title: "User Experience Focus",
          bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
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
      key_features_list: [
        {
          number: "[01]",
          title: "Thermal Imaging Integration",
          img: "/Images/CaseStudies/Thermal/img1.jpg",
          desc: "Enables precise monitoring of temperature variations to identify early signs of health issues.",
        },
        {
          number: "[02]",
          title: "Real-Time Data Processing",
          img: "/Images/CaseStudies/Thermal/img1.jpg",
          desc: "Enables precise monitoring of temperature variations to identify early signs of health issues.",
        },
        {
          number: "[03]",
          title: "Camera & IoT Synchronization",
          img: "/Images/CaseStudies/Thermal/img1.jpg",
          desc: "Enables precise monitoring of temperature variations to identify early signs of health issues.",
        },
        {
          number: "[04]",
          title: "Low-Latency Data Transfer",
          img: "/Images/CaseStudies/Thermal/img1.jpg",
          desc: "Enables precise monitoring of temperature variations to identify early signs of health issues.",
        },
        {
          number: "[05]",
          title: "User-Friendly Desktop Interface",
          img: "/Images/CaseStudies/Thermal/img1.jpg",
          desc: "Enables precise monitoring of temperature variations to identify early signs of health issues.",
        },
      ],
    },
    testimonials: {
      testimonial:
        "Veract brought our vision to life with precision. The voice-to-text AI solution exceeded expectations—intuitive, responsive, and impactful. Our users love it. A truly seamless collaboration",
      name: "Harepriyaa",
      image: "https://www.veract.io/images/harepriyaa.jpeg",
      quote_image: "/Images/testimonial_quotes.svg",
      shadow: "-1.875rem -1.25rem 62.5rem rgba(255,122,59,0.5)",
      profession: "Director",
      profession_at: "Thermal vision",
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
        word: "mobile app",
      },
    ],
    description_primary:
      "Delivering scalable technology that powers modern digital experiences, AI",
    description_secondary: "systems, and connected IoT solutions.",
    get_in_touch: "Get in touch",
    get_in_touch_arrow: "/Images/LandingPage/Banner/arrowIconUp.png",
    view_services_text: "View services",
    banner_image_list: [
      {
        id: 1,
        image: "/Images/LandingPage/Banner/BNI.png",
      },
      {
        id: 2,
        image: "/Images/LandingPage/Banner/Clutch.png",
      },
      {
        id: 3,
        image: "/Images/LandingPage/Banner/Stars.png",
      },
      {
        id: 4,
        image: "/Images/LandingPage/Banner/EtherCat.png",
      },
    ],
    banner_carousel_list: [
      {
        id: 1,
        img: "/Images/LandingPage/Banner/IBITS.png",
      },
      {
        id: 2,
        img: "/Images/LandingPage/Banner/Evo11ve.png",
      },
      {
        id: 3,
        img: "/Images/LandingPage/Banner/Mako.png",
      },
      {
        id: 4,
        img: "/Images/LandingPage/Banner/Suyash.png",
      },
      {
        id: 5,
        img: "/Images/LandingPage/Banner/Anyo.png",
      },
    ],
  },
  showReel: {
    title: "SHOWREEL",
    video:
      "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
  },
  aboutUs: {
    achievementsList: [
      {
        id: 1,
        category: "clients",
        numbers: "50+",
        description: "Amazing clients",
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
        description: "Successfull Projects",
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
        title: "Health Issue Detection",
        bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
        description:
          "Enhance your brand's impact with our corporate video expertise. We create engaging content for businesses, from promotions to training materials.",
        gradient:
          "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[8rem]",
      },
      {
        title: "Seamless Integration",
        bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
        description:
          "Ensured smooth interaction between thermal cameras, IoT devices, and software components.",
        gradient:
          "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[8rem]",
      },
      {
        title: "Health Monitoring System",
        bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
        description:
          "Built a comprehensive desktop-based platform tailored for monitoring animal health efficiently.",
        gradient:
          "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[10rem]",
      },
      {
        title: "Actionable Insights",
        bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://images.pexels.com/photos/808822/pexels-photo-808822.jpeg')]",
        description:
          "Facilitated timely, data-backed decisions to improve overall animal well-being.",
        gradient:
          "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[10rem]",
      },
    ],
    featuredWorks_list: [
      {
        id: 1,
        image: "/Images/case-studies/case_study_banner_image.png",
        title: "project title",
        description: "category",
      },
      {
        id: 2,
        image: "/Images/case-studies/case_study_banner_image.png",
        title: "project title",
        description: "category",
      },
      {
        id: 3,
        image: "/Images/case-studies/case_study_banner_image.png",
        title: "project title",
        description: "category",
      },
      {
        id: 4,
        image: "/Images/case-studies/case_study_banner_image.png",
        title: "project title",
        description: "category",
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
        image: "/Images/LandingPage/WeWorkWith/accessibility.png",
      },
      {
        id: 2,
        name: "Agri Tech",
        image: "/Images/LandingPage/WeWorkWith/agri-tech.png",
      },
      {
        id: 3,
        name: "Audit",
        image: "/Images/LandingPage/WeWorkWith/Audit.png",
      },
      {
        id: 4,
        name: "E-commerce",
        image: "/Images/LandingPage/WeWorkWith/e-commerce.png",
      },
      {
        id: 5,
        name: "Ed-Tech",
        image: "/Images/LandingPage/WeWorkWith/Ed-Tech.png",
      },
      {
        id: 6,
        name: "FinTech",
        image: "/Images/LandingPage/WeWorkWith/fintech.png",
      },
      {
        id: 7,
        name: "Machine Vision",
        image: "/Images/LandingPage/WeWorkWith/machine-vision.png",
      },
      {
        id: 8,
        name: "Manufacturing",
        image: "/Images/LandingPage/WeWorkWith/manufacturing.png",
      },
      {
        id: 9,
        name: "Sales",
        image: "/Images/LandingPage/WeWorkWith/sales.png",
      },
      {
        id: 10,
        name: "Thermal Vision",
        image: "/Images/LandingPage/WeWorkWith/thermal-vision.png",
      },
      {
        id: 11,
        name: "Wellness",
        image: "/Images/LandingPage/WeWorkWith/wellness.png",
      },
    ],
  },
  testimonials: {
    testimonial_list: [
      {
        name: "John Doe",
        quote:
          "I am amazed the way Veract took the initial discussion of our HRMS product MyTrackie. They swiftly got into the details and educated me wherever required. Really thrilled to work with Veract for the software upgrades of our product. I would certainly recommend Veract for product development and technical consulting.",
        image: "/Images/LandingPage/Testimonial/testimonial_profile.png",
        company: "Evo11ve",
      },
      {
        name: "Jane Smith",
        quote:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/Images/LandingPage/Testimonial/testimonial_profile.png",
        company: "TechSpark",
      },
      {
        name: "Alice Johnson",
        quote:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "/Images/LandingPage/Testimonial/testimonial_profile.png",
        company: "InnoVibe",
      },
      {
        name: "Bob Brown",
        quote:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "/Images/LandingPage/Testimonial/testimonial_profile.png",
        company: "NextWare",
      },
      {
        name: "Bob Brown",
        quote:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "/Images/LandingPage/Testimonial/testimonial_profile.png",
        company: "NextWare",
      },
    ],
  },
  footer: {
    description:
      "At Veract, we craft custom software with precision and innovation—driving business success through web, mobile, and AI excellence.",
    socialMediaIcons: [
      {
        id: 1,
        image: "/Images/LandingPage/Footer/veract-linkedIn.svg",
        link: "https://www.linkedin.com/company/veract-consultancy-private-limited/",
      },
      {
        id: 2,
        image: "/Images/LandingPage/Footer/veract-youtube.svg",
        link: "",
      },
      {
        id: 3,
        image: "/Images/LandingPage/Footer/veract-whatsapp.svg",
        link: "",
      },
      {
        id: 4,
        image: "/Images/LandingPage/Footer/veract-instagram.svg",
        link: "https://www.instagram.com/veractconsultancy?igsh=amVzcWEwdzVtbnk5",
      },
    ],
    quickLinks: {
      company: {
        title: "Company",
        links: [
          {
            id: 1,
            title: "Case studies",
            link: "/case-studies/thermal",
          },
          {
            id: 2,
            title: "Services",
            link: "",
          },
          {
            id: 3,
            title: "Blogs",
            link: "",
          },
          {
            id: 4,
            title: "About Us",
            link: "",
          },
          {
            id: 5,
            title: "Contact Us",
            link: "",
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
          },
          {
            id: 2,
            title: "Development Services",
            link: "",
          },
          {
            id: 3,
            title: "Industrial IoT",
            link: "",
          },
          {
            id: 4,
            title: "AI Agent",
            link: "",
          },
          {
            id: 5,
            title: "Machine Vision",
            link: "",
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
          "37,Aspace,Brindavan Street Srinivasa Nagar, Madipakkam, Chennai - 600 091",
      },
    },
  },
};

export const AgentPageData = {
  banner: {
    about: "AI-DRIVEN EFFICIENCY",
    title: "Optimize Your Business Operations with AI Agents",
    subtitle:
      "Unlock productivity like never before. Get a free consultation, see our AI agents in action, and deploy 1 intelligent agent in your workflow-mat no cost",
    book_demo: "Book a free demo",
    view_case_study: "View case studies",
    banner_features: [
      {
        features_icon: "/Icons/blinkEffect.png",
        features_title: "Free Business consultation",
        features_subtitle:
          "Get expert insights into where AI can deliver the most value in your operations.",
      },
      {
        features_icon: "/Icons/blinkEffect.png",
        features_title: "Live Product Demo",
        features_subtitle:
          "Watch how our AI agents automate real tasks across your tools — customized to your case.",
      },
      {
        features_icon: "/Icons/blinkEffect.png",
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
      },
      {
        id: 2,
        header: "AI Agent Development",
        subHeader:
          "Our team designs and develops intelligent AI agents, trained and fine-tuned to adapt to your specific workflows and use cases.",
        video:
          "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
      },
      {
        id: 3,
        header: "Seamless Integration",
        subHeader:
          "We embed your custom AI agent into your systems, tools, and processes, ensuring seamless interaction with minimal disruption.",
        video:
          "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
      },
      {
        id: 4,
        header: "Continuous Optimization",
        subHeader:
          "We continuously monitor your AI agent’s performance, enhance its capabilities, and retrain it to improve outcomes over time.",
        video:
          "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
      },
    ],
  },
};

export const caseStudiesHomePageData = {
  header: "Page Heading",
  subHeader:
    "Join us on a journey where ideas transform into captivating video content, with a dash of creativity and a whole lot of fun.",
  caseStudiesTitleList: [
    { id: 1, name: "Audio video" },
    { id: 2, name: "Accessibility" },
    { id: 3, name: "Chat bot" },
    { id: 4, name: "Ed Tech" },
    { id: 5, name: "Machine Vision" },
    { id: 6, name: "Wellness" },
    { id: 7, name: "Industry Platform" },
    { id: 8, name: "Manufacturing" },
    { id: 9, name: "Agri Tech" },
    { id: 10, name: "Ecommerce" },
    { id: 11, name: "Sales" },
    { id: 12, name: "Audit" },
    { id: 13, name: "Fintech" },
    { id: 14, name: "Thermal Vision" },
  ],
  caseStudiesList: {
    audiovideo: [
      {
        id: 1,
        image: "/Images/case-studies/project_image.png",
        header: "Audio Video Client",
        subHeader: "Audio Video Project",
        routeTo: "/case-studies/audio-video",
      },
    ],
    accessibility: [
      {
        id: 2,
        image: "/Images/case-studies/project_image.png",
        header: "Accessibility Client",
        subHeader: "Accessibility Project",
        routeTo: "/case-studies/accessibility",
      },
    ],
    chatbot: [
      {
        id: 3,
        image: "/Images/case-studies/project_image.png",
        header: "Chat Bot Client",
        subHeader: "Chat Bot Project",
        routeTo: "/case-studies/chatbot",
      },
    ],
    edtech: [
      {
        id: 4,
        image: "/Images/case-studies/project_image.png",
        header: "Ed Tech Client",
        subHeader: "Ed Tech Project",
        routeTo: "/case-studies/edtech",
      },
    ],
    machinevision: [
      {
        id: 5,
        image: "/Images/case-studies/project_image.png",
        header: "Machine Vision Client",
        subHeader: "Machine Vision Project",
        routeTo: "/case-studies/machine-vision",
      },
    ],
    wellness: [
      {
        id: 6,
        image: "/Images/case-studies/project_image.png",
        header: "Wellness Client",
        subHeader: "Wellness Project",
        routeTo: "/case-studies/wellness",
      },
    ],
    industryplatform: [
      {
        id: 7,
        image: "/Images/case-studies/project_image.png",
        header: "Industry Platform Client",
        subHeader: "Industry Platform Project",
        routeTo: "/case-studies/industry-platform",
      },
    ],
    manufacturing: [
      {
        id: 8,
        image: "/Images/case-studies/project_image.png",
        header: "Manufacturing Client",
        subHeader: "Manufacturing Project",
        routeTo: "/case-studies/manufacturing",
      },
    ],
    agritech: [
      {
        id: 9,
        image: "/Images/case-studies/project_image.png",
        header: "Agri Tech Client",
        subHeader: "Agri Tech Project",
        routeTo: "/case-studies/agri-tech",
      },
    ],
    ecommerce: [
      {
        id: 10,
        image: "/Images/case-studies/project_image.png",
        header: "Ecommerce Client",
        subHeader: "Ecommerce Project",
        routeTo: "/case-studies/ecommerce",
      },
    ],
    sales: [
      {
        id: 11,
        image: "/Images/case-studies/project_image.png",
        header: "Sales Client",
        subHeader: "Sales Project",
        routeTo: "/case-studies/sales",
      },
    ],
    audit: [
      {
        id: 12,
        image: "/Images/case-studies/project_image.png",
        header: "Audit Client",
        subHeader: "Audit Project",
        routeTo: "/case-studies/audit",
      },
    ],
    fintech: [
      {
        id: 13,
        image: "/Images/case-studies/project_image.png",
        header: "Fintech Client",
        subHeader: "Fintech Project",
        routeTo: "/case-studies/fintech",
      },
    ],
    thermalvision: [
      {
        id: 14,
        image: "/Images/case-studies/project_image.png",
        header: "Thermal Vision Client",
        subHeader: "Thermal Vision Project",
        routeTo: "/case-studies/thermal",
      },
    ],
  },
};
