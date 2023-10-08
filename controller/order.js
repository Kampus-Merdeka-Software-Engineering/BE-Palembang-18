import express, { request, response } from "express";
import { httpStatusMessage } from "../constants/httpStatusMessage.js";
import { FindorderByResi, createorder, findAllOrder } from "../services/order.js";

/**
 * @param {express.Request} request
 * @param {express.Respone} response
 */
export const getAllOrder = async (request, response) => {
    const order = await findAllOrder();
    response.json({
        data : order,
        message : httpStatusMessage[response.status]
    });
};

export const getorderByno_resi = async (request,response) =>{
    const { no_resi } = request.params;
    const order = await FindorderByResi(no_resi)

    response.json({
        data : order,
        message : httpStatusMessage[response.status]
    });
}


export const postCreateorder = async (request, response) => {
    const { senderName, no_resi, fee, senderPhone, senderaddress, status, receiptName, receiptPhone, receiptaddress, estimatedTimeOfDeparture, estimatedTimeOfArrival, adminName} = request.body;
    const order = await createorder(
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
        );
    response.json({
        data : order,
        message : httpStatusMessage[response.status],
    });
};