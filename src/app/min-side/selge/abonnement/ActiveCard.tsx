import React from "react";

interface ActiveCardProps {
  activeCardName: string;
}

const ActiveCard: React.FC<ActiveCardProps> = ({ activeCardName }) => {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Active Card</h2>
      <p className="text-lg">Card Name: {activeCardName}</p>
    </div>
  );
};

export default ActiveCard;
