import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  TextField,
  Button,
  Box,
  Avatar,
  Grid,
  Dialog,
  DialogContent,
} from "@mui/material";
import "./AddPost.css";
import ProfilePic from "../../assets/images/profileImg.jpg";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { addPost } from "../../redux/postsSlice";

const AddPost: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleShare = () => {
    const postData = new FormData();
    postData.append("title", title);
    postData.append("body", body);
    postData.append("image", image);

    dispatch(addPost(postData));
    setOpen(false);
  };

  const postContent = (
    <>
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
          onClick={handleClickOpen}
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
          sx={{ color: "#f87878" }}
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
    </>
  );

  return (
    <div>
      <Card
        className="add-post"
        sx={{
          borderRadius: "10px",
        }}
      >
        {postContent}
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "10px",
            position: "static",
            display: "flex",
            flexDirection: "column",
            maxHeight: "100%",
            maxWidth: "100%",
            width: "800px",
            padding: 0,
            margin: 0,
          },
        }}
      >
        <DialogContent>
          <Card
            className="add-post"
            sx={{
              borderRadius: "10px",
              boxShadow: "none",
              backgroundColor: "white",
              padding: 2,
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
                placeholder="Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                margin="normal"
                className="text-input"
                sx={{ marginLeft: 2 }}
              />
            </Box>
            <TextField
              fullWidth
              placeholder="Post Body"
              multiline
              rows={4}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              margin="normal"
              className="text-input"
            />
            <Button
              variant="contained"
              component="label"
              startIcon={<AddPhotoAlternateIcon />}
              sx={{
                background:
                  "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
                color: "white",
                borderRadius: 2,
                marginTop: "15px",
              }}
            >
              Upload Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>

            {image && (
              <Box mt={2} textAlign="center">
                <img src={image} alt="Uploaded" style={{ maxWidth: "100%" }} />
              </Box>
            )}

            <Grid
              container
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              className="icons-group"
              sx={{ marginTop: 2 }}
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
                sx={{ color: "#f87878" }}
                variant="text"
                startIcon={<LocationOnOutlinedIcon className="add-post-icon" />}
              >
                Location
              </Button>
              <Button
                sx={{ marginRight: "35px" }}
                variant="text"
                startIcon={
                  <CalendarMonthOutlinedIcon className="add-post-icon" />
                }
              >
                Schedule
              </Button>
              <Button
                onClick={handleShare}
                variant="contained"
                color="primary"
                className="share-button"
                sx={{
                  background:
                    "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
                  color: "white",
                  borderRadius: 2,
                  paddingX: 3,
                }}
              >
                Share
              </Button>
            </Grid>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddPost;
