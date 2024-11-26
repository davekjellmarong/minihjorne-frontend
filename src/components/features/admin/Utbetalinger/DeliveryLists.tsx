import { Delivery } from "@/utils/types";
import Image from "next/image";
import React from "react";
interface DeliveryListsProps {
  deliveries: Delivery[];
}
const DeliveryLists = ({ deliveries }: DeliveryListsProps) => {
  return (
    <div>
      {deliveries.map((delivery) => (
        <div key={delivery.id}>
          <h2>{delivery.attributes.sales_method.data.attributes.name}</h2>
          <ul>
            {delivery.attributes.products.data.map((product) => {
              return (
                <li key={product.id}>
                  <Image
                    src={
                      product.attributes.image.data[0].attributes.formats
                        .thumbnail.url
                    }
                    alt="Product Image"
                    width={48}
                    height={48}
                    className="rounded-md"
                    style={{ aspectRatio: "48/48", objectFit: "cover" }}
                  />
                  {product.attributes.brand}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DeliveryLists;
