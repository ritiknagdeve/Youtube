import fetch from 'node-fetch';

export default async function handler(req, res) {
  const query = req.query.q;
  const url = `https://clients1.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    res.status(200).json(json);
  } catch (err) {
    console.error('Error fetching suggestions:', err);
    res.status(500).json({ error: 'Failed to fetch suggestions' });
  }
}
