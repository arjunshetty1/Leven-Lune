import { API_TOKEN, API_URL } from "./utils";
import axios from "axios";

const options = {
  params: { populate: "*" },
  headers: {
    Authorization: "Bearer " + API_TOKEN,
  },
};

export const ProductFetch = async () => {
  try {
    const response = await axios.get(API_URL, options);
    return response.data;
  } catch (error) {
    console.log("Error Occured", error);
  }
};
