import Login from "@/components/login/Login";
import Register from "@/components/register/Register";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center gap-14 mt-8">
      <Login />
      <Register />
    </div>
  );
};

export default page;
