import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
const order = sequelize.define ("order", {
    no_order: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    no_resi : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fee:{
        type: DataTypes.INTEGER,
    },
    senderName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    senderPhone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senderaddress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    receiptName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    receiptPhone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    receiptaddress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estimatedTimeOfDeparture: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    estimatedTimeOfArrival: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    adminName:{
        type: DataTypes.STRING,
        allowNull: false,
    }},{
        tableName : 'order',
        timestamps: false
    }
);



export default order;