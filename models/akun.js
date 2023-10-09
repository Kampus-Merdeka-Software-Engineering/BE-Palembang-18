import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const akun = sequelize.define("akun", {
    username: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_admin : {
        type : DataTypes.INTEGER,
        allowNull: true,
    }},{
        tableName: 'admin_account',
        timestamps: false
    }
);

export default akun;