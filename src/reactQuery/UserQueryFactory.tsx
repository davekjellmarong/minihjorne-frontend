import { queryOptions } from "@tanstack/react-query";

import { User, UserBackend } from "@/utils/types";
import { getAuthData, getPublicData, putData } from "./Utils";
import { postAuthRequest } from "@/utils/utils";

export const UserQueries = {
  all: () => ["users"],
  detail: (id: any) =>
    queryOptions({
      queryKey: [...UserQueries.all(), id],
      queryFn: () => UserMethods.getById(id),
    }),
  me: (token: any) =>
    queryOptions({
      queryKey: ["me"],
      queryFn: () => UserMethods.getMe(token),
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
    return getAuthData("/users/me?populate=*", token);
  },
  uploadImages: async (data: any, token: any) => {
    return postAuthRequest(data, "/upload", token);
  },
};
