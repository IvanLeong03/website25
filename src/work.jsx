import React from "react";
import Experience from "./experience";

function Work() {

    const experiences = [
    {
        company: 'Zimuth',
        title: 'Lead Software Engineer',
        years: "2025 - present",
        description: [
            "Built the websites for our company page and news platform",
            "Managed the SQL database architecture for storing generated articles",
            "Coded the API for fetching articles to display"

        ]
    },
    {
        company: "China Pacific Life Insurance HK",
        title: "Summer Intern",
        years: "2025",
        description: [
            "Will be working as an intern from June to August 2025"
        ]   
    }
    ];
    
    return (
        <div className="flex flex-col items-start justify-around min-h-[80dvh] w-full p-12 text-lg">
            <h2 className="relative text-3xl font-bold my-8">Work</h2>
                <div className="w-3/5 mx-auto">
                {experiences.map((job, index) => (
                    <Experience 
                        key={index}
                        title={job.title}
                        company={job.company}
                        years={job.years}
                        description={job.description}
                    />

                ))}
                </div>
                

            
            

        </div>
    );
}

export default Work;