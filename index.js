import express from 'express';
import bodyParser from 'body-parser';
import videoRoutes from './routes/videos.js';
import cors from 'cors';
import 'dontenv/config';

const app = express();
const PORT = 8080;
const {CORS_ORIGIN} = process.env;

app.use(bodyParser.json());
app.use('/videos', videoRoutes);
app.use(cors({CORS_ORIGIN}));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});