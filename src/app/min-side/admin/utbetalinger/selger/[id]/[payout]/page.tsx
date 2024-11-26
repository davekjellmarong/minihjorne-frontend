// "use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/UI/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/card";
import { Badge } from "@/components/UI/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table";
import { SellerPayout } from "@/utils/types";
import Payout from "@/components/features/admin/Utbetalinger/PayoutDetail";
import PayoutDetail from "@/components/features/admin/Utbetalinger/PayoutDetail";
import { cookies } from "next/headers";
import { UserMethods } from "@/queryFactory/User";
import { SellerPayoutMethods } from "@/queryFactory/SellerPayout";

type SalesMethod = "Full Service" | "Self Registration";

// Mock data for demonstration
// const mockPayout: SellerPayout = {
//   id: "1",
//   createdAt: "2023-11-20T10:00:00Z",
//   updatedAt: "2023-11-25T14:30:00Z",
//   products: [
//     { id: "p1", name: "T-shirt", price: 29.99 },
//     { id: "p2", name: "Jeans", price: 59.99 },
//     { id: "p3", name: "Sneakers", price: 89.99 },
//   ],
//   seller: { id: "s1", name: "John Doe", email: "john@example.com" },
//   sales_method: "Full Service",
//   totalPrice: 179.97,
//   payoutPrice: 143.98,
//   minihjornePrice: 35.99,
//   payoutDate: "",
// };

const Page = async ({ params }: { params: { id: string; payout: string } }) => {
  const token = cookies().get("Token")?.value;
  const me = await UserMethods.getMe(token);
  if (!me.admin) return <div>Not an admin</div>;
  const sellerPayout = await SellerPayoutMethods.getById(
    params.payout,
    process.env.STRAPI_ACCESS_TOKEN,
  );
  return (
    <>
      <PayoutDetail sellerPayout={sellerPayout} />
    </>
  );
};
export default Page;
