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
    <Card className="trends" sx={{ borderRadius: "10px" }}>
      <CardContent>
        <Typography variant="h5">
          <strong>Trends for you</strong>
        </Typography>
        <List>
          {trends.map((trend) => (
            <ListItem key={trend.name} className="trend-item">
              <ListItemText
                primary={<strong>{trend.name}</strong>}
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
