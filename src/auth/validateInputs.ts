export const validateEmail = (value: string) => {
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
export const validatePassword = (value: String) => {
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
