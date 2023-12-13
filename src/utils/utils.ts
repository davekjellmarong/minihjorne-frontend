import axios from "axios";
import { apiUrl } from "@/utils/constants";
export const registerUser = async (values: any) => {
  const url = apiUrl + "/auth/local/register";
  return axios
    .post(url, values)
    .then((response) => {
      // Handle success.
      console.log("Well done!");
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);
      return response.data;
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
      return error;
    });
};
export const loginUser = async (values: any) => {
  const url = apiUrl + "/auth/local";

  return axios
    .post(url, values)
    .then((response) => {
      // Handle success.
      console.log("Well done!");
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);
      return response.data;
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
      return error;
    });
};
export const postRequest = async (values: any, endpoint: string) => {
  const url = apiUrl + endpoint;

  return axios
    .post(url, values)
    .then((response) => {
      // Handle success.
      console.log("Well done!");
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);
      return response.data;
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
      return error;
    });
};
export const putRequest = async (values: any, endpoint: string) => {
  const url = apiUrl + endpoint;

  return axios
    .put(url, values)
    .then((response) => {
      // Handle success.
      console.log("Well done!");
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);
      return response.data;
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
      return error;
    });
};

export const fetchPublicData = async (query: string) => {
  try {
    const url = apiUrl + query;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const fetchAuthData = async (query: string, token: string) => {
  try {
    const url = apiUrl + query;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchProductsFiltered = async (query: string) => {
  let data;
  if (query?.length > 0) {
    console.log("query");
    data = await fetchPublicData("/products?populate=*" + query);
  } else {
    console.log("product");
    data = await fetchPublicData("/products?populate=*");
  }
  // const data = await fetchPublicData(
  //   "/products?populate=*&filters[colors][name][$eq]=Gul"
  // );
  return data;
};
export const fetchProducts = async () => {
  return fetchPublicData("/products?populate=*");
};
export const fetchColors = async () => {
  return fetchPublicData("/colors");
};
export const fetchTags = async () => {
  return fetchPublicData("/tags");
};
export const fetchSizes = async () => {
  return fetchPublicData("/sizes");
};
export const fetchMaterials = async () => {
  return fetchPublicData("/materials");
};
export const fetchCategories = async () => {
  return fetchPublicData("/categories");
};

export const UserMethods = {
  getAll: async () => {
    return fetchPublicData("/users");
  },
  getById: async (id: any) => {
    return fetchPublicData(`/users/${id}`);
  },
  put: async (values: any, id: any) => {
    return putRequest(values, `/users/${id}`);
  },
  getMe: async (token: any) => {
    return fetchAuthData("/users/me", token);
  },
};
export const ProductsMethods = {
  get: async () => {
    return fetchPublicData("/products?populate=*");
  },
  getByUserId: async (id: any) => {
    return fetchPublicData(`/products?populate=*&filters[user][id][$eq]=${id}`);
  },
  post: async (data: any) => {
    return postRequest(data, "/products");
  },
};
export const uploadImageFile = async (formData: any) => {
  return postRequest(formData, "/upload");
};
