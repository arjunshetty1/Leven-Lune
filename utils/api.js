import { API_TOKEN, API_URL, API_URL2 } from "./utils";
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

// -----------------------

const options2 = {
  headers: {
    Authorization: "Bearer " + API_TOKEN,
  },
};

export const CollectionFetch = async () => {
  try {
    const response = await axios.get(API_URL2, options2);
    return response.data;
  } catch (error) {
    console.log("Error occured while fetching collections", error);
  }
};

//---------------------------

const options3 = {
  headers: {
    Authorization: "Bearer " + API_TOKEN,
  },
};

export const CollectionSpecificFetch = async (slug) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:1337/api/products?populate=*&[filters][categories][name][$eq]=${slug}`,
      options3
    );
    return response.data;
  } catch (error) {
    console.log("Error occured while fetching collections", error);
  }
};
