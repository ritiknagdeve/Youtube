import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import VideoPlayer from './VideoPlayer';

import  {getRandomMessage, getRandomUser} from '../utils/helper'; 

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  // need to do api polling to get live chat messages
  
  return (
    <div className="flex flex-1 bg-black overflow-hidden">
      {/* Main video section - adjust width based on sidebar state */}
      <div className={`flex-1 p-4 overflow-y-auto ${isSidebarOpen ? 'max-w-[65%]' : 'max-w-[70%]'}`}> 
        <VideoPlayer videoId={videoId} />
      </div>

      {/* Live Chat section - via api polling */}
      <div className={`bg-black p-4 overflow-y-auto border-l border-gray-800 ${isSidebarOpen ? 'w-[35%]' : 'w-[30%]'}`}>
        <div className="text-white">
          <h3 className="text-lg font-semibold mb-4">Live Chat</h3>
          {/* <p className="text-gray-400">Live chat will appear here</p> */}
          <div className="bg-gray-800 p-4 rounded-lg">
            {/* here live messages will be added via polling */}
          </div>
          <input type="text" placeholder="Type your message..." className="mt-4 w-9/12 p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="mx-2 mt-2 px-4 py-2 w-2/12 bg-blue-600 text-white rounded-lg hover:bg-blue-500">Send</button>
          
        </div>
      </div>
    </div>
  )
}

export default WatchPage