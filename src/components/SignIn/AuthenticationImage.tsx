import React from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection
import { Paper, Button, TextInput, PasswordInput, Checkbox, Title, Text, Anchor, Notification } from '@mantine/core';
import { Formik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import classes from './AuthenticationImage.module.css';

// Define the types for form values
interface LoginFormValues {
  email: string;
  password: string;
}

// Define the validation schema using Yup
const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Required'),
  password: yup.string().required('Required'),
});

// Define the component
export function AuthenticationImage() {
  const navigate = useNavigate();

  // Handle login form submission
  const handleLogin = async (values: LoginFormValues, actions: FormikHelpers<LoginFormValues>) => {
    actions.setSubmitting(true);
    actions.setErrors({});

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        actions.setErrors({ email: data.message || 'Login failed' });
      }
    } catch (error) {
      actions.setErrors({ email: 'An unexpected error occurred' });
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to Maasai Platform!
        </Title>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={handleLogin}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
             
              
              {/* Email input field */}
              <TextInput
                label="Email address"
                placeholder="hello@gmail.com"
                size="md"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                error={touched.email && errors.email}
              />
              
              {/* Password input field */}
              <PasswordInput
                label="Password"
                placeholder="Your password"
                mt="md"
                size="md"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                error={touched.password && errors.password}
              />
              
              {/* Checkbox for keeping user logged in */}
              <Checkbox label="Keep me logged in" mt="xl" size="md" />
              
              {/* Submit button */}
              <Button
                fullWidth
                mt="xl"
                size="md"
                gradient={{ from: 'yellow', to: 'red', deg: 150 }}
                variant="gradient"
                type="submit"
                loading={isSubmitting}
              >
                Login
              </Button>
            </form>
          )}
        </Formik>

        {/* Registration link */}
        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'> href="#" fw={700} color='orange' onClick={(event) => event.preventDefault()}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
