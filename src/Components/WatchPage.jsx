import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import VideoPlayer from './VideoPlayer'; // Importing VideoPlayer component

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  
  return (
    <div className="flex flex-1 bg-black overflow-hidden">
      {/* Main video section - adjust width based on sidebar state */}
      <div className={`flex-1 p-4 overflow-y-auto ${isSidebarOpen ? 'max-w-[65%]' : 'max-w-[70%]'}`}> 
        <VideoPlayer videoId={videoId} />
      </div>

      {/* Related videos section - adjust width based on sidebar state */}
      <div className={`bg-black p-4 overflow-y-auto border-l border-gray-800 ${isSidebarOpen ? 'w-[35%]' : 'w-[30%]'}`}>
        <div className="text-white">
          <h3 className="text-lg font-semibold mb-4">Related Videos</h3>
          <p className="text-gray-400">Related videos will appear here</p>
        </div>
      </div>
    </div>
  )
}

export default WatchPage