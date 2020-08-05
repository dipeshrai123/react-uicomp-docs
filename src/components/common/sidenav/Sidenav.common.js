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
          // { name: "useAuth()", link: "/use-auth" },
        ]}
      />
      <NavGroup
        title="Theming"
        navItems={[
          {
            name: "Theme Provider",
            link: "/docs/theme-provider",
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
          { name: "binaryInterpolate()", link: "/docs/binary-interpolate" },
          { name: "useScroll()", link: "/docs/use-scroll" },
          { name: "useMeasure()", link: "/docs/use-measure" },
          { name: "useMouseMove()", link: "/docs/use-mousemove" },
          { name: "useDrag()", link: "/docs/use-drag" },
          { name: "useWindowDimension()", link: "/docs/use-window-dimension" },
          { name: "useOutsideClick()", link: "/docs/use-outside-click" },
        ]}
      />
    </div>
  );
};

export default Sidenav;
