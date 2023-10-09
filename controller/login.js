import express, { request, response } from "express";
import { httpStatusMessage } from "../constants/httpStatusMessage.js";
import { createUser, loginService } from "../services/login.js";


/**
 * @param {express.Request} request
 * @param {express.Respone} response
 */
export const signup = async (req, res) =>{
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 13)
    const signup = await createUser()

}

export const loginController = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await loginService(username, password);
      res.status(200).json({ message: "Login berhasil", user });
    } catch (error) {
      console.error(error);
      res
        .status(401)
        .json({ message: "Gagal login: Username atau password salah" });
    }
  };