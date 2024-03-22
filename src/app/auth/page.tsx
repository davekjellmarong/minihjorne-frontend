import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import Login from "@/components/organisms/Login";
import Register from "@/components/organisms/Register";
import React from "react";

const Page = () => {
  return (
    <div className="mt-8 flex justify-center gap-14">
      <Login />
      <Register />
    </div>
  );
};

export default Page;
