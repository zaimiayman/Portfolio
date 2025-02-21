import React from "react";
import { 
  FaDownload, 
  FaFacebook, 
  FaGithub, 
  FaInstagram, 
  FaLinkedin 
} from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Social links data for better maintainability
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
      className="text-gray-950 hover:text-[#218873] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#218873] rounded-full p-8"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="text-2xl" aria-hidden="true" />
    </a>
  </li>
);

// Enhanced Button component with proper type handling
const Button = ({ href, download, children, Icon }) => (
  <a
    href={href}
    download={download}
    className="bg-[#218873] font-medium rounded-full py-3 px-8 flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 text-white hover:bg-[#1a6b5a] focus:outline-none focus:ring-2 focus:ring-[#218873] focus:ring-offset-2"
    role="button"
  >
    {Icon && <Icon aria-hidden="true" />}
    {children}
  </a>
);

const Hero = () => {
  return (
    <section className="container mx-auto mt-20 md:mt-20 lg:mt-0 flex flex-col lg:flex-row items-center min-h-screen py-10 px-4 sm:px-8 lg:px-16">
      {/* Content Section */}
      <div className="text-center lg:text-left lg:ml-12 xl:ml-24 max-w-2xl">
        {/* Headings with proper semantic hierarchy */}
        <h1 className="text-4xl sm:text-5xl font-normal mb-4">
          Hello! I am <span className="text-[#218873] font-bold">Ayman</span>
        </h1>

        {/* Description with improved accessibility */}
        <p className="mt-5 text-gray-600 text-lg sm:text-xl leading-relaxed">
          <span className="text-[#218873] font-bold">
            Full-Stack Developer
          </span>{" "}
          avec une expertise en React, Node.js et Python. Maîtrise de la gestion des bases de données SQL et NoSQL. Passionné par l'optimisation des performances et l'expérience utilisateur (UX). Engagé dans la conception d'architectures logicielles robustes et innovantes.
        </p>

        {/* CTA Section */}
        <div className="mt-8  flex justify-center lg:justify-start">
          <Button href="./My_CV.pdf" download="MyCV" icon={FaDownload}>
            Download CV
          </Button>
        </div>

        {/* Social Links with mapped data */}
        <ul className="mt-1 flex justify-center lg:justify-start gap-4">
          {SOCIAL_LINKS.map((link, index) => (
            <SocialIcon key={index} {...link} />
          ))}
        </ul>
      </div>

      {/* Lottie Animation Section with optimized loading */}
      <div  className=" w-full max-w-2xl flex justify-center">
        <DotLottieReact 
          src="https://lottie.host/58085a72-5229-48b2-bcf7-b683ee8e1cb5/8FPdAScocW.lottie" 
          loop 
          autoplay
          className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-auto"
          role="img"
          aria-label="Developer animation"
        />
      </div>
    </section>
  );
};

export default React.memo(Hero);