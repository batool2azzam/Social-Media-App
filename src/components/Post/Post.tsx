import React, { useEffect, useState } from "react";
import { Card, CardMedia, Box, Avatar, Typography } from "@mui/material";
import { fetchPosts } from "../../api/api";
import "./Post.css";
import LikeIcon from "../../assets/images/like.png";
import CommentIcon from "../../assets/images/comment.png";
import ShareIcon from "../../assets/images/share.png";
interface Author {
  id: number;
  profile_image: string;
  username: string;
  name: string;
}

interface PostData {
  id: number;
  title: string;
  body: string;
  author: Author;
  image: string;
  created_at: string;
  comments_count: number;
}

const Post: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await fetchPosts(20);
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cont">
      {posts.map((post) => (
        <Card key={post.id} className="post" sx={{ borderRadius: "10px" }}>
          <Box
            display="flex"
            alignItems="center"
            marginBottom={1}
            marginTop={-1}
          >
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
      ))}
    </div>
  );
};

export default Post;
