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
        <div className="flex flex-col items-start justify-between min-h-dvh w-full p-24 font-geist">        
            <h2 className="text-4xl font-semibold my-8 font-montserrat">about me</h2>

            <section className="text-grey40 text-lg flex flex-col gap-8 mt-8 mb-16">
                <p>
                    Have you ever done some mandatory task on a very uninspiring looking website/application and 
                    wondered, "this is so underwhelming, if only it looked a bit nicer"? For me, users are always
                    the priority, since they will be the ones who use, and hopefully enjoy, your product.
                    If they have to use it anyway, wouldn't it better to make something that is enjoyable to use? 
                    While design and aesthetics are subjective, and there is no perfect design that appeals to everyone,
                    I hope I can at least make something that is unique and memorable.
                </p>
                <p>
                    This is the philosophy I have been trying to follow in my work, and I am detemrined to bring this mindset
                    to any future roles in Software Engineering. In addition to the prerequisite of delivering on functionality,
                    I pay attention to details like whitespace and color coordination, as I strive to create a visually appealing 
                    and user-friendly experience. Taking inspiration from various aspects of life, such as fashion and interior 
                    designs, I am hoping to broaden my perspective en route to creating thoughtful, personal and pleasing designs.                        
                </p>
                <p>
                    I am currently finding full-time roles in both London and Hong Kong as a Software Engineer with a primary 
                    focus on frontend, but I am also open to opportunities in Machine Learning and Data Science.
                    Feel free to reach out via the contact methods below if you want to know more about me or my work!
                </p>
            </section>

            <section className="text-grey40 text-lg w-full my-16">
                <h2 className="text-2xl font-semibold underline">Technical Skills</h2>
                <div className="grid grid-cols-3 gap-x-4 my-4">                   
                    <div>
                        <label>Programming languages:</label>
                        <ul className="mt-8">
                            <li>Python</li>
                            <li>Java</li>
                            <li>JavaScript (React.js, Node.js, Express.js)</li>
                            <li>C</li>                        
                            <li>SQL (PostgreSQL, MySQL)</li>
                            <li>Haskell</li>
                        </ul>
                    </div>
                    <div>
                        <label>Machine Learning and Data:</label>
                        <ul className="mt-8">
                            <li>NumPy</li>
                            <li>Pandas</li>
                            <li>Scikit-learn</li>
                            <li>TensorFlow</li>
                            <li>MatPlotLib</li>
                            <li>Seaborn</li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <label>Others:</label>
                        <ul className="mt-8">
                            <li>Git</li>
                            <li>Docker</li>
                            <li>Web scraping</li>
                            <li>CLI</li>                            
                        </ul>
                    </div>
                </div>                                                     
            </section>

            <section className="text-grey40 text-lg my-16 w-full">   
                <h2 className="text-2xl font-semibold underline">Other Interests</h2>
                <div className="grid grid-cols-2 gap-x-4 my-4">                                       
                    <div>
                        <label>Likes:</label>
                        <ul className="my-8">
                            <li>Football</li>
                            <li>Basketball</li>
                            <li>Hiking</li>
                            <li>Music</li>
                            <li>Travelling</li>
                            <li>Photography</li>
                            <li>Fashion</li>   
                        </ul>
                    </div>

                    <div>
                        <label>Conversation starters if we meet:</label>
                        <ul className="my-8">
                            <li>Fav colour: yellow purple or gray depending on mood</li> 
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
                 className="hover:transform hover:scale-110 transition-transform duration-300"
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