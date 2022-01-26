import bcrypt from 'bcrypt';

export interface create_user_dto {
	name: string;
	email: string;
	password: string;
}

export interface update_user_dto {
	name?: string;
	email?: string;
	password?: string;
}

export default class User {
	public readonly _id: string;
	public name: string;
	public email: string;
	public password: string;

	constructor({ name, email, password }: create_user_dto, _id?: string) {
		Object.assign(this, { name, email, password });
		if (_id) {
			this._id = _id;
		}
	}

	public compare_password(candidate_password: string): Promise<boolean> {
		return bcrypt.compare(candidate_password, this.password);
	}
}
