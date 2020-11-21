import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import Code from "../common/code/Code.common";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import UseAnimatedValueExample from "../demos/useAnimatedValue";

const UseAnimatedValue = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>useAnimatedValue()</Title>
      <section>
        <Paragraph>
          <span className="highlight">useAnimatedValue()</span> is a very
          flexible and powerful hook that lets you define animated values. Its
          value is preserved until the component unmounts and doesn’t change
          during the state change and re-render of a component.
        </Paragraph>
        <Paragraph>
          <span className="highlight">useAnimatedValue()</span> returns an
          animated node initialized at
          <span className="highlight">initialValue</span>. Animated Node is a
          special type of Node that has <span className="highlight">value</span>
          property which is automatically animated if initialValue changes at
          some point or if we set its value to some number.
        </Paragraph>
        <Paragraph>
          Let us define an animated value called{" "}
          <span className="highlight">opacity</span>.
        </Paragraph>
        <Code>const opacity = useAnimatedValue(1)</Code>
        <Paragraph>
          Here we create an animated node called{" "}
          <span className="highlight">opacity</span> at an initial value initial
          value <span className="highlight">1</span>. And opacity has a property
          called <span className="highlight">value</span>. At any time we set
          opacity.value to some number then it changes its value from 1 to that
          number smoothly.
        </Paragraph>
        <Paragraph>
          We can change the <span className="highlight">opacity.value</span> to{" "}
          <span className="highlight">0</span> if a user clicks a button. It
          auto animates the value from 1 to 0.
        </Paragraph>
        <Code>
          {"<button onClick = { () => opacity.value = 0 }>Hide</button>"}
        </Code>
      </section>
      <section>
        <SecondaryTitle>Demo</SecondaryTitle>

        <UseAnimatedValueExample />
      </section>
      <section>
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

export default UseAnimatedValue;
