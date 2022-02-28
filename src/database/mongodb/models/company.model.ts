import mongoose from "mongoose";

import Unit from "entities/unit.entity";
import User from "entities/user.entity";
import { create_company_dto } from "entities/company.entity";

export interface company_document
	extends create_company_dto,
		mongoose.Document {
	units: [Unit];
	users: [User];
	createdAt: Date;
	updatedAt: Date;
}

const company_schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	units: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "unit",
		required: true,
		default: [],
	},
	users: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "user",
		required: true,
		default: [],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

const company_model = mongoose.model<company_document>(
	"company",
	company_schema
);

export default company_model;
