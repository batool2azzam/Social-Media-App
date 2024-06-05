import React from "react";
import { Card, CardMedia, Box, Avatar, Typography } from "@mui/material";
import LikeIcon from "../../assets/images/like.png";
import CommentIcon from "../../assets/images/comment.png";
import ShareIcon from "../../assets/images/share.png";
import "./Post.css";
import { PostData } from "../../types/types";

const Post: React.FC<{ post: PostData }> = ({ post }) => {
  return (
    <Card key={post.id} className="post" sx={{ borderRadius: "10px" }}>
      <Box display="flex" alignItems="center" marginBottom={1} marginTop={-1}>
        <Avatar alt={post.author.name} src={post.author.profile_image} />
        <Box marginLeft={2}>
          <strong>{post.author.username}</strong>
        </Box>
      </Box>
      <CardMedia
        component="img"
        alt="Post"
        image={post.image}
        className="post-pic"
      />
      <Box display="flex" alignItems="center" width="15%">
        <img src={LikeIcon} alt="Like" className="post-icons" />
        <img src={CommentIcon} alt="Comment" className="post-icons" />
        <img src={ShareIcon} alt="Share" className="post-icons" />
      </Box>
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
      >
        <Typography variant="body2" color="textSecondary">
          {post.created_at}
        </Typography>
      </Box>
    </Card>
  );
};

export default Post;
