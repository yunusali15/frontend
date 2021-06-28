import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./Signup.css";

const Signup = () => {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        fullname: "",
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        fullname: Yup.string().required("Required"),
        email: Yup.string().required("Required"),
        password: Yup.string()
          .min(6, "At least 6 characters")
          .required("Required"),
      }),
      onSubmit: ({ fullname, email, password }) => {
        alert(`Full name:${fullname}, Email: ${email}, password: ${password}`);
        console.log(values);
      },
    });

  return (
    <div className="entire">
    <form className="signup" onSubmit={handleSubmit}>
      <h2>Sign up here</h2>
      <input
        value={values.fullname}
        onChange={handleChange}
        onBlur={handleBlur}
        id="fullname"
        name="fullname"
        type="text"
        placeholder="Full name"
      />
      {touched.fullname && errors.fullname ? (
        <div className="signup-error">{errors.fullname}</div>
      ) : (
        <br />
      )}
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        name="email"
        type="email"
        placeholder="Email"
      />
      {touched.email && errors.email ? (
        <div className="signup-error">{errors.email}</div>
      ) : (
        <br />
      )}
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        name="password"
        type="password"
        placeholder="Password"
      />
      {touched.password && errors.password ? (
        <div className="signup-error">{errors.password}</div>
      ) : (
        <br />
      )}
      <button type="submit" className="signup-btn">
        Sign up
      </button>
    </form>
    </div>
  );
};
export default Signup;
