import { Router } from "express";
import { getAllOrder, getorderByno_resi, postCreateorder } from "../controller/order.js";

const orderRouter = Router();

orderRouter.get('/:no_resi', getorderByno_resi);

orderRouter.get('/', getAllOrder)

orderRouter.post('/', postCreateorder);

export default orderRouter;