import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(25).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const navigate = useNavigate();

  const onSubmit = (data, { setSubmitting, setFieldError }) => {
    axios
      .post("http://localhost:3000/auth/reg", data)
      .then((response) => {
        console.log(response.data);
        setRegistrationSuccessful(true);
        setTimeout(() => {
          navigate("/login");
        }, 1000); // Redirect to login after 1 second
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.error) {
          setFieldError("username", error.response.data.error);
        } else {
          console.error("Error:", error);
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  if (registrationSuccessful) {
    return <div className="text-center p-4">Registration Successful!</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
    <div className="w-full max-w-xs">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <ErrorMessage name="username" component="span" className="text-red-500 text-xs italic"/>
                    <Field autoComplete="off" id="inputCreatePost" name="username" placeholder="(Ex. John123...)" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <ErrorMessage name="password" component="span" className="text-red-500 text-xs italic"/>
                    <Field autoComplete="off" type="password" id="inputCreatePost" name="password" placeholder="Your Password..." className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Register
                    </button>
                </div>
            </Form>
        </Formik>
    </div>
</div>

  );
}

export default Registration;

