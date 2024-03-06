import { queryOptions } from "@tanstack/react-query";

import { apiUrl } from "@/utils/serverUtils";
import {
  Category,
  Color,
  Material,
  Product,
  Sex,
  Size,
  Tag,
  User,
  UserBackend,
} from "@/utils/types";
import { getPublicData } from "./Utils";
import { fetchColors } from "@/utils/utils";

export const FilterQueries = {
  colors: () =>
    queryOptions({
      queryKey: ["colors"],
      queryFn: () => FilterMethods.getColors(),
    }),
  materials: () =>
    queryOptions({
      queryKey: ["materials"],
      queryFn: () => FilterMethods.getMaterials(),
    }),
  sizes: () =>
    queryOptions({
      queryKey: ["sizes"],
      queryFn: () => FilterMethods.getSizes(),
    }),
  tags: () =>
    queryOptions({
      queryKey: ["tags"],
      queryFn: () => FilterMethods.getTags(),
    }),
  categories: () =>
    queryOptions({
      queryKey: ["categories"],
      queryFn: () => FilterMethods.getCategories(),
    }),
};

export const FilterMethods = {
  getColors: async (): Promise<Color[]> => {
    return getPublicData("/colors");
  },
  getMaterials: async (): Promise<Material[]> => {
    return getPublicData("/materials");
  },
  getSizes: async (): Promise<Size[]> => {
    return getPublicData("/sizes");
  },
  getTags: async (): Promise<Tag[]> => {
    return getPublicData("/tags");
  },
  getCategories: async (): Promise<Category[]> => {
    return getPublicData("/categories");
  },
};
