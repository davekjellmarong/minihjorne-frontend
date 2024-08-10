import axios from "axios";

export const getProductsFiltered = async (query: string) => {
  const baseUrl =
    apiUrl +
    `/products?pagination[pageSize]=20&sort=createdAt:desc&populate=*&filters[sold][$eq]=false&filters[active][$eq]=true`;
  const url = query?.length > 0 ? baseUrl + "&" + query : baseUrl;
  const data = await axios.get(url);
  return data.data;
};

export const getPublicData = async (query: string) => {
  try {
    const url = apiUrl + query;
    const data = await axios.get(url);
    if (data?.data?.data) {
      return data.data.data;
    } else {
      return data.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const getData = async (query: string, token: string) => {
  try {
    const url = apiUrl + query;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(url, { headers });
    if (response?.data?.data) {
      return response.data.data;
    } else {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const putData = async (data: any, query: string, token: string) => {
  try {
    const url = apiUrl + query;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.put(url, data, { headers });
    if (response?.data?.data) {
      return response.data.data;
    } else {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const postData = async (data: any, query: string, token: string) => {
  try {
    const url = apiUrl + query;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.post(url, data, { headers });
    if (response?.data?.data) {
      return response.data.data;
    } else {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const deleteData = async (query: string, token: string) => {
  try {
    const url = apiUrl + query;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.delete(url, { headers });
    if (response?.data?.data) {
      return response.data.data;
    } else {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const postPublicData = async (data: any, query: string) => {
  try {
    const url = apiUrl + query;
    const res = await axios.post(url, data);
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

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
      throw error.response.data.error;
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
      throw error.response.data.error;
    });
};
export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
