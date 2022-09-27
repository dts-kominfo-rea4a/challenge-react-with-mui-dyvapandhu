// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Divider } from "@mui/material";
import React from "react";
import "../components/Header.css";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app

const title = "Call a Friend";
const subTitle = "Your friendly contact app";
const Header = () => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Divider>{subTitle}</Divider>
    </div>
  );
};

export default Header;
