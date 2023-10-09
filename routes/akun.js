import { Router } from "express";
import { login, signup } from "../controller/akun.js";

const akunRouter = Router();

akunRouter.post("/signup", signup);
akunRouter.post("/login", login)

export default akunRouter;