import { Box } from '@mui/material';
import React, { FC } from 'react';

type Props = {
  value: string;
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: FC<Props> = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', width: '20rem' }}>
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
  </Box>
);

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
};

export default InputField;
