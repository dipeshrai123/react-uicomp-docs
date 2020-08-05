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
        ]}
      />
    </div>
  );
};

export default Sidenav;
