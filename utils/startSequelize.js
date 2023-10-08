import {Sequelize} from "sequelize";

/**
 * 
 * @param {Sequelize} sequelize 
 */

export const startSequelize = async (sequelize) =>{
    try{
        await sequelize.authenticate();
        await sequelize.sync({ alter : true });
        console.log("connection to Database esthabilished");
        console.log(
            `Models available in sequelize: ${Object.keys(sequelize.models).join(',')}`
            )
    }catch(e){
        console.log("connection to Database failure", e)
    }
}