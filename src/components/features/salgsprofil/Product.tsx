import { Product as ProductType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductProps {
  product: ProductType;
}
const Product = ({ product }: ProductProps) => {
  return (
    <Link href={`/brukte-barne-klaer/${product.id}`} className="grid gap-2">
      <Image
        src={product.attributes.image.data[0].attributes.formats.medium.url}
        alt={`${product.id}`}
        width={100}
        height={100}
        className="aspect-square w-full rounded-lg object-cover"
      />
      <div className="grid gap-1">
        <p className="truncate text-xs leading-none text-muted-foreground">
          Størrelse:&nbsp;
          {product.attributes.size.data.attributes.number}
        </p>
        <p className="truncate text-xs leading-none text-muted-foreground">
          Merke: {product.attributes.brand}
        </p>
        <p className="font-semibold">Kr {product.attributes.price}</p>
      </div>
    </Link>
  );
};

export default Product;
