import React from "react";
import Product from "../product/Product";
import { ProductsMethods } from "@/queryFactory/Product";

const HomepageProducts = async () => {
  const products = await ProductsMethods.getFilteredByViews();

  return (
    <ul className="mt-10 grid w-full grid-cols-2 justify-items-center gap-x-4 gap-y-16 sm:grid-cols-3 md:grid-cols-4">
      {products.data.map((product) => {
        return (
          <React.Fragment key={product.id}>
            <Product product={product} />
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default HomepageProducts;
