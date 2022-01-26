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
	new Strategy(opts, function (jwt_payload, done) {
		console.log(jwt_payload);
		// const user = users_repository.get_by_id(jwt_payload.sub);
		// User.findOne({id: jwt_payload.sub}, function(err, user) {
		//     if (err) {
		//         return done(err, false);
		//     }
		//     if (user) {
		//         return done(null, user);
		//     } else {
		//         return done(null, false);
		//         // or you could create a new account
		//     }
		// });
	})
);
