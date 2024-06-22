import {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { fetchPosts, fetchUserPosts } from "../../api/postApi";
import Post from "../Post/Post";
import "./Posts.css";
import { PostData } from "../../types/types";

interface PostsProps {
  userId?: number;
}

const Posts = forwardRef<any, PostsProps>(({ userId }, ref) => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [morePosts, setMorePosts] = useState<boolean>(true);
  const loadingRef = useRef<boolean>(false);

  const loadPosts = async (page: number) => {
    loadingRef.current = true;
    setLoading(true);

    try {
      const newPosts = userId
        ? await fetchUserPosts(userId)
        : await fetchPosts(page);

      if (newPosts.length === 0) {
        setMorePosts(false);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setCurrentPage(page);
      }
    } catch (error: any) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  };

  const refreshPosts = async () => {
    setLoading(true);
    try {
      const newPosts = await fetchPosts(1);
      setPosts((prevPosts) => [...newPosts, ...prevPosts]);
      setCurrentPage(1);
      setMorePosts(true);
    } catch (error: any) {
      console.error("Error refreshing posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useImperativeHandle(ref, () => ({
    refreshPosts,
  }));

  useEffect(() => {
    loadPosts(currentPage);
  }, [userId]);

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

  const handleDeletePost = (postId: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          userId={post.author.id}
          onDelete={handleDeletePost}
        />
      ))}
      {loading && (
        <div className="loading-container">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
});

export default Posts;
