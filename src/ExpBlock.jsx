import React from "react";

function ExpBlock({title, company, image, duration, description}) {

    return (
        <div className='w-3/5 border border-dotted border-black rounded-2xl flex flex-col justify-start p-6 my-12'>
            <h2 className='text-2xl font-bold my-2'>{title}</h2>
            <div className='flex justify-between pr-4 h-24 my-2'>
                <div className="w-3/5 flex flex-col">
                    <h3 className='text-lg text-grey20 font-semibold'>{company}</h3>
                    <label className='text-md text-grey40'>{duration}</label>
                </div>                
                <img src={image} className="right-0 h-24"/>
            </div>
            
            <ul className="mt-4 list-disc list-inside text-grey60 text-lg font-geist">
                {description.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>            
        </div>
    );
};

export default ExpBlock;