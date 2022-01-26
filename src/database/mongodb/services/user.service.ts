import User from "../../../entities/user.entity";
import { Iusers_repository } from "../../../repositories/user.repository";
import user_schema from "../models/user.model";

export class mongodb_users_repository implements Iusers_repository {
	constructor(private readonly user_model: typeof user_schema) {}
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

	async update(_id: string, user: User): Promise<User | undefined> {
		await this.user_model.findByIdAndUpdate(_id, user);
		const updated_user = await this.user_model.findById(_id);
		return updated_user;
	}

	async delete(_id: string): Promise<boolean> {
		const deleted = await this.user_model.findByIdAndDelete(_id);
		if (!deleted) return false;
		return true;
	}
}
