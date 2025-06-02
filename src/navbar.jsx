import React from "react";

function Navbar() {     
    return (
        <nav className="h-full w-1/5 py-6 px-4 border border-beige flex flex-col">

            
            <div className="h-1/3">
                <a href="#home">
                    <div>
                        <h1 className="text-4xl font-bold">Ivan</h1>
                        <h1 className="text-4xl font-bold">Leong</h1>
                    </div>
                </a>
            </div>
            <div>
                <ul className="flex flex-col gap-6 mt-4">
                    <li className="text-lg hover:text-blue-500 hover:translate-x-3 cursor-pointer"><a href="#about">About</a></li>
                    <li className="text-lg hover:text-blue-500 hover:translate-x-3 cursor-pointer"><a href="#work">Work</a></li>
                    <li className="text-lg hover:text-blue-500 hover:translate-x-3 cursor-pointer">Projects</li>
                    <li className="text-lg hover:text-blue-500 hover:translate-x-3 cursor-pointer">Contact</li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;