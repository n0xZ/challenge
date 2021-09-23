import { Form, Formik } from "formik";
interface FormProps {
  initialValue: Event & (Event | string);
  onSubmit: (values: Event) => void;
}
const FormComponent: React.FC<FormProps> = ({ initialValue, onSubmit }) => {
  return (
    <Formik initialValues={initialValue} onSubmit={onSubmit}>
      {({ errors, touched }) => <Form></Form>}
    </Formik>
  );
};

export default FormComponent;
