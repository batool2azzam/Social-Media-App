import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import "./ProfileCard.css";
import PostPic from "../../assets/images/profileImg.jpg";

const ProfileCard: React.FC = () => {
  return (
    <Card
      className="profile-card"
      sx={{
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        padding: 0,
      }}
    >
      <Box className="background-img" />
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center" mt={-8}>
          <Avatar alt="Zendaya MJ" src={PostPic} className="profile-pic" />
          <Typography variant="h6">Zendaya MJ</Typography>
          <Typography variant="body2" color="textSecondary">
            Senior UI/UX Designer
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            mt={2}
          >
            <Typography variant="body2" align="center" className="profile-stat">
              <strong>6,890</strong>
              <br />
              Followings
            </Typography>
            <Typography
              variant="body2"
              align="center"
              className="profile-stat"
              sx={{ borderTop: "2px", borderColor: "cadetblue" }}
            >
              <strong>1</strong>
              <br />
              Followers
            </Typography>
            <Typography variant="body2" align="center" className="profile-stat">
              <strong>3</strong>
              <br />
              Posts
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
