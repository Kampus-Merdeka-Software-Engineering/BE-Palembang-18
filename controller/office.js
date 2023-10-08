import express  from "express";
import { FindofficeByKec, createoffice } from "../services/office.js";
import { httpStatusMessage } from "../constants/httpStatusMessage.js";

/**
 * @param {express.Request} request
 * @param {express.Respone} response
 */
export const getofficeByKec = async (request,response) =>{
    const { kecamatan } = request.params;
    const office = await FindofficeByKec(kecamatan)

    response.json({
        data : office,
        message : httpStatusMessage[response.status] 
    });
}


export const postCreateoffice = async (request, response) => {
    const { kabupaten, kecamatan, alamat, id_admin} = request.body;
   const office =  await createoffice(kabupaten, kecamatan, alamat, id_admin);

    response.json({
        data : office,
        message: httpStatusMessage[response.status],
    });
}