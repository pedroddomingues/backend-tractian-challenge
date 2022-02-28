import Unit from "./unit.entity";
import User from "./user.entity";

export interface create_company_dto {
	name: string;
	description: string;
}

export interface update_company_dto {
	name?: string;
	description?: string;
	units?: Unit[];
}

export default class Company {
	public readonly _id: string;
	public name: string;
	public description: string;
	public units: Unit[];
	public users: User[];

	constructor({ name, description }: create_company_dto, _id?: string) {
		Object.assign(this, {
			name,
			description,
		});
		if (_id) {
			this._id = _id;
		}
	}

	public add_unit(unit: Unit): void {
		this.units.push(unit);
	}

	public add_user(user: User): void {
		this.users.push(user);
	}

	public remove_unit(unit: Unit): void {
		this.units = this.units.filter((u) => u._id !== unit._id);
	}

	public remove_user(user: User): void {
		this.users = this.users.filter((u) => u._id !== user._id);
	}
}
