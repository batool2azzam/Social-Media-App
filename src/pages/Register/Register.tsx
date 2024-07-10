import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Link,
  Alert,
} from "@mui/material";

import { useFormik } from "formik";
import * as yup from "yup";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { register } from "../../api/userApi";

import "./Register.css";

// Validation schema
const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  username: yup.string().required("Username is required"),
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);


  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      const userData = new FormData();
      userData.append("username", values.username);
      userData.append("password", values.password);
      userData.append("name", `${values.firstName} ${values.lastName}`);
      userData.append("email", values.email);
      if (file) {
        userData.append("image", file);
      }

      try {
        const data = await register(userData);
        console.log("Registration successful:", data);
        navigate("/login");
      } catch (error) {
        console.error("Registration failed:", error);
        setErrorMessage(
          error.message || "Registration failed. Please try again."
        );

      }
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setFile(event.currentTarget.files[0]);
    }
  };

  return (
    <AuthLayout>
      <>
        <Typography
          variant="h4"
          className="register-title"
          sx={{ fontWeight: 600 }}
        >
          Sign up
        </Typography>
        {errorMessage && (
          <Alert severity="error" onClose={() => setErrorMessage(null)}>
            {errorMessage}
          </Alert>
        )}
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                margin="normal"
                variant="filled"
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && !!formik.errors.firstName}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                margin="normal"
                variant="filled"
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && !!formik.errors.lastName}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            variant="filled"
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && !!formik.errors.username}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="filled"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && !!formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            type="file"
            margin="normal"
            variant="filled"
            id="image"
            name="image"
            placeholder="Upload photo"

            onChange={handleFileChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="filled"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && !!formik.errors.password}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                margin="normal"
                variant="filled"
                id="confirmPassword"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirmPassword &&
                  !!formik.errors.confirmPassword
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
            </Grid>
          </Grid>
          <Grid className="links-row">
            <Typography variant="body1" className="login-link">
              Already have an account?{" "}
              <Link component={RouterLink} to="/login">
                Login
              </Link>
            </Typography>
            <Button
              type="submit"
              variant="contained"
              sx={{
                background:
                  "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
                color: "white",
                borderRadius: 2,
                paddingX: 3,
              }}
            >
              Sign up
            </Button>
          </Grid>
        </form>
      </>
    </AuthLayout>
  );
};

export default Register;
