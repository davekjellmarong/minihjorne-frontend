"use client";

import { Product, ProductBackend } from "@/utils/types";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<ProductBackend>[] = [
  {
    accessorKey: "price",
    header: "Pris",
  },
  //   {
  //     accessorKey: "status",
  //     header: "Status",
  //   },
  {
    accessorKey: "createdAt",
    header: "Dato",
  },
  //   {
  //     accessorKey: "image",
  //     header: "Bilde",
  //     Cell: ({ value }) => {
  //       return value.length > 0 ? (
  //         <img src={value[0].url} alt="Produkt bilde" width={50} height={50} />
  //       ) : null;
  //     },
  //   }
];
