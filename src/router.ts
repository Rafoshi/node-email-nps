import { Router } from "express";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();
const surveryController = new SurveysController();

router.get("/surveys", surveryController.show);

router.post("/users", userController.create);
router.post("/surveys", surveryController.create);

export { router };
