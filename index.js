import express, { json } from 'express';
import { router as attemptRoute } from './routes/attemptRouter.js';
import { router as gameRoute } from './routes/gameRouter.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", 'Content-Type');
    res.setHeader("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(attemptRoute);
app.use(gameRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})