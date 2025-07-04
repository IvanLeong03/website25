import React from "react";
import Experience from "./experience";
import Carousel from "./Carousel";

function Work() {

    return (
        <div className="h-dvh max-h-[900px] pt-24 py-12 border-4 border-purple80 flex flex-col flex-grow justify-between font-montserrat">
            <h1 className="text-3xl font-semibold px-24">work</h1>
            {/* carousel section */}
            <div className="w-full bg-purple80">
                <Carousel />
            </div>      
            { /* describe languages and tools I'm familiar with */ }
            <div className="min-h-1/5 px-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-x-24 px-4 text-lg">
                <p className="p-4">
                    With most of my work for Zimuth.AI focusing on the frontend, I am very familiar with web development
                    languages and frameworks such as React, JavaScript, HTML, and CSS. 
                </p>

                <p className="p-4">
                    I also have experience leading and working on Machine Learning projects, with multiple
                    hobby projects on sports data analysis and predictions, and I'm well-versed in Python and SQL, among
                    other relevant tools. 
                </p>
            </div>

        </div>
    )
}

export default Work;