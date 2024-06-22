import React, { useRef } from "react";
import "./Home.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Posts from "../../components/Posts/Posts";
import Trends from "../../components/Trends/Trends";
import Followers from "../../components/Followers/Followers";
import AddPost from "../../components/AddPost/AddPost";
import { Button, Grid } from "@mui/material";
import IconsGroup from "../../components/IconsGroup/IconsGroup";
import Explore from "../../components/Explore/Explore";
import { useUser } from "../../contexts/UserContext";

const Home: React.FC = () => {
  const { user } = useUser();
  const postsRef = useRef<any>();

  const refreshPosts = () => {
    if (postsRef.current) {
      postsRef.current.refreshPosts();
    }
  };

  return (
    <Grid container spacing={3} className="home">
      <Grid
        item
        xs={12}
        md={3}
        className="left-column"
        sx={{ width: "100%", paddingRight: "24px" }}
      >
        <Explore />
        <ProfileCard user={user} haveButton={true} />
        <Followers />
      </Grid>
      <Grid item xs={12} md={6} className="middle-column">
        <AddPost onPostAdded={refreshPosts} />
        <Posts ref={postsRef} />
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        className="right-column"
        sx={{ width: "100%", paddingRight: "24px", paddingLeft: "0" }}
      >
        <IconsGroup />
        <Trends />
        <Button
          variant="contained"
          color="primary"
          className="share-button-right"
          sx={{
            background: "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
            color: "white",
            borderRadius: 2,
            paddingX: 3,
          }}
        >
          Share
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
