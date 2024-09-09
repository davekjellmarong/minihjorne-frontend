import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/UI/table";
import { DeliveryMethods } from "@/queryFactory/Delivery";
import { cookies } from "next/headers";
import Image from "next/image";
interface DeliveryListProps {
  id: string;
}
const DeliveryList = async ({ id }: DeliveryListProps) => {
  const cookieStore: any = cookies();
  const token = cookieStore.get("Token").value;
  const delivery = await DeliveryMethods.getDelivery(id, token);
  return (
    <div className="w-full rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Products</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {delivery.attributes.products.data.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Image
                      src={product.attributes.image.data[0].attributes.url}
                      alt="Product Image"
                      width={48}
                      height={48}
                      className="rounded-md"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div>
                      <div className="font-medium">
                        {product.attributes.brand}
                      </div>
                      <div className="text-sm text-[#7d6adf]">
                        ID: {product.id}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{product.attributes.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DeliveryList;
