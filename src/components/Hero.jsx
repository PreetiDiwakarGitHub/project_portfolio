import React, { useRef } from "react";
import Type from "./Type";
import Image from "./image/Preeti.png";

const socialMediaLinks = [
  "https://github.com/PreetiDiwakarGitHub",
  "#linkedin",
];

const Hero = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const social_media = [
    "logo-instagram",
    "logo-github",
    "logo-linkedin",
    "logo-twitter",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center py-12 px-6"
    >
      {/* Left Side - Image */}
      <div className="flex-1 flex justify-center md:justify-center h-full">
        <img 
          src={Image} 
          alt="Preeti Diwakar" 
          className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-600 shadow-2xl"
        />
      </div>
      
      {/* Right Side - Text */}
      <div className="flex-1 md:text-left text-center px-6 md:px-10">
        <h1 className="md:text-6xl text-4xl font-extrabold text-white">
          <span className="text-cyan-600 md:text-7xl text-5xl">Hello!<br /></span>
          My Name is <span className="text-cyan-400">Preeti Diwakar</span>
        </h1>
        <h4 className="md:text-3xl text-xl font-semibold mt-4 text-gray-400">
          <Type/>
        </h4>
        <p className="text-gray-300 text-lg mt-4 leading-relaxed">
          I am passionate about creating <span className="text-cyan-400 font-semibold">efficient</span> and <span className="text-cyan-400 font-semibold">user-friendly</span> web applications.
          With a focus on problem-solving and continuous learning, I build solutions that drive results and improve user experience.
        </p>

        <button 
          className="mt-8 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300"
          onClick={scrollToContact}
        >
          Connect with Me
        </button>

        {/* Social Media Icons */}
        <div className="mt-8 text-4xl flex items-center md:justify-start justify-center gap-6">
          {social_media.map((icon, index) => (
            <a
              key={icon}
              href={socialMediaLinks[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition duration-300 transform hover:scale-110"
            >
              <ion-icon name={icon}></ion-icon>
            </a>
          ))}
        </div>
      </div>
      
      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;
