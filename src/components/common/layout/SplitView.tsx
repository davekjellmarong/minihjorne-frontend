import React, { ReactElement } from "react";

interface SplitViewProps {
  children: ReactElement[];
}
const SplitView = ({ children }: SplitViewProps) => {
  const [Left, Right] = children;
  return (
    <div className="flex w-full">
      <div className="w-80">{Left}</div>
      <div className="grow">{Right}</div>
    </div>
  );
};

export default SplitView;
