import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Button,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.css";

interface ProfileCardProps {
  haveButton: boolean;
  user: any;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  haveButton = true,
  user,
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    navigate("/login");
    console.log("User logged out");
  };

  const handleProfileClick = (userId: number) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <Card
      className="profile-card"
      sx={{
        borderRadius: "20px",
        padding: 0,
        marginTop: 3,
      }}
    >
      <Box className="background-img" />
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center" mt={-8}>
          <Avatar
            alt={user?.name || "User Profile Picture"}
            src={user?.profile_image || ""}
            className="profile-pic"
          />
          <Typography
            variant="h6"
            onClick={() => {
              handleProfileClick(user?.id);
            }}
            sx={{ cursor: "pointer" }}
          >
            <strong>{user?.name || "User Name"}</strong>
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {user?.username || "Username"}
          </Typography>
          <br />
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            mt={2}
            className="user-info-nums"
          >
            <Typography variant="body2" align="center" className="profile-stat">
              <Typography variant="h6" align="center">
                <b>546</b>
              </Typography>
              <br />
              followers
            </Typography>
            <hr />
            <Typography variant="body2" align="center" className="profile-stat">
              <Typography variant="h6" align="center">
                <b>{user?.posts_count || 0}</b>
              </Typography>
              <br />
              Posts
            </Typography>
            <hr />
            <Typography
              variant="body2"
              align="center"
              className="profile-stat"
              sx={{ borderTop: "2px", borderColor: "cadetblue" }}
            >
              <Typography variant="h6" align="center">
                <b>{user?.comments_count || 0}</b>
              </Typography>
              <br />
              Comments
            </Typography>
          </Box>
        </Box>
        {haveButton && (
          <Button
            onClick={handleLogout}
            variant="contained"
            color="primary"
            className="share-button-right"
            sx={{
              background: "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
              color: "white",
              borderRadius: 2,
              marginTop: 2,
            }}
            endIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
