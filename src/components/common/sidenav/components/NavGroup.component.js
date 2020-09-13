import React, { useState } from "react";
import {
  ActiveLink,
  useMeasure,
  useAnimatedValue,
  AnimatedBlock,
} from "react-uicomp";

const NavGroup = ({ title, navItems }) => {
  const { handler, height } = useMeasure();
  const [expanded, setExpanded] = useState(true);
  const animatedHeight = useAnimatedValue(expanded ? height : 0);

  return (
    <div className="sidenav__nav-group">
      <h3 className="sidenav__title" onClick={() => setExpanded(!expanded)}>
        {title}
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
