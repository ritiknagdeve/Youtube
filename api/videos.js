import fetch from 'node-fetch';

export default async function handler(req, res) {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${process.env.YOUTUBE_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!data.items || !Array.isArray(data.items)) {
      // Pass the error message from YouTube API if available
      return res.status(500).json({ error: data.error?.message || 'YouTube API error: items not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching YouTube API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
