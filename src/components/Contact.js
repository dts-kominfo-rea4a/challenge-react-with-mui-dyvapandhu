// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          src={data.photo}
          sx={{ mr: 4, width: 60, height: 60 }}
        />
      </ListItemAvatar>
      <ListItemText>
        <Typography
          sx={{ mb: 0 }}
          variant="subtitle1"
          display="block"
          gutterBottom
        >
          {data.name}
        </Typography>
        <Typography
          sx={{ mb: 0 }}
          variant="caption"
          display="block"
          gutterBottom
        >
          {data.phone}
        </Typography>
        <Typography
          sx={{ mb: 0 }}
          variant="caption"
          display="block"
          gutterBottom
        >
          {data.email}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};

export default Contact;
