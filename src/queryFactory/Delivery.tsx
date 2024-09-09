import { queryOptions } from "@tanstack/react-query";
import { Delivery, User, UserBackend } from "@/utils/types";
import {
  getData,
  getDataFetch,
  getPublicData,
  postData,
  postPublicData,
  postPublicEmptyData,
  putData,
  putDataFetch,
} from "./Utils";
import {
  incrementUserViews,
  updateDelivery,
} from "@/serverActions/ServerActions";
import { get } from "http";

export const UserQueries = {
  all: () => ["users"],
  //   detail: (id: any) =>
  //     queryOptions({
  //       queryKey: [...UserQueries.all(), id],
  //       queryFn: () => DeliveryMethods.getById(id),
  //       throwOnError: true,
  //     }),
  //   me: (token: any) =>
  //     queryOptions({
  //       queryKey: [...UserQueries.all(), "me"],
  //       queryFn: () => DeliveryMethods.getMe(token),
  //       throwOnError: true,
  //     }),
};

export const DeliveryMethods = {
  createDelivery: async (data: any, token: any) => {
    return postData(data, "/deliveries", token);
  },
  updateDelivery: async (data: any, id: any, token: any) => {
    return putData(data, `/deliveries/${id}`, token);
  },
  getDelivery: async (id: any, token: any): Promise<Delivery> => {
    return getData(
      `/deliveries/${id}?populate[products][populate][0]=image&populate[user]=username`,
      token,
    );
  },
  //   /products?populate[category][populate]=category_type
  getDeliveries: async (token: any): Promise<Delivery[]> => {
    return getData("/deliveries?populate=*", token);
  },
};
