import React from "react";
import "./Explore.css";
import TwitterIcon from "../../assets/images/logo.png";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
const Explore: React.FC = () => {
  return (
    <div className="explore-container">
      <img src={TwitterIcon} alt="Twitter" className="twitter-icon" />
      <TextField
        sx={{ width: "100%" }}
        id="input-with-icon-textfield"
        label="#Explore"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon
                sx={{
                  width: "40px",
                  height: "40px",
                  color: "#fef3f3",
                  backgroundColor: "#ff7a22",
                  borderRadius: "5px",
                }}
              />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </div>
  );
};

export default Explore;
