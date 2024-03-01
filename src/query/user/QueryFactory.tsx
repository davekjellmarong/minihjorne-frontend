import { queryOptions } from "@tanstack/react-query";

import { apiUrl, fetchPublicData } from "@/utils/serverUtils";
import { Product, User, UserBackend } from "@/utils/types";

export const UserQueries = {
  all: () => ["users"],
  detail: (id: any) =>
    queryOptions({
      queryKey: [...UserQueries.all(), id],
      queryFn: () => UserMethods.getById(id),
    }),
};

export const UserMethods = {
  getByUsername: async (username: any): Promise<User[]> => {
    return fetchPublicData(`/users/?filters[username][$eq]=${username}`);
  },
  getById: async (id: any): Promise<UserBackend> => {
    return fetchPublicData(`/users/${id}`);
  },
};
