"use client";

import Salgsprofil from "@/app/min-side/selge/salgsprofil/Salgsprofil";
import { UserMethods } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const Page = () => {
  const { name } = useParams();

  const { data: user } = useQuery({
    queryKey: ["user", name],
    queryFn: () => {
      return UserMethods.getByUsername(name);
    },
  });
  if (user)
    return (
      <div>
        <Salgsprofil user={user[0]} />
      </div>
    );
};

export default Page;
