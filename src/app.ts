import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";

import { user_router } from "./routes";
import { mongo_connect } from "./database";
import { log_errors, db_errors } from "./errors";

const app = express();

dotenv.config();

mongo_connect();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.json({ message: "hello world with Typescript" });
});

app.use("/users", user_router);

app.use(log_errors);
app.use(db_errors);

export default app;
