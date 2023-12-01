"use client";
import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../utils/utils";

const Login = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: login, isPaused: loading } = useMutation({
    mutationFn: (values: any) => {
      return loginUser(values);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      queryClient.setQueryData(["jwt"], data.jwt);
      router.push("/");
    },
  });
  // Request API.
  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Form data submitted:", values);
      login(values);
    },
  });

  return (
    <form className="w-96" onSubmit={formik.handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="identifier"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Brukernavn/email
        </label>
        <input
          type="identifier"
          id="identifier"
          name="identifier"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="john.doe@company.com"
          required
          value={formik.values.identifier}
          onChange={formik.handleChange}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Passord
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="•••••••••"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
