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
      console.log("double");
      // console.log(response.data.data);
      return response.data.data;
    } else {
      console.log("single");
      // console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getDataFetch = async (query: string, token: string) => {
  try {
    const url = apiUrl + query;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await fetch(url, { headers });
    const data = await response.json();
    if (data?.data) {
      console.log("double");
      // console.log(response.data.data);
      return data.data;
    } else {
      console.log("single");
      // console.log(response.data);
      return data;
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
export const putDataFetch = async (data: any, query: string, token: string) => {
  try {
    const url = apiUrl + query;
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response = await fetch(url, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result?.data) {
      console.log("double");
      // console.log(response.data.data);
      return result.data;
    } else {
      console.log("single");
      // console.log(response.data);
      return result;
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
      return response.data;
    })
    .catch((error) => {
      // Handle error.
      throw error.response.data.error;
    });
};
export const loginUser = async (values: any) => {
  const url = apiUrl + "/auth/local";
  return axios
    .post(url, values)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};
export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
