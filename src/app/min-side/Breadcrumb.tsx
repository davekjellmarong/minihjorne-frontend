"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);
  const backgroundColor =
    pathname === "/min-side" ? "bg-brand-200" : "bg-white";
  const textColor =
    pathname === "/min-side"
      ? "text-black"
      : "text-purple-500 hover:text-purple-700";
  return (
    <div className={`p-4 text-gray-500 ${backgroundColor}`}>
      <Link href="/">
        <span className={` text-sm italic  transition-colors ${textColor}`}>
          Home
        </span>
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <span key={to} className="mx-2">
            {"> "}
            <Link href={to}>
              <span
                className={` text-sm italic  transition-colors ${textColor}`}
              >
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
