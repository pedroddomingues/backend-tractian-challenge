import express from 'express';
import { Router } from 'express';

const router = Router();

router.get('/', (req: express.Request, res: express.Response) => {
	res.json({ message: 'userId' });
});

export default router;
