import axios from "axios"
import { baseUrl } from "./baseUrl";

export const getAllTags = async() => {
  const res = await axios.get(`${baseUrl}tag`);
  console.log(res.data);
  return res.data;
}