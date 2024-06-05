import React, { useEffect, useRef, useState } from "react";
import { fetchPosts } from "../../api/api";
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
      console.log("Failed to fetch posts.");
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  };

  useEffect(() => {
    console.log("Component mounted, loading initial posts");
    loadPosts(currentPage);
  }, []);

  const handleScroll = () => {
    console.log("Handle scroll triggered");
    console.log("Window Height + Scroll:", window.innerHeight + window.scrollY);
    console.log("Document Height:", document.body.offsetHeight);

    if (
      morePosts &&
      !loadingRef.current &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
    ) {
      console.log("Loading more posts");
      loadPosts(currentPage + 1);
    }
  };

  useEffect(() => {
    console.log("Attaching scroll event listener");
    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("Detaching scroll event listener");
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
