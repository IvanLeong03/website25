import React from "react";


function about() {
    return (
        <div className="flex flex-col items-start justify-between h-dv max-h-[900px] w-full bg-purple-200 p-12 text-lg">        
            <h2 className="text-3xl font-bold my-8">About me</h2>
            <p className="my-4 font-semibold text-xl italic">
                "If you look good, you feel good, and if you feel good, you play good." -- Deion Sanders
            </p>

            <p className="my-4">
                Who said this quote only applies to athletes? I think it works for products too. A product that "plays good"
                creates a better user experience — just like a well-performing athlete wins fans. As a mediocre athlete who 
                rode the bench for his secondary school sports teams, I would have a better shot at achieving that off the pitch anyway (sigh).
            </p>        

            <p className="my-4">
                I'm Ivan, a developer passionate about crafting interfaces that are not just functional, but also visually engaging.
                In my view, function without form is incomplete — if I'm already putting in the work to make something function, I want it to look great too!
            </p>

            <p className="my-4">
                I'm currently the lead software engineer at{" "}
                <a href="https://www.zimuth.ai" target="_blank" className="hover:underline font-semibold">
                Zimuth
                </a>
                , where I’ve been since February 2025. We’re building an AI-powered media monitoring platform and a news aggregator
                for the Greater China region — with summaries and sentiment, subjectivity, and bias metrics.
                I designed and built both the brand site and the upcoming desktop news platform (launching Q3 2025).
            </p>

            <p className="my-4">
                I studied Computer Science at UCL, where I built a strong foundation in software engineering and web development.
                I worked extensively with Python, Java, and C, and led the frontend for a year-long project in collaboration with Microsoft and IBM.
            </p>

            <p className="my-4">
                Whether it’s pixels or performance, I care about the full experience — and I’m driven by the idea of creating products
                that are as enjoyable to use as they are impactful.
            </p>
        </div>

    )

};

export default about;   