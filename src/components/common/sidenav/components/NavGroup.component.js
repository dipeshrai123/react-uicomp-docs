import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/all";
import { ActiveLink } from "react-auth-navigation";
import { useMeasure, useAnimatedValue, AnimatedBlock } from "react-uicomp";

const NavGroup = ({ title, navItems }) => {
  const { handler, height } = useMeasure();
  const [expanded, setExpanded] = useState(true);
  const animatedHeight = useAnimatedValue(expanded ? height : 0);

  return (
    <div className="sidenav__nav-group">
      <h3 className="sidenav__title" onClick={() => setExpanded(!expanded)}>
        <span className="sidenav-title">{title}</span>

        <span className={expanded ? "dropdownicon active" : "dropdownicon"}>
          <BsFillCaretDownFill size={12} />
        </span>
      </h3>
      <AnimatedBlock
        style={{
          height: animatedHeight.value,
          overflow: "hidden",
        }}
      >
        <ul
          {...handler}
          className="sidenav__navitems"
          style={{ paddingBottom: 5 }}
        >
          {navItems.map((item, index) => (
            <li key={index} className="sidenav__navitem">
              <ActiveLink
                to={item.link}
                className="sidenav__navlink"
                activeClassName="sidenav__navlink--active"
              >
                {item.name}
              </ActiveLink>
            </li>
          ))}
        </ul>
      </AnimatedBlock>
    </div>
  );
};

export default NavGroup;
