import { useField } from 'formik';
import { FC } from 'react';

type Props = {
  label: string;
  name: string;
  children: JSX.Element[];
};

const MySelect: FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MySelect;
