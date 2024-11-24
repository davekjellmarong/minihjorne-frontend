import DeliveryLists from "@/components/features/admin/Utbetalinger/DeliveryLists";
import ProductList from "@/components/features/admin/Utbetalinger/ProductList";
import { DeliveryMethods } from "@/queryFactory/Delivery";
import { ProductQueries, ProductsMethods } from "@/queryFactory/Product";
import { SellerMethods } from "@/queryFactory/Seller";
import { SellerPayoutMethods } from "@/queryFactory/SellerPayout";
import { UserMethods } from "@/queryFactory/User";
import { cookies } from "next/headers";
import React from "react";
const Page = async ({ params }: { params: { id: string } }) => {
  const token = cookies().get("Token")?.value;
  const me = await UserMethods.getMe(token);
  if (!me.admin) return <div>Not an admin</div>;
  const seller = await SellerMethods.getById(params.id);
  const products = await ProductsMethods.getBySellerId(params.id);
  console.log(products[0].attributes.delivery);
  const deliveries = await DeliveryMethods.getDeliveriesBySellerId(
    token,
    seller.id,
  );

  const sellerPayouts = await SellerPayoutMethods.getBySellerId(
    seller.id,
    process.env.STRAPI_ACCESS_TOKEN,
  );
  return (
    <div>
      <ProductList products={products} seller={seller} />
      <DeliveryLists deliveries={deliveries} />
    </div>
  );
};

export default Page;