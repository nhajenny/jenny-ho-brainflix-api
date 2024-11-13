import express from 'express';
import bodyParser from 'body-parser';
import videoRoutes from './routes/videos.js';

const app = express();
const PORT = 8080;


app.use(bodyParser.json());


app.use('/videos', videoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});