import React from "react";
import { Grid, TextField, Button, Typography, Link } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Register.css";
import logo from "../../assets/images/logo.png";

// Validation schema
const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  username: yup.string().required("Username is required"),
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
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      console.log(values);
    },
  });

  return (
    <Grid
      container
      className="register-container"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} md={4} className="register-left">
        <img src={logo} alt="Logo" className="logo-image" />
        <div className="logo-info">
          <Typography
            variant="h2"
            className="logo-name"
            sx={{
              backgroundImage:
                "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
              fontWeight: 800,
              color: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ZKC Media
          </Typography>
          <Typography variant="body1" className="tagline">
            Explore the ideas throughout the world
          </Typography>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={4.5}
        className="register-form-container"
        sx={{ borderRadius: 5 }}
      >
        <Typography
          variant="h4"
          className="register-title"
          sx={{ fontWeight: 600 }}
        >
          Sign up
        </Typography>
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
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
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
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
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
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
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
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
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
                  Boolean(formik.errors.confirmPassword)
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
              Already have an account? <Link href="/login">Login</Link>
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
      </Grid>
    </Grid>
  );
};

export default Register;
