import bcrypt from "bcrypt";
import Company from "./company.entity";

export interface create_user_dto {
	name: string;
	email: string;
	password: string;
	company?: Company;
}

export interface update_user_dto {
	name?: string;
	email?: string;
	password?: string;
	company?: Company;
}

export default class User {
	public readonly _id: string;
	public name: string;
	public email: string;
	public password: string;
	public company: Company;

	constructor({ name, email, password }: create_user_dto, _id?: string) {
		Object.assign(this, { name, email, password });
		if (_id) {
			this._id = _id;
		}
	}

	public compare_password(candidate_password: string): Promise<boolean> {
		return bcrypt.compare(candidate_password, this.password);
	}

	public update(update_user_dto: update_user_dto): void {
		Object.assign(this, update_user_dto);
	}
}
