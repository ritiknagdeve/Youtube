import React from 'react'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  
  return (
    <div className="text-white p-4">
      <h1>Watch Page</h1>
      <p>Video ID: {videoId}</p>
      {/* You can add video player and other components here */}
    </div>
  )
}

export default WatchPage