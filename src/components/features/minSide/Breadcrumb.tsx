"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useStore } from "@/stateManagment/ZustandStore";

const Breadcrumb = () => {
  const showNav = useStore((state) => state.showNav);
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);
  // const backgroundColor =
  //   pathname === "/min-side" ? "bg-brand-200" : "bg-white";
  // const textColor =
  //   pathname === "/min-side"
  //     ? "text-black"
  //     : "text-purple-500 sm:hover:text-purple-700";
  return (
    <div className={` p-4 text-gray-500`}>
      <Link href="/" onClick={showNav}>
        <span className={`text-sm italic transition-colors `}>Home</span>
      </Link>
      {pathnames.map((value, index) => {
        if (value === "selge") return null;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <span key={to} className="mx-2">
            {"> "}
            <Link href={to} onClick={showNav}>
              <span className={` text-sm italic  transition-colors `}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </span>
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
