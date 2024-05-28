import React from "react";
import { Box, IconButton } from "@mui/material";
import "./IconsGroup.css";
import homeIcon from "../../assets/images/home.png";
import settingsIcon from "../../assets/images/share.png";
import bellIcon from "../../assets/images/noti.png";
import chatIcon from "../../assets/images/comment.png";

const IconsGroup: React.FC = () => {
  return (
    <Box className="home-container">
      <IconButton>
        <img src={homeIcon} alt="Home" className="icon" />
      </IconButton>
      <IconButton>
        <img src={settingsIcon} alt="Settings" className="icon" />
      </IconButton>
      <IconButton>
        <img src={bellIcon} alt="Notifications" className="icon" />
      </IconButton>
      <IconButton>
        <img src={chatIcon} alt="Messages" className="icon" />
      </IconButton>
    </Box>
  );
};

export default IconsGroup;
