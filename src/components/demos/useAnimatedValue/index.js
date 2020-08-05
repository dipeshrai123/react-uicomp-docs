import React from "react";
import { AnimatedBlock, useAnimatedValue } from "react-uicomp";

export default function UseAnimatedValue() {
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
        }}
      />
      <br />
      <button onClick={() => (opacity.value = 1)}>Show</button>
      <button onClick={() => (opacity.value = 0)}>Hide</button>
    </div>
  );
}
