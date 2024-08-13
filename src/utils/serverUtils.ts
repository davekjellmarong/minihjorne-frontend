import { FeatureFlagServerSideMethods } from "@/queryFactory/FeatureFlag";
import { Product, UserBackend } from "./types";
import axios from "axios";

export const isFeatureFlagActive = async (flagId: number, token: any) => {
  const data = await FeatureFlagServerSideMethods.get(token);
  const featureFlag = data.find((flag) => flag.id === flagId);
  if (!featureFlag) {
    return false;
  }
  return featureFlag.attributes.active;
};

// getMe: async (token: any): Promise<UserBackend> => {
//   return getData("/users/me?populate=*", token);
export const getMe = async (token: any): Promise<UserBackend> => {
  return getData("/users/me?populate=role", token);
};
export const fetchProductsFiltered = async (query: string) => {
  const baseUrl = apiUrl + "/products?populate=*&filters[sold][$eq]=false";
  const url = query?.length > 0 ? baseUrl + query : baseUrl;
  const data = await axios(url);
  return data;
};

export const getData = async (query: string, token: string) => {
  try {
    const url = apiUrl + query;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios(url, { headers });
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

export const putData = async (data: any, query: string, jwt: string) => {
  try {
    const url = apiUrl + query;
    const response = await fetch(url, {
      method: "PUT",

      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getPublicData = async (query: string) => {
  try {
    const url = apiUrl + query;
    const response = await fetch(url);
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
export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
