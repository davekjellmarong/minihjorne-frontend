"use client";
import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { registerUser } from "../../utils/utils";

const Register = () => {
  // Request API.
  const router = useRouter();
  const { mutate: register, isPending: loading } = useMutation({
    mutationFn: (values: any) => {
      return registerUser(values);
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
    <form className="w-96" onSubmit={formik.handleSubmit}>
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
          placeholder="john.doe@company.com"
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
          placeholder="john.doe@company.com"
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
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto sm:hover:bg-blue-800"
      >
        Registrer
      </button>
    </form>
  );
};

export default Register;
