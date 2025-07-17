import React from 'react'

import {Link} from 'react-router-dom';

const SuggestedCategories = () => {
  const suggested = [
    "All", "Music", "Gaming", "Mixes","Movies", "Learning", "Entertainment", "Comedy", "Trailers"
  ]
  return (
    <div className="flex justify-start items-center px-8 py-4">
      {/* Suggested categories content goes here */}
      <ul className="flex gap-4 ">
        {suggested.map((category) => (
          <li key={category} className="text-white bg-gray-800 px-4 py-2 border-gray-600 rounded-lg">
            <Link to="/">{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SuggestedCategories