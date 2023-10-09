import login from "../models/login.js";
import bcrypt from "bcrypt";

export const loginService = async (username, password) => {
    try {
      const user = await login.findOne({ where: { username } });
  
      if (!user) {
        throw new Error("Username tidak ditemukan");
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        throw new Error("Password salah");
      }
  
      return user;
    } catch (error) {
      throw error;
    }
  };