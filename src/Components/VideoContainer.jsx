import React,{useState, useEffect} from 'react'
import VideoCard from './VideoCard'; // Importing VideoCard component
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../utils/appSlice'; // Importing closeSidebar action

const VideoContainer = () => {

    const searchData = useSelector((store) => store.searchData.searchData);

    const navigate = useNavigate();
    const dispatch = useDispatch();

  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
      try {
        const response = await fetch('/api/videos');
        const data = await response.json();
        // console.log(data);
        setVideos(data.items || []);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
  };

  useEffect(() => {
    // Fetch videos or perform any setup here
    if (searchData.length > 0) {
      setVideos(searchData[0]);
      // console.log('Using search data:', searchData[0]);
    }
    else {
      fetchVideos();
    }

  }, [searchData]);

  if(!videos.length) {
    return null;
  }

  const handleVideoClick = (videoId) => {
    // console.log('Video clicked:', videoId);
    // Handle video click (e.g., https://www.youtube.com/watch?v=6fp5xgrDtUQ)
    navigate(`/watch?v=${videoId}`);
    dispatch(closeSidebar()); // Close sidebar on video click

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