import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "./Trends.css";

const trends = [
  { name: "#Minions", shares: "97k shares" },
  { name: "#Avengers", shares: "80.5k shares" },
  { name: "#Zainkeepscode", shares: "75.5k shares" },
  { name: "#Reactjs", shares: "72k shares" },
  { name: "#Elon Musk", shares: "71.9k shares" },
  { name: "#Need for Speed", shares: "20k shares" },
];

const Trends: React.FC = () => {
  return (
    <Card className="trends" sx={{ borderRadius: "20px" }}>
      <CardContent>
        <Typography variant="h6">Trends for you</Typography>
        <List>
          {trends.map((trend) => (
            <ListItem key={trend.name} className="trend-item">
              <ListItemText
                primary={trend.name}
                secondary={trend.shares}
                primaryTypographyProps={{ className: "trend-name" }}
                secondaryTypographyProps={{ className: "trend-shares" }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Trends;
