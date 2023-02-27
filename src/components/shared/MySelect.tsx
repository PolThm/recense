import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useField } from 'formik';
import React, { FC } from 'react';

type Props = {
  label: string;
  name: string;
  children: JSX.Element[];
};

const MySelect: FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  console.log('field', field);
  console.log('meta', props);

  return (
    <FormControl fullWidth>
      <InputLabel id={`${props.name}-label`} sx={{ color: '#525457' }}>
        {label}
      </InputLabel>
      <Select
        {...field}
        {...props}
        labelId={`${props.name}-label`}
        id={props.name}
        label={label}
        error={meta.touched && Boolean(meta.error)}
      />
      {meta.touched && meta.error && (
        <FormHelperText sx={{ color: 'error.main' }}>
          {meta.error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default MySelect;
