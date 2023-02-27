import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { FC } from 'react';
import * as yup from 'yup';

type Props = {
  firstName: string;
  handleChange: (firstName: string) => void;
};

const validationSchema = yup.object({
  firstName: yup.string().required('Ce champ est obligatoire'),
});

const CensusFormContact: FC<Props> = ({ firstName, handleChange }) => {
  const formik = useFormik({
    initialValues: {
      firstName,
    },
    validationSchema,
    onSubmit: (values) => {
      handleChange(values.firstName);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="Prénom"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          InputLabelProps={{
            style: { color: '#525457' },
          }}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CensusFormContact;
