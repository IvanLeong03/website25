import React from "react";

function Navbar() {     
    return (
        <nav className="h-screen border-r border-grey80 flex flex-col">
            
            <div className="h-2/5 w-4/5 mx-auto border-b-4 border-grey80 flex justify-between items-end py-8">
                <a href="#home">
                    <div className="w-3/4 mx-auto">
                        <h1 className="text-5xl font-bold text-grey20">Ivan</h1>
                        <h1 className="text-5xl font-bold text-grey40">Leong</h1>
                    </div>
                </a>
            </div>

            <div className="h-1/5"></div>

            <div className="w-1/2 mx-auto">
                <ul className="flex flex-col items-end gap-6 text-xl text-grey20">
                    <li className="hover:text-blue40 cursor-pointer"><a href="#work">Work</a></li>
                    <li className="hover:text-blue40 cursor-pointer"><a href="#experience">Experience</a></li>
                    <li className=" hover:text-blue40 cursor-pointer"><a href="#about">About</a></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;