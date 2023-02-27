import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import { useField } from 'formik';
import React, { FC } from 'react';

type Props = {
  children: string;
  name: string;
};

const MyCheckbox: FC<Props> = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox {...field} {...props} sx={{ color: 'text.primary' }} />
        }
        label={children}
      />
      {meta.touched && meta.error && (
        <FormHelperText sx={{ color: 'error.main' }}>
          {meta.error}
        </FormHelperText>
      )}
    </div>
  );
};

export default MyCheckbox;
