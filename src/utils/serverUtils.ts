import { FeatureFlagServerSideMethods } from "@/queryFactory/FeatureFlag";
import {
  Delivery,
  DeliveryBackend,
  Seller,
  SellerBackend,
  SellerGetMe,
  SellerGetMeDelivery,
  UserBackend,
} from "./types";
import axios from "axios";
import { SalgsMetode, UserStatus } from "./Enums";

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

const hasRegisteredProducts = (delivery: SellerGetMeDelivery) => {
  return delivery.products.length > 0;
  // return (
  //   user.products.filter((product) => {
  //     return !product.active && !product.sold;
  //   }).length > 0
  // );
};

const hasSalesProfile = (user: SellerGetMe) => {
  if (!user.seller) return false;
  return user.seller.header?.length > 4 && user.seller.description?.length > 5;
  // return user.seller?.header?.length > 4 && user.description?.length > 5;
};

const hasDelivery = (delivery: SellerGetMeDelivery) => {
  if (delivery.delivery_type) {
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

export const getSteps = (
  user: SellerGetMe,
  currentDelivery: SellerGetMeDelivery | undefined,
) => {
  let steps;
  if (
    !user.seller ||
    (user.seller && currentDelivery && !currentDelivery.sales_method)
  )
    return {
      steps: [],
      currentStep: {
        title: "Salgs metode",
        description: "Velg mellom selvregistrering eller fullservice pakke",
        isCompleted: false,
        nextStepUrl: "/min-side/selge/salgs-metode",
        stepNumber: 1,
        menuId: 7,
        helpUrl: "/om-oss/salgs-metode",
      },
    };
  else if (!currentDelivery) {
    return {
      steps: [],
      currentStep: {
        menuId: 0,
        stepNumber: 0,
        helpUrl: "",
        description: "",
        button: "",
      },
    };
  } else if (
    currentDelivery.sales_method?.id === SalgsMetode.Selvregistrering
  ) {
    steps = [
      {
        title: "Last opp klær",
        description: "Last opp bilder og beskrivelse av dine klær",
        isCompleted: hasRegisteredProducts(currentDelivery),
        nextStepUrl: "/min-side/selge/last-opp",
        stepNumber: 1,
        menuId: 1,
        helpUrl: "/om-oss/registrering",
      },
      {
        title: "Salgsprofil",
        description:
          "Opprett din egen salgsprofil med en overskift og en beskrivelse",
        isCompleted: hasSalesProfile(user),
        nextStepUrl: "/min-side/selge/salgsprofil",
        stepNumber: 2,
        menuId: 3,
        helpUrl: "/om-oss/salgsprofil",
      },
      {
        title: "Leverings metode",
        description: "Lever klærne direkte eller send dem til oss",
        isCompleted: hasDelivery(currentDelivery),
        nextStepUrl: "/min-side/selge/leverings-metode",
        stepNumber: 3,
        menuId: 4,
        helpUrl: "/om-oss/levering",
      },
    ];
  } else if (currentDelivery.sales_method?.id === SalgsMetode.FullService) {
    steps = [
      {
        title: "Leverings metode",
        description: "Lever klærne direkte eller send dem til oss",
        isCompleted: hasDelivery(currentDelivery),
        nextStepUrl: "/min-side/selge/leverings-metode",
        stepNumber: 1,
        menuId: 4,
        helpUrl: "/om-oss/levering",
      },
      {
        title: "Salgsprofil",
        description:
          "Opprett din egen salgsprofil med en overskift og en beskrivelse",
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
