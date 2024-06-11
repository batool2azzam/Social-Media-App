import React, { useState } from "react";
import { Card, CardMedia, Box, Avatar, Typography, Grid } from "@mui/material";
import LikeIcon from "../../assets/images/like.png";
import CommentIcon from "../../assets/images/comment.png";
import ShareIcon from "../../assets/images/share.png";
import PostDialog from "../PostDialog/PostDialog";
import { PostData } from "../../types/types";
import "./Post.css";

const Post: React.FC<{ post: PostData }> = ({ post }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCommentsClick = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
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
          <Box marginLeft={2}>
            <strong>{post.author.username}</strong>
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
          <Typography variant="body2" color="textSecondary">
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
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop={2}
      ></Box>

      <PostDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        postId={post.id}
      />
    </Card>
  );
};

export default Post;
