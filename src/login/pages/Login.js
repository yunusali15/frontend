// import React from "react";
// import { useFormik } from "formik";

// const Login = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit: (values) => {
//       console.log("form data", values);
//     },
//   });

//   return (
//     <React.Fragment>
//       <form onSubmit={formik.handleSubmit}>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           onChange={formik.handleChange}
//           value={formik.values.email}
//         />

//         <label htmlFor="password">Password</label>
//         <input
//           type="text"
//           id="password"
//           name="password"
//           onChange={formik.handleChange}
//           value={formik.values.password}
//         />

//         <button>Log in</button>
//       </form>
//     </React.Fragment>
//   );
// };

// export default Login;

import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik'
import * as Yup from 'yup'

import './Login.css'

const Login = () => {
  const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Required'),
      password: Yup.string().min(6, 'At least 6 characters').required('Required')
    }),
    onSubmit: ({email, password}) => {
      alert(`Email: ${email}, password: ${password}`);
      console.log(values);
    }
  })

  return (
    <form className='login' onSubmit={handleSubmit}>
      {/* <label htmlFor="email">Email</label> */}
      <h2>Log in here</h2>
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
        <div className="error">{errors.email}</div>
      ): <br/>}
      {/* <label htmlFor="password">Password</label> */}
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
        <div className="error">{errors.password}</div>
      ): <br/>}
        <Link to='/signup' className="signup">Dont have an account?</Link>
      <button type="submit">Log in</button>
    </form>
  );
};
export default Login;