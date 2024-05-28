import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import "./Post.css";
import PostPic from "../../assets/images/postpic1.jpg";
import LikeIcon from "../../assets/images/like.png";
import CommentIcon from "../../assets/images/comment.png";
import ShareIcon from "../../assets/images/share.png";

const Post: React.FC = () => {
  return (
    <Card
      className="post"
      sx={{
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <CardMedia
          component="img"
          alt="Post"
          image={PostPic}
          className="post-pic"
        />
        <Box
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          gap={2}
          margin={0}
        >
          <Box display="flex" alignItems="center">
            <img src={LikeIcon} alt="Like" className="post-icons" />
            <img src={CommentIcon} alt="Comment" className="post-icons" />
            <img src={ShareIcon} alt="Share" className="post-icons" />
          </Box>
          <Typography variant="body2" color="textSecondary">
            2300 likes
          </Typography>
          <Typography variant="body1" className="post-text">
            Tzuyu Happy New Year all friends! #2023
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Post;
