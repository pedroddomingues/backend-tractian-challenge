import mongoose from "mongoose";

export async function mongo_connect() {
	const uri = process.env.MONGO_URI;
	const user = process.env.MONGO_USER;
	const password = process.env.MONGO_PASSWORD;
	const db = process.env.MONGO_DB;
	try {
		await mongoose.connect(
			`mongodb+srv://${user}:${password}@${uri}/${db}?retryWrites=true&w=majority`
		);
		console.log("Connected to database");
	} catch (error) {
		console.error(error);
	}
}
