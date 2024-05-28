import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from "@mui/material";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import "./Followers.css";

const Followers: React.FC = () => {
  const followers = [
    { name: "Andrew Thomas", username: "@AndrewThomas", avatar: img1 },
    { name: "Hulk Buster", username: "@HulkBuster", avatar: img2 },
    { name: "Thor", username: "@ThunderMaster", avatar: img3 },
  ];

  return (
    <Box className="followers">
      <Typography variant="h6">Who is following you</Typography>
      <List>
        {followers.map((follower) => (
          <ListItem
            key={follower.name}
            className="follower-item"
            sx={{ padding: 0 }}
          >
            <ListItemAvatar>
              <Avatar
                alt={follower.name}
                src={follower.avatar}
                sx={{ width: "50px", height: "50px" }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={follower.name}
              secondary={follower.username}
            />
            <Button
              variant="contained"
              className="follow-button"
              sx={{
                color: "white",
                textTransform: "none",
                bordeRadius: "29px",
              }}
            >
              Follow
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Followers;
