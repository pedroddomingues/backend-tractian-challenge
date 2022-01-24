import express, { Router } from "express";

import { user_controller } from "../modules/user.module";

const router = Router();

router.post("/", user_controller.create);

router.get("/", user_controller.get_all);

router.get("/:_id", user_controller.get_by_id);

router.put("/:_id", user_controller.update);

router.delete("/:_id", user_controller.delete);

export default router;
