import { Router } from "express";
import { getofficeByKec, postCreateoffice } from "../controller/office.js";

const officeRouter = Router();

officeRouter.get('/:kecamatan', getofficeByKec)

officeRouter.post("/", postCreateoffice);

export default officeRouter;
