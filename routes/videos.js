import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getNewId, readJSONFile, writeJSONFile } from '../helper/helper.js';

const router = express.Router();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const videosFilePath = path.join(__dirname, '../data/videos.json');


router.get('/', (req, res) => {
  try {
    const videos = readJSONFile(videosFilePath);
    res.status(200).json(videos);
  } catch (error) {
    console.error('Error reading videos:', error);
    res.status(500).json({ error: 'Failed to retrieve videos' });
  }
});


router.get('/:id', (req, res) => {
  try {
    const videos = readJSONFile(videosFilePath);
    const video = videos.find((v) => v.id === req.params.id);
    if (video) {
      res.status(200).json(video);
    } else {
      res.status(404).json({ error: `Video with ID ${req.params.id} not found` });
    }
  } catch (error) {
    console.error('Error retrieving video:', error);
    res.status(500).json({ error: 'Failed to retrieve video' });
  }
});

// POST /videos - Adds a new video to the list
router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  try {
    const videos = readJSONFile(videosFilePath);
    const newVideo = {
      id: getNewId(),
      title,
      channel: "Random Channel", 
      image: "public/images/Upload-video-preview.jpg", 
      description,
      views: 0,
      likes: 0,
      duration: "2:00",
      video: "https://unit-3-project-api-0a5620414506.herokuapp.com/stream",
      timestamp: new Date().getTime(),
      comments: [],
    };

    videos.push(newVideo);
    writeJSONFile(videosFilePath, videos);

    res.status(201).json(newVideo);
  } catch (error) {
    console.error('Error adding video:', error);
    res.status(500).json({ error: 'Failed to add video' });
  }
});

export default router;