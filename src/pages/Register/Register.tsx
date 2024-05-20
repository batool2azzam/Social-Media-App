import React from "react";
import { Grid, TextField, Button, Typography, Link } from "@mui/material";
import "./Register.css";
import logo from "../../assets/images/logo.png";

const Register: React.FC = () => {
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
              backgroundImage: "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
              fontWeight: 800,
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
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              margin="normal"
              variant="filled"
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          variant="filled"
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
              variant="filled"
            />
          </Grid>
        </Grid>
        <Grid className="links-row">
          <Typography variant="body1" className="login-link">
            Already have an account? <Link href="/login">Login</Link>
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
              color: "white",
              borderRadius: 2,
              paddingX: 3,
            }}
          >
            Sign up
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;
