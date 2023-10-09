import express, { request, response } from "express";
import akun from "../models/akun.js";
import { httpStatusMessage } from "../constants/httpStatusMessage.js";
import { createUser, loginUser } from "../services/akun.js";
import bcrypt from "bcrypt";


/**
 * @param {express.Request} request
 * @param {express.Respone} response
 */

export const signup = async (request, response) => {
    const { username, password} = request.body;
    const hash = await bcrypt.hash(password, 13);
    const akun = await createUser(username, hash);
    
    response.json({
      data: akun,
      message: httpStatusMessage[response.status]
    });
};

export const login = async (request, response) => {
  const { username, password } = request.body;
  const akun = await loginUser(username);

  if (!akun) {
    return response.status(401).json({
      error: "Unauthorized",
      message: "Username incorrect."
    });
  }

  const isPasswordValid = await bcrypt.hashSync(password, akun.password);

  if (!isPasswordValid) {
    return response.status(401).json({
      error: "Unauthorized",
      message: "Password is incorrect."
    });
  }

  response.json({
    data: akun,
    message: "Login successful."
  });
};
