// src/components/AuthLayout.tsx
import React from "react";
import { Grid, Typography } from "@mui/material";
import logo from "../../assets/images/logo.png";
import "./AuthLayout.css";

const AuthLayout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <Grid
      container
      className="auth-container"
      alignItems="center"
      justifyContent="center"
    >
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "50%", left: "-8rem" }}></div>
      <Grid item xs={12} md={4} className="auth-left">
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
        className="auth-form-container"
        sx={{ borderRadius: 5 }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
