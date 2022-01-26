import mongoose from "mongoose";

import Asset from "entities/asset.entity";
import { create_unit_dto } from "entities/unit.entity";

export interface unit_document extends create_unit_dto, mongoose.Document {
	assets: [Asset];
	createdAt: Date;
	updatedAt: Date;
}

const unit_schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	company: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "company",
		required: true,
	},
	assets: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "asset",
		required: true,
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

const unit_model = mongoose.model<unit_document>("unit", unit_schema);

export default unit_model;
