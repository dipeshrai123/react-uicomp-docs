import React, { useEffect } from "react";
import InterpolateDemo from "../demos/interpolate";
import Title from "../common/title/Title";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Paragraph from "../common/paragraph/Paragraph";
import Code from "../common/code/Code.common";

const Interpolate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>interpolate()</Title>
      <section>
        <Paragraph>
          The basic concept of interpolate is to map the given value to another
          value based on given input and output range. For eg: Let’s say you
          want to change the opacity property from 0 to 1 when we scroll the
          document from 0 to 500. Making these kinds of interpolation is very
          convenient to make lots of different amazing animations.
        </Paragraph>
        <Paragraph>
          React UI Comp also provides a utility function interpolate() which can
          interpolate both animated nodes and normal numeric values from a given
          set of input range to output range. Output ranges can be string or
          numbers. By default, the value is extrapolated beyond the output range
          in case of numbers. It can be clamped to left / right or both
          according to your need.
        </Paragraph>
        <Paragraph>
          A basic mapping of a animated node from input range 0 to 1 to 0 to 500
          be
          <Code>
            {`
// Here opacity is animated node so it has .value property
interpolate(opacity.value, [0, 1], [0, 500])
        `}
          </Code>
        </Paragraph>
        <Paragraph>
          Let's take an example from the previous section. The box changes
          itsopacity to 0 when we click the hide button and to 1 when we click
          the show button. We also want the box to shrink to .5 scale if opacity
          is 0 and to 1 if opacity is 1.
        </Paragraph>
      </section>
      <section>
        <SecondaryTitle>Demo</SecondaryTitle>
        <InterpolateDemo />
      </section>
      <section>
        <SecondaryTitle>Example</SecondaryTitle>
        <Code>
          {`
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
          transform: interpolate(opacity.value, [0, 1], ["scale(0.5)", "scale(1)"]),
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

export default Interpolate;
