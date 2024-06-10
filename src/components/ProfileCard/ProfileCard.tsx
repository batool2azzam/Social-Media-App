import React, { useEffect } from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import "./ProfileCard.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../../redux/userSlice";

const ProfileCard: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const loading = useSelector((state: any) => state.user.loading);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
          <Avatar
            alt={currentUser?.name}
            src={currentUser?.profilePic}
            className="profile-pic"
          />
          <Typography variant="h6">
            <strong>{currentUser?.name}</strong>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {currentUser?.designation}
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
                <b>{currentUser?.postsCount}</b>
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
                <b>{currentUser?.commentsCount}</b>
              </Typography>
              <br />
              Comments
            </Typography>
            <hr />
            <Typography variant="body2" align="center" className="profile-stat">
              <Typography variant="h6" align="center">
                <b>{currentUser?.likesCount}</b>
              </Typography>
              <br />
              Likes
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
