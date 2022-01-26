import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

import User from "../entities/user.entity";
import { user_controller } from "../modules/user.module";

const router = Router();

router.post("/login", passport.authenticate("local"), (req, res) => {
	const user = req.user  as User;
	const body = { _id: user._id, email: user.email };
	const token = jwt.sign({ user: body }, process.env.JWT_SECRET);

	return res.status(200).json({ message: "Login successful.", token });
});

router.post("/signup", user_controller.create);

export default router;
