import React from "react";
import { useAuth } from "react-auth-navigation";
import HamburderMenu from "../hamburgerMenu/HamburgerMenu.common";
import Logo from "../../../assets/icons/react-uicomp.svg";

const Header = () => {
  const { setDrawerOpen } = useAuth();
  return (
    <div className="header">
      <nav className="header__wrapper">
        <div
          className="header__menu"
          onClick={() => setDrawerOpen((prev) => !prev)}
        >
          <HamburderMenu />
        </div>

        <img src={Logo} alt="React UI Comp Logo" />
        <h2 className="header__title">React UI Comp</h2>

        <div className="npmversion">
          <a href="https://badge.fury.io/js/react-uicomp">
            <img
              src="https://badge.fury.io/js/react-uicomp.svg"
              alt="npm version"
              style={{
                width: 220 / 2,
                height: 40 / 2,
              }}
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
