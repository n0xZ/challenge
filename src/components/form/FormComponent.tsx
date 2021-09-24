import { Form, Formik } from "formik";
interface FormProps {
  initialValue: Event & (Event | string);
  onSubmit: (values: Event) => void;
}
const FormComponent: React.FC<FormProps> = ({
  initialValue,
  onSubmit,
  children,
}) => {
  return (
    <Formik initialValues={initialValue} onSubmit={onSubmit}>
      {({ errors, touched }) => <Form>{children}</Form>}
    </Formik>
  );
};

export default FormComponent;
