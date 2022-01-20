import User from "../../../entities/user.entity";
import { Iusers_repository } from "../../../repositories/user.repository";
import user_schema from "../models/user.model"

export class mongodb_users_repository implements Iusers_repository {
	constructor(
		private readonly user_model: typeof user_schema
	) {}
	async save(user: User): Promise<User> {
		const saved_user = await this.user_model.create(user);
		return saved_user;
	}
	async get_by_email(email: string): Promise<User | undefined> {
		const user = await this.user_model.findOne({ email });
		return user;
	}
	async get_all(): Promise<User[]> {
		const users = await this.user_model.find();
		return users;
	}
	async get_by_id(_id: string): Promise<User | undefined> {
		const user = await this.user_model.findById(_id);
		return user;
	}
}

