import User from "../entities/user.entity";

export interface Iusers_repository {
	save(user: User): Promise<User>;
	get_all(): Promise<User[]>;
	get_by_id(_id: string): Promise<User>;
	get_by_email(email: string): Promise<User>;
}
