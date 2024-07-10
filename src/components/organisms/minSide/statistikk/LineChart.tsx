import { ProductBackend, UserBackend } from "@/utils/types";
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { getProductsStats } from "./utils";
interface LineReChartProps {
  user: UserBackend;
  products: ProductBackend[];
}
const LineReChart = ({ user, products }: LineReChartProps) => {
  const { productsSold } = getProductsStats(products);
  let productsSoldAcc = 0;
  const dynamicData = productsSold.map((product) => {
    productsSoldAcc += 1;
    return {
      name: product.soldDate.slice(5, 10),
      produkterSolgt: productsSoldAcc,
      produkter: productsSold.length,
    };
  });
  const firstDay = {
    name: user.activatedDate.slice(5, 10),
    produkterSolgt: 0,
    produkter: productsSold.length,
  };
  dynamicData.unshift(firstDay);
  const ticks = Array.from(
    { length: productsSold.length + 1 },
    (_, i) => i + 1,
  );

  return (
    <div>
      <LineChart
        width={380}
        height={250}
        data={dynamicData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis ticks={ticks} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="produkterSolgt" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default LineReChart;
