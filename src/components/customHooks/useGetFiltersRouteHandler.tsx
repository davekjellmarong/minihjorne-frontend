import { FilterQueriesCached } from "@/queryFactory/Filter";
import { useSuspenseQuery } from "@tanstack/react-query";

const useGetFiltersRouteHandler = () => {
  const {
    data: {
      colors,
      materials,
      sizes: size,
      categories: category,
      categoryTypes: category_type,
      defects,
      sexes: sex,
      states: state,
      tags,
    },
  } = useSuspenseQuery(FilterQueriesCached.allFilter());
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

export default useGetFiltersRouteHandler;
