import fetch from 'node-fetch';

export default async function handler(req, res) {
  const url = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${process.env.YOUTUBE_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching YouTube API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
