"use client"
import React from "react";

export default function Footer() {
  const socialMediaIcons = [
    {
      id: 1,
      image: '/Images/LandingPage/Footer/veract-linkedIn.svg',
      link: 'https://www.linkedin.com/company/veract-consultancy-private-limited/'
    },
    {
      id: 2,
      image: '/Images/LandingPage/Footer/veract-youtube.svg',
      link: ''
    },
    {
      id: 3,
      image: '/Images/LandingPage/Footer/veract-whatsapp.svg',
      link: ''
    },
    {
      id: 4,
      image: '/Images/LandingPage/Footer/veract-instagram.svg',
      link: 'https://www.instagram.com/veractconsultancy?igsh=amVzcWEwdzVtbnk5'
    },

  ]

  const details = {
    quickLinks: {
      company: {
        title: 'Company',
        links: [
          {
            id: 1,
            title: 'Case studies',
            link: '/case-studies/thermal'
          },
          {
            id: 2,
            title: 'Services',
            link: ''
          },
          {
            id: 3,
            title: 'Blogs',
            link: ''
          },
          {
            id: 4,
            title: 'About Us',
            link: ''
          },
          {
            id: 5,
            title: 'Contact Us',
            link: ''
          },
        ]
      },
      services: {
        title: 'Services',
        links: [
          {
            id: 1,
            title: 'Digital Transformation',
            link: ''
          },
          {
            id: 2,
            title: 'Development Services',
            link: ''
          },
          {
            id: 3,
            title: 'Industrial IoT',
            link: ''
          },
          {
            id: 4,
            title: 'AI Agent',
            link: ''
          },
          {
            id: 5,
            title: 'Machine Vision',
            link: ''
          },
        ]
      },
      contact: {
        title: 'Contact Us',
        links: [
          {
            id: 1,
            type: 'phone',
            title: '+91 97899 91565',
          },
          {
            id: 2,
            type: 'phone',
            title: '+91 99628 37650',
          },
          {
            id: 3,
            type: 'email',
            title: 'info@veract.io',
          },
        ]
      },
      address: {
        title: 'Location',
        address: '37,Aspace,Brindavan Street Srinivasa Nagar, Madipakkam, Chennai - 600 091'
      }
    }
  }

  return (
    <div className='w-full flex flex-col items-center justify-center relative'>
      <div className='openSansFont text-[17.813rem] text-[#1C1C1C] font-bold leading-[1.2] tracking-[0em]'>veract</div>
      <div className='w-[70rem] h-[41.813rem] rounded-[1.375rem] bg-[#0F0E14] relative z-20 -mt-[6.938rem]'>
        <div className='absolute top-[4.938rem] left-[3.75rem] w-[28.125rem] h-max flex flex-col items-start justify-center gap-[1.563rem] z-20'>
          <div className='openSansFont text-[3.25rem] text-white font-bold leading-[1.2em] tracking-[0em]'>ver<span className='text-primary-blue'>act</span></div>
          <div className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em]'>At Veract, we craft custom software with precision and innovation—driving business success through web, mobile, and AI excellence.</div>
        </div>
        <div className='absolute top-[21.438rem] left-[3.75rem] flex flex-col items-center justify-center gap-[0.625rem] z-20'>
          <div className='flex flex-row items-center justify-center gap-[0.625rem]'>
            {socialMediaIcons.slice(0, 2).map((icon) => (
              <a key={icon.id} href={icon.link} target='_blank' rel='noopener noreferrer'>
                <div key={icon.id} className='w-[2.5rem] h-[2.5rem] rounded-full bg-white flex items-center justify-center cursor-pointer'>
                  <img src={icon.image} alt="social-media icon" />
                </div>
              </a>
            ))}
          </div>
          <div className='flex flex-row items-center justify-center gap-[0.625rem]'>
            {socialMediaIcons.slice(2, 4).map((icon) => (
              <a key={icon.id} href={icon.link} target='_blank' rel='noopener noreferrer'>
                <div key={icon.id} className='w-[2.5rem] h-[2.5rem] rounded-full bg-white flex items-center justify-center cursor-pointer'>
                  <img src={icon.image} alt="social-media icon" />
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className='absolute top-[5.688rem] right-0 w-[55%] flex flex-row items-center justify-center gap-[5rem] z-20'>
          <div className='flex flex-col items-start justify-center gap-[1.25rem]'>
            <div className='openSansFont text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]'>{details.quickLinks.company.title}</div>
            <div className='flex flex-col items-start justify-center gap-[0.625rem]'>
              {details.quickLinks.company.links.map((link) => (
                <div key={link.id} className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'>{link.title}</div>
              ))}
            </div>
          </div>
          <div className='flex flex-col items-start justify-center gap-[1.25rem]'>
            <div className='openSansFont text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]'>{details.quickLinks.services.title}</div>
            <div className='flex flex-col items-start justify-center gap-[0.625rem]'>
              {details.quickLinks.services.links.map((link) => (
                <div key={link.id} className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'>{link.title}</div>
              ))}
            </div>
          </div>
        </div>
        <div className='absolute top-[21.438rem] right-0 w-[51%] flex flex-row items-center justify-center gap-[2.875rem] z-20'>
          <div className='flex flex-col items-start justify-center gap-[1.25rem]'>
            <div className='openSansFont text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]'>{details.quickLinks.contact.title}</div>
            <div className='flex flex-col items-start justify-center gap-[0.625rem]'>
              {details.quickLinks.contact.links.map((link) => (
                <div key={link.id}>
                  {link.type === 'phone' ? (
                    <a
                      href={`tel:${link.title.replace(/\s+/g, '')}`}
                      className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'
                    >
                      {link.title}
                    </a>
                  ) : link.type === 'email' ? (
                    <a
                      href={`mailto:${link.title}`}
                      className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'
                    >
                      {link.title}
                    </a>
                  ) : (
                    <div className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'>
                      {link.title}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col items-start justify-center gap-[1.25rem]'>
            <div className='openSansFont text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]'>{details.quickLinks.address.title}</div>
            <div className='w-[15.75rem] openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'>{details.quickLinks.address.address}</div>
          </div>
        </div>
        <div className='absolute bottom-[1.5rem] left-1/2 transform -translate-x-1/2 w-[13.375rem] text-[0.75rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] flex flex-col items-center justify-center z-20'>
          <div>© 2025 — Veract Consultancy Pvt. Ltd.</div>
          <div>All Rights reserved</div>
        </div>
      </div>
    </div>
  )
}