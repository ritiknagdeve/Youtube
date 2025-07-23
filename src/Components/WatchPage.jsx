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
    <div className="flex flex-1 bg-black overflow-hidden flex-col sm:flex-row">
      {/* Main video section - adjust width based on sidebar state */}
      <div className={`flex-1 p-0 sm:p-4 overflow-y-auto w-full ${isSidebarOpen ? 'max-w-full sm:max-w-[65%]' : 'max-w-full sm:max-w-[70%]'}`}> 
        <div className="w-full aspect-video sm:aspect-auto">
          <VideoPlayer videoId={videoId} />
        </div>
      </div>

      {/* Live Chat section - via api polling */}
      <div className={`bg-black p-2 sm:p-4 overflow-y-auto border-t sm:border-t-0 sm:border-l border-gray-800 ${isSidebarOpen ? 'w-full sm:w-[35%]' : 'w-full sm:w-[30%]'} min-h-[220px] h-auto sm:h-auto`}> 
        <div className="text-white">
          <h3 className="text-lg font-semibold mb-4">Live Chat</h3>
          {/* <p className="text-gray-400">Live chat will appear here</p> */}
          <div
            className="bg-gray-800 p-2 sm:p-4 rounded-lg"
            style={{
              height: '220px',
              overflowY: 'auto',
              // On sm and up, override height with calc(100vh - 200px)
              ...(window.innerWidth >= 640 ? { height: 'calc(100vh - 200px)' } : {})
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
          <div className="flex mt-4 gap-2">
            <input ref={messageRef} type="text" placeholder="Type your message..." className="flex-1 p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" />
            <button onClick={sendMessage} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 text-sm sm:text-base whitespace-nowrap">Send</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WatchPage