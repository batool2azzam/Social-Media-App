import React, { useEffect, useRef, useState } from "react";
import { fetchPosts } from "../../api/postApi";
import Post from "../Post/Post";
import "./Posts.css";
import { PostData } from "../../types/types";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [morePosts, setMorePosts] = useState<boolean>(true);
  const loadingRef = useRef<boolean>(false);

  const loadPosts = async (page: number) => {
    loadingRef.current = true;
    setLoading(true);

    try {
      const newPosts = await fetchPosts(page);

      if (newPosts.length === 0) {
        setMorePosts(false);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setCurrentPage(page);
      }
    } catch (error: any) {
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  };

  useEffect(() => {
    loadPosts(currentPage);
  }, []);

  const handleScroll = () => {
    if (
      morePosts &&
      !loadingRef.current &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
    ) {
      loadPosts(currentPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [morePosts, currentPage]);

  return (
    <div className="posts">
      {posts.map((post) => (
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
