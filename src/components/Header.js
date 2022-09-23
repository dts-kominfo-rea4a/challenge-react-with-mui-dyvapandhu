// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
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
      <p>{subTitle}</p>
    </div>
  );
};

export default Header;
