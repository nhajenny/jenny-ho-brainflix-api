import express from 'express';
import bodyParser from 'body-parser';
import videoRoutes from './routes/videos.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', 
}));


app.use(bodyParser.json());


app.use('/videos', videoRoutes);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});