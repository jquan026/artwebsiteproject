import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./img/awlHeaderLogo.png";
import "./Logo.css"
import TemporaryDrawer from "./Menu"

function Logo() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <TemporaryDrawer open={drawerOpen} onClose={toggleDrawer(false)} />
      </div>
    );
}

export default Logo;