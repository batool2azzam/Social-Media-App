import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../api/api";
import {
  selectPosts,
  selectLoading,
  setPosts,
  setLoading,
} from "../../redux/postsSlice";
import Post from "../Post/Post";
import "./Posts.css";
import { PostData } from "../../types/types";

const Posts: React.FC = () => {
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadPosts = async () => {
      dispatch(setLoading(true));
      try {
        const data = await fetchPosts(1);
        dispatch(setPosts(data));
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    loadPosts();
  }, [dispatch]);

  return (
    <div className="posts">
      {posts.map((post: PostData) => (
        <Post key={post.id} post={post} />
      ))}
      {loading && (
        <div className="loading-container">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default Posts;
