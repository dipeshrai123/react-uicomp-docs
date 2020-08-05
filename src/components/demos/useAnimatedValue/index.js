import React, { useState } from "react";
import { AnimatedBlock, useAnimatedValue } from "react-uicomp";

export default function UseAnimatedValue() {
  const [on, setOn] = useState(true);
  const opacity = useAnimatedValue(on ? 1 : 0);

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
      <button onClick={() => setOn((prev) => !prev)}>Toggle Opacity</button>
    </div>
  );
}
