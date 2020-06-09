import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";

function Header() {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="menu-items">
        <Link className="menu-item" to="/shop">
          Shop
        </Link>
        <Link className="menu-item" to="/contact">
          Contact
        </Link>
        <Link className="menu-item" to="/signin">
          SignIn
        </Link>
      </div>
    </div>
  );
}

export default Header;
