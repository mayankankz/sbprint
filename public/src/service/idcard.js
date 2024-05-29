import api from "./axios/api";
import { apiUrl } from "../utils/constant";

export const addTemplate = async (data) => {
  try {
    const response = await api.post(`${apiUrl}/app/idcard`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTemplate = async (id) => {
  try {
    const response = await api.get("/idcard/id?id=" + id, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllTemplate = async () => {
  try {
    const response = await api.get(`/app/idcard`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteTemplate = async (id) => {
  try {
    const response = await api.delete("/idcard?id=" + id, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
