import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import Code from "../common/code/Code.common";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import UseAnimatedValueExample from "../demos/useAnimatedValue";

const AnimatedBlock = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>Animated Block</Title>
      <section>
        <Paragraph>
          Animated Node returned from{" "}
          <span className="highlight">useAnimatedValue()</span> hook is not
          directly read by <span className="highlight">HTMLElement</span>. It
          needs a special type of element that can read it. So, we have an{" "}
          <span className="highlight">{"<AnimatedBlock>"}</span> component which
          inherits all properties of the{" "}
          <span className="highlight">{"<div>"}</span> element and it can accept
          the animated nodes returned from{" "}
          <span className="highlight">useAnimatedValue()</span> hook.
        </Paragraph>
        <section>
          <SecondaryTitle>Demo</SecondaryTitle>

          <UseAnimatedValueExample />
        </section>
        <SecondaryTitle>Example</SecondaryTitle>
        <Code>
          {`
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
       `}
        </Code>
      </section>
    </div>
  );
};

export default AnimatedBlock;
