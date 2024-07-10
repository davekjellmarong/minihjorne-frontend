import React from "react";

const AvatarLetter = ({ username }: { username: string }) => {
  return (
    <span className="rounded-full border bg-white px-8 py-6 text-center text-5xl shadow-sm">
      {username?.slice(0, 1).toUpperCase()}
    </span>
  );
};

export default AvatarLetter;
