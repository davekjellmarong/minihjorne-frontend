import { queryOptions } from "@tanstack/react-query";

export const AuthQueries = {
  all: () => ["jwt"],
  jwt: () =>
    queryOptions({
      queryKey: [...AuthQueries.all()],
    }),
};
