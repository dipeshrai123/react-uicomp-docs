import React from "react";

import NavGroup from "./components/NavGroup.component";

const Sidenav = () => {
  return (
    <div className="sidenav">
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
        title="Routing"
        navItems={[
          {
            name: "Navigation",
            link: "/docs/navigation",
          },
          { name: "Auth", link: "/docs/auth" },
          { name: "useNavigation()", link: "/docs/use-navigation" },
          { name: "useAuth()", link: "/docs/use-auth" },
        ]}
      />
      <NavGroup
        title="Theming"
        navItems={[
          {
            name: "Theme",
            link: "/docs/theme",
          },
          { name: "useTheme()", link: "/docs/use-theme" },
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
          // { name: "mix()", link: "/docs/mix" },
          // { name: "useScroll()", link: "/docs/use-scroll" },
          // { name: "useMeasure()", link: "/docs/use-measure" },
          // { name: "useMouseMove()", link: "/docs/use-mousemove" },
          // { name: "useDrag()", link: "/docs/use-drag" },
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
      <NavGroup
        title="API Reference"
        navItems={[
          {
            name: "useMeasure()",
            link: "/docs/api-ref/use-measure",
          },
          {
            name: "useAnimatedVallue()",
            link: "/docs/api-ref/use-animated-value",
          },
          {
            name: "interpolate()",
            link: "/docs/api-ref/interpolate",
          },
          {
            name: "useOutsideClick()",
            link: "/docs/api-ref/use-outside-click",
          },
          {
            name: "useMouseMove()",
            link: "/docs/api-ref/use-mouse-move",
          },
          {
            name: "useScroll()",
            link: "/docs/api-ref/use-scroll",
          },
          {
            name: "useMountedValue()",
            link: "/docs/api-ref/use-mounted-value",
          },
          {
            name: "useWindowDimension()",
            link: "/docs/api-ref/use-window-dimension",
          },
        ]}
      />
    </div>
  );
};

export default Sidenav;
