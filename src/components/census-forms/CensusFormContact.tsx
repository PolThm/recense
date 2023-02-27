import { Box, Button, MenuItem } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import * as yup from 'yup';

import MyCheckbox from '@/components/shared/MyCheckbox';
import MySelect from '@/components/shared/MySelect';
import MyTextInput from '@/components/shared/MyTextInput';

type Props = {};

const CensusFormContact: FC<Props> = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        acceptedTerms: false, // added for our checkbox
        jobType: '', // added for our select
      }}
      validationSchema={yup.object({
        firstName: yup
          .string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: yup
          .string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: yup.string().email('Invalid email address').required('Required'),
        acceptedTerms: yup
          .boolean()
          .required('Required')
          .oneOf([true], 'You must accept the terms and conditions.'),
        jobType: yup
          .string()
          .oneOf(
            ['designer', 'development', 'product', 'other'],
            'Invalid Job Type'
          )
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log('onSubmit');
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <MyTextInput
            label="Prénom"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            label="Nom"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <MyTextInput
            label="Adresse email"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <MySelect label="Job Type" name="jobType">
            <MenuItem value="">Select a job type</MenuItem>
            <MenuItem value="designer">Designer</MenuItem>
            <MenuItem value="development">Developer</MenuItem>
            <MenuItem value="product">Product Manager</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <Button
            color="secondary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default CensusFormContact;
