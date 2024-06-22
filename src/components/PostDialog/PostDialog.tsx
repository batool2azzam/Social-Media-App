// PostDialog.tsx
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  CardMedia,
  Avatar,
  Grid,
  Card,
  TextField,
} from "@mui/material";
import LikeIcon from "../../assets/images/like.png";
import CommentIcon from "../../assets/images/comment.png";
import ShareIcon from "../../assets/images/share.png";
import { PostData, Comment } from "../../types/types";
import { fetchPostWithComments, addComment } from "../../api/postApi";
import { useUser } from "../../contexts/UserContext";
import "./PostDialog.css";

const PostDialog: React.FC<{
  postId: number;
  onClose: () => void;
  open: boolean;
}> = ({ postId, onClose, open }) => {
  const { setUser } = useUser();
  const [postData, setPostData] = useState<PostData | null>(null);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (open && postId) {
      fetchPostWithComments(postId)
        .then((data) => setPostData(data))
        .catch((error) => console.error("Error fetching post data:", error));
    }
  }, [open, postId]);

  const handleCommentSubmit = async () => {
    if (!newComment) return;
    try {
      await addComment(postId, newComment);
      const updatedPost = await fetchPostWithComments(postId);
      setPostData(updatedPost);
      setNewComment("");
      setUser((prevUser) => {
        if (!prevUser) return prevUser;
        return {
          ...prevUser,
          comments_count: prevUser.comments_count + 1,
        };
      });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
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
      {postData && (
        <Card
          className="add-post"
          sx={{
            borderRadius: "10px",
            boxShadow: "none",
            backgroundColor: "white",
            padding: 2,
          }}
        >
          <DialogTitle>
            <Box display="flex" alignItems="center">
              <Avatar
                alt={postData.author.name}
                src={postData.author.profile_image}
              />
              <Box marginLeft={2}>
                <strong>{postData.author.username}</strong>
              </Box>
            </Box>
          </DialogTitle>
          <DialogContent>
            <CardMedia
              component="img"
              alt="Post"
              image={postData.image}
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
                <img src={CommentIcon} alt="Comment" className="post-icons" />
                <img src={ShareIcon} alt="Share" className="post-icons" />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  {postData.comments_count} comments
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="h6" className="post-title">
              {postData.title}
            </Typography>
            <Typography variant="body1" className="post-text">
              {postData.body}
            </Typography>
            <Box mt={2}>
              {postData.comments.map((comment: Comment) => (
                <Box
                  key={comment.id}
                  display="flex"
                  alignItems="center"
                  mb={2}
                  sx={{
                    background: "rgba(0, 0, 0, 0.06)",
                    padding: 1,
                    borderRadius: 2,
                  }}
                >
                  <Avatar
                    alt={comment.author.name}
                    src={comment.author.profile_image}
                    sx={{ marginRight: 2 }}
                  />
                  <Box>
                    <Typography variant="body2" color="textSecondary">
                      <strong>{comment.author.username}</strong>
                    </Typography>
                    <Typography variant="body1">{comment.body}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box mt={2} display="flex" alignItems="center">
              <TextField
                fullWidth
                label="Add a comment"
                variant="filled"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
                  color: "white",
                  borderRadius: 2,
                  paddingX: 2,
                  lineHeight: 3,
                }}
                onClick={handleCommentSubmit}
              >
                Comment
              </Button>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Close</Button>
          </DialogActions>
        </Card>
      )}
    </Dialog>
  );
};

export default PostDialog;
