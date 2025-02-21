import React from 'react'
import {  
    FaFacebook, 
    FaGithub, 
    FaInstagram, 
    FaLinkedin 
  } from "react-icons/fa";
  const SOCIAL_LINKS = [
    {
      href: "https://www.linkedin.com/in/ayman-zaimi-0922a8332/",
      ariaLabel: "LinkedIn",
      Icon: FaLinkedin,
    },
    {
      href: "https://github.com/zaimiayman",
      ariaLabel: "GitHub",
      Icon: FaGithub,
    },
    {
      href: "https://www.instagram.com/_ayman_zm/",
      ariaLabel: "Instagram",
      Icon: FaInstagram,
    },
    {
      href: "https://web.facebook.com/ayman.zaimi.73/?locale=fr_FR",
      ariaLabel: "Facebook",
      Icon: FaFacebook,
    },
  ];
  
  // Optimized SocialIcon component with better accessibility
  const SocialIcon = ({ href, ariaLabel, Icon }) => (
    <li>
      <a
        href={href}
        aria-label={ariaLabel}
        className="text-gray-600 hover:text-[#218873] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#218873] rounded-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="text-xl" aria-hidden="true" />
      </a>
    </li>
  );

export default function Footer() {
  return (
    
      <section className="px-16">
        <div className='border-t border-gray-400 pt-6 mb-4   flex flex-wrap md:flex-row items-center justify-between gap-4'>
       <p className="text-sm  text-gray-600">
            <span className="font-semibold ">&copy; 2025.All Rights Reserved.</span>
        </p>
          <p className='text-sm text-gray-600 font-semibold'>Dessigned By Aymane Zaimi</p>
          <ul className=" flex  lg:justify-start gap-5">
          {SOCIAL_LINKS.map((link, index) => (
            <SocialIcon key={index} {...link} />
          ))}
        </ul>
        </div>
        
          
    </section>
    
    
  )
}