import React from "react";

import NavGroup from "./components/NavGroup.component";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <NavGroup
        title="Introduction"
        navItems={[
          { name: "Quick Start", link: "/quick-start" },
          { name: "Why use React UI Comp?", link: "/why-use-react-uicomp" },
        ]}
      />
      <NavGroup
        title="Routing"
        navItems={[
          {
            name:
              "Navigation : Define routes (public, private and protected) and user roles.",
            link: "/navigation",
          },
          { name: "Auth", link: "/auth" },
          { name: "useNavigation()", link: "/use-navigation" },
          { name: "useAuth()", link: "/use-auth" },
          // { name: "useAuth()", link: "/use-auth" },
        ]}
      />
      <NavGroup
        title="Theming"
        navItems={[
          {
            name: "Theme Provider",
            link: "/theme-provider",
          },
          { name: "useTheme()", link: "/use-theme" },
        ]}
      />
      <NavGroup
        title="Animation"
        navItems={[
          {
            name: "useAnimatedValue()",
            link: "/use-animated-value",
          },
          { name: "AnimatedBlock", link: "/animated-block" },
        ]}
      />
    </div>
  );
};

export default Sidenav;
