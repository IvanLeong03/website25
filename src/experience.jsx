import React from 'react';
import ExpBlock from './ExpBlock';

function Experience() {   
    
    const myExp = [
        {
            title: "Intern, IT",
            company: "China Pacific (Life) Insurance Hong Kong",
            duration: "June 2025 - August 2025",
            description: ['aaa', 'bbb', 'ccc']
        },
        {
            title: "Lead Software Engineer",
            company: "Zimuth.AI",
            duration: "February 2025 - present",
            description: ['aaa', 'bbb', 'ccc']
        }
    ];
    
    return (
        <div className='w-full h-dvh max-h-[900px] p-24 bg-beige90 font-montserrat'>
            <h1 className='text-3xl font-semibold'>experience</h1> 
            {myExp.map((position, index) => (
                <ExpBlock 
                    key={index}
                    title={position.title} 
                    company={position.company} 
                    duration={position.duration} 
                    description={position.description} 
                />
            ))}

                
        </div>
    );
}

export default Experience