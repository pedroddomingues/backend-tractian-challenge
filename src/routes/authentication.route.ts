import { Router } from "express";
import passport from "passport";

const router = Router();

router.post("/login", passport.authenticate("local"), (req, res) => {
	console.log("/login");
	return res.status(200).json({ message: "Login successful" });
});

export default router;
