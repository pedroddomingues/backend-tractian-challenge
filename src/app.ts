import express from 'express'

import { Request, Response } from 'express';
import { userRouter } from './routes';

const app = express();

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use('/users', userRouter);

export default app;
