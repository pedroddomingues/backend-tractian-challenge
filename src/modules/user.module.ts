import user_model from "../database/mongodb/models/user.model";
import { mongodb_users_repository } from "../database/mongodb/services/user.service";
import { user_service_class } from "../services/user.service";
import { user_controller_class } from "../controllers/user.controller";

const users_repository = new mongodb_users_repository(user_model);

const user_service = new user_service_class(users_repository);
const test_service = new user_service_class(users_repository);

const user_controller = new user_controller_class(user_service);

export { user_service, user_controller };
