import mongoose from 'mongoose';

import { create_asset_dto, Estatus } from "entities/asset.entity";
import Unit from 'entities/unit.entity';

export interface asset_document extends create_asset_dto, mongoose.Document {
	owner: Unit;
	createdAt: Date;
	updatedAt: Date;
}

const asset_schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image_url: {
		type: String,
		required: true,
	},
	model: {
		type: String,
		required: true,
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'unit',
		required: true,
	},
	status: {
		enum: Estatus,
		required: true,
	},
	health_level: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	}
});

const asset_model = mongoose.model<asset_document>('asset', asset_schema);

export default asset_model;
