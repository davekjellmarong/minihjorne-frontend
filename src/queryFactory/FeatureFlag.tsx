import { queryOptions } from "@tanstack/react-query";
import { getAuthData } from "./Utils";
import { FeatureFlag } from "@/utils/types";

export const FeatureFlagServerSideQueries = {
  all: () => ["featureFlags"],
  getAll: () =>
    queryOptions({
      queryKey: [...FeatureFlagServerSideQueries.all()],
      queryFn: () =>
        FeatureFlagServerSideMethods.get(process.env.FEATURE_FLAG_TOKEN),
    }),
  detail: (id: any) =>
    queryOptions({
      queryKey: [...FeatureFlagServerSideQueries.all(), id],
      queryFn: () =>
        FeatureFlagServerSideMethods.getById(
          id,
          process.env.FEATURE_FLAG_TOKEN,
        ),
    }),
};

export const FeatureFlagServerSideMethods = {
  get: async (secretToken: any): Promise<FeatureFlag[]> => {
    return getAuthData(`/feature-flags`, secretToken);
  },
  getById: async (id: any, secretToken: any): Promise<FeatureFlag> => {
    return getAuthData(`/feature-flags/${id}`, secretToken);
  },
};
