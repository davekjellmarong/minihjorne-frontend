import { FilterQueries } from "@/queryFactory/Filter";
import { useQueryClient } from "@tanstack/react-query";

const useGetFiltersSynchronous = () => {
  const queryClient = useQueryClient();

  const category = queryClient.getQueryData(
    FilterQueries.categories().queryKey,
  );
  const colors = queryClient.getQueryData(FilterQueries.colors().queryKey);
  const size = queryClient.getQueryData(FilterQueries.sizes().queryKey);
  const tags = queryClient.getQueryData(FilterQueries.tags().queryKey);
  const materials = queryClient.getQueryData(
    FilterQueries.materials().queryKey,
  );
  const sex = queryClient.getQueryData(FilterQueries.sexes().queryKey);
  const defects = queryClient.getQueryData(FilterQueries.defects().queryKey);
  const category_type = queryClient.getQueryData(
    FilterQueries.categoryTypes().queryKey,
  );
  const state = queryClient.getQueryData(FilterQueries.states().queryKey);
  const allFilters: any = {
    category,
    colors,
    size,
    tags,
    materials,
    sex,
    defects,
    category_type,
    state,
  };
  return {
    category,
    colors,
    size,
    tags,
    materials,
    sex,
    defects,
    category_type,
    state,
    allFilters,
  };
};

export default useGetFiltersSynchronous;
