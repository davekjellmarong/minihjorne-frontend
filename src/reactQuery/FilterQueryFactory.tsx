import { queryOptions } from "@tanstack/react-query";

import { apiUrl } from "@/utils/serverUtils";
import {
  Category,
  Color,
  Defect,
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
  all: () => ["filters"],
  colors: () =>
    queryOptions({
      queryKey: [...FilterQueries.all(), "colors"],
      queryFn: () => FilterMethods.getColors(),
      staleTime: Infinity,
    }),
  materials: () =>
    queryOptions({
      queryKey: [...FilterQueries.all(), "materials"],
      queryFn: () => FilterMethods.getMaterials(),
      staleTime: Infinity,
    }),
  sizes: () =>
    queryOptions({
      queryKey: [...FilterQueries.all(), "sizes"],
      queryFn: () => FilterMethods.getSizes(),
      staleTime: Infinity,
    }),
  tags: () =>
    queryOptions({
      queryKey: [...FilterQueries.all(), "tags"],
      queryFn: () => FilterMethods.getTags(),
      staleTime: Infinity,
    }),
  categories: () =>
    queryOptions({
      queryKey: [...FilterQueries.all(), "categories"],
      queryFn: () => FilterMethods.getCategories(),
      staleTime: Infinity,
    }),
  sexes: () =>
    queryOptions({
      queryKey: [...FilterQueries.all(), "sexes"],
      queryFn: () => FilterMethods.getSexes(),
      staleTime: Infinity,
    }),
  defects: () =>
    queryOptions({
      queryKey: [...FilterQueries.all(), "defects"],
      queryFn: () => FilterMethods.getDefects(),
      staleTime: Infinity,
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
  getSexes: async (): Promise<Sex[]> => {
    return getPublicData("/sexes");
  },
  getDefects: async (): Promise<Defect[]> => {
    return getPublicData("/defects");
  },
};
