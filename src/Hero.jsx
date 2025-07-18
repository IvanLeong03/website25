import React from "react";


function Hero() {
    return (
        <div className="w-full h-dvh max-h-[900px] bg-gradient-to-b from-egg to-slatefont-montserrat py-24 flex items-center relative">
            {/* Main container with relative positioning */}
            <div className="w-4/5 h-4/5 mx-auto flex flex-col justify-evenly items-center relative">
                {/* Double stroke corners */}
                <div className="absolute -top-[3px] -left-[2px] w-24 h-24 z-999 border-t-4 border-l-4 border-purple60 rounded-tl-3xl 
                      transform translate-x-[-16px] translate-y-[-16px]"></div>

                <div className="absolute -bottom-[2px] -right-[3px] w-24 h-24 border-b-4 border-r-4 border-blue50 rounded-br-3xl transform translate-x-[16px] translate-y-[16px]"></div>
                
                {/* Content */}
                <h1 className="text-4xl z-10 text-purple70 animate-pulse">Hello, I'm Ivan, a software engineer.</h1>
                <p className="text-lg text-gray-700 z-10">I'll put a picture here when I eventually take a good one!</p>
            </div>
        </div>
    );
}

export default Hero;