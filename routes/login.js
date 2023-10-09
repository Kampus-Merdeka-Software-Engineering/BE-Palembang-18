import { Router } from "express";
import { loginController } from "../controller/login.js";

const loginRouter = Router();

loginRouter.post("/", loginController);

export default loginRouter;