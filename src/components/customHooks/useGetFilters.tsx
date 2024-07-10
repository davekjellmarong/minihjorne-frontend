import { FilterQueries } from "@/reactQuery/FilterQueryFactory";
import { useQuery } from "@tanstack/react-query";

const useGetFilters = () => {
  const { data: ColorsData } = useQuery(FilterQueries.colors());
  const { data: TagsData } = useQuery(FilterQueries.tags());
  const { data: CategoryData } = useQuery(FilterQueries.categories());
  const { data: MaterialsData } = useQuery(FilterQueries.materials());
  const { data: SizesData } = useQuery(FilterQueries.sizes());
  const { data: SexData } = useQuery(FilterQueries.sexes());

  return {
    ColorsData,
    TagsData,
    CategoryData,
    MaterialsData,
    SizesData,
    SexData,
  };
};

export default useGetFilters;
