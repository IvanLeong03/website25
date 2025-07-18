import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import SendEmail from "./SendEmail";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function about() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-start justify-between min-h-dvh w-full p-24 font-geist bg-stone-50">        
            <h2 className="text-4xl text-purple30 font-semibold my-8 font-montserrat">about</h2>

            <section className="text-grey40 text-lg flex flex-col gap-8 my-16">
                <p>
                    Have you ever done some mandatory task on a very uninspiring looking website/application and 
                    thought, 
                    <blockquote className="border-l-4 border-purple70 pl-4 italic my-4">
                    "This could be so much better?"
                    </blockquote>For me, users are always
                    the priority, so I strive to build interfaces that transform obligations into enjoyment.
                    While aesthetics are subjective, and a universally perfect design feels like a myth,
                    I hope users at least find my products unique and memorable.
                </p>
                <p>
                    Beyond the prerequisite of delivering on functionality, I focus on details like whitespace, color coordination
                    and intentional contrasts. Taking inspiration from various aspects of life, such as fashion and interior 
                    design, I am hoping to broaden my perspective en route to creating thoughtful, personal and pleasing user experiences.                        
                </p>
                <p>
                    I am currently finding full-time Software Engineering roles in London/Hong Kong 
                    and I am also open to opportunities in Machine Learning. 
                    Let's connect via the contact methods below if you're interested in my work.
                </p>
            </section>

            <section className="text-grey40 text-lg w-full mt-16 mb-8">
                <h2 className="text-2xl text-grey20 font-semibold mb-16">Technologies I work with</h2>
                <div className="w-full grid grid-cols-3 gap-x-6 mb-4">                   
                    <div>
                        <label className="text-purple60">Programming:</label>
                        <ul className="mt-8 list-disc list-inside">
                            {['Python', 'Java', 'JavaScript', 'C', 'SQL', 'Haskell'].map(item => (
                            <li key={item}>
                                {item}
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <label className="text-purple80">Frameworks:</label>
                        <ul className="mt-8 list-disc list-inside">
                            {['React.js', 'Node.js', 'Express.js', 'Flask'].map(item => (
                            <li key={item}>
                                {item}
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <label className="text-blue70">ML & Data:</label>                       
                        {/*}
                        <ul className="mt-8">
                            {['NumPy, Pandas', 'Matplotlib, Seaborn', 'Tensorflow, Sk-learn, PyTorch'].map(item => (
                            <li key={item} className="flex items-center">
                                {item}
                            </li>
                            ))}
                        </ul>
                        */}
                        <p className="mt-8">
                            Numpy, Pandas, Matplotlib, Seaborn, Tensorflow, Sk-learn
                        </p>
                    </div>
                    {/*
                    <div>
                        <label>Others:</label>
                        <ul className="mt-8">
                            {['Git', 'Docker', 'CLI','Web scraping'].map(item => (
                            <li key={item} className="flex items-center">
                                {item}
                            </li>
                            ))}
                        </ul>
                    </div>
                    */}
                </div>                                                     
            </section>

            <section className="text-grey40 text-lg my-12 w-full">   
                <h2 className="text-2xl font-semibold mb-16">Other Interests</h2>
                <div className="grid grid-cols-2 gap-x-4">                                       
                    <div>
                        <label className="text-purple70">Likes:</label>                        
                        <ul className="mt-8">
                            {['Football', 'Basketball', 'Hiking', 'Travelling', 'Photography', 'Gaming', 'Music', 'Fashion'].map(item => (
                            <li key={item} className="flex items-center">
                                {item}
                            </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <label className="text-blue80">Conversation starters if we meet</label>
                        <ul className="my-8">
                            <li>Fav animal: probably leopards </li>
                            <li>Fav drink: Hong Kong style milk tea</li>  
                            <li>Fav sports team: Manchester United (unfortunately)</li>       
                            <li>Fav singer: Jay Chou</li>         
                        </ul>
                    </div>
                </div>
            </section>

            { /* social links */ }
            <h2 className="text-2xl mt-12 mb-4">Contact me:</h2>
            <div className="flex justify-between items-center w-full lg:w-3/5 h-1/6 mx-auto">
                <button
                 className="hover:transform hover:scale-110 hover:text-purple30 transition-transform duration-300 text-purple60"
                 onClick={() => navigate('/send-email')}
                 >                    
                    <MdEmail size={48} />
                </button>
                
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