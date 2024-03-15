import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useInitialQueryParams = () => {
  const searchParams = useSearchParams();
  const [page, setPage] = useState(1);
  const [filterQuery, setFilterQuery] = useState("");
  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const pageParam = current.get("pagination[page]");
    if (pageParam) {
      setFilterQuery("&" + current.toString());
      setPage(Number(pageParam));
    } else if (current.toString().length > 0) {
      setFilterQuery("&" + current.toString() + "&pagination[page]=1");
    }
  }, [page]);
  return { page, setPage, filterQuery, setFilterQuery };
};

export default useInitialQueryParams;
