import React from "react";
import { ActiveLink } from "react-uicomp";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav__nav-group">
        <h3 className="sidenav__title">Introduction</h3>
        <ul className="sidenav__navitems">
          <li className="sidenav__navitem">
            <ActiveLink
              to="/start"
              className="sidenav__navlink"
              activeClassName="sidenav__navlink--active"
            >
              Quick Start
            </ActiveLink>
          </li>
          <li className="sidenav__navitem">
            <ActiveLink
              to="/hi"
              className="sidenav__navlink"
              activeClassName="sidenav__navlink--active"
            >
              Quick Hi
            </ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
