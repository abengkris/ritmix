import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

const artists = [{ id: 1, name: 'Artist 1' }];

app.get('/api/artists', (req: Request, res: Response) => {
  res.json(artists);
});

app.listen(8000, () => console.log('Core running on port 8000'));