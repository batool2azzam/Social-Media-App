import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fca61f", // orange
    },
    secondary: {
      main: "#f5c32c", // yellow
    },
    text: {
      primary: "#242d49", // black
      secondary: "rgba(36, 45, 73, 0.65)", // gray
    },
    background: {
      paper: "rgba(255, 255, 255, 0.64)", // cardColor
      default: "#ffffff",
    },
    action: {
      hover: "#cfcdcd", // hrColor
    },
  },
});

export default theme;
