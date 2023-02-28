import { TextField } from '@mui/material';
import { useField } from 'formik';
import { FC } from 'react';

type Props = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
};

const MyTextInput: FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      fullWidth
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

MyTextInput.defaultProps = {
  placeholder: '',
};

export default MyTextInput;
