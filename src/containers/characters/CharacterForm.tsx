import Navbar from "../../components/Navbar/Navbar";
import { Formik, Field, Form, FormikHelpers,ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import { validateName } from "../../auth/validateInputs";
type searchCharacter = {
  name: string;
};
const INITIAL_VALUE: searchCharacter = {
  name: "",
};
const CharacterForm = () => {
  let history = useHistory();

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
          
            actions.setSubmitting(false);
            history.push(`/search/results/${values.name}`);
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
                <div className="text-warning" > {errors.name}</div>
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
