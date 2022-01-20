import express, { Router } from "express";
import User from "../entities/user.entity";
import { mongo_user_service } from "../modules/user.module";

const router = Router();

router.post("/", async (req: express.Request, res: express.Response) => {
	const { email, name, password } = req.body;
	// console.log(req);
	const user = new User({ email, name, password });
	const new_user = await mongo_user_service.create(user);
	// console.log(new_user);
	return res.status(201).json(new_user);
});

router.get("/", async (req: express.Request, res: express.Response) => {
	// const users = get_users();
	const users = ["user1", "user2"];
	res.json(users);
});

router.get("/:id", async (req: express.Request, res: express.Response) => {});

router.put("/:id", async (req: express.Request, res: express.Response) => {});

router.delete(
	"/:id",
	async (req: express.Request, res: express.Response) => {}
);

export default router;
