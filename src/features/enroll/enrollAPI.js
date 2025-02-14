import axios from "axios";

const API = process.env.REACT_APP_URL;

export const enrollStudent = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
        const response = await axios.post(
          API + "enroll",
          {
            ...data,
          },
          { withCredentials: true }
        );
        resolve({ success: response.data.success, data });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
};
