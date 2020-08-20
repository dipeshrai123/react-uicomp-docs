import React from "react";
import { AnimatedBlock, useAnimatedValue, interpolate } from "react-uicomp";

export default function Interpolate() {
  const opacity = useAnimatedValue(1);

  return (
    <div>
      <AnimatedBlock
        style={{
          width: 100,
          height: 100,
          borderRadius: 4,
          background: "#39F",
          opacity: opacity.value,
          transform: interpolate(
            opacity.value,
            [0, 1],
            ["scale(0.5)", "scale(1)"]
          ),
        }}
      />
      <br />
      <button onClick={() => (opacity.value = 1)}>Show</button>
      <button onClick={() => (opacity.value = 0)}>Hide</button>
    </div>
  );
}
