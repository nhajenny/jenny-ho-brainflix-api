import express from 'express';
import bodyParser from 'body-parser';
import videoRoutes from './routes/videos.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const {CORS_ORIGIN} = process.env;

app.use(bodyParser.json());
app.use('/videos', videoRoutes);
app.use(cors({CORS_ORIGIN}));

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});