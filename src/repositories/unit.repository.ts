import Asset from "entities/asset.entity";
import Company from "entities/company.entity";
import Unit, { update_unit_dto } from "entities/unit.entity";

export interface Iunits_repository {
	save(unit: Unit): Promise<Unit>;
	get_all(): Promise<Unit[]>;
	get_by_id(_id: string): Promise<Unit>;
	get_by_name(name: string): Promise<Unit>;
	update(_id: string, unit: update_unit_dto): Promise<Unit>;
	delete(_id: string): Promise<boolean>;
	add_asset(unit: Unit, asset: Asset): Promise<Unit>;
	remove_asset(unit: Unit, asset: Asset): Promise<Unit>;
	change_company(unit: Unit, company: Company): Promise<Unit>;
	get_assets(unit: Unit): Promise<Asset[]>;
}
