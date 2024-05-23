import React from "react";
import { Grid, TextField, Button, Typography, Link } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./Login.css";
import { Link as RouterLink } from "react-router-dom";

// Validation schema
const validationSchema = yup.object({
  email: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      console.log(values);
    },
  });

  return (
    <AuthLayout>
      <Typography variant="h4" className="login-title" sx={{ fontWeight: 600 }}>
        Log In
      </Typography>
      <form onSubmit={formik.handleSubmit}>
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
        <Grid className="links-row">
          <Typography variant="body1" className="signup-link">
            Don't have an account?{" "}
            <Link component={RouterLink} to="/register">
              Sign up
            </Link>
          </Typography>
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
              color: "white",
              borderRadius: 2,
              paddingX: 3,
            }}
          >
            Log in
          </Button>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default Login;
