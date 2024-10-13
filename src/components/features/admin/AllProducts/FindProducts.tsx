"use client";
import { useState } from "react";
import { Product } from "@/utils/types";
import Image from "next/image";
import React from "react";
import FilterProducts from "./FilterProducts";
import CreateOrder from "./CreateOrder";

interface FindProductsProps {
  products: Product[];
}

const FindProducts = ({ products }: FindProductsProps) => {
  const [activeTab, setActiveTab] = useState<"findProducts" | "createOrder">(
    "findProducts",
  );

  // Tab button styles for active and inactive states
  const tabStyle = (isActive: boolean) =>
    isActive
      ? "px-4 py-2 text-white bg-brand-500 border-b-2 border-brand-600"
      : "px-4 py-2 text-gray-500 border-b-2 border-transparent hover:text-brand-500";

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="mb-6 text-center text-2xl font-semibold">All Products</h1>

      <div className="mb-6 flex justify-center border-b">
        <button
          className={tabStyle(activeTab === "findProducts")}
          onClick={() => setActiveTab("findProducts")}
        >
          Find Products
        </button>
        <button
          className={tabStyle(activeTab === "createOrder")}
          onClick={() => setActiveTab("createOrder")}
        >
          Create Order
        </button>
      </div>

      {/* Render View Based on Active Tab */}
      <div>
        {activeTab === "findProducts" ? (
          <FilterProducts products={products} /> // The existing 'Filter Products' component
        ) : (
          <CreateOrder products={products} /> // The existing 'Create Order' component
        )}
      </div>
    </div>
  );
};

export default FindProducts;
