export const navItems = [
  {
    id: 1,
    name: "Case Studies",
    link: "/case-studies/thermal",
  },
  {
    id: 2,
    name: "Services",
    link: "/services/web-development",
  },
  {
    id: 3,
    name: "Industries",
    link: "/industries/healthcare",
  },
  {
    id: 4,
    name: "Company",
    link: "/company/about",
  },
  {
    id: 5,
    name: "Blogs",
    link: "/blogs/latest",
  },
];

export const caseStudyData = {
  thermal: {
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
};

export const LandingPageData = {
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
    ]
  }
};

export const brandData = [
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
  }
];
