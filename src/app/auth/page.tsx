"use client";
import Login from "@/components/organisms/Login";
import Register from "@/components/organisms/Register";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const ViewEnum = {
    Login: "login",
    Register: "register",
  };
  const [view, setView] = useState(ViewEnum.Login);
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();
  useEffect(() => {
    const messageType = searchParams.get("type");
    if (messageType === "login") {
      setMessage("Du må logge inn for å fortsette fra handlekurven");
    }
  });
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-14">
      <div className="flex gap-6">
        <button
          className={`${view === ViewEnum.Login ? "border-b-2" : ""}  border-brand-700 px-4 py-2 `}
          onClick={() => setView(ViewEnum.Login)}
        >
          Logg inn
        </button>
        <button
          className={`${view === ViewEnum.Register ? "border-b-2" : ""} border-brand-700 px-4 py-2 `}
          onClick={() => setView(ViewEnum.Register)}
        >
          Registrer
        </button>
      </div>
      <div>
        {message.length > 0 && (
          <div
            className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
            role="alert"
          >
            <span className="block sm:inline">{message}</span>
          </div>
        )}
      </div>
      <div className="w-full max-w-96 px-6">
        {view === ViewEnum.Login && <Login />}
        {view === ViewEnum.Register && <Register />}
      </div>
    </div>
  );
};

export default Page;
