import { Field } from "formik";
interface FieldProps {
  name: string;
  value: string;
}
const FieldComponent: React.FC<FieldProps> = ({ name, value }) => {
  return (
    <div>
      <label>{name}</label>
      <Field name={name}/>
    </div>
  );
};

export default FieldComponent;
