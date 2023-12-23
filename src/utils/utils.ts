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
export const fetchPublicDataParams = async (query: string) => {
  try {
    const idsToFind = [157, 158, 156, 155, 154, 153, 152];

    const params = {
      params: {
        filters: {
          id: { $in: idsToFind },
        },
      },
    };
    const url = apiUrl + query;
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const getAuthData = async (query: string, token: string) => {
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
export const postAuthRequest = async (
  values: any,
  endpoint: string,
  token: string
) => {
  try {
    const url = apiUrl + endpoint;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.post(url, values, { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const putAuthRequest = async (
  values: any,
  endpoint: string,
  token: string
) => {
  try {
    const url = apiUrl + endpoint;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.put(url, values, { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const fetchProductsFiltered = async (query: string) => {
  let data;
  if (query?.length > 0) {
    data = await fetchPublicData(
      "/products?populate=*&filters[sold][$eq]=false" + query
    );
  } else {
    data = await fetchPublicData(
      "/products?populate=*&filters[sold][$eq]=false"
    );
  }
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
  return fetchPublicData("/categories?sort=order:asc");
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
    return getAuthData("/users/me", token);
  },
};
export const ProductsMethods = {
  get: async () => {
    return fetchPublicData("/products?populate=*&filters[sold][$eq]=false");
  },
  getById: async (id: any) => {
    return fetchPublicData(`/products/${id}?populate=*`);
  },
  getAndSold: async () => {
    return fetchPublicData("/products?populate=*");
  },
  getByUserId: async (id: any) => {
    return fetchPublicData(
      `/products?populate=*&filters[sold][$eq]=false&filters[user][id][$eq]=${id}`
    );
  },
  getByOrderId: async (id: any, token: any) => {
    return getAuthData(
      `/products?populate=*&filters[order][id][$eq]=${id}`,
      token
    );
  },
  getInactive: async (id: any, token: any) => {
    return getAuthData(`/product/inactiv`, token);
  },
  getByMultipleProductIds: async () => {
    return fetchPublicDataParams("/products?populate=*");
  },
  getsome: async () => {
    const idsToFind = [157, 158, 156, 155, 154, 153, 152];

    return fetchPublicData(`/products?filters[id][$in]=[${idsToFind}]`);
  },
  post: async (data: any, token: any) => {
    return postAuthRequest(data, "/products", token);
  },
};
export const uploadImageFile = async (formData: any, token: any) => {
  return postAuthRequest(formData, "/upload", token);
};
export const OrderMethods = {
  post: async (data: any, token: any) => {
    return postAuthRequest(data, "/orders", token);
  },
  getByUserId: async (id: any, token: any) => {
    return getAuthData(
      `/orders?populate=*&filters[user][id][$eq]=${id}`,
      token
    );
  },
  getById: async (id: any, token: any) => {
    return getAuthData(`/orders/${id}?populate=*`, token);
  },
};
export const PaymentMethods = {
  post: async (data: any, token: any) => {
    return postAuthRequest(data, "/payments", token);
  },
};
