import React from 'react';
import ExpBlock from './ExpBlock';

function Experience() {   
    
    const myExp = [
        {
            title: "Intern, IT",
            company: "China Pacific (Life) Insurance Hong Kong",
            image: "/src/assets/1678069633302.jpeg",
            duration: "June 2025 - August 2025",
            description: ['working on introducing AI to the company (in progress)']
        },
        {
            title: "Lead Software Engineer",
            company: "Zimuth.AI",
            image: "/src/assets/logo_icon_turquoise.png",
            duration: "February 2025 - present",
            description: [
                'Designed and currently developing the desktop website from scratch for our upcoming product, Zone News.', 
                'Developed our company website.', 
                'Built database for storing and managing our generated news articles, and the APIs to retrieve them for displaying on the website.'
            ]
        }
    ];
    
    return (
        <div className='w-full min-h-dvh p-24 bg-beige90 font-montserrat'>
            <h1 className='text-3xl font-semibold'>experience</h1> 
            {myExp.map((position, index) => (
                <div
                    key={index}
                    className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                >

                <ExpBlock 
                    key={index}
                    title={position.title} 
                    company={position.company} 
                    image={position.image}
                    duration={position.duration} 
                    description={position.description} 
                    index={index}
                />
                </div>
            ))}

                
        </div>
    );
}

export default Experience