import React from "react";
import { useAuth } from "react-auth-navigation";
import { AnimatedBlock, useMountedValue, interpolate } from "react-ui-animate";

import NavGroup from "./components/NavGroup.component";

const Sidenav = () => {
  return (
    <>
      <NavGroup
        title="Introduction"
        navItems={[{ name: "Quick Start", link: "/docs/quick-start" }]}
      />

      <NavGroup
        title="Components"
        navItems={[
          {
            name: "Dropdown",
            link: "/docs/dropdown",
          },
          { name: "Menu", link: "/docs/menu" },
          { name: "Modal", link: "/docs/modal" },
          { name: "Toast", link: "/docs/toast" },
          { name: "RippleButton", link: "/docs/ripple-button" },
        ]}
      />
    </>
  );
};

const SideNavComp = () => {
  const { drawerOpen } = useAuth();
  const mountedValue = useMountedValue(drawerOpen, [0, 1, 0]);

  return (
    <div className="sidenav">
      <div className="sidenav-web">
        <Sidenav />
      </div>

      {mountedValue(
        (animation, mounted) =>
          mounted && (
            <AnimatedBlock
              style={{
                transform: interpolate(
                  animation.value,
                  [0, 1],
                  ["translateX(-280px)", "translateX(0px)"]
                ),
              }}
              className="sidenav-mobile"
            >
              <Sidenav />
            </AnimatedBlock>
          )
      )}
    </div>
  );
};

export default SideNavComp;
