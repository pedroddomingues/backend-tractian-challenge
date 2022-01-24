import { Request, Response, NextFunction } from "express";

export default function log_errors(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (process.env.ENV === "development")
		console.error(err.stack)
	next(err);
}
