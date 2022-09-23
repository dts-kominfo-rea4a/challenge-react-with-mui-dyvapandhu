// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({data}) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <Card>
      <CardContent>
        <List>
          {data.map((contact, index) => {
            return (
              <div key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src={contact.photo}
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
                      {contact.name}
                    </Typography>
                    <Typography
                      sx={{ mb: 0 }}
                      variant="caption"
                      display="block"
                      gutterBottom
                    >
                      {contact.phone}
                    </Typography>
                    <Typography
                      sx={{ mb: 0 }}
                      variant="caption"
                      display="block"
                      gutterBottom
                    >
                      {contact.email}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <Divider component="li" />
              </div>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default Contact;
