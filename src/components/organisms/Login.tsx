"use client";
import React from "react";
import { useFormik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../utils/utils";
import { useCookies } from "react-cookie";
import LoadingOverlay from "../molecules/loading/LoadingOverlay";
const Login = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
  const queryClient = useQueryClient();
  const router = useRouter();
  const {
    mutate: login,
    isPending,
    error,
    isError,
  } = useMutation({
    mutationFn: (values: any) => {
      return loginUser(values);
    },
    onSuccess: (data) => {
      console.log("inside success mutation");
      console.log(data);
      if (data.jwt.length > 0) {
        console.log({ data });
        queryClient.setQueryData(["login-user"], data.user);
        queryClient.setQueryData(["jwt"], data.jwt);
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30);
        setCookie("Token", data.jwt, { expires: expirationDate });
        if (redirect) {
          router.push(redirect);
          console.log("Redirecting to", redirect);
        } else {
          console.log("Redirecting to /");
          router.push("/min-side");
        }
      }
    },
    // onError: (error) => {
    //   console.log("inside error mutation");
    //   console.log(error);
    // },
  });
  // Request API.
  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Form data submitted:", values);
      return login(values);
    },
  });
  return (
    <form className="w-full" onSubmit={formik.handleSubmit}>
      <LoadingOverlay loading={isPending} />
      <div className="mb-6">
        <label
          htmlFor="identifier"
          className="mb-2 block text-sm font-medium text-gray-900 "
        >
          Brukernavn/email
        </label>
        <input
          type="identifier"
          id="identifier"
          name="identifier"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          placeholder="john.doe@company.com"
          required
          value={formik.values.identifier}
          onChange={formik.handleChange}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900 "
        >
          Passord
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          placeholder="•••••••••"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-brand-500 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 "
      >
        Login
      </button>
      {error && isError && (
        <div className="mt-4 rounded-lg bg-red-500 p-4 text-center text-white">
          <p>{error.message}</p>
        </div>
      )}
    </form>
  );
};

export default Login;
