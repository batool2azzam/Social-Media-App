import React from "react";
import { Grid, TextField, Button, Typography, Link } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { login } from "../../api/api";
import "./Login.css";

// Validation schema
const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const Login: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      try {
        const data = await login(values.username, values.password);
        console.log("Login successful:", data);
        navigate("/");
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  });

  return (
    <AuthLayout>
      <>
        <Typography
          variant="h4"
          className="login-title"
          sx={{ fontWeight: 600 }}
        >
          Log In
        </Typography>
        <form onSubmit={formik.handleSubmit}>
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
                background:
                  "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
                color: "white",
                borderRadius: 2,
                paddingX: 3,
              }}
            >
              Log in
            </Button>
          </Grid>
        </form>
      </>
    </AuthLayout>
  );
};

export default Login;
