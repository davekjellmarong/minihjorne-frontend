import { FilterQueries } from "@/queryFactory/Filter";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";

const useGetFiltersSynchronous = () => {
  const { data: category } = useSuspenseQuery(FilterQueries.categories());
  const { data: colors } = useSuspenseQuery(FilterQueries.colors());
  const { data: size } = useSuspenseQuery(FilterQueries.sizes());
  const { data: tags } = useSuspenseQuery(FilterQueries.tags());
  const { data: materials } = useSuspenseQuery(FilterQueries.materials());
  const { data: sex } = useSuspenseQuery(FilterQueries.sexes());
  const { data: defects } = useSuspenseQuery(FilterQueries.defects());
  const { data: category_type } = useSuspenseQuery(
    FilterQueries.categoryTypes(),
  );
  const { data: state } = useSuspenseQuery(FilterQueries.states());
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
