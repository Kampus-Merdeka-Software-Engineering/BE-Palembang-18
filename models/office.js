import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const office = sequelize.define("office", {
    id_office:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    kabupaten : DataTypes.STRING,
    kecamatan : DataTypes.STRING,
    alamat: DataTypes.STRING,
    id_admin : DataTypes.INTEGER
},
{
    tableName: "office",
    timestamps: false
});


export default office;