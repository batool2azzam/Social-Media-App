import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import "./AddPost.css";
import ProfilePic from "../../assets/images/profileImg.jpg";
import PhotoIcon from "../../assets/images/home.png";
import VideoIcon from "../../assets/images/home.png";
import LocationIcon from "../../assets/images/home.png";
import ScheduleIcon from "../../assets/images/home.png";

const AddPost: React.FC = () => {
  return (
    <Card
      className="add-post"
      sx={{
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <Avatar
            sx={{
              width: "55px",
              height: "55px",
            }}
            alt="Profile Picture"
            src={ProfilePic}
            className="profile-pic-add"
          />
          <TextField
            fullWidth
            placeholder="What's happening"
            multiline
            rows={1}
            margin="normal"
            className="text-input"
          />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            variant="text"
            startIcon={<img src={PhotoIcon} alt="Photo" className="icon" />}
          >
            Photo
          </Button>
          <Button
            variant="text"
            startIcon={<img src={VideoIcon} alt="Video" className="icon" />}
          >
            Video
          </Button>
          <Button
            variant="text"
            startIcon={
              <img src={LocationIcon} alt="Location" className="icon" />
            }
          >
            Location
          </Button>
          <Button
            variant="text"
            startIcon={
              <img src={ScheduleIcon} alt="Schedule" className="icon" />
            }
          >
            Schedule
          </Button>
          <Button variant="contained" color="primary" className="share-button">
            Share
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddPost;
