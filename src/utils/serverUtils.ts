import { FeatureFlagServerSideMethods } from "@/queryFactory/FeatureFlag";
import { Delivery, UserBackend } from "./types";
import axios from "axios";
import { UserStatus } from "./Enums";

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

const hasRegisteredProducts = (delivery: Delivery) => {
  return delivery.attributes.products.data.length > 0;
  // return (
  //   user.products.filter((product) => {
  //     return !product.active && !product.sold;
  //   }).length > 0
  // );
};

const hasSalesProfile = (user: UserBackend) => {
  return user.header?.length > 4 && user.description?.length > 5;
};

const hasDelivery = (delivery: Delivery) => {
  if (delivery.attributes.delivery_type.data) {
    return true;
  }
  // return (
  //   user.deliveries.filter(
  //     (delivery) => delivery.inProgress && delivery.delivery_type,
  //   ).length === 1
  // );
};

const hasAutoRegistration = (user: UserBackend) => {
  return (
    user.products.filter((product) => !product.active && !product.sold)
      ?.length > 0
  );
};

export const getSteps = (user: UserBackend, delivery: Delivery | false) => {
  let steps;
  if (user.user_status.id === UserStatus.Member)
    return {
      steps: [],
      currentStep: {
        title: "Salgs metode",
        isCompleted: false,
        nextStepUrl: "/min-side/selge/salgs-metode",
        stepNumber: 1,
        menuId: 7,
        helpUrl: "/om-oss/salgs-metode",
      },
    };
  else if (user.user_status.id === UserStatus.Seller || delivery === false) {
    return {
      steps: [],
      currentStep: {
        menuId: 0,
        stepNumber: 0,
        helpUrl: "",
      },
    };
  } else if (user.user_status.id === UserStatus.Selvregistrering) {
    steps = [
      {
        title: "Last opp klær",
        isCompleted: hasRegisteredProducts(delivery),
        nextStepUrl: "/min-side/selge/last-opp",
        stepNumber: 1,
        menuId: 1,
        helpUrl: "/om-oss/registrering",
      },
      {
        title: "Salgsprofil",
        isCompleted: hasSalesProfile(user),
        nextStepUrl: "/min-side/selge/salgsprofil",
        stepNumber: 2,
        menuId: 3,
        helpUrl: "/om-oss/salgsprofil",
      },
      {
        title: "Leverings metode",
        isCompleted: hasDelivery(delivery),
        nextStepUrl: "/min-side/selge/leverings-metode",
        stepNumber: 3,
        menuId: 4,
        helpUrl: "/om-oss/levering",
      },
    ];
  } else if (user.user_status.id === UserStatus.FullService) {
    steps = [
      {
        title: "Leverings metode",
        isCompleted: hasDelivery(delivery),
        nextStepUrl: "/min-side/selge/leverings-metode",
        stepNumber: 1,
        menuId: 4,
        helpUrl: "/om-oss/levering",
      },
      {
        title: "Salgsprofil",
        isCompleted: hasSalesProfile(user),
        nextStepUrl: "/min-side/selge/salgsprofil",
        stepNumber: 2,
        menuId: 3,
        helpUrl: "/om-oss/salgsprofil",
      },
      // {
      //   title: "Auto registrering",
      //   isCompleted: hasAutoRegistration(user),
      //   nextStepUrl: "/min-side/selge/auto-registrering",
      //   stepNumber: 3,
      //   menuId: 8,
      //   helpUrl: "/om-oss/auto-registrering",
      // },
    ];
  } else {
    throw new Error("Invalid user status");
  }

  const currentStep = steps.filter((step) => !step.isCompleted)[0];
  return { steps, currentStep };
};

// todo - mergre with getSteps
// export const getSelvregistreringSteps = (user: UserBackend) => {
//   const hasRegisteredProducts =
//     user.products.filter((product) => {
//       return !product.active && !product.sold;
//     }).length > 0;
//   const hasSalesProfile =
//     user.header?.length > 4 && user.description?.length > 5;
//   const hasDelivery =
//     user.products.filter((product) => !product.active)?.length > 0 &&
//     hasSalesProfile;

//   const steps = [
//     {
//       title: "Last opp klær",
//       isCompleted: hasRegisteredProducts,
//       nextStepUrl: "/min-side/selge/last-opp",
//       stepNumber: 1,
//       menuId: 1,
//       helpUrl: "/om-oss/registrering",
//     },
//     {
//       title: "Salgsprofil",
//       isCompleted: hasSalesProfile,
//       nextStepUrl: "/min-side/selge/salgsprofil",
//       stepNumber: 2,
//       menuId: 3,
//       helpUrl: "/om-oss/salgsprofil",
//     },
//     {
//       title: "Levering",
//       isCompleted: hasDelivery,
//       nextStepUrl: "/min-side/selge/leverings-metode",
//       stepNumber: 3,
//       menuId: 4,
//       helpUrl: "/om-oss/levering",
//     },
//   ];

//   const currentStep = steps.filter((step) => !step.isCompleted)[0];
//   return { steps, currentStep };
// };
// todo - split up utils into folder for each type of utils, like registreringsUtils, onboardingUtils, etc.
// export const getFullServiceSteps = (user: UserBackend) => {
//   // todo - create reusable functions for variables under
//   const hasSalesProfile =
//     user.header?.length > 4 && user.description?.length > 5;
//   const hasAutoRegistration =
//     user.products.filter((product) => !product.active && !product.sold)
//       ?.length > 0;
//   const hasDelivery =
//     user.products.filter((product) => !product.active)?.length > 0 &&
//     hasSalesProfile;

//   const steps = [
//     {
//       title: "Levering",
//       isCompleted: hasDelivery,
//       nextStepUrl: "/min-side/selge/leverings-metode",
//       stepNumber: 1,
//       menuId: 4,
//       helpUrl: "/om-oss/levering",
//     },
//     {
//       title: "Salgsprofil",
//       isCompleted: hasSalesProfile,
//       nextStepUrl: "/min-side/selge/salgsprofil",
//       stepNumber: 2,
//       menuId: 3,
//       helpUrl: "/om-oss/salgsprofil",
//     },
//     {
//       title: "Auto registrering",
//       isCompleted: hasAutoRegistration,
//       nextStepUrl: "/min-side/selge/auto-registrering",
//       stepNumber: 3,
//       menuId: 2,
//       helpUrl: "/om-oss/auto-registrering",
//     },
//   ];

//   const currentStep = steps.filter((step) => !step.isCompleted)[0];
//   return { steps, currentStep };
// };

export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
