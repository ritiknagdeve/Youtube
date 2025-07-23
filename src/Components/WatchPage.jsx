import React,{useEffect, useRef} from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import VideoPlayer from './VideoPlayer';
import { useDispatch } from 'react-redux';
import {addMessage} from '../utils/chatSlice';

import  {getRandomMessage, getRandomUser} from '../utils/helper'; 

const WatchPage = () => {

  const messageRef = useRef(null);

  const dispatch = useDispatch();
  const chats = useSelector((store) => store.chatData.messages);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  const sendMessage = () => {
    const message = messageRef.current.value.trim();
    dispatch(addMessage({ user: "You", message }));
    messageRef.current.value = ''; // Clear input after sending
  }
  
  useEffect(()=>{
    // polling logic here
    const interval = setInterval(() => {
      
      dispatch(addMessage({ user: getRandomUser(), message: getRandomMessage() }));
      if(chats.length > 200) {
        dispatch(clearMessages());
      }
    }, 1300);

    return () => clearInterval(interval);
  }, []);

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
          <div
            className="bg-gray-800 p-4 rounded-lg"
            style={{
              height: 'calc(100vh - 200px)', // Responsive height based on viewport
              overflowY: 'auto'
            }}
          >
            {/* here live messages will be added via polling */}
            {chats && chats.map((chat, index) => (
              <div
                key={index}
                className="flex items-start gap-3 mb-2 py-1"
                style={{ fontSize: '0.92rem' }}
              >
                {/* User icon */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs font-bold text-white mt-0.5">
                  {chat.user?.[0]?.toUpperCase() || '?'}
                </div>
                {/* Message bubble */}
                <div className="flex flex-col">
                  <span className="font-semibold text-blue-200 leading-tight" style={{ fontSize: '0.93em' }}>{chat.user}:</span>
                  <span className="text-gray-200 leading-tight" style={{ fontSize: '0.93em' }}>{chat.message}</span>
                </div>
              </div>
            ))}
          </div>
          <input ref={messageRef} type="text" placeholder="Type your message..." className="mt-4 w-9/12 p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button onClick={sendMessage} className="mx-2 mt-2 px-4 py-2 w-2/12 bg-blue-600 text-white rounded-lg hover:bg-blue-500">Send</button>

        </div>
      </div>
    </div>
  )
}

export default WatchPage