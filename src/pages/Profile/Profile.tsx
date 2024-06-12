import React, { useEffect, useState } from "react";
import "./Profile.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Posts from "../../components/Posts/Posts";
import Trends from "../../components/Trends/Trends";
import UserInfoCard from "../../components/UserInfoCard/UserInfoCard";
import Followers from "../../components/Followers/Followers";
import AddPost from "../../components/AddPost/AddPost";
import { Button, Grid } from "@mui/material";
import IconsGroup from "../../components/IconsGroup/IconsGroup";
import Explore from "../../components/Explore/Explore";
import { useParams } from "react-router-dom";
import { fetchUserData } from "../../api/userApi";
import { getLocalStorageUser } from "../../utils/auth";
import { User } from "../../types/types";
import { useUser } from "../../contexts/UserContext";

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userr, setUser] = useState<User | null>(null);
  const { user } = useUser();
  useEffect(() => {
    const fetchData = async () => {
      let profileData;
      if (userId) {
        profileData = await fetchUserData(Number(userId));
      } else {
        profileData = getLocalStorageUser();
      }
      setUser(profileData);
    };

    fetchData();
  }, [userId]);

  if (!userr)
    return (
      <div className="loading-container">
        <div className="loader"></div>
      </div>
    );

  return (
    <Grid container spacing={3} className="profile">
      <Grid
        item
        xs={12}
        md={3}
        className="left-column"
        sx={{ width: "100%", paddingRight: "24px" }}
      >
        <Explore />
        <UserInfoCard user={userr} />
        <Followers />
      </Grid>
      <Grid item xs={12} md={6} className="middle-column">
        <ProfileCard haveButton={false} user={userr} />
        {userId == user?.id && <AddPost />}
        <Posts userId={userr.id} />
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

export default Profile;
