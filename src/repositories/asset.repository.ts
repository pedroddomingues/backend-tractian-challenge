import Asset, { Estatus, update_asset_dto } from "entities/asset.entity";
import Unit from "entities/unit.entity";

export interface Iassets_repository {
	save(asset: Asset): Promise<Asset>;
	get_all(): Promise<Asset[]>;
	get_by_id(_id: string): Promise<Asset>;
	get_by_name(name: string): Promise<Asset>;
	update(_id: string, asset: update_asset_dto): Promise<Asset>;
	delete(_id: string): Promise<boolean>;
	change_owner(asset: Asset, unit: Unit): Promise<Asset>;
	change_status(asset: Asset, status: Estatus): Promise<Asset>;
}

