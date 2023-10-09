import order from "../models/order.js";

export const FindorderByResi = async ( no_resi ) =>{
    return await order.findOne ({ where : { no_resi }})
};

export const changeStatusbyResi = async (no_resi, status) =>{
    return await order.update({
        status,
    },{
        where:{no_resi},
    })
}

export const findAllOrder = async() => {
    return await order.findAll();
};

export const createorder = async (
    senderName,
    no_resi,
    fee,
    senderPhone,
    senderaddress,
    status,
    receiptName,
    receiptPhone,
    receiptaddress,
    estimatedTimeOfDeparture,
    estimatedTimeOfArrival,
    adminName
) => {
    return await order.create({
        senderName,
        no_resi,
        fee,
        senderPhone,
        senderaddress,
        status,
        receiptName,
        receiptPhone,
        receiptaddress,
        estimatedTimeOfDeparture,
        estimatedTimeOfArrival,
        adminName
    });
};