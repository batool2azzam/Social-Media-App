import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import "./UserInfoCard.css";

interface UserInfoCardProps {
  user: any;
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    navigate("/login");
    console.log("User logged out");
  };

  return (
    <Card
      className="UserInfoCard"
      sx={{
        borderRadius: "20px",
        padding: 0,
        marginTop: 3,
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: 5 }}>
          User Info
        </Typography>
        <Typography variant="h6">
          <strong>Email:</strong> {user.email}
        </Typography>
        <Typography variant="h6">
          <strong>Full Name:</strong> {user.name}
        </Typography>
        <Typography variant="h6">
          <strong>UserName:</strong> {user.username}
        </Typography>
        <Button
          className="share-button-right"
          onClick={handleLogout}
          variant="contained"
          color="primary"
          sx={{
            background: "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
            color: "white",
            borderRadius: 2,
            marginTop: 8,
            alignSelf: "flex-end",
            justifySelf: "flex-end",
          }}
          endIcon={<LogoutIcon />}
        >
          Logout
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;
