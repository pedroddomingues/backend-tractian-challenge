import { Request, Response, NextFunction } from "express";

import { Iuser_service } from "../services/user.service";
import api_error from "../errors";
import User from "entities/user.entity";

export class user_controller_class {
	constructor(private readonly user_service: Iuser_service) {}

	create = async (req: Request, res: Response, next: NextFunction) => {
		const { email, name, password } = req.body;
		const new_user = await this.user_service.create({
			email,
			name,
			password,
		});
		if (new_user instanceof api_error) return next(new_user);
		return res.status(201).json("bla");
	}

	get_all = async (req: Request, res: Response, next: NextFunction) => {
		const users = await this.user_service.get();
		if (users instanceof api_error) return next(users);
		return res.status(200).json(users);
	}

	get_by_id = async (req: Request, res: Response, next: NextFunction) => {
		const { _id } = req.params;
		const user = await this.user_service.get(_id);
		if (user instanceof api_error) return next(user);
		return res.status(200).json(user);
	}

	update = async (req: Request, res: Response, next: NextFunction) => {
		const { _id } = req.params;
		const { name, email, password } = req.body;
		const user = await this.user_service.update(_id, {
			name,
			email,
			password,
		});
		if (user instanceof api_error) return next(user);
		return res.status(200).json(user);
	}

	delete = async (req: Request, res: Response, next: NextFunction) => {
		const { _id } = req.params;
		const deleted = await this.user_service.delete(_id);
		if (deleted instanceof api_error) return next(deleted);
		return res.status(204);
	}
}
