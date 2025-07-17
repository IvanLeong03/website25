import React from "react";
import { motion } from "framer-motion";

const Carousel = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "NBA career trajectory prediction AI",
      tools: "Python, Scikit-learn, Pandas, NumPy",
      image: "/src/assets/trendarrow.jpeg",
      link: "https://github.com/IvanLeong03/NBA-career-trajectory",
      description: "I used Random Forest Regressor and XGBoost to predict the statistics of an NBA player in his prime, based on their performance in their first three seasons."
    },
    {
      id: 2,
      title: "Pomodoro Timer",
      tools: "React.js, CSS",
      image: "/src/assets/pomodoro.png",
      link: "https://ivanleong03.github.io/pomodoro/",
      description: "A simple Pomodoro timer built with React.js, allowing users to manage their work and break intervals effectively. Done as part of a FreeCodeCamp course."
    },
    {
      id: 3,
      title: "FBREF comparison and visualisation tool",
      tools: "Python, MatPlotLib, Pandas, NumPy",
      image: "src/assets/fbref_compare.png",
      link: "https://github.com/IvanLeong03/percentile_viz.git",
      description: "I scraped percentile data from FBREF and used MatPlotLib to create a visualisation tool that allows users to compare players' statistics and charateristics."
    },
    {
      id: 4,
      title: "Zimuth.AI Website",
      tools: "React.js, Tailwind CSS, Framer Motion",
      image: "/src/assets/logo_horizontal_black_circle.png",
      link: "https://www.zimuth.ai",
      description: "I built the first website for our startup using modern frontend tools, showcasing our AI-powered media monitoring assistant."
    }
  ];

  // Duplicate projects for infinite loop effect
  const loopedProjects = [...projects, ...projects, ...projects];

  return (
    <div className="w-full overflow-hidden py-8 my-4">
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopedProjects.map((project, index) => (
          <div 
            key={`${project.id}-${index}`} 
            className="flex-shrink-0 mx-8 w-[450px] h-[500px] rounded-lg overflow-hidden shadow-md hover:scale-105 hover:shadow-lg font-montserrat"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                {/* Project image */}
                <div className="w-full h-[60%] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                </div>
                
                {/* Project info */}
                <div className="p-3 h-[40%]">
                <h3 className="font-medium text-lg text-grey20 ">{project.title}</h3>
                <p className="text-xs text-grey60 my-1 italic">{project.tools}</p>
                <p className="text-base text-grey40 my-4">{project.description}</p>
                </div>

            </a>
           
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;