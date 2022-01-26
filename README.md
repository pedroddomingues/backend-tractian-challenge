# Tractian Backend Challenge
This project is a challenge suggested to be done as part of a job application.
I think I should be doing this more straightforward so it could be complete soon but every new project I try to learn something new. Particularly in this project I'm implementing somehow SOLID principles such as Dependency Injection, Open Closed, etc. Obviously my implementation is not fully correct and there are lots of thing to be improved.

The last project I made was built using Nest JS so there is a lot of what I've learned then here, including naming patterns, etc. Sometimes feels like the folders and their files are redundant but they are reasonable and understandable.

## Tech
* **TypeScript** - Superset of JavaScript and the programming language I like the most.
* **Express** - A lightweight Node web server library.
* **MongoDB** - A document based database.
* **Passport.js** - The most used JS library for authentication.
* **ESLint/Prettier** - Linter to ensure readable and homogeneous code syntax.

## TODO
- [ ] Create automated tests.
- [ ] Validation. Check if every information provided is ok. (for example, if an email is really an email)
- [ ] Implement roles authorization. (Now an user can be created in two endpoints /auth/signup and /users, because /user is an protected route, the intention is to signup create low privilege users and /users to be used by admins to create new admins)
- [ ] Create a model entity.

## What I've learned so far
* How to create and use classes in TS.
* Using interfaces as models to classes.
* Injecting classes in other classes.
