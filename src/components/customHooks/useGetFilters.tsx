import { FilterQueries } from "@/queryFactory/Filter";
import { useQuery } from "@tanstack/react-query";

const useGetFilters = () => {
  const { data: ColorsData } = useQuery(FilterQueries.colors());
  const { data: TagsData } = useQuery(FilterQueries.tags());
  const { data: CategoryData } = useQuery(FilterQueries.categories());
  const { data: MaterialsData } = useQuery(FilterQueries.materials());
  const { data: SizesData } = useQuery(FilterQueries.sizes());
  const { data: SexData } = useQuery(FilterQueries.sexes());
  const { data: CategoryTypesData } = useQuery(FilterQueries.categoryTypes());
  const { data: DefectsData } = useQuery(FilterQueries.defects());

  return {
    ColorsData,
    TagsData,
    CategoryData,
    MaterialsData,
    SizesData,
    SexData,
    CategoryTypesData,
    DefectsData,
  };
};

export default useGetFilters;
