import React from "react";

const AvatarLetter = ({
  username,
  admin,
}: {
  username: string;
  admin: boolean;
}) => {
  return (
    <span
      className={`rounded-full border ${admin ? "border-2 border-green-500" : null} bg-white px-8 py-6 text-center text-5xl shadow-sm`}
    >
      {username?.slice(0, 1).toUpperCase()}
    </span>
  );
};

export default AvatarLetter;
