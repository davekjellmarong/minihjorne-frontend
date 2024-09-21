import { DeliveryMethods } from "@/queryFactory/Delivery";
import { cookies } from "next/headers";
import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/UI/table";
import { User } from "@phosphor-icons/react/dist/ssr";
import { formatDateWithoutDot } from "@/utils/Helpers";
import Link from "next/link";

const page = async () => {
  const cookieStore: any = cookies();
  const token = cookieStore.get("Token").value;
  const deliveries = await DeliveryMethods.getDeliveries(token);
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Bruker</TableHead>
            <TableHead>Produkter</TableHead>
            <TableHead>Dato</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deliveries.map((delivery) => (
            <TableRow key={delivery.id}>
              <TableCell>
                <Link href={`/min-side/admin/leveringer/${delivery.id}`}>
                  <div className="flex items-center gap-2">
                    <User size={22} color="gray" />
                    <div>
                      {delivery.attributes.seller.data.attributes.username}
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/min-side/admin/leveringer/${delivery.id}`}>
                  <div className="flex items-center gap-2">
                    <div>{delivery.attributes.products.data.length}</div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/min-side/admin/leveringer/${delivery.id}`}>
                  {formatDateWithoutDot(delivery.attributes.createdAt)}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
