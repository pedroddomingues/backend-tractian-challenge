import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";

import { userRouter } from "./routes";
import { mongo_connect } from "./database";
import { nextTick } from "process";

const app = express();

dotenv.config();

mongo_connect();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.json({ message: "hello world with Typescript" });
});

app.use(
	"/users",
	(req: Request, res: Response, next) => {
		console.log(req);
		next();
	},
	userRouter
);

export default app;
