import log_errors from "./log.error";
import db_errors from "./db.error";

export default class api_error {
	constructor(public code: number, public message: String) {}

	static badRequest(msg: String) {
		return new api_error(400, msg);
	}

	static internal(msg: String) {
		return new api_error(500, msg);
	}
}

export { log_errors, db_errors };
