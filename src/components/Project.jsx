import React from "react";
import Book from "./image/Book.png";
import Food from "./image/Food.png";
import Game from "./image/Game.png";
import Movie from "./image/movie.png";
import Project1 from "./image/Project1.png";
import website from "./image/website.png";

const Project = () => {
  const projects = [
    {
      img: Food,
      name: "Food Website",
      link: "https://food-website-l2vd.vercel.app/",
      text: "This is a food website made with React.js. Users can filter menu items by breakfast, lunch, snacks, and dinner. The design is simple and works well on all devices. I am still working on this project, and it is not yet complete."
    },
    {
      img: Movie,
      name: "Movie Website",
      link: "https://movie-project-zeta-two.vercel.app/",
      text: "A movie website where users can browse and search for movies. Built using React.js and API integration."
    },
    {
      img: Game,
      name: "Tic Tac Toe",
      link: "https://game-project-seven-flax.vercel.app/",
      text: "A simple Tic Tac Toe game built with React.js. Play against a friend and enjoy the game!"
    },
    {
      img: Book,
      name: "Book",
      link: "https://bookproject-preetidiwakargithubs-projects.vercel.app/",
      text: "A book listing website where users can add their favorite books to their collection."
    },
    {
      img: Project1,
      name: "Calculator",
      link: "https://calculator-project-wine-theta.vercel.app/",
      text: "A basic calculator application built with React.js for performing simple mathematical operations."
    },
    {
      img: website,
      name: "Food Menu",
      link: "https://restaurants-menu-six.vercel.app/",
      text: "A restaurant menu website that allows users to explore different food categories and prices."
    },
  ];

  return (
    <section id="projects" className="py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Works</p>
      </div>
      <br />
      {/* ✅ Grid layout (3 per row on larger screens) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 max-w-6xl mx-auto">
        {projects.map((project_info, i) => (
          <div key={i} className="flex flex-col h-full p-4 bg-slate-700 rounded-xl">
            {project_info.img ? (
              <img
                src={project_info.img}
                alt={project_info.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            ) : (
              <div className="h-48 w-full bg-gray-600 flex items-center justify-center rounded-lg">
                <span className="text-gray-400">No Image</span>
              </div>
            )}
            <h3 className="text-xl my-4">{project_info.name}</h3>
            
            {/* ✅ Text with flex-grow for equal height */}
            <p className="text-gray-300 text-sm flex-grow">{project_info.text}</p>

            {/* ✅ Button at bottom */}
            <div className="mt-auto flex gap-3">
              <a
                href={project_info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 bg-gray-800 px-2 py-1 inline-block"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
