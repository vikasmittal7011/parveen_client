import axios from "axios";

const API = process.env.REACT_APP_URL;

export const createCategory = async (category) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        API + "category",
        { ...category },
        { withCredentials: true }
      );
      resolve({ data: response.data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
};

export const getCategories = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(API + "category", {
        withCredentials: true,
      });
      resolve({ data: response.data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
};

export const getCategoryById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(API + `category/${id}`, {
        withCredentials: true,
      });
      resolve({ data: response.data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
};
