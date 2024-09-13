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
import { get } from "http";

export const UserQueries = {
  all: () => ["users"],
  allUsers: () =>
    queryOptions({
      queryKey: UserQueries.all(),
      queryFn: () => UserMethods.getAll(),
    }),
  detail: (id: any) =>
    queryOptions({
      queryKey: [...UserQueries.all(), id],
      queryFn: () => UserMethods.getById(id),
      throwOnError: true,
    }),
  me: (token: any) =>
    queryOptions({
      queryKey: [...UserQueries.all(), "me"],
      queryFn: () => UserMethods.getMe(token),
      throwOnError: true,
    }),
};

export const UserMethods = {
  getAll: async (): Promise<UserBackend[]> => {
    return getPublicData("/users");
  },
  getByUsername: async (username: any): Promise<User[]> => {
    return getPublicData(`/users/?filters[username][$eq]=${username}`);
  },
  getById: async (id: any): Promise<UserBackend> => {
    return getPublicData(`/users/${id}`);
  },
  getMe: async (token: any): Promise<UserBackend> => {
    return getDataFetch("/users/me?populate=*", token);
  },
  getMeFetch: async (token: any): Promise<UserBackend> => {
    return getDataFetch("/users/me?populate=*", token);
  },
  uploadImages: async (data: any, token: any) => {
    return postData(data, "/upload", token);
  },
  put: async (data: any, id: any, jwt: any) => {
    return putData(data, `/users/${id}`, jwt);
  },
  putFetch: async (data: any, id: any, jwt: any) => {
    return putDataFetch(data, `/users/${id}`, jwt);
  },
  sendResetPasswordMail: async (email: any) => {
    return postPublicData(email, "/auth/forgot-password");
  },
  resetPassword: async (data: {
    code: any;
    password: any;
    passwordConfirmation: any;
  }) => {
    return postPublicData(data, "/auth/reset-password");
  },

  incrementUserView: async (id: number) => {
    return postPublicEmptyData(`/product/view/user/${id}`);
  },
  createDelivery: async (data: any, token: any) => {
    return postData(data, "/deliveries", token);
  },
  updateDelivery: async (data: any, id: any, token: any) => {
    return putData(data, `/deliveries/${id}`, token);
  },
  getDelivery: async (id: any, token: any): Promise<Delivery> => {
    return getData(`/deliveries/${id}?populate=*`, token);
  },
  relateDeliveryProductsToUser: async (
    deliveryId: any,
    userId: any,
    token: any,
  ) => {
    return postData({}, `/delivery/${deliveryId}/relate/${userId}`, token);
  },
  getBankAccountNumber: async (token: any): Promise<string> => {
    return getData(`/user/me/bankAccountNumber`, token);
  },
};
