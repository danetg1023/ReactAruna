import React, { useState } from "react";

function Card({ image, title, price,description }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md p-4 w-full max-w-sm">
      <img src={image} alt={title} className="rounded-md w-full h-48 object-cover" />
        <button onClick={toggleLike} className="absolute top-4 right-4">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" 
                    width="25" height="25" 
                    fill={liked ? "red" : "none"}
                    stroke="red" 
                    stroke-width="1.5">
            <path
                d="M21 8.25c0-2.485-2.014-4.5-4.5-4.5a4.48 4.48 0 00-3.75 2.03A4.48 4.48 0 009 3.75c-2.486 0-4.5 2.015-4.5 4.5 0 5.25 7.5 9.75 7.5 9.75s7.5-4.5 7.5-9.75z"/>
            </svg>
        </button>

        <div className="mt-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-blue-600 font-semibold">{price}</p>
            <p className="text-gray-500 text-sm">{description}</p>
       </div>
    </div>
  );
}

export default Card;
