import Company, { update_company_dto } from "entities/company.entity";
import Unit from "entities/unit.entity";
import User from "entities/user.entity";

export interface Icompanies_repository {
	save(company: Company): Promise<Company>;
	get_all(): Promise<Company[]>;
	get_by_id(_id: string): Promise<Company>;
	get_by_name(name: string): Promise<Company>;
	update(_id: string, company: update_company_dto): Promise<Company>;
	delete(_id: string): Promise<boolean>;
	add_user(company: Company, user: User): Promise<Company>;
	remove_user(company: Company, user: User): Promise<Company>;
	add_unit(company: Company, unit: Unit): Promise<Company>;
	remove_unit(company: Company, unit: Unit): Promise<Company>;
	get_users(company: Company): Promise<User[]>;
	get_units(company: Company): Promise<Unit[]>;
}
