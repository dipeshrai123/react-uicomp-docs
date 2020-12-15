import React from "react";
import {
  AnimatedBlock,
  useAuth,
  useMountedValue,
  interpolate,
} from "react-uicomp";

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
          { name: "useWindowDimension()", link: "/docs/use-window-dimension" },
          { name: "useOutsideClick()", link: "/docs/use-outside-click" },
          // { name: "useMouseMove()", link: "/docs/use-mousemove" },
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
