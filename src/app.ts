import express, { Request, Response } from "express";
import dotenv from "dotenv";
import passport from "passport";

dotenv.config();

import "./security/authentication/local";
import "./security/authentication/jwt";
import { mongo_connect } from "./database";
import { log_errors, api_errors } from "./errors";
import { authentication_router, user_router } from "./routes";

const app = express();

mongo_connect();

app.use(express.json());

app.use(passport.initialize());

app.get("/", (req: Request, res: Response) => {
	res.json({ message: "hello world with Typescript" });
});

app.use("/auth", authentication_router);

app.use(passport.authenticate("jwt", { session: false }));
app.use("/users", user_router);

app.use(log_errors);
app.use(api_errors);

export default app;
