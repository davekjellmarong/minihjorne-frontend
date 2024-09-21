import React from "react";
import { cookies } from "next/headers";
import { DeliveryMethods } from "@/queryFactory/Delivery";
import DeliveryList from "@/components/features/admin/Delivery/DeliveryList";
import Header from "@/components/features/admin/Delivery/Header";

const page = async ({ params }: { params: { id: string } }) => {
  const cookieStore: any = cookies();
  const token = cookieStore.get("Token").value;
  const delivery = await DeliveryMethods.getDelivery(params.id, token);
  console.log(delivery);
  return (
    <div className="flex flex-col">
      <div className="container mx-auto bg-white px-4 py-8 md:px-6">
        <div className="flex flex-col items-start gap-6">
          <Header delivery={delivery} />
          <DeliveryList id={params.id} />
        </div>
      </div>
    </div>
  );
};

export default page;
