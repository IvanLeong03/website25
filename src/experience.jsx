import React from 'react';
import ExpBlock from './ExpBlock';
import EducationBlock from './EducationBlock';

function Experience() {   
    
    const myExp = [
        {
            title: "Intern, IT",
            company: "China Pacific (Life) Insurance Hong Kong",
            image: "/src/assets/1678069633302.jpeg",
            duration: "June 2025 - August 2025, ongoing",
            description: [
                'Working on introducing AI to the company (in progress).',
                'Deliver IT induction training for new hires.',
                'Assist in ensuring our products and services are compliant with the latest IA regulations.',
                'Arranged a visit to the Tencent Shenzhen headquarters to for the IT team learn about their Cloud and AI products.'
            ]
        },
        {
            title: "Lead Software Engineer",
            company: "Zimuth.AI",
            image: "/src/assets/logo_icon_turquoise.png",
            duration: "February 2025 - present",
            description: [
                'Designed and developed the desktop website for our upcoming product, Zone News, from scratch. Currently a work in progress.', 
                'Developed our company website.', 
                'Built database for storing and managing our generated news articles, and the APIs to retrieve them for displaying on the website.'
            ]
        }
    ];

    const education = [
        {
            title: "BSc Computer Science",
            grade: "Upper Second Class Honours",
            school: "University College London",
            //image: "/src/assets/1678069633302.jpeg",
            duration: "September 2021 - June 2024",
            description: [
                'Modules include: Machine Learning, Object-Oriented Programming, Software Engineering, Compilers, Computer Architecture & Concurrency, Mathematics and Statistics, Security, Logic',
                'Dissertation on Formalizing Proofs for Soundness in Hoare \
                Logic using Isabelle/HOL',
                'Studied Japanese for two years as part of the IEP minor'
            ]
        }
    ];
    
    return (
        <div className='w-full min-h-dvh p-24 font-montserrat'>
            <div className='relative flex justify-start items-start mb-36'>
                <h1 className='text-4xl font-semibold z-20'>experience</h1> 
                <div className='h-[300px] w-[300px] z-10 absolute left-[160px] -top-[75px] rounded-full bg- bg-yellowHighlight flex justify-center items-center p-6'>
                    <p className='text-lg w-2/3 mx-auto text-purple60'>Looking for full time roles in <b>Software Engineering/Machine Learning</b></p>
                </div>
            </div>
           
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

            <h1 className='text-3xl text-grey40 font-semibold my-16'>education</h1> 
            {education.map((position, index) => (
                <div
                    key={index}
                    className={'justify-start'}
                >

                <EducationBlock 
                    key={index}
                    title={position.title} 
                    grade={position.grade}
                    school={position.school} 
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