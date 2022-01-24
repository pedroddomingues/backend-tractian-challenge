import User, { update_user_dto } from "../entities/user.entity";

export interface Iusers_repository {
	save(user: User): Promise<User>;
	get_all(): Promise<User[]>;
	get_by_id(_id: string): Promise<User>;
	get_by_email(email: string): Promise<User>;
	update(_id: string, user: update_user_dto): Promise<User>;
	delete(_id: string): Promise<boolean>;
}
