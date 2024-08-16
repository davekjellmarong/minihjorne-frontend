import { FilterQueries, FilterQueriesCached } from "@/queryFactory/Filter";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";

const useGetFiltersSynchronous = () => {
  const { data: category } = useSuspenseQuery(FilterQueriesCached.categories());
  const { data: colors } = useSuspenseQuery(FilterQueriesCached.colors());
  const { data: size } = useSuspenseQuery(FilterQueriesCached.sizes());
  const { data: tags } = useSuspenseQuery(FilterQueriesCached.tags());
  const { data: materials } = useSuspenseQuery(FilterQueriesCached.materials());
  const { data: sex } = useSuspenseQuery(FilterQueriesCached.sexes());
  const { data: defects } = useSuspenseQuery(FilterQueriesCached.defects());
  const { data: category_type } = useSuspenseQuery(
    FilterQueriesCached.categoryTypes(),
  );
  const { data: state } = useSuspenseQuery(FilterQueriesCached.states());
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
