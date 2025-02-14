import axios from "axios";

const API = process.env.REACT_APP_URL;

export const createCourse = async (course) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        API + "course",
        { ...course },
        { withCredentials: true }
      );
      resolve({ data: response.data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
};

export const getCourses = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(API + "course", {
        withCredentials: true,
      });
      resolve({ data: response.data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
};

export const getCourseById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(API + `course/${id}`, {
        withCredentials: true,
      });
      resolve({ data: response.data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
};

export const enrollStudent = async (courseId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.put(
        API + `course/enroll/${courseId}`,
        {},
        { withCredentials: true }
      );
      resolve({ data: response.data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
};
