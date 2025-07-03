import React from "react";

function Home() {
    return (
        <div className="w-full h-dvh max-h-[900px] bg-purple90 font-montserrat py-24 flex items-center">
            <div className="w-4/5 h-4/5 mx-auto bg-slate-100 border border-purple60 rounded-2xl flex flex-col justify-between items-center ">
                <img src="image.jpg"/>
                <p className="text-lg text-gray-700">Feel free to explore this website and look at my work.</p>

            </div>
            
        </div>
    );
}   

export default Home;