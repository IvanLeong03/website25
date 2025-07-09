import React from "react";

function Home() {
    return (
        <div className="w-full h-dvh max-h-[900px]font-montserrat py-24 flex items-center">
            <div className="w-4/5 h-4/5 mx-auto border border-purple60 rounded-2xl flex flex-col justify-between items-center ">
                <img src="image.jpg"/>
                <p className="text-lg text-gray-700">Feel free to explore this website and look at my work.</p>

            </div>
            
        </div>
    );
}   

function Hero() {
    return (
        <div className="w-full h-dvh max-h-[900px] font-montserrat py-24 flex items-center">
            <div className="w-4/5 h-4/5 mx-auto border border-purple60 rounded-2xl flex flex-col justify-evenly items-center ">
                { /* <img src="image.jpg"/> */}
                <h1 className="text-4xl">Hello, I'm Ivan, a software engineer. </h1>
                <p className="text-lg text-gray-700">Welcome to my website.</p>
            </div>
            
        </div>
    );
}

export default Home;