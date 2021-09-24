import { Formik, Form, Field, FormikHelpers } from "formik";
import { User } from "../../types";
import { getSesionToken } from "../../services/getSesionToken";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { isUserLogged } from "../../auth/isUserLogged";
const INITIAL_VALUE: User = {
  email: "",
  pass: "",
};

const Login = () => {
  const [userAuth, setuserAuth] = useState(isUserLogged);
  const history = useHistory();
  //Validaciones de formulario
  const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = "Please, type an valid email.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Formato de email inválido.";
    } else if (value !== "challenge@alkemy.org") {
      error = "Email Invalido. Por favor, vuelva a ingresar un mail.";
    } else {
      error = undefined;
    }
    return error;
  };
  const validatePassword = (value: String) => {
    let error;
    if (!value) {
      error = "Por favor, ingrese una contraseña";
    } else if (value !== "react") {
      error = "Por favor, ingrese una contraseña válida";
    } else if (value === "react") {
      error = undefined;
    }

    return error;
  };

  return (
    <div className="container-sm ">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <h1 className="mb-3 ">Login Form</h1>
          <Formik
            initialValues={INITIAL_VALUE}
            onSubmit={(values: User, actions: FormikHelpers<User>) => {
              setTimeout(() => {
                let userSubmitted = values;
                getSesionToken(userSubmitted);
                actions.setSubmitting(false);
              }, 1000);
              setuserAuth(true);
              history.push("/");
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
