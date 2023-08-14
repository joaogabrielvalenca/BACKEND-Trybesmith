import express from 'express';

const app = express();

app.use(express.json());

app.get('/post')

export default app;
