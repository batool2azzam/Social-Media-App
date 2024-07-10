import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Avatar,
  Grid,
  Dialog,
  DialogContent,
  Card,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setUser } from "../../store/features/user/userSlice";
import { addPost } from "../../api/postApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddPost.css";

interface AddPostProps {
  onPostAdded: () => void;
}

const AddPost: React.FC<AddPostProps> = ({ onPostAdded }) => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const clearFields = () => {
    setTitle("");
    setBody("");
    setImage(null);
  };

  const handleSharePost = async () => {
    if (!title || !body || !image) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      await addPost(title, body, image);
      handleClose();
      clearFields();
      toast.success("Post added successfully!");
      dispatch(
        setUser({
          ...user,
          posts_count: user ? user.posts_count + 1 : 1,
        })
      );

      onPostAdded();
    } catch (error) {
      toast.error("Error adding post.");
    }
  };

  return (
    <div>
      <Card className="add-post" sx={{ borderRadius: "10px" }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <Avatar
            sx={{ width: "55px", height: "55px" }}
            alt="Profile Picture"
            src={user?.profile_image}
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
            onClick={handleClickOpen}
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
                sx={{ width: "55px", height: "55px" }}
                alt="Profile Picture"
                src={user?.profile_image}
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
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                marginTop={2}
              >
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "300px",
                    objectFit: "cover",
                    marginTop: "10px",
                    borderRadius: "10px",
                    alignSelf: "center",
                  }}
                />
              </Box>
            )}

            <Box display="flex" justifyContent="flex-end" marginTop={2}>
              <Button
                onClick={handleSharePost}
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
            </Box>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddPost;
