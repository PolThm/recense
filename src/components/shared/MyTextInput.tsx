import { TextField } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { FC } from 'react';

type Props = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
};

const MyTextInput: FC<Props> = ({ label, ...props }) => {
  const formik = useFormikContext();
  const [field, meta] = useField(props);

  return (
    <TextField
      fullWidth
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      onBlur={formik.handleBlur}
    />
  );
};

MyTextInput.defaultProps = {
  placeholder: '',
};

export default MyTextInput;
