import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/login", passport.authenticate("local"), (req, res) => {
	const user = req.user;
	// const body = { _id: user._id, email: user.email };
	const token = jwt.sign({ user }, process.env.JWT_SECRET);

	return res.status(200).json({ message: "Login successful.", token });
});

export default router;
