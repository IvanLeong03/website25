import React from "react";
import { motion } from "framer-motion";

const Carousel = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "NBA career trajectory prediction AI",
      tools: "Python, Scikit-learn, Pandas, NumPy",
      image: "/project1.jpg",
      link: "https://github.com/IvanLeong03/NBA-career-trajectory"
    },
    {
      id: 2,
      title: "Pomodoro Timer",
      tools: "React.js, CSS",
      image: "/project2.jpg",
      link: "https://github.com/IvanLeong03/pomodoro"
    },
    {
      id: 3,
      title: "FBREF comparison and visualisation tool",
      tools: "Python, MatPlotLib, Pandas, NumPy",
      image: "/project3.jpg",
      link: "https://github.com/IvanLeong03/percentile_viz.git"
    },
    {
      id: 4,
      title: "Personal Website",
      tools: "React.js, Tailwind CSS, Framer Motion",
      image: "/project4.jpg",
      link: "/#hero"
    }
  ];

  // Duplicate projects for infinite loop effect
  const loopedProjects = [...projects, ...projects, ...projects];

  return (
    <div className="w-full overflow-hidden py-8 bg-gray-50">
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopedProjects.map((project, index) => (
          <div 
            key={`${project.id}-${index}`} 
            className="flex-shrink-0 mx-8 w-[360px] h-[240px] rounded-lg overflow-hidden shadow-md"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                {/* Project image */}
                <div className="w-full h-[70%] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                </div>
                
                {/* Project info */}
                <div className="p-3 bg-white h-[30%]">
                <h3 className="font-medium text-grey20">{project.title}</h3>
                <p className="text-xs text-grey60 mt-1">{project.tools}</p>
                </div>

            </a>
           
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;