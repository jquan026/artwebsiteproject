import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import logo from "../img/LogoImg/awlHeaderLogo.avif";
import "./Logo.css";
import TemporaryDrawer from "../Menu";

function Logo() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <div className="logo-container">
      <img
        src={logo}
        alt="Logo"
        className="logo"
        onClick={() => navigate("/")} 
        style={{ cursor: "pointer" }} 
      />
      <TemporaryDrawer open={drawerOpen} onClose={toggleDrawer(false)} />
    </div>
  );
}

export default Logo;
