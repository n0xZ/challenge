import { Field } from "formik";
interface FieldProps {
  type: string;
  name: string;
  value: string;
  validate: (value: String) => string | undefined;
}
const FieldComponent: React.FC<FieldProps> = ({
  type,
  name,
  value,
  validate,
}) => {
  return (
    <div className="mb-4">
      <label className="form-label">{name}</label>
      <Field
        className="form-control"
        type={type}
        name={name}
        validate={validate}
      />
    </div>
  );
};

export default FieldComponent;
