import axios from "axios"
import { baseUrl } from "./baseUrl";

export const getAllCategories = async() => {
  const res = await axios.get(`${baseUrl}core-category`);
  console.log(res.data);
  return res.data;
}