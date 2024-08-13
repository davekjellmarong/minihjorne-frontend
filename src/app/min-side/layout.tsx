import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Breadcrumb from "@/components/features/minSide/Breadcrumb";

interface LayoutProps {
  children: any;
}
const Layout = async ({ children }: LayoutProps) => {
  const cookieStore: any = cookies();
  const token = cookieStore.get("Token");
  if (!token || token?.value?.length === 0) {
    redirect("/auth?redirect=/min-side/");
  }

  return (
    <>
      <Breadcrumb />
      {children}
    </>
  );
};

export default Layout;
