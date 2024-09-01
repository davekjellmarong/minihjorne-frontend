import { FeatureFlagServerSideMethods } from "@/queryFactory/FeatureFlag";
import { Product, UserBackend } from "./types";
import axios from "axios";
import { set } from "zod";

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

export const getStepsAndCurrentStep = (user: UserBackend) => {
  const hasRegisteredProducts = user.products.length > 0;
  const hasSalesProfile = user.header.length > 4 && user.description.length > 5;
  const hasDelivery =
    user.products.filter((product) => !product.active).length > 0 &&
    hasSalesProfile;

  const steps = [
    {
      title: "Last opp klær",
      isCompleted: hasRegisteredProducts,
      nextStepUrl: "/min-side/selge/last-opp",
      stepNumber: 1,
      menuId: 1,
      helpUrl: "/om-oss/registrering",
    },
    {
      title: "Salgsprofil",
      isCompleted: hasSalesProfile,
      nextStepUrl: "/min-side/selge/salgsprofil",
      stepNumber: 2,
      menuId: 3,
      helpUrl: "/om-oss/salgsprofil",
    },
    {
      title: "Levering",
      isCompleted: hasDelivery,
      nextStepUrl: "/min-side/selge/levering",
      stepNumber: 3,
      menuId: 4,
      helpUrl: "/om-oss/levering",
    },
  ];

  const currentStep = steps.filter((step) => !step.isCompleted)[0];

  return { steps, currentStep };
};
export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
