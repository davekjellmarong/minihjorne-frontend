import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  pageCount: number | undefined;
  setFilterQuery: (filterQuery: string) => void;
}
const Pagination = ({
  page,
  setPage,
  pageCount,
  setFilterQuery,
}: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const nextButtonDisabled = pageCount === undefined || pageCount === page;
  const prevButtonDisabled = page === undefined || page === 1;
  return (
    <div className="flex gap-8">
      <button
        className={`flex gap-2 text-sm ${prevButtonDisabled ? "text-gray-400" : ""}`}
        disabled={prevButtonDisabled}
        onClick={() => {
          const params = new URLSearchParams(searchParams.toString());
          params.set("pagination[page]", String(page - 1));
          window.history.pushState(null, "", `?${params.toString()}`);
          setPage(page - 1);
          // setFilterQuery(`?${params.toString()}`);
          // router.push(`${window.location.pathname}?`);
        }}
      >
        <ArrowLeft size={20} />
        <p>Forrige</p>
      </button>
      <button
        className={`flex gap-2 text-sm ${nextButtonDisabled ? "text-gray-400" : ""}`}
        disabled={nextButtonDisabled}
        onClick={() => {
          const params = new URLSearchParams(searchParams.toString());
          params.set("pagination[page]", String(page + 1));
          window.history.pushState(null, "", `?${params.toString()}`);
          setPage(page + 1);
          // setFilterQuery(`?${params.toString()}`);
          // router.push(`${window.location.pathname}?page=${page + 1}`);
        }}
      >
        <p>Neste</p>
        <ArrowRight size={20} />
      </button>
    </div>
    // <div aria-label="Page navigation example">
    //   <ul className="inline-flex -space-x-px text-sm">
    //     <li>
    //       <button
    //         disabled={page === 1}
    //         onClick={() => {
    //           setPage(page - 1);
    //         }}
    //         className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //       >
    //         Previous
    //       </button>
    //     </li>
    //     {/* {pageCount &&
    //       Array.from({ length: pageCount }, (_, index) => (
    //         <li key={index}>
    //           <button
    //             className={`flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
    //               page === index + 1 ? "bg-blue-50 text-blue-600" : ""
    //             }`}
    //             onClick={() => {
    //               setPage(index + 1);
    //             }}
    //           >
    //             {index + 1}
    //           </button>
    //         </li>
    //       ))} */}

    //     {/* <li>
    //       <button className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    //         1
    //       </button>
    //     </li>
    //     <li>
    //       <a
    //         aria-current="page"
    //         className="flex h-8 items-center justify-center border border-gray-300 bg-blue-50 px-3 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
    //       >
    //         3
    //       </a>
    //     </li> */}
    //     <li>
    //       <button
    //         disabled={pageCount === page}
    //         onClick={() => {
    //           setPage(page + 1);
    //         }}
    //         className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //       >
    //         Next
    //       </button>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Pagination;
