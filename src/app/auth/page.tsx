import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import Login from "@/components/login/Login";
import Register from "@/components/register/Register";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center gap-14 mt-8">
      <Login />
      <Register />
    </div>
  );
};

export default Page;
