import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import Code from "../common/code/Code.common";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";

const UseAnimatedValue = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>UseAnimatedValue()</Title>
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
        <Code>const opacity = useAnimatedValue(0)</Code>
        <Paragraph>
          Here we create an animated node called{" "}
          <span className="highlight">opacity</span> at an initial value initial
          value <span className="highlight">0</span>. And opacity has a property
          called <span className="highlight">value</span>. At any time we set
          opacity.value to some number then it changes its value from 0 to that
          number.
        </Paragraph>
        <Paragraph>
          We can change the <span className="highlight">opacity.value</span> to{" "}
          <span className="highlight">1</span> if a user clicks a button. It
          auto animates the value from 0 to 1.
        </Paragraph>
        <Code>
          {"<button onClick = { () => opacity.value = 1 }>Click Me</button>"}
        </Code>
      </section>
      <section>
        <SecondaryTitle>Example</SecondaryTitle>
        <Code>
          {`
import { AnimatedBlock, useAnimatedValue } from "react-uicomp";

export default function() {
  const opacity = useAnimatedValue(0); // It initializes opacity object with value 0.

  return (
      <div>
          {/* AnimatedBlock component should be used with useAnimatedValue() */}
          <AnimatedBlock 
            style={{
              opacity: opacity.value, // value property should be passed
              width: 100,
              padding: 20,
              background: "#39F",
            }}
          >
            ANIMATED
          </AnimatedBlock>
          
          {/* Animating from 0 to 1 is very simple just assign opacity.value = 1 */}
          <button onClick={() => opacity.value = 1}>Animate Me</button>
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
