import User, { create_user_dto } from "../entities/user.entity";
import { Iusers_repository } from "../repositories/user.repository";

export class user_service {
	constructor(
		private readonly users_repository: Iusers_repository
	) // private readonly bcrypt: Bcrypt,
	{}

	async create({ email, name, password }: create_user_dto): Promise<User> {
		const user_exists = await this.users_repository.get_by_email(email);
		console.log(user_exists);
		if (user_exists) {
			throw new Error("User already exists");
		}
		const user = new User({ name, email, password });
		console.log(user);
		const new_user = await this.users_repository.save(user);
		console.log(new_user);
		return new_user;
	}
}
