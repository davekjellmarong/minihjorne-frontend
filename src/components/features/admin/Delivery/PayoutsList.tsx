"use client";
import { SellerPayout } from "@/utils/types";
import Image from "next/image";
import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table";
import { Badge } from "@/components/UI/badge";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/UI/button";

interface PayoutsListProps {
  sellerPayouts: SellerPayout[];
  sellerId: number;
}

const PayoutsList = ({ sellerPayouts, sellerId }: PayoutsListProps) => {
  const router = useRouter();
  return (
    <div className="mx-4 py-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-purple-700">Utbetalinger</h1>
        {/* <Button
          onClick={() =>
            router.push(`/min-side/admin/utbetalinger/selger/${sellerId}/new`)
          }
          className="bg-purple-600 text-white hover:bg-purple-700"
        >
          Lag ny utbetaling
        </Button> */}
      </div>
      <div className="overflow-hidden rounded-md border border-purple-200">
        <Table height="h-auto">
          <TableHeader className="bg-purple-100">
            <TableRow>
              <TableHead className="text-purple-700">Salgsmetode</TableHead>
              <TableHead className="text-purple-700">Utbetaling dato</TableHead>
              <TableHead className="text-right text-purple-700">
                Produkter
              </TableHead>
              <TableHead className="text-right text-purple-700">
                Ubetaling sum
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sellerPayouts.map((payout, index) => (
              <TableRow
                onClick={() => {
                  router.push(
                    `/min-side/admin/utbetalinger/selger/${sellerId}/${payout.id}`,
                  );
                }}
                key={index}
                className={`
                  ${index % 2 === 0 ? "bg-white" : "bg-purple-50"}
                  ${!payout.attributes.payoutDate ? "relative" : ""}
                `}
              >
                <TableCell
                  className={!payout.attributes.payoutDate ? "font-medium" : ""}
                >
                  {payout.attributes.sales_method.data.attributes.name}
                  {!payout.attributes.payoutDate && (
                    <div className="absolute inset-y-0 left-0 w-1 bg-yellow-500" />
                  )}
                </TableCell>
                <TableCell>
                  {payout.attributes.payoutDate ? (
                    <Badge className="bg-green-100 text-green-800">
                      {payout.attributes.payoutDate}
                    </Badge>
                  ) : (
                    <Badge className="bg-yellow-100 text-yellow-800">
                      Ikke utbetalt
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  {payout.attributes.products.data.length}
                </TableCell>
                <TableCell className="text-right">
                  kr {payout.attributes.payoutPrice?.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PayoutsList;
