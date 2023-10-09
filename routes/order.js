import { Router } from "express";
import { getAllOrder, getorderByno_resi, postCreateorder, updateOrderStatus } from "../controller/order.js";

const orderRouter = Router();

orderRouter.get('/:no_resi', getorderByno_resi);

orderRouter.get('/', getAllOrder)

orderRouter.post('/', postCreateorder);

orderRouter.put('/:no_resi', updateOrderStatus)

export default orderRouter;