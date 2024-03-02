"use client";
import Salgsprofil from "@/app/min-side/selge/salgsprofil/Salgsprofil";
import { UserQueries } from "@/queryFactory/UserQueryFactory";
import { UserMethods } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  console.log(id);
  const { data: user } = useQuery(UserQueries.detail(id));
  console.log(user);
  if (user)
    return (
      <div>
        <Salgsprofil user={user} />
      </div>
    );
};

export default Page;
