import React from 'react';

function Experience({title, company, years, description}) {    
    
    return (
        <div className='w-full min-h-[25dvh] border border-black rounded-2xl flex flex-col justify-start p-6 mt-6 mb-12'>
            <h2 className='text-2xl font-bold my-2'>{title}</h2>
            <div className='w-3/4 flex justify-between'>
                <h3 className='text-lg text-gray-600 font-semibold'>{company}</h3>
                <label className='text-md text-gray-500'>{years}</label>
            </div>
            <ul className="mt-4 list-disc list-inside text-gray-700">
                {description.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>            
        </div>
    );
}

export default Experience