import React from "react";
import "./Home.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Post from "../../components/Post/Post";
import Trends from "../../components/Trends/Trends";
import Followers from "../../components/Followers/Followers";
import AddPost from "../../components/AddPost/AddPost";
import { Button, Grid } from "@mui/material";
import IconsGroup from "../../components/IconsGroup/IconsGroup";
import Explore from "../../components/Explore/Explore";

const Home: React.FC = () => {
  return (
    <Grid container spacing={3} className="home">
      <Grid item xs={12} md={3}>
        <Explore />
        <ProfileCard />
        <Followers />
      </Grid>
      <Grid item xs={12} md={6}>
        <AddPost />
        <Post />
        <Post />
      </Grid>
      <Grid item xs={12} md={3}>
        <IconsGroup />
        <Trends />
        <Button
          variant="contained"
          color="primary"
          className="share-button-right"
        >
          Share
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
