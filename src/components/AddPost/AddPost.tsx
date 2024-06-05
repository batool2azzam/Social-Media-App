import React from "react";
import { Card, TextField, Button, Box, Avatar, Grid } from "@mui/material";
import "./AddPost.css";
import ProfilePic from "../../assets/images/profileImg.jpg";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
const AddPost: React.FC = () => {
  return (
    <Card
      className="add-post"
      sx={{
        borderRadius: "10px",
      }}
    >
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
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        className="icons-group"
      >
        <Button
          sx={{ color: "#3da468" }}
          variant="text"
          startIcon={<AddPhotoAlternateIcon className="add-post-icon" />}
        >
          Photo
        </Button>
        <Button
          sx={{ color: "#677bcd" }}
          variant="text"
          startIcon={<PlayCircleOutlineIcon className="add-post-icon" />}
        >
          Video
        </Button>
        <Button
          sx={{ color: "  #f87878" }}
          variant="text"
          startIcon={<LocationOnOutlinedIcon className="add-post-icon" />}
        >
          Location
        </Button>
        <Button
          sx={{ marginRight: "35px" }}
          variant="text"
          startIcon={<CalendarMonthOutlinedIcon className="add-post-icon" />}
        >
          Schedule
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="share-button"
          sx={{
            background: "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
            color: "white",
            borderRadius: 2,
            paddingX: 3,
          }}
        >
          Share
        </Button>
      </Grid>
    </Card>
  );
};

export default AddPost;
