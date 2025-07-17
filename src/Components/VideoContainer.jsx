import React,{useState, useEffect} from 'react'
import VideoCard from './VideoCard'; // Importing VideoCard component
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook

const VideoContainer = () => {

    const navigate = useNavigate();

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

  const handleVideoClick = (videoId) => {
    console.log('Video clicked:', videoId);
    // Handle video click (e.g., https://www.youtube.com/watch?v=6fp5xgrDtUQ)
    navigate(`/watch?v=${videoId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} onClick={() => handleVideoClick(video.id)} />
      ))}
    </div>
  )
}

export default VideoContainer