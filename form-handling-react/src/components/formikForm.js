import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("User registered:", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="p-4 border rounded w-80 mx-auto">
        <h2 className="text-xl font-bold mb-4">Register with Formik</h2>

        <div className="mb-2">
          <label className="block">Username:</label>
          <Field
            type="text"
            name="username"
            className="border px-2 py-1 w-full"
          />
          <ErrorMessage
            name="username"
            component="p"
            className="text-red-500"
          />
        </div>

        <div className="mb-2">
          <label className="block">Email:</label>
          <Field
            type="email"
            name="email"
            className="border px-2 py-1 w-full"
          />
          <ErrorMessage
            name="email"
            component="p"
            className="text-red-500"
          />
        </div>

        <div className="mb-2">
          <label className="block">Password:</label>
          <Field
            type="password"
            name="password"
            className="border px-2 py-1 w-full"
          />
          <ErrorMessage
            name="password"
            component="p"
            className="text-red-500"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded mt-2"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
