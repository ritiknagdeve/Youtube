import React from 'react'

const VideoPlayer = ({ videoId }) => {
  return (
    <div className="w-full">
      <div className="relative w-full pb-[56.25%]"> {/* 16:9 aspect ratio */}
        <iframe 
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
  )
}

export default VideoPlayer