import React from "react";
import { FaCode, FaPaintBrush, FaHeadset } from "react-icons/fa";

// Reusable Card Component
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center text-center pb-5 hover:shadow-lg hover:bg-[#218873] transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="text-2xl mb-4 text-[#218873] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      {title && (
        <h2 className="font-bold text-xl pb-5 group-hover:text-white transition-colors duration-300">
          {title}
        </h2>
      )}
      <p className="font-normal text-gray-600 group-hover:text-white transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FaCode aria-label="Code Icon" />,
      title: "Web Development",
      description:
        "Je crée des sites web modernes, réactifs et performants, adaptés à tous les appareils.",
    },
    {
      icon: <FaPaintBrush aria-label="Design Icon" />,
      title: "UI/UX Design",
      description:
        "Je conçois des interfaces utilisateur attrayantes et intuitives pour améliorer l'expérience utilisateur.",
    },
    {
      icon: <FaHeadset aria-label="Support Icon" />,
      title: "Maintenance & Support",
      description:
        "Je propose des services de maintenance et de support pour garantir le bon fonctionnement de vos applications.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
      <div className=" flex justify-around mb-16 ">
        <h1 className="border-b-4 border-[#218873] p-3 text-5xl md:text-5xl font-bold text-black">
          Services
        </h1>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-14">
          {services.map((service) => (
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;