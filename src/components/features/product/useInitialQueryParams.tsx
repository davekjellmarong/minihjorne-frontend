import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useInitialQueryParams = () => {
  const searchParams = useSearchParams();
  const [filterQuery, setFilterQuery] = useState("");
  const router = useRouter();
  // useEffect(() => {
  //   const current = new URLSearchParams(Array.from(searchParams.entries()));
  //   const pageParam = current.get("pagination[page]");
  //   if (pageParam) {
  //     setFilterQuery("&" + current.toString());
  //   } else if (current.toString().length > 0) {
  //     setFilterQuery("&" + current.toString() + "&pagination[page]=1");
  //   } else {
  //     current.set("pagination[page]", "1");
  //     window.history.pushState(null, "", `?${current.toString()}`);
  //     setFilterQuery("?&pagination[page]=1");
  //   }
  // }, [filterQuery]);
  return { filterQuery, setFilterQuery };
};

export default useInitialQueryParams;
