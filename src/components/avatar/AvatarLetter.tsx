import React from "react";

const AvatarLetter = ({ username }: { username: string | undefined }) => {
  return (
    <span className="text-center text-5xl py-6 px-8 rounded-full border bg-white shadow-sm">
      {username?.slice(0, 1).toUpperCase()}
    </span>
  );
};

export default AvatarLetter;
