"use client";
import Salgsprofil from "@/components/organisms/minSide/salgsprofil/Salgsprofil";
import { UserQueries } from "@/reactQuery/UserQueryFactory";
import { UserMethods } from "@/utils/utils";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  const { data: user } = useSuspenseQuery(UserQueries.detail(id));
  console.log(user);
  return (
    <div>
      <Salgsprofil user={user} />
    </div>
  );
};

export default Page;
