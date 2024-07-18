"use client";
import Salgsprofil from "@/components/features/minSide/salgsprofil/Salgsprofil";
import { UserQueries } from "@/reactQuery/UserQueryFactory";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  const { data: user } = useSuspenseQuery(UserQueries.detail(id));
  return (
    <>
      <Salgsprofil user={user} />
    </>
  );
};

export default Page;
