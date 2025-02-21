import React from 'react';
import img from '../assets/pt1.png';
import img1 from '../assets/pt2.png';
import img2 from '../assets/pt3.png';
import { TbHandClick } from "react-icons/tb";

const Projet = () => {
  const cards = [
    {
      id: 1,
      title: "Fresh Fruit",
      description: "Fruits Selling Ecommerce Website.",
      technologies: ["React", "Tailwind", "Vite"],
      image: img,
      link: "https://fresh-store.netlify.app/"
    },
    {
      id: 2,
      title: "BestShop-Ecommerce",
      description: "Developer community platform.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: img1,
      link: "https://bestshop-ecommerce.netlify.app/"
    },
    {
      id: 3,
      title: "Phone-Shop",
      description: "An e-commerce platform for Apple Phone.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: img2,
      link: "https://phoneeeeeeeeeeeee.netlify.app/"
    }
  ];

  return (
    <div id='Projet' className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className=" flex justify-around mb-16 ">
        <h1 className="border-b-4 border-[#218873] p-3 text-5xl md:text-5xl font-bold text-black">
         Project
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div 
            key={card.id}
            className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
          >
            <img 
              src={card.image} 
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {card.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {card.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {card.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-[#218873]/10 text-[#218873] text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#218873] hover:bg-[#19685b] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Live Demo
                <TbHandClick className="ml-2 w-5 h-5" aria-hidden="true" />
                <span  className="sr-only">(opens in new tab)</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projet;