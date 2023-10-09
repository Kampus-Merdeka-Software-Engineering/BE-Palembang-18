import office from "../models/office.js";

export const FindofficeByKec = async (kecamatan) =>{
    return await office.findOne ({ where : { kecamatan }})
}

export const findAllOffice = async() => {
    return await office.findAll();
};

export const createoffice = async (kabupaten, kecamatan, alamat, id_admin) => {
    return await office.create({
        kabupaten, kecamatan, alamat, id_admin
    })
}