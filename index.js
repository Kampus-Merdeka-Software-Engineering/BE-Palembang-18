import express  from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import sequelize from "./config/sequelize.js";
import { startSequelize } from "./utils/startSequelize.js";
import "./models/index.js";
import officeRouter from "./routes/office.js";
import orderRouter from "./routes/order.js";
import akunRouter from "./routes/akun.js";

dotenv.config();

app.use(cors());

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use("/api/office", officeRouter);
app.use("/api/order", orderRouter);
app.use("/api/akun", akunRouter)

startSequelize(sequelize);

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});