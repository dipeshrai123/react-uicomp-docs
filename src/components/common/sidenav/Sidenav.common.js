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
    </div>
  );
};

export default Sidenav;
