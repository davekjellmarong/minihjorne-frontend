"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table";
import { ProductBackend } from "@/utils/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getProductsStats } from "../statistikk/utils";
interface MyProductsTableProps {
  products: ProductBackend[];
}
const MyProductsTable = ({ products }: MyProductsTableProps) => {
  const router = useRouter();
  const { possibleRevenue } = getProductsStats(products);
  return (
    <>
      <Table height="h-full" className="overflow-y h-[400px] ">
        <TableHeader>
          <TableRow>
            <TableHead className="">Bilde</TableHead>
            <TableHead>Opprettet</TableHead>
            <TableHead className="">Visninger</TableHead>
            <TableHead className="text-right">Pris</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const dateObject = new Date(product.createdAt);

            const options: any = {
              month: "short",
              day: "numeric",
            };
            const formattedDate = dateObject.toLocaleDateString(
              "no-NO",
              options,
            );
            const formattedDateWithoutDot = formattedDate.replace(/\./g, "");
            return (
              <TableRow
                key={product.id}
                onClick={() => {
                  router.push(`produkter/${product.id}`);
                }}
              >
                <TableCell>
                  <Image
                    src={product.image[0].url}
                    alt="Produkt bilde"
                    width={50}
                    height={50}
                    className="max-h-16 rounded object-cover"
                  />
                </TableCell>
                <TableCell>{formattedDateWithoutDot}</TableCell>
                <TableCell>{product.views}</TableCell>
                <TableCell className="text-right">{product.price}</TableCell>
                {/* <TableCell>
                  <ProductStatusChip
                    active={product.active}
                    sold={product.sold}
                  />
                </TableCell> */}
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total verdi</TableCell>
            <TableCell colSpan={2} className="text-right">
              Kr {possibleRevenue}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      {/* <div className="flex justify-between border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0">
        <p>Total:</p>
        <p className="text-right">$2,500.00</p>
      </div> */}
    </>
  );
};

export default MyProductsTable;
