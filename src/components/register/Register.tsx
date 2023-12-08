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
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Brukernavn
        </label>
        <input
          type="username"
          id="username"
          name="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="john.doe@company.com"
          required
          value={formik.values.username}
          onChange={formik.handleChange}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="john.doe@company.com"
          required
          value={formik.values.email}
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
        Registrer
      </button>
    </form>
  );
};

export default Register;
