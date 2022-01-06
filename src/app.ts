import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";

import { userRouter } from "./routes";
import { connect as database_conect } from "./database";

const app = express();

dotenv.config();

database_conect();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.json({ message: "hello world with Typescript" });
});

app.use("/users", userRouter);

export default app;
