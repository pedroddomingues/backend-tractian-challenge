import { user_service } from "../services/user.sevices";
import { mongodb_users_repository } from "../database/mongodb/services/user.service";
import user_model from "../database/mongodb/models/user.model";

const users_repository = new mongodb_users_repository(user_model);
const mongo_user_service = new user_service(users_repository);

export { mongo_user_service };
