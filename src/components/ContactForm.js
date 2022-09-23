// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, CardContent, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = (props) => {
  const objContact = {
    name: "",
    phone: "",
    email: "",
    photo: "",
  };
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [newContact, setNewContact] = useState(objContact);

  const handleChangeName = (event) => {
    setNewContact((prevContact) => {
      return { ...prevContact, name: event.target.value };
    });
  };

  const handleChangePhone = (event) => {
    setNewContact((prevContact) => {
      return { ...prevContact, phone: event.target.value };
    });
  };
  const handleChangeEmail = (event) => {
    setNewContact((prevContact) => {
      return { ...prevContact, email: event.target.value };
    });
  };
  const handleChangePhoto = (event) => {
    setNewContact((prevContact) => {
      return { ...prevContact, photo: event.target.value };
    });
  };

  const doSubmit = () => {
    props.addContact(newContact);
    setNewContact(objContact)
  };

  return (
    <Card>
      <CardContent>
        <div>
          <TextField
            id="filled-basic"
            label="Name*"
            variant="filled"
            fullWidth
            sx={{ mb: 2 }}
            value={newContact.name}
            onChange={handleChangeName}
          />
        </div>
        <div>
          <TextField
            id="filled-basic"
            label="Phone*"
            variant="filled"
            fullWidth
            sx={{ mb: 2 }}
            value={newContact.phone}
            onChange={handleChangePhone}
          />
        </div>
        <div>
          <TextField
            id="filled-basic"
            label="Email*"
            variant="filled"
            fullWidth
            sx={{ mb: 2 }}
            value={newContact.email}
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <TextField
            id="filled-basic"
            label="Photo URL*"
            variant="filled"
            fullWidth
            sx={{ mb: 2 }}
            value={newContact.photo}
            onChange={handleChangePhoto}
          />
        </div>
        <div>
          <Button color="success" variant="text" onClick={doSubmit}>
            ADD NEW
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
