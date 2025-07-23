import React,{useState, useEffect} from 'react'
import VideoCard from './VideoCard'; 
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../utils/appSlice'; 

const VideoContainer = () => {

    const searchData = useSelector((store) => store.searchData.searchData);
    const [pageToken, setPageToken] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {

    try {
      const response = await fetch('/api/videos?pageToken=' + encodeURIComponent(pageToken));
      const data = await response.json();
      setPageToken(data.nextPageToken || '');
      setVideos((prevVideos) => [...prevVideos, ...data.items]);

    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      fetchVideos();
    }
  };

  useEffect(() => {
    // Fetch videos or perform any setup here
    if (searchData.length > 0) {
      setVideos(searchData[0]);
    }
    else {
      fetchVideos();
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

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
      {videos.map((video, idx) => {
        // Prefer video.id.videoId, fallback to video.id, fallback to idx, but always append idx for uniqueness
        let key = '';
        if (video.id && typeof video.id === 'object' && video.id.videoId) {
          key = video.id.videoId + '-' + idx;
        } else if (typeof video.id === 'string') {
          key = video.id + '-' + idx;
        } else {
          key = idx;
        }
        return (
          <VideoCard
            key={key}
            info={video}
            onClick={() => handleVideoClick(video.id?.videoId || video.id)}
          />
        );
      })}
    </div>
  )
}

export default VideoContainer