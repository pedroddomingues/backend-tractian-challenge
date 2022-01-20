import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { create_user_dto } from "../../../entities/user.entity";

export interface user_document extends create_user_dto, mongoose.Document {
	createdAt: { type: Date };
	updatedAt: { type: Date };
	compare_password(candidate_password: string): Promise<boolean>;
}

const user_schema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
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

user_schema.index({ email: 1 });

const hash_password: mongoose.PreSaveMiddlewareFunction<user_document> = async function (this, next) {
	// only hash the password if it has been modified (or is new)
	if (!this.isModified("password")) return next();

	// Random additional data
	const salt = await bcrypt.genSalt(10);

	const hash = await bcrypt.hashSync(this.password, salt);

	// Replace the password with the hash
	this.password = hash;

	return next();
  }
// When the user registers
user_schema.pre(
  "save",
  hash_password
);

// Compare a candidate password with the user's password
user_schema.methods.compare_password = async function (
  candidate_password: string
): Promise<boolean> {
  const user = this as user_document;

  return bcrypt.compare(candidate_password, user.password).catch(() => false);
};

const user_model = mongoose.model<user_document>("user", user_schema);

export default user_model;
