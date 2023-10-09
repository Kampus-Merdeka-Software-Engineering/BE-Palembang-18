import akun from "../models/akun.js";
import bcrypt from "bcrypt";

export const createUser = async (username, password) => {
    const hash = await bcrypt.hash(password, 13)
    return await akun.create({
        username, password:hash
    })
};

export const loginUser = async (username) => {
    return await akun.findOne({ where: { username } });
}