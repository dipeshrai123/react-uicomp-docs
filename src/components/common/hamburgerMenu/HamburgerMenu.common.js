import React from "react";
import { AnimatedBlock, useAnimatedValue, interpolate } from "react-ui-animate";

import { useAuth } from "react-auth-navigation";

const styles = {
  container: {
    cursor: "pointer",
  },
  menuitem: {
    width: 40,
    height: 4,
    background: "#353535",
    marginBottom: 6,
    transformOrigin: "center",
  },
};

export default function HamburderMenu() {
  const { drawerOpen } = useAuth();
  const animation = useAnimatedValue(drawerOpen);
  return (
    <div style={styles.container}>
      <AnimatedBlock
        style={{
          ...styles.menuitem,
          transform: interpolate(
            animation.value,
            [0, 1],
            [
              "rotate(0deg) translate(0px, 0px)",
              "rotate(45deg) translate(4px, 0px)",
            ]
          ),
        }}
      />
      <AnimatedBlock
        style={{
          ...styles.menuitem,
          opacity: interpolate(animation.value, [0, 1], [1, 0]),
        }}
      />
      <AnimatedBlock
        style={{
          ...styles.menuitem,
          transform: interpolate(
            animation.value,
            [0, 1],
            [
              "rotate(0deg) translate(0px, 0px)",
              "rotate(-45deg) translate(12px, -13px)",
            ]
          ),
        }}
      />
    </div>
  );
}
