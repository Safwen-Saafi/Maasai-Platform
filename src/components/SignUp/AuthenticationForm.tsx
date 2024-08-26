import { useForm, UseFormReturnType } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import backgroundImg from './back.jpeg'; // Import your background image
import './AuthenticationForm.css'; // Import the CSS file
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the interface for form values
interface FormValues {
  email: string;
  name: string;
  password: string;
  phone: string;
  address: string;
  terms: boolean;
}

export function AuthenticationForm(props: PaperProps) {
  const [type, setType] = useState("login");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Apply the FormValues type to useForm
  const form = useForm<FormValues>({
    initialValues: {
      email: '',
      name: '',
      password: '',
      phone: '',
      address: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length < 0 ? 'Password should include at least 0 characters' : null),
    },
  });

  const toggleAuthType = () => {
    setType(type === 'login' ? 'register' : 'login');
  };

  // Specify the type of 'values' parameter
  const handleSubmit = async (values: FormValues) => {
    setErrorMessage("");
    const url = type === 'register' ? 'http://localhost:8080/api/register' : 'http://localhost:8080/api/login';
    const payload = {
      email: values.email,
      password: values.password,
      ...(type === 'register' && {
        name: values.name,
        phone: values.phone,
        address: values.address,
        profilePicture: '', // Placeholder if you want to add profile pictures later
        role: 'user', // Default role
      }),
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('Response Data:', data); // Log the response data for debugging

      if (response.ok) {
        localStorage.clear();
        if (type=='login'){
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
        } else {
          localStorage.setItem('user', JSON.stringify(data));
        }
        navigate('/home');
      } else {
        setErrorMessage(type === 'register' ? 'Registration failed. Please try again.' : data.message || 'Wrong credentials, try again.');
      }
    } catch (error) {
      console.error('Error:', error); // Log the error for debugging
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
      }}
    >
      <Paper
        radius="md"
        p="xl"
        withBorder
        {...props}
        style={{
          maxWidth: 400,
          width: '100%',
          backgroundColor: '#1f1f1f',
          color: 'white',
          border: '1px solid orange',
        }}
      >
        <Text size="lg" fw={500}>
          Welcome, please {type} here:
        </Text>

        {errorMessage && (
          <Text color="red" size="sm" mt="sm">
            {errorMessage}
          </Text>
        )}

        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Stack>
            {type === 'register' && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                radius="md"
                required
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@example.com"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              radius="md"
            />

            {type === 'register' && (
              <>
                <TextInput
                  label="Phone"
                  placeholder="Your phone number"
                  value={form.values.phone}
                  onChange={(event) => form.setFieldValue('phone', event.currentTarget.value)}
                  radius="md"
                />
                <TextInput
                  label="Address"
                  placeholder="Your address"
                  value={form.values.address}
                  onChange={(event) => form.setFieldValue('address', event.currentTarget.value)}
                  radius="md"
                />
                <Checkbox
                  label="I accept terms and conditions"
                  checked={form.values.terms}
                  onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                  required
                />
              </>
            )}
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor component="button" type="button" color="dimmed" onClick={toggleAuthType} size="xs">
              {type === 'register'
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>
            <Button
              type="submit"
              radius="xl"
              className="button-gradient"
            >
              {type === 'register' ? 'Register' : 'Login'}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}
