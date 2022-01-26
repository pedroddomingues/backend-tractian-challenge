import Asset from "./asset.entity";
import Company from "./company.entity";

export interface create_unit_dto {
	name: string;
	description: string;
	company: Company;
}

export interface update_unit_dto {
	name?: string;
	description?: string;
	company?: Company;
	assets?: Asset[];
}

export default class Unit {
	public readonly _id: string;
	public name: string;
	public description: string;
	public company: Company;
	public assets: Asset[];

	constructor({ name, description, company }: create_unit_dto, _id?: string) {
		Object.assign(this, {
			name,
			description,
			company,
		});
		if (_id) {
			this._id = _id;
		}
	}

	public add_asset(asset: Asset): void {
		this.assets.push(asset);
	}

	public remove_asset(asset: Asset): void {
		this.assets = this.assets.filter((a) => a._id !== asset._id);
	}
}
