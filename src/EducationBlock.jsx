import React from "react";

function EducationBlock({title, grade, school, image, duration, description}) {

    return (
        <div className='w-full border border-black rounded-xl flex flex-col justify-start p-6 my-12'>
            <h2 className='text-2xl font-bold mt-2'>{school}</h2>
            <label className='text-md text-grey40'>{duration}</label>
            <div className='flex justify-between pr-4 h-24 my-2'>
                <div className="flex flex-col my-4">
                    <h3 className='text-lg text-grey20 font-semibold'>{title}</h3>
                    <label className='text-md text-grey40 italic'>{grade}</label>
                </div>                
                <img src={image} className="right-0 h-24"/>
            </div>
            
            <ul className="list-disc list-inside text-grey60 text-lg font-geist">
                {description.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>            
        </div>
    );
};

export default EducationBlock;