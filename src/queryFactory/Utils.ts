export const getProductsFiltered = async (query: string) => {
  const baseUrl = apiUrl + "/products?populate=*&filters[sold][$eq]=false";
  const url = query?.length > 0 ? baseUrl + query : baseUrl;
  const response = await fetch(url, { cache: "no-cache" });
  const data = await response.json();
  return data;
};

export const getPublicData = async (query: string) => {
  try {
    const url = apiUrl + query;
    const response = await fetch(url, { cache: "no-cache" });
    const data = await response.json();
    if (data?.data) {
      return data.data;
    } else {
      return data;
    }
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
    const response = await fetch(url, { headers, cache: "no-cache" });
    const data = await response.json();
    if (data?.data) {
      return data.data;
    } else {
      return data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const putData = async (query: string, token: string, data: any) => {
  try {
    const url = apiUrl + query;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log(res, "this is the response");
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const deleteData = async (query: string, token: string) => {
  try {
    const url = apiUrl + query;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    console.log(res, "this is the response");
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
