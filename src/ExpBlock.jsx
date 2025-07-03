import React from "react";

function ExpBlock({title, company, duration, description}) {

    return (
        <div className='w-3/5 min-h-[25dvh] max-h-dvh border border-black rounded-2xl flex flex-col justify-start p-6 my-12'>
            <h2 className='text-2xl font-bold my-2'>{title}</h2>
            <div className='flex justify-between'>
                <h3 className='text-lg text-grey20 font-semibold'>{company}</h3>
                <label className='text-md text-grey40'>{duration}</label>
            </div>
            <ul className="mt-4 list-disc list-inside text-grey60">
                {description.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>            
        </div>
    );
};

export default ExpBlock;