import React, { useEffect, useState } from "react";
import Filter from "./Fillter";
import useGetFilters from "@/components/customHooks/useGetFilters";
import { SlidersHorizontal, X } from "@phosphor-icons/react";
import FilterDialog from "./FilterDialog";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { queryTemplates } from "@/utils/constants";

interface FiltersProps {
  setFilterQuery: any;
  filterQuery: string;
  setSelectedFilters: (value: string[]) => void;
  setCheckboxStates: (value: any) => void;
  checkboxStates: any;
}
const Filters = ({
  setFilterQuery,
  filterQuery,
  setSelectedFilters,
  setCheckboxStates,
  checkboxStates,
}: FiltersProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [
    TagsData,
    ColorsData,
    SizesData,
    CategoryData,
    MaterialsData,
    SexData,
    colorFilter,
    setColorFilter,
    sizeFilter,
    setSizeFilter,
    tagFilter,
    setTagFilter,
    materialFilter,
    setMaterialFilter,
    categoryFilter,
    setCategoryFilter,
    sexFilter,
    setSexFilter,
  ] = useGetFilters();
  const handleFilterFetch = () => {
    const colorQuery = colorFilter
      .map((item: any) => {
        return item.query;
      })
      .join("");
    const sizeQuery = sizeFilter
      .map((item: any) => {
        return item.query;
      })
      .join("");
    const tagQuery = tagFilter
      .map((item: any) => {
        return item.query;
      })
      .join("");
    const materialQuery = materialFilter
      .map((item: any) => {
        return item.query;
      })
      .join("");
    const categoryQuery = categoryFilter
      .map((item: any) => {
        return item.query;
      })
      .join("");
    const sexQuery = sexFilter
      .map((item: any) => {
        return item.query;
      })
      .join("");
    setFilterQuery(
      colorQuery +
        tagQuery +
        sizeQuery +
        materialQuery +
        categoryQuery +
        sexQuery,
    );
    setSelectedFilters([
      ...colorFilter.map((item: any) => item.name),
      ...sizeFilter.map((item: any) => item.name),
      ...tagFilter.map((item: any) => item.name),
      ...materialFilter.map((item: any) => item.name),
      ...categoryFilter.map((item: any) => item.name),
      ...sexFilter.map((item: any) => item.name),
    ]);
    const queryParams = [
      ...colorFilter.map((item: any) => item.queryParam),
      ...sizeFilter.map((item: any) => item.queryParam),
      ...tagFilter.map((item: any) => item.queryParam),
      ...materialFilter.map((item: any) => item.queryParam),
      ...categoryFilter.map((item: any) => item.queryParam),
      ...sexFilter.map((item: any) => item.queryParam),
    ].join("&");
    // router.push(`${pathname}?${queryParams}`);
    router.push(
      `${pathname}?${
        colorQuery +
        tagQuery +
        sizeQuery +
        materialQuery +
        categoryQuery +
        sexQuery
      }`,
    );
  };
  const FilterProps = {
    setCheckboxStates,
    checkboxStates,
    setSelectedFilters,
  };
  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    const path = current.toString();
    if (path.length > 0) {
      setFilterQuery("&" + path);
    }
  }, []);
  return (
    <div className="  relative flex max-h-screen flex-col  overflow-y-scroll">
      <div className="flex justify-between gap-4">
        <button
          onClick={() => {
            setOpen(true);
          }}
          className=" flex items-center rounded border border-gray-300 p-2 px-4 sm:hover:bg-gray-200"
        >
          <SlidersHorizontal size={24} weight="thin" />
          <p className="">Filter</p>
        </button>
      </div>
      <FilterDialog open={open} setOpen={setOpen}>
        <div className={`relative flex h-screen max-h-screen flex-col `}>
          <div className="flex justify-between border-b border-b-gray-300 px-6  py-6">
            <p className="text-lg font-bold ">Filtrer</p>
            <div
              onClick={() => {
                setOpen(false);
              }}
              className="cursor-pointer"
            >
              <X size={28} />
            </div>
          </div>
          <div className="grow ">
            <Filter
              {...FilterProps}
              data={SexData}
              property="name"
              label="Kjønn"
              setFilter={setSexFilter}
              filter={sexFilter}
              queryTemplate={queryTemplates.sexQueryTemplate}
            />
            <Filter
              {...FilterProps}
              data={CategoryData}
              property="name"
              label="Kategori"
              setFilter={setCategoryFilter}
              filter={categoryFilter}
              queryTemplate={queryTemplates.categoryQueryTemplate}
            />
            <Filter
              {...FilterProps}
              data={SizesData}
              property="number"
              label="Størrelse"
              setFilter={setSizeFilter}
              filter={sizeFilter}
              queryTemplate={queryTemplates.sizeQueryTemplate}
            />
            <Filter
              {...FilterProps}
              data={TagsData}
              property="name"
              label="Tags"
              setFilter={setTagFilter}
              filter={tagFilter}
              queryTemplate={queryTemplates.tagQueryTemplate}
            />
            <Filter
              {...FilterProps}
              data={ColorsData}
              property="name"
              label="Farger"
              setFilter={setColorFilter}
              filter={colorFilter}
              queryTemplate={queryTemplates.colorQueryTemplate}
            />
            <Filter
              {...FilterProps}
              data={MaterialsData}
              property="name"
              label="Stoff"
              setFilter={setMaterialFilter}
              filter={materialFilter}
              queryTemplate={queryTemplates.materialQueryTemplate}
            />
          </div>

          <div className="sticky bottom-0 flex justify-between  bg-gray-100 px-6 shadow-inner">
            <button
              className=" my-4 flex items-center rounded-md border-2 border-red-300 p-2 px-4  sm:hover:bg-gray-700"
              onClick={() => {
                setCheckboxStates({});
                setFilterQuery("");
                setSelectedFilters([]);
                setColorFilter([]);
                setSizeFilter([]);
                setTagFilter([]);
                setMaterialFilter([]);
                setCategoryFilter([]);
              }}
            >
              Tøm alle filtre
            </button>
            <button
              className="sticky top-0 m-4 block rounded-md bg-gray-500 p-2 px-4 text-white sm:hover:bg-gray-700"
              onClick={() => {
                handleFilterFetch();
                setOpen(false);
                // router.push(`/produkter?${filterQuery}`);
              }}
            >
              Bruk filter
            </button>
          </div>
        </div>
      </FilterDialog>
    </div>
  );
};

export default Filters;
