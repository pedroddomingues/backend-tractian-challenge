import Unit from "./unit.entity";

export enum Estatus {
	"Running",
	"Stopped",
	"Alerting",
}

export interface create_asset_dto {
	name: string;
	description: string;
	status: Estatus;
	model: string;
	image_url: string;
	owner: Unit;
}

export interface update_asset_dto {
	name?: string;
	description?: string;
	status?: Estatus;
	model?: string;
	image_url?: string;
	owner?: Unit;
	health_level?: number;
}

export default class Asset {
	public readonly _id: string;
	public image_url: string;
	public name: string;
	public description: string;
	public model: string;
	public owner: Unit;
	public status: Estatus;
	public health_level: number;

	constructor({
		image_url,
		name,
		description,
		model,
		owner,
		status,
	}: create_asset_dto, _id?: string) {
		Object.assign(this, {
			image_url,
			name,
			description,
			model,
			owner,
			status,
		});
		this.health_level = 100;
		if (_id) {
			this._id = _id;
		}
	}
}
