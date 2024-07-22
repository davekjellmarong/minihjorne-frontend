import React from "react";
interface GoodNewsBox {
  title: string;
  children: any;
}
const GoodNewsBox = ({ title, children }: GoodNewsBox) => {
  return (
    <div className="rounded-md bg-yellow-100 p-4">
      <p className="text-lg font-semibold text-yellow-800">{title}</p>
      <p>{children}</p>
    </div>
  );
};

export default GoodNewsBox;
