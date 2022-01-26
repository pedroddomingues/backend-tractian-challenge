import passport from "passport";
import { Strategy } from "passport-local";

import { users_repository } from "../../modules/user.module";

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	console.log("deserializeUser");
	console.log(user);
	done(null, user);
});

passport.use(
	new Strategy({ usernameField: "email", session: false }, async function (
		email,
		password,
		done
	) {
		console.log("Strategy");
		try {
			const user = await users_repository.get_by_email(email);
			if (!user)
				return done(null, false, { message: "Incorrect credentials." });
			const password_is_valid = await user.compare_password(password);
			if (!password_is_valid)
				return done(null, false, { message: "Incorrect credentials." });
			return done(null, user);
		} catch (error) {
			return done(error);
		}
	})
);
