import LoadingOverlay from "@/components/common/loading/LoadingOverlay";
import { createOrder } from "@/serverActions/ServerActions";
import { Product } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

interface CreateOrderProps {
  products: Product[];
}

const CreateOrder = ({ products }: CreateOrderProps) => {
  // Always start with two empty input fields
  const { mutate, isPending } = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      toast.success("Produktene er nå markert som solgt!");
      setProductFields([
        { id: "", name: "" },
        { id: "", name: "" },
      ]);
      setFoundProducts([]);
    },
    onError: (error) => {
      const message = JSON.parse(error.message);
      toast.error(message[0].message);
    },
  });
  const [productFields, setProductFields] = useState([
    { id: "", name: "" },
    { id: "", name: "" },
  ]);

  const [foundProducts, setFoundProducts] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0); // Track total price

  // To reference input fields for programmatic focus
  const inputRefs = useRef<any[]>([]);

  const handleProductIDChange = (index: number, value: string) => {
    const updatedFields = [...productFields];
    updatedFields[index].id = value;

    // Attempt to find the product by its ID in the list of products
    const product = products.find((p) => String(p.id) === value);
    if (product) {
      updatedFields[index].id = String(product.id); // Update the ID to match the found product

      // Add the product to the list of found products if it isn't already added
      if (!foundProducts.some((p) => p.id === product.id)) {
        setFoundProducts([...foundProducts, product]);
      }
    }

    setProductFields(updatedFields);
  };

  const handleBlur = (index: number) => {
    // Ensure that there are always two empty input fields
    if (productFields[productFields.length - 2].id !== "") {
      setProductFields([...productFields, { id: "", name: "" }]);
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior of form submission on Enter

      // Move focus to the next input field if available
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      } else {
        // If no next input, create a new input field and focus on it
        setProductFields([...productFields, { id: "", name: "" }]);
        setTimeout(() => {
          inputRefs.current[inputRefs.current.length - 1]?.focus();
        }, 0); // Wait for the new input field to be rendered
      }
    }
  };

  // Calculate the total price every time the found products change
  useEffect(() => {
    const newTotal = foundProducts.reduce((sum, product) => {
      return sum + product.attributes.price; // Assuming `price` is part of the product's attributes
    }, 0);
    setTotalPrice(newTotal);
  }, [foundProducts]);

  return (
    <div>
      <h2>Create Order</h2>
      <LoadingOverlay loading={isPending} />
      {/* Display the found products as a horizontal list */}
      {foundProducts.length > 0 && (
        <div className="mb-8 flex gap-4">
          {foundProducts.map((product) => (
            <div key={product.id} className="border p-2">
              <Image
                src={
                  product.attributes.image.data[0].attributes.formats.thumbnail
                    .url
                }
                alt={product.attributes.image.data[0].attributes.name}
                width={100}
                height={100}
                className="object-cover"
              />
              <p>ID: {product.id}</p>
              <p>Price: {product.attributes.price} NOK</p> {/* Display price */}
            </div>
          ))}
        </div>
      )}

      {/* Display total price */}
      {foundProducts.length > 0 && (
        <div className="mt-4">
          <h3>Total Price: {totalPrice} NOK</h3> {/* Total price shown here */}
        </div>
      )}

      {/* Input fields to type in product IDs */}
      {productFields.map((field, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            placeholder="Enter product ID"
            value={field.id}
            onChange={(e) => handleProductIDChange(index, e.target.value)}
            onBlur={() => handleBlur(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-full border p-2"
            ref={(el: any) => (inputRefs.current[index] = el)} // Store a reference to each input
          />
        </div>
      ))}

      {/* Add further UI for submitting order, etc. */}
      <button
        onClick={() => mutate(foundProducts)}
        className="mt-4 bg-brand-500 px-4 py-2 text-white"
      >
        Submit Order
      </button>
    </div>
  );
};

export default CreateOrder;
