import axios from "axios";
import { registerData } from "../types/Auth";

const be_url = process.env.BE_URL;

export const Register = async (data: registerData) => {
  try {
    const response = await axios.post(`${be_url}/auth/register`, data);
    return response.data;
  } catch (error: any) {
    return error.response?.data || "Something went wrong, please try again.";
  }
};