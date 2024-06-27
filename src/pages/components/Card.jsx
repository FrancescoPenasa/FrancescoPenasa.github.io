import React from 'react';

const Card = ({title, content }) => {
    return (
        <div className="flex flex-col bg-yellow-100 border-2 border-black rounded-lg shadow-lg w-72 ">
            
            <div className="bg-yellow-500 rounded-t-lg h-8 p-1 text-black font-bold">{title}</div>

            {/* content */}
            <div className='border-t-2 border-black ' > {content}</div>
        </div>
    );
};

export default Card;