import {
  ProductsMethods,
  fetchCategories,
  fetchColors,
  fetchMaterials,
  fetchSizes,
  fetchTags,
} from "@/utils/utils";
import { queryOptions } from "@tanstack/react-query";

export function productByIdOption(id: number | undefined) {
  return queryOptions({
    queryKey: ["products", id],
    queryFn: async () => {
      return ProductsMethods.getByUserId(id);
    },
    enabled: !!id,
  });
}

export function getColorOption() {
  return queryOptions({
    queryKey: ["colors"],
    queryFn: fetchColors,
  });
}
export function getSizesOption() {
  return queryOptions({
    queryKey: ["sizes"],
    queryFn: fetchSizes,
  });
}
export function getCategoryOption() {
  return queryOptions({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
}
export function getMaterialsOption() {
  return queryOptions({
    queryKey: ["materials"],
    queryFn: fetchMaterials,
  });
}
export function getTagsOption() {
  return queryOptions({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });
}
