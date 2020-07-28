import React from "react";
import { useMeasure } from "react-uicomp";

import NavGroup from "./components/NavGroup.component";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <NavGroup
        title="Introduction"
        navItems={[
          { name: "Quick Start", link: "/start" },
          { name: "QC STRT", link: "/hehe" },
        ]}
      />
      <NavGroup
        title="Introduction"
        navItems={[
          { name: "Quick Start", link: "/start" },
          { name: "QC STRT", link: "/hehe" },
        ]}
      />
    </div>
  );
};

export default Sidenav;
