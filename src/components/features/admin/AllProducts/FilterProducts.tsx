import { Product } from "@/utils/types";
import Image from "next/image";
import React, { useState } from "react";
interface FilterProductsProps {
  products: Product[];
}
const FilterProducts = ({ products }: FilterProductsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortOption, setSortOption] = useState<string>("");
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  // Filter products based on search term (e.g., size, price, or ID)
  const handleFilter = () => {
    const filtered = products.filter(
      (product) =>
        product.id.toString().includes(searchTerm) || // Search by ID
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

  // Handle product selection with checkboxes
  const handleSelectProduct = (product: Product) => {
    const isSelected = selectedProducts.some((p) => p.id === product.id);
    if (isSelected) {
      setSelectedProducts((prev) => prev.filter((p) => p.id !== product.id));
    } else {
      setSelectedProducts((prev) => [...prev, product]);
    }
  };
  return (
    <div>
      {/* Search Filter */}
      <div className="mb-6 flex justify-center gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Size, price or ID"
          className="w-40 rounded border px-4 py-2"
        />
        <select
          value={sortOption}
          onChange={handleSort}
          className="w-40 rounded border px-4 py-2"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="size-asc">Size: Small to Large</option>
          <option value="size-desc">Size: Large to Small</option>
        </select>
        <button
          onClick={handleFilter}
          className="rounded bg-purple-500 px-6 py-2 text-white hover:bg-purple-600"
        >
          Filter
        </button>

        {/* Sort Dropdown */}
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
              <p className="text-sm">Merke: {product.attributes.brand}</p>
              <p className="text-sm">{product.attributes.price} kr</p>

              {/* Checkbox for selecting the product
              <label className="mt-2 block">
                <input
                  type="checkbox"
                  checked={selectedProducts.some((p) => p.id === product.id)}
                  onChange={() => handleSelectProduct(product)}
                />
                Select Product
              </label> */}
            </div>
          </div>
        ))}
      </div>

      {/* Display selected products */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Selected Products:</h2>
        {selectedProducts.length > 0 ? (
          <ul className="mt-4 list-disc pl-6">
            {selectedProducts.map((product) => (
              <li key={product.id}>
                ID: {product.id}, Size:{" "}
                {product.attributes.size.data.attributes.number}, Price:{" "}
                {product.attributes.price} kr
              </li>
            ))}
          </ul>
        ) : (
          <p>No products selected.</p>
        )}
      </div>
    </div>
  );
};

export default FilterProducts;
