import { queryOptions } from "@tanstack/react-query";
import { User, UserBackend } from "@/utils/types";
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
import { incrementUserViews } from "@/serverActions/ServerActions";

export const UserQueries = {
  all: () => ["users"],
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
  getByUsername: async (username: any): Promise<User[]> => {
    return getPublicData(`/users/?filters[username][$eq]=${username}`);
  },
  getById: async (id: any): Promise<UserBackend> => {
    return getPublicData(`/users/${id}`);
  },
  getMe: async (token: any): Promise<UserBackend> => {
    return getData("/users/me?populate=*", token);
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
};
