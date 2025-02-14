import axios from "axios";

const API = process.env.REACT_APP_URL;

export const postReview = (review) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        API + "review",
        {
          ...review,
        },
        { withCredentials: true }
      );
      resolve({ success: response.data.success, review });
    } catch (error) {
      reject({ message: error.response.data.message });
    }
  });
};

export const fetchReviews = (id, page) => {
  let queryString = `_page=${page._page}&_limit=${page._limit}`;

  return new Promise(async (resolve, reject) => {
    const response = await axios.get(API + "review/" + id + "?" + queryString);
    const totalReviews = +response.headers.get("X-Total-Count");
    if (response.data.success) {
      resolve({
        data: { reviews: response.data.reviews, totalReviews: +totalReviews },
      });
    } else {
      reject({ message: response.message });
    }
  });
};
