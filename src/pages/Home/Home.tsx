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
      <Grid item xs={12} md={3} className="left-column">
        <Explore />
        <ProfileCard />
        <Followers />
      </Grid>
      <Grid item xs={12} md={6} className="middle-column">
        <AddPost />
        <Post />
        <Post />
      </Grid>
      <Grid item xs={12} md={3} className="right-column">
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
