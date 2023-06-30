import React from 'react';
import "../components/MyForm.css"

import { Formik, Field, Form, ErrorMessage } from 'formik';
import {
  TextField,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText,
  Button,
} from '@mui/material';

const initialValues = {
  name: '',
  address: '',
  country: '',
  gender: '',
  hobbies: [],
};

const countries = [
  { label: 'United States', value: 'US' },
  { label: 'Canada', value: 'CA' },
  { label: 'United Kingdom', value: 'UK' },
];

const hobbies = [
  { label: 'Reading', value: 'reading' },
  { label: 'Writing', value: 'writing' },
  { label: 'Gaming', value: 'gaming' },
  { label: 'Sports', value: 'sports' },
];

const validateForm = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.address) {
    errors.address = 'Required';
  }

  if (!values.country) {
    errors.country = 'Required';
  }

  if (!values.gender) {
    errors.gender = 'Required';
  }

  if (values.hobbies.length === 0) {
    errors.hobbies = 'Required';
  }

  return errors;
};

const handleSubmit = (values) => {
  console.log(values);
  // You can perform additional actions here, such as making an API request
};
const MyForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      {({ errors, values }) => (
        <Form className="form">
          <div className="form-field">
            <label htmlFor="name">Name</label> {/* Add label */}
            <Field
              as={TextField}
              id="name"
              name="name"
              variant="outlined"
              fullWidth
              error={Boolean(errors.name)}
              helperText={<ErrorMessage name="name" />}
            />
          </div>

          <div className="form-field">
            <label htmlFor="address">Address</label> {/* Add label */}
            <Field
              as={TextField}
              id="address"
              name="address"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              error={Boolean(errors.address)}
              helperText={<ErrorMessage name="address" />}
            />
          </div>

          <div className="form-field">
            <label htmlFor="country">Country</label> {/* Add label */}
            <Field
              as={Select}
              id="country"
              name="country"
              variant="outlined"
              fullWidth
              error={Boolean(errors.country)}
              helperText={<ErrorMessage name="country" />}
            >
              {countries.map((country) => (
                <MenuItem key={country.value} value={country.value}>
                  {country.label}
                </MenuItem>
              ))}
            </Field>
          </div>

          <div className="form-field">
            <label>Gender</label> {/* Add label */}
            <Field name="gender">
              {({ field }) => (
                <FormControl
                  component="fieldset"
                  error={Boolean(errors.gender)}
                >
                  <RadioGroup {...field}>
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                  <ErrorMessage name="gender" />
                </FormControl>
              )}
            </Field>
          </div>

          <div className="form-field">
            <label>Hobbies/Interests</label> {/* Add label */}
            <Field
              as={Select}
              name="hobbies"
              variant="outlined"
              multiple
              fullWidth
              error={Boolean(errors.hobbies)}
              helperText={<ErrorMessage name="hobbies" />}
              renderValue={(selected) => selected.join(', ')}
            >
              {hobbies.map((hobby) => (
                <MenuItem key={hobby.value} value={hobby.value}>
                  <Checkbox checked={values.hobbies.includes(hobby.value)} />
                  <ListItemText primary={hobby.label} />
                </MenuItem>
              ))}
            </Field>
          </div>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
