import Navbar from "../navbar/Navbar";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useHistory } from "react-router";
type searchCharacter = {
  name: string;
};
const INITIAL_VALUE: searchCharacter = {
  name: "",
};
const CharacterForm = () => {
  let history = useHistory();
  const validateName = (value: string) => {
    let error;
    if (!value) {
      error = "Por favor, ingrese un nombre.";
    } else {
      error = undefined;
    }
    return error;
  };
  return (
    <Navbar>
      <div className="bg-dark mb-4 container-sm">
        <h1 className="mb-5 d-flex flex-row justify-content-center">
          Buscar Personaje
        </h1>
        <Formik
          initialValues={INITIAL_VALUE}
          onSubmit={async (
            values: searchCharacter,
            actions: FormikHelpers<searchCharacter>
          ) => {
            history.push(`/search/results/${values.name}`);
            actions.setSubmitting(false);
          }}
        >
          {({ errors, touched }) => (
            <Form className="mb-3">
              <label className="form-label">Nombre de personaje</label>
              <Field
                type="text"
                name="name"
                className="form-control mb-3"
                placeholder="Ingrese el nombre del personaje que quiera buscar"
                validate={validateName}
              />
              {errors.name && touched.name && (
                <div className="text-warning"> {errors.name}</div>
              )}

              <button
                type="submit"
                className="btn btn-primary form-control mb-4"
              >
                Buscar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Navbar>
  );
};

export default CharacterForm;
