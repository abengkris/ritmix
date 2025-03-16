import express from 'express';

const app = express();

app.get('/api/shop', (req, res) => res.json({ message: 'Shop API' }));

app.listen(3001, () => console.log('Shop on port 3001'));