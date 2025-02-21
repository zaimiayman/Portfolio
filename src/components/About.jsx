import React from "react";
import img from "../assets/p1.jpg";

const About = () => {
  return (
    <section id="About" className=" px-6 h-screen py-20 ">
      {/* Titre */}
      <div className=" flex justify-around mb-16 ">
        <h1 className="border-b-4 border-[#218873] p-3 text-5xl md:text-5xl font-bold text-black">
          About Me
        </h1>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-around gap-10 pt-14">
        {/* Image */}
        <figure className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] flex-shrink-0">
          <img
            src={img}
            alt="Profil"
            className=" rounded-full bg-slate-200 "
          />
        </figure>

        {/* Description */}
        <article className="max-w-2xl text-center lg:text-left">
          <p className="font-mono text-lg text-slate-600 leading-relaxed">
            Développeur Full-Stack expérimenté, spécialisé dans la conception et
            le développement d'applications web performantes. Compétences solides
            en front-end (React) et back-end (Node.js, Python), ainsi qu'en
            gestion de bases de données (SQL, NoSQL).
            <br />
            <br />
            Passionné par l'optimisation, l'expérience utilisateur et
            l'architecture logicielle. Capable de gérer des projets de A à Z,
            avec un souci constant de la qualité et de l'innovation.
          </p>

          {/* Bouton de contact */}
          <a
            href="#Contact"
            className="inline-block mt-6  rounded bg-[#218873] px-8 py-3 font-bold text-white hover:bg-[#17433e] transition-all duration-300"
          >
            Contact Me
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
