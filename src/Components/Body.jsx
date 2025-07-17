import React from 'react'
import VideoContainer from './VideoContainer'; // Importing VideoContainer component
import SuggestedCategories from './SuggestedCategories'; // Importing SuggestedCategories component

const Body = () => {
  return (
    <div className="flex-1 bg-black min-h-full overflow-y-auto">
      <SuggestedCategories />
      <VideoContainer />
    </div>
  )
}

export default Body