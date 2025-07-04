import React from "react";

function Navbar() {     
    return (
        <nav className="h-screen border-r border-grey80 flex flex-col">
            
            <div className="h-2/5 w-4/5 mx-auto border-b-4 border-grey80 flex justify-between items-end py-8">
                <a href="#hero">
                    <div className="w-3/4 mx-auto">
                        <h1 className="text-5xl font-bold text-grey20">Ivan</h1>
                        <h1 className="text-5xl font-bold text-grey40">Leong</h1>
                    </div>
                </a>
            </div>

            <div className="h-1/5"></div>

            <div className="w-1/2 mx-auto">
                <ul className="flex flex-col items-end gap-8 text-xl text-grey20">
                    <li className="group relative">
                        <a href="#work" className="relative z-10 cursor-pointer">
                            Work
                            <span className="absolute bottom-0 left-0 h-1 w-0 bg-yellowHighlight transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>  
                    <li className="group relative">
                        <a href="#experience" className="relative z-10 cursor-pointer">
                            Experience
                            <span className="absolute bottom-0 left-0 h-1 w-0 bg-yellowHighlight transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li> 
                    <li className="group relative">
                        <a href="#about" className="relative z-10 cursor-pointer">
                            About
                            <span className="absolute bottom-0 left-0 h-1 w-0 bg-yellowHighlight transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>                  
                    
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;