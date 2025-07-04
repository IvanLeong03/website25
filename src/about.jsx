import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function about() {
    return (
        <div className="flex flex-col items-start justify-between h-dvh max-h-[900px] w-full bg-purple-200 p-12 text-lg">        
            <h2 className="text-3xl font-bold my-8">about me</h2>

            { /* social links */ }
            <div className="flex justify-between items-center w-full lg:w-3/5 h-1/6 mx-auto">
                <MdEmail size={48} />
                
                
                <button className="hover:transform hover:scale-110 transition-transform duration-300">
                    <a href="https://www.linkedin.com/in/ivanyhleong/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={48} />
                    </a>
                </button>
                <button className="hover:transform hover:scale-110 transition-transform duration-300">
                    <a href="https://www.github.com/IvanLeong03/" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={48} />
                    </a>
                </button>
                <button className="hover:transform hover:scale-110 transition-transform duration-300">
                    <a href="https://www.instagram.com/ivxnleong" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={48} />
                    </a>
                </button>


            </div>

        </div>

    )

};

export default about;   