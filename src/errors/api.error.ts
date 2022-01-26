import { Request, Response, NextFunction } from "express";

export default function api_errors(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	let status = 500;
	if (err.message === "User already exists") {
		status = 400;
	}
	return res.status(status).json({ message: err.message });
}
