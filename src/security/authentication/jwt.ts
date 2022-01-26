import passport from "passport";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";

import { users_repository } from "../../modules/user.module";

const opts: StrategyOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET,
	jsonWebTokenOptions: {
		maxAge: "20m",
	},
};

passport.use(
	new Strategy(opts, async function (jwt_payload, done) {
		const user = await users_repository.get_by_id(jwt_payload.user._id);
		if (!user) {
			return done(null, false, { message: "New login is necessary" });
		}
		user.password = undefined;
		return done(null, user);
	})
);
