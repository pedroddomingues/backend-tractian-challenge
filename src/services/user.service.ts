import User, {
	create_user_dto,
	update_user_dto,
} from "../entities/user.entity";
import { Iusers_repository } from "../repositories/user.repository";
import api_error from "../errors";

export interface Iuser_service {
	create(user: create_user_dto): Promise<User | api_error>;
	get(_id?: string): Promise<User | User[] | null | api_error>;
	update(_id: string, user: create_user_dto): Promise<User | api_error>;
	delete(_id: string): Promise<boolean | api_error>;
}

export class user_service_class implements Iuser_service {
	constructor(private readonly users_repository: Iusers_repository) {}

	async create({
		email,
		name,
		password,
	}: create_user_dto): Promise<User | api_error> {
		const user_exists = await this.users_repository.get_by_email(email);
		if (user_exists) {
			return api_error.badRequest("User already exists");
		}
		const user = new User({ name, email, password });
		const new_user = await this.users_repository.save(user);
		return new_user;
	}

	async get(_id?: string): Promise<User | User[] | null | api_error> {
		if (_id) {
			const user = await this.users_repository.get_by_id(_id);
			if (!user) {
				return api_error.badRequest("User not found");
			}
			user.password = undefined;
			return user;
		}
		const users = await this.users_repository.get_all();
		users.forEach(user => {
			user.password = undefined;
		});
		return users;
	}

	async update(
		_id: string,
		user: update_user_dto
	): Promise<User | api_error> {
		const user_exists = await this.users_repository.get_by_id(_id);
		if (!user_exists) {
			return api_error.badRequest("User not found");
		}
		const updated_user = await this.users_repository.update(_id, user);
		return updated_user;
	}

	async delete(_id: string): Promise<boolean | api_error> {
		const user_exists = await this.users_repository.get_by_id(_id);
		if (!user_exists) {
			return api_error.badRequest("User not found");
		}
		const deleted = await this.users_repository.delete(_id);
		return deleted;
	}
}
