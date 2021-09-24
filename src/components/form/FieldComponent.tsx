import { Field } from "formik";
interface FieldProps {
  name: string;
  value: string;
}
const FieldComponent: React.FC<FieldProps> = ({ name, value }) => {
  return (
    <div>
      <label className="form-label">{name}</label>
      <Field className ="form-control" name={name}/>
    </div>
  );
};

export default FieldComponent;
