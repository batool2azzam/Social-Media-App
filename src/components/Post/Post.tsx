import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Box,
  Avatar,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import LikeIcon from "../../assets/images/like.png";
import CommentIcon from "../../assets/images/comment.png";
import ShareIcon from "../../assets/images/share.png";
import PostDialog from "../PostDialog/PostDialog";
import { useNavigate } from "react-router-dom";
import { PostData } from "../../types/types";
import { useUser } from "../../contexts/UserContext";
import { deletePost, editPost } from "../../api/postApi";
import { getAuthToken } from "../../utils/auth";
import "./Post.css";

const Post: React.FC<{ post: PostData; userId: number | null }> = ({
  post: initialPost,
  userId,
}) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const token: string = getAuthToken();
  const [post, setPost] = useState(initialPost);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [body, setBody] = useState<string>(post.body);

  const handleEditPost = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = async () => {
    console.log("Editing post with ID:", post.id);
    console.log("New body content:", body);
    console.log("Authorization token:", token);

    try {
      const updatedPost = await editPost(post.id, body, token);
      setPost(updatedPost);
      setIsEditing(false);
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };

  const handleEditClose = () => {
    setIsEditing(false);
  };

  const handleCommentsClick = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleUsernameClick = (userId: number) => {
    navigate(`/profile/${userId}`);
  };

  const handleDeletePost = async (postId: number) => {
    try {
      await deletePost(postId, token);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <Card key={post.id} className="post" sx={{ borderRadius: "10px" }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginBottom={1}
        marginTop={-1}
        width={"100%"}
      >
        <Box display="flex" alignItems="center">
          <Avatar alt={post.author.name} src={post.author.profile_image} />
          <Box marginLeft={2} sx={{ cursor: "pointer" }}>
            <strong onClick={() => handleUsernameClick(post.author.id)}>
              {post.author.username}
            </strong>
          </Box>
        </Box>
        <Typography variant="body2" color="textSecondary" alignItems="center">
          {post.created_at}
        </Typography>
      </Box>

      <CardMedia
        component="img"
        alt="Post"
        image={post.image}
        className="post-pic"
      />

      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        className="post-icons-container"
      >
        <Grid item>
          <img src={LikeIcon} alt="Like" className="post-icons" />
          <img
            src={CommentIcon}
            alt="Comment"
            className="post-icons"
            onClick={handleCommentsClick}
            style={{ cursor: "pointer" }}
          />
          <img src={ShareIcon} alt="Share" className="post-icons" />
        </Grid>
        <Grid item>
          <Typography
            sx={{ cursor: "pointer" }}
            variant="body2"
            color="textSecondary"
            onClick={handleCommentsClick}
          >
            {post.comments_count} comments
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h6" className="post-title">
        {post.title}
      </Typography>
      <Typography variant="body1" className="post-text">
        {post.body}
      </Typography>

      <Box display="flex" justifyContent="flex-end" alignItems="center" gap={1}>
        {userId !== null && userId === user?.id && (
          <>
            <Button variant="outlined" color="warning" onClick={handleEditPost}>
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleDeletePost(post.id)}
            >
              Delete
            </Button>
          </>
        )}
      </Box>

      <PostDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        postId={post.id}
      />

      {/* Edit Post Dialog */}
      <Dialog
        open={isEditing}
        onClose={handleEditClose}
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
        <DialogTitle>Edit Post Body</DialogTitle>
        <DialogContent>
          <TextField
            variant="filled"
            margin="dense"
            label="Body"
            type="text"
            fullWidth
            multiline
            rows={4}
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleEditSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default Post;
