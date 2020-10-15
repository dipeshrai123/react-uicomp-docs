import React from "react";
import Logo from "../../../assets/icons/react-uicomp.svg";

const Header = () => {
  return (
    <div className="header">
      <nav className="header__wrapper">
        <img src={Logo} alt="React UI Comp Logo" />
        <h2 className="header__title">
          React UI Comp <span style={{ fontSize: 14 }}>v1.3.2</span>
        </h2>
      </nav>
    </div>
  );
};

export default Header;
