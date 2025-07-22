import React from 'react'

const VideoCard = ({info, onClick}) => {
  const { id, snippet, statistics} = info;
  const views = statistics?.viewCount || 'N/A';
  const { channelTitle, title, thumbnails } = snippet;
  const thumbnailUrl = thumbnails?.medium?.url || thumbnails?.standard?.url;
  
  // Format view count
  const formatViews = (viewCount) => {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + 'M';
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(0) + 'K';
    }
    return viewCount;
  };

  return (
    <div className="cursor-pointer hover:bg-gray-900 p-2 rounded-lg transition-colors" onClick={onClick}>
      <div className="relative">
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="w-full rounded-lg aspect-video object-cover"
        />
      </div>
      <div className="mt-3">
        <h3 className="text-white text-sm font-medium line-clamp-2 leading-5 mb-1">
          {title}
        </h3>
        <p className="text-gray-400 text-xs mb-1">{channelTitle || title}</p>
        <p className="text-gray-400 text-xs">{formatViews(views)} views</p>
      </div>
    </div>
  )
}

export default VideoCard