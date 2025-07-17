import React from "react";
import Experience from "./experience";
import Carousel from "./Carousel";

function Work() {

    return (
        <div className="min-h-dvh pt-24 py-12 text-grey40 bg-stone-50 flex flex-col flex-grow justify-between font-geist">
            <h1 className="text-4xl font-semibold px-24 font-montserrat text-purple30">work</h1>
            {/* carousel section */}
            <div className="w-full my-8">
                <Carousel />
            </div>      
            { /* describe languages and tools I'm familiar with */ }
            <div className="min-h-1/5 px-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-x-24 text-lg mb-16">
                <p className="p-4">
                    With most of my work for Zimuth focusing on the frontend, I am very familiar with web development
                    languages and frameworks such as React, JavaScript, HTML, and CSS. 
                </p>

                <p className="p-4">
                    I also have experience leading and working on Machine Learning projects, having worked on multiple
                    hobby projects related to sports data analysis and predictions, and I'm well-versed in Python and SQL, among
                    other relevant tools. 
                </p>
            </div>

        </div>
    )
}

export default Work;