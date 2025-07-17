import React,{useState, useEffect} from 'react'
import VideoCard from './VideoCard'; // Importing VideoCard component

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // Fetch videos or perform any setup here
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/videos');
        const data = await response.json();
        console.log(data);
        setVideos(data.items || []);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();

  }, []);

  if(!videos.length) {
    return;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  )
}

export default VideoContainer