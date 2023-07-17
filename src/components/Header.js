import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header className="header-container">
      <img
        src={"JoyRocknielAbadi.jpeg"}
        alt="Joy Rockniel Abadi"
        className="profile-photo"
      />
      <h1>Joy Rockniel Abadi</h1>
      <p>Informatika 2022</p>
    </header>
  );
};

export default Header;
