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
      image: "/Images/case-studies/thermal_hero_image.png",
    },
    showReel: {
      title: "SHOWREEL",
      video:
        "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
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
      indication_icon:"/Images/case-studies/challenges_lisiting_icon.png",
      video:
        "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
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
          bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
          description:
            "Enhance your brand's impact with our corporate video expertise. We create engaging content for businesses, from promotions to training materials.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[8rem]",
        },
        {
          title: "Seamless Integration",
          bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
          description:
            "Ensured smooth interaction between thermal cameras, IoT devices, and software components.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[8rem]",
        },
        {
          title: "Health Monitoring System",
          bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
          description:
            "Built a comprehensive desktop-based platform tailored for monitoring animal health efficiently.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
        {
          title: "Actionable Insights",
          bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
          description:
            "Facilitated timely, data-backed decisions to improve overall animal well-being.",
          gradient:
            "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
          blobWidth: "w-[10rem]",
        },
        {
          title: "User Experience Focus",
          bg: "bg-[url('/Images/CaseStudies/Thermal/img1.jpg')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
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
      indication_color : "#FF7A3B",
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
      image: "/Images/case-studies/incluway/incluway_hero_image.png",
    },
    showReel: {
      title: "SHOWREEL",
      video:
        "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
      // "",
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
      indication_icon:"/Images/case-studies/incluway/Challenges/icon.svg",
      video:
        "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
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
      indication_color:"#1F8BFF",
      key_features_list: [
        {
          number: "[01]",
          title: "Seamless Web Integration",
          img: "/Images/case-studies/incluway/KeyFeatures/Lowvision.png",
          desc: "Effortlessly integrates into any website with a single line of code, ensuring rapid deployment and minimal development effort.",
        },
        {
          number: "[02]",
          title: "Real-Time Accessibility Controls",
          img: "/Images/case-studies/incluway/KeyFeatures/Content.png",
          desc: "Offers live adjustments for text size, contrast, animation toggles, and more—empowering users to personalize their browsing experience instantly.",
        },
        {
          number: "[03]",
          title: "Cross-Platform Compatibility",
          img: "/Images/case-studies/incluway/KeyFeatures/mocks3.png",
          desc: "Ensures consistent performance across all major browsers and devices, maintaining accessibility regardless of user environment.",
        },
        {
          number: "[04]",
          title: "Lightweight & Optimized Performance",
          img: "/Images/case-studies/incluway/KeyFeatures/Color.png",
          desc: "Built with performance in mind, the widget loads quickly, consumes minimal resources, and doesn’t interfere with site speed or SEO.",
        },
        {
          number: "[05]",
          title: "Customizable Interface",
          img: "/Images/case-studies/incluway/KeyFeatures/Customize.png",
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
    get_in_touch: "Get in touch", //Get in touch
    get_in_touch_arrow: "/Images/LandingPage/Banner/arrowIconUp.png",
    view_services_text: "View services", //View services
    banner_CTA_status: 'inactive',
    banner_image_list: [
      {
        id: 1,
        image: "/Images/LandingPage/Banner/BNI.svg",
      },
      {
        id: 2,
        image: "/Images/LandingPage/Banner/clutch.svg",
      },
      {
        id: 3,
        image: "",
      },
      {
        id: 4,
        image: "/Images/LandingPage/Banner/ethercat.gif",
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
      "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4",
    // "",
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
        title: "Bespoke Software, Tailored to Your Business Needs",
        bg: "bg-[url('/Images/LandingPage/Advantages/Bespoke_Software_Tailored_to_Your_Business_Needs.jpg')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
        description: "Custom software solutions designed around your workflows — not off-the-shelf",
        gradient:
          "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[8rem]",
      },
      {
        title: "Digital Transformation Strategy with the Right Technologies",
        bg: "bg-[url('/Images/LandingPage/Advantages/Digital_Transformation_Strategy_with_the_Right_Technologies.jpg')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
        description: "Modernize operations with digital tools that serve real business goals",
        gradient:
          "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[8rem]",
      },
      {
        title: "Flexible Engagement Models for Agile Development",
        bg: "bg-[url('/Images/LandingPage/Advantages/Flexible_Engagement_Models_for_Agile_Development.jpg')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
        description: "Start small, scale fast, or pause — flexibility built into the process",
        gradient:
          "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[10rem]",
      },
      {
        title: "Measurable Outcomes Through AI, IoT, and Machine Vision",
        bg: "bg-[url('/Images/LandingPage/Advantages/Measurable_Outcomes_Through_AI_IoT_and_Machine_Vision.jpg')] bg-cover bg-center object-center group-hover:bg-[url('/Images/LandingPage/Hover.png')]",
        description: "Drive impact with intelligent systems and real-time performance insights",
        gradient:
          "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
        blobWidth: "w-[10rem]",
      },
    ],
    featuredWorks_list: [
      {
        id: 1,
        image: "/Images/LandingPage/FeaturedWorks/Evo11ve.png",
        title: "ed tech",
        description: "education platform",
      },
      {
        id: 2,
        image: "/Images/LandingPage/FeaturedWorks/DCM.png",
        title: "data center",
        description: "data center innovation platform",
      },
      {
        id: 3,
        image: "/Images/LandingPage/FeaturedWorks/Ecom.png",
        title: "e-commerce",
        description: "payment enabled e-commerce web application",
      },
      {
        id: 4,
        image: "/Images/LandingPage/FeaturedWorks/thermal.png",
        title: "infrared thermography",
        description: "thermal imaging detects mastitis in dairy cattle",
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
        image: "/Images/LandingPage/WeWorkWith/Ecom.png",
      },
      {
        id: 5,
        name: "Ed-Tech",
        image: "/Images/LandingPage/WeWorkWith/Evo11ve.png",
      },
      {
        id: 6,
        name: "FinTech",
        image: "/Images/LandingPage/WeWorkWith/fintech.png",
      },
      {
        id: 7,
        name: "Machine Vision",
        image: "/Images/LandingPage/WeWorkWith/Machine Vision.png",
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
        image: "/Images/LandingPage/WeWorkWith/thermal.png",
      },
      {
        id: 11,
        name: "Wellness",
        image: "/Images/LandingPage/WeWorkWith/Anyo.png",
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
            status: "inactive"
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
    // { id: 1, name: "Audio video" },
    { id: 2, name: "Accessibility" },
    // { id: 3, name: "Chat bot" },
    // { id: 4, name: "Ed Tech" },
    // { id: 5, name: "Machine Vision" },
    // { id: 6, name: "Wellness" },
    // { id: 7, name: "Industry Platform" },
    // { id: 8, name: "Manufacturing" },
    // { id: 9, name: "Agri Tech" },
    // { id: 10, name: "Ecommerce" },
    // { id: 11, name: "Sales" },
    // { id: 12, name: "Audit" },
    // { id: 13, name: "Fintech" },
    { id: 14, name: "Thermal Vision" },
  ],
  caseStudiesList: {
    // audiovideo: [
    //   {
    //     id: 1,
    //     image: "/Images/case-studies/project_image.png",
    //     header: "Audio Video Client",
    //     subHeader: "Audio Video Project",
    //     routeTo: "/case-studies/audio-video",
    //   },
    // ],
    accessibility: [
      {
        id: 2,
        image: "/Images/LandingPage/FeaturedWorks/accessibility.png",
        header: "accessibility",
        subHeader: "accessibility project",
        routeTo: "/case-studies/incluway",
      },
    ],
    // chatbot: [
    //   {
    //     id: 3,
    //     image: "/Images/case-studies/project_image.png",
    //     header: "Chat Bot Client",
    //     subHeader: "Chat Bot Project",
    //     routeTo: "/case-studies/chatbot",
    //   },
    // ],
    // edtech: [
    //   {
    //     id: 4,
    //     image: "/Images/case-studies/project_image.png",
    //     header: "Ed Tech Client",
    //     subHeader: "Ed Tech Project",
    //     routeTo: "/case-studies/edtech",
    //   },
    // ],
    // machinevision: [
    //   {
    //     id: 5,
    //     image: "/Images/case-studies/project_image.png",
    //     header: "Machine Vision Client",
    //     subHeader: "Machine Vision Project",
    //     routeTo: "/case-studies/machine-vision",
    //   },
    // ],
    // wellness: [
    //   {
    //     id: 6,
    //     image: "/Images/case-studies/project_image.png",
    //     header: "Wellness Client",
    //     subHeader: "Wellness Project",
    //     routeTo: "/case-studies/wellness",
    //   },
    // ],
    // industryplatform: [
    //   {
    //     id: 7,
    //     image: "/Images/case-studies/project_image.png",
    //     header: "Industry Platform Client",
    //     subHeader: "Industry Platform Project",
    //     routeTo: "/case-studies/industry-platform",
    //   },
    // ],
    // manufacturing: [
    //   {
    //     id: 8,
    //     image: "/Images/case-studies/project_image.png",
    //     header: "Manufacturing Client",
    //     subHeader: "Manufacturing Project",
    //     routeTo: "/case-studies/manufacturing",
    //   },
    // ],
    // agritech: [
    //   {
    //     id: 9,
    //     image: "/Images/case-studies/project_image.png",
    //     header: "Agri Tech Client",
    //     subHeader: "Agri Tech Project",
    //     routeTo: "/case-studies/agri-tech",
    //   },
    // ],
    // ecommerce: [
    //   {
    //     id: 10,
    //     image: "/Images/case-studies/project_image.png",
    //     header: "Ecommerce Client",
    //     subHeader: "Ecommerce Project",
    //     routeTo: "/case-studies/ecommerce",
    //   },
    // ],
    // sales: [
    //   {
    //     id: 11,
    //     image: "/Images/case-studies/project_image.png",
    //     header: "Sales Client",
    //     subHeader: "Sales Project",
    //     routeTo: "/case-studies/sales",
    //   },
    // ],
    // audit: [
    //   {
    //     id: 12,
    //     image: "/Images/case-studies/project_image.png",
    //     header: "Audit Client",
    //     subHeader: "Audit Project",
    //     routeTo: "/case-studies/audit",
    //   },
    // ],
    // fintech: [
    //   {
    //     id: 13,
    //     image: "/Images/case-studies/project_image.png",
    //     header: "Fintech Client",
    //     subHeader: "Fintech Project",
    //     routeTo: "/case-studies/fintech",
    //   },
    // ],
    thermalvision: [
      {
        id: 14,
        image: "/Images/LandingPage/FeaturedWorks/thermal.png",
        header: "infrared thermography",
        subHeader: "thermal imaging detects mastitis in dairy cattle",
        routeTo: "/case-studies/thermal",
      },
    ],
  },
};
