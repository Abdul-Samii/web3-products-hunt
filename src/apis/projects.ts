import axios from "axios"
import { baseUrl } from "./baseUrl";

export const getAllProjects = async() => {
  const res = await axios.get(`${baseUrl}project`);
  console.log(res.data);
  return res.data;
}

export const getProject = async(project_id: string) => {
  const res = await axios.get(`${baseUrl}project/${project_id}`);
  console.log(res.data);
  return res.data;
}

export const createProject = async(project_data: any) => {
  const res = await axios.post(`${baseUrl}project`, project_data)
  return res.data;
}

export const getProjectsBySearch = async (searchValue: string) => {
  try {
    const response = await axios.post(`${baseUrl}project/search`, {
        searchValue,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}