"use client";
import { useState } from "react";
import { Product } from "@/utils/types";
import Image from "next/image";
import React from "react";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortOption, setSortOption] = useState<string>("");

  // Filter products based on search term (e.g., size, price, or other attributes)
  const handleFilter = () => {
    const filtered = products.filter(
      (product) =>
        product.attributes.size.data.attributes.number
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        product.attributes.price.toString().includes(searchTerm),
    );
    setFilteredProducts(filtered);
  };

  // Sort products by selected criteria (e.g., by price or size)
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    setSortOption(option);

    const sorted = [...filteredProducts].sort((a, b) => {
      if (option === "price-asc") {
        return a.attributes.price - b.attributes.price;
      } else if (option === "price-desc") {
        return b.attributes.price - a.attributes.price;
      } else if (option === "size-asc") {
        return (
          parseInt(a.attributes.size.data.attributes.number) -
          parseInt(b.attributes.size.data.attributes.number)
        );
      } else if (option === "size-desc") {
        return (
          parseInt(b.attributes.size.data.attributes.number) -
          parseInt(a.attributes.size.data.attributes.number)
        );
      }
      return 0;
    });
    setFilteredProducts(sorted);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="mb-6 text-center text-2xl font-semibold">All Products</h1>

      {/* Search Filter */}
      <div className="mb-6 flex items-center justify-center gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by size or price..."
          className="rounded border px-4 py-2"
        />
        <button
          onClick={handleFilter}
          className="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600"
        >
          Filter
        </button>

        {/* Sort Dropdown */}
        <select
          value={sortOption}
          onChange={handleSort}
          className="rounded border px-4 py-2"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="size-asc">Size: Small to Large</option>
          <option value="size-desc">Size: Large to Small</option>
        </select>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-5 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="rounded-lg border p-4">
            <div className="mb-4 flex justify-center">
              <Image
                src={
                  product.attributes.image.data[0].attributes.formats.thumbnail
                    .url
                }
                alt={product.attributes.image.data[0].attributes.name}
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-sm">ID: {product.id}</p>
              <p className="text-sm font-medium">
                Size: {product.attributes.size.data.attributes.number}
              </p>
              <p className="text-sm">{product.attributes.price} kr</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
