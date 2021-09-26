import { Formik, Form, Field, FormikHelpers } from "formik";
import { User } from "../../types";
import { getSesionToken } from "../../services/getSesionToken";
import { useState } from "react";

import { isUserLogged } from "../../auth/isUserLogged";
import { Redirect } from "react-router-dom";
import { validateEmail, validatePassword } from "../../auth/validateInputs";
const INITIAL_VALUE: User = {
  email: "",
  pass: "",
};

const Login = () => {
  const [userAuth, setuserAuth] = useState(isUserLogged);
  //Validaciones de formulario

  if (userAuth) return <Redirect to="/" />;
  return (
    <div className="container-sm ">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <h1 className="mb-3 ">Login Form</h1>
      
          <Formik
            initialValues={INITIAL_VALUE}
            onSubmit={async (values: User, actions: FormikHelpers<User>) => {
              setTimeout(() => {
                let userSubmitted = values;
                getSesionToken(userSubmitted);
                actions.setSubmitting(false);
              }, 1000);
     
              setuserAuth(true);
            }}
          >
            {({ errors, touched }) => (
              <Form className="mb-3">
                <label className="form-label">Email</label>
                <Field
                  type="text"
                  name="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  validate={validateEmail}
                />
                {errors.email && touched.email && (
                  <div className="text-warning"> {errors.email}</div>
                )}
                <label className="form-label ">Password</label>
                <Field
                  type="password"
                  name="pass"
                  className="form-control mb-3"
                  placeholder="Password"
                  validate={validatePassword}
                />
                {errors.pass && touched.pass && (
                  <div className="text-warning"> {errors.pass}</div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary form-control mb-4"
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Login;
