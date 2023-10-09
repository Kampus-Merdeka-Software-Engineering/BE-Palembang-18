import { Router } from "express";
import { getAllOffice, getofficeByKec, postCreateoffice } from "../controller/office.js";

const officeRouter = Router();

officeRouter.get('/:kecamatan', getofficeByKec)

officeRouter.post("/", postCreateoffice);

officeRouter.get("/", getAllOffice);

export default officeRouter;
