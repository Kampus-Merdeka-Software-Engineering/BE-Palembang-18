import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const login = sequelize.define("login", {
    username: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_admin: {
        type: DataTypes.STRING,
        allowNull: true,
    }},{
        tableName: 'admin_account',
        timestamps: false
    }
);

export default login;