"use client";
import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../../utils/utils";
import { useCookies } from "react-cookie";
import LoadingOverlay from "../molecules/loading/LoadingOverlay";

const Register = () => {
  // Request API.
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
  const queryClient = useQueryClient();
  const router = useRouter();
  const {
    mutate: register,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: (values: any) => {
      return registerUser(values);
    },
    onSuccess: (data) => {
      if (data.jwt.length > 0) {
        console.log(data);
        queryClient.setQueryData(["login-user"], data.user);
        queryClient.setQueryData(["jwt"], data.jwt);
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30);
        setCookie("Token", data.jwt, { expires: expirationDate });
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/min-side");
        }
      }
    },
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Form data submitted:", values);
      register(values);
    },
  });

  return (
    <form className="w-full" onSubmit={formik.handleSubmit}>
      <LoadingOverlay loading={isPending} />
      <div className="mb-6">
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium text-gray-900 "
        >
          Brukernavn
        </label>
        <input
          type="username"
          id="username"
          name="username"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          placeholder="hanneandersen"
          required
          value={formik.values.username}
          onChange={formik.handleChange}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900 "
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          placeholder="hanne.andersen@outlook.com"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900 "
        >
          Passord (minst 6 tegn)
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
        Registrer
      </button>
      {error && isError && (
        <div className="mt-4 rounded-lg bg-red-500 p-4 text-center text-white">
          <p>{error.message}</p>
        </div>
      )}
    </form>
  );
};

export default Register;
