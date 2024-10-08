import axios from "axios";
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchData = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error Posting data:", error);
    throw error;
  }
};

export const putData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error Putting data:", error);
    throw error;
  }
};
export const deleteData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.delete(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error Putting data:", error);
    throw error;
  }
};