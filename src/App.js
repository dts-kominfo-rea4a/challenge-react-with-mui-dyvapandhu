import {
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  List,
} from "@mui/material";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import Header from "./components/Header";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
import { useState } from "react";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON);

  const addNewContact = (newContact) => {
    setContacts((prevContacts) => {
      const newContacts = [...prevContacts, newContact];
      return newContacts;
    });
  };

  return (
    <div className="App">
      <Container>
        <Header />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ContactForm addContact={addNewContact} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <List>
                  {contacts.map((contact, index) => {
                    return (
                      <div key={index}>
                        <Contact data={contact} />
                        <Divider component="li" />
                      </div>
                    );
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
