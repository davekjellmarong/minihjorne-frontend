import { queryOptions } from "@tanstack/react-query";

import { apiUrl } from "@/utils/serverUtils";
import { Product, User, UserBackend } from "@/utils/types";
import { getPublicData } from "./Utils";

export const AuthQueries = {
  all: () => ["jwt"],
  jwt: () =>
    queryOptions({
      queryKey: [...AuthQueries.all()],
    }),
};
