import React from "react";

import NavGroup from "./components/NavGroup.component";

const Sidenav = () => {
  return (
    <>
      <NavGroup
        title="Introduction"
        navItems={[
          { name: "Quick Start", link: "/docs/quick-start" },
          {
            name: "Why use React UI Comp?",
            link: "/docs/why-use-react-uicomp",
          },
        ]}
      />

      <NavGroup
        title="Animation"
        navItems={[
          {
            name: "useAnimatedValue()",
            link: "/docs/use-animated-value",
          },
          { name: "AnimatedBlock", link: "/docs/animated-block" },
          { name: "interpolate()", link: "/docs/interpolate" },
          { name: "useMountedValue()", link: "/docs/use-mounted-value" },
          { name: "ScrollableBlock", link: "/docs/scrollable-block" },
          { name: "useScroll()", link: "/docs/use-scroll" },
          { name: "useMeasure()", link: "/docs/use-measure" },
          // { name: "useMouseMove()", link: "/docs/use-mousemove" },
          // { name: "useWindowDimension()", link: "/docs/use-window-dimension" },
          // { name: "useOutsideClick()", link: "/docs/use-outside-click" },
        ]}
      />

      <NavGroup
        title="Components"
        navItems={[
          {
            name: "Dropdown",
            link: "/docs/dropdown",
          },
          { name: "DropdownMenu", link: "/docs/dropdown-menu" },
          { name: "Modal", link: "/docs/modal" },
          { name: "Toast", link: "/docs/toast" },
        ]}
      />
    </>
  );
};

const SideNavComp = () => {
  return (
    <div className="sidenav">
      <div className="sidenav-web">
        <Sidenav />
      </div>

      <div className="sidenav-mobile">
        <Sidenav />
      </div>
    </div>
  );
};

export default SideNavComp;
