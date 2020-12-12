import React, { useEffect } from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
// import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Code from "../common/code/Code.common";

const ScrollableBlock = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>ScrollableBlock</Title>
      <section>
        <Paragraph>
          <span className="highlight">ScrollableBlock</span> is a Higher Order
          Component which is used for animating components when it appears on
          the viewport. You can specify either you want to animate components
          when it appears on the viewport for the first time or every time it
          appears on the viewport.
        </Paragraph>

        <Paragraph>So lets go ahead and see how it works.</Paragraph>

        <Paragraph>
          <span className="highlight">ScrollableBlock</span> takes a child as a
          function and passes an{" "}
          <span className="highlight">Animated Node</span> returned from
          useAnimatedValue() as a first argument which value animates from 0 to
          1 when it appears on viewport.
          <Code>
            {`
<ScrollableBlock>
{(animation) => (
  //...
)}
</ScrollableBlock>
        `}
          </Code>
        </Paragraph>

        <Paragraph>
          So, you could use <span className="highlight">AnimatedBlock</span>{" "}
          inside of it to animate its styles.
          <Code>
            {`
<ScrollableBlock direction="both">
{(animation) => (
  <AnimatedBlock
    style={{
      opacity: animation.value,
      transform: interpolate(animation.value, [0, 1], ["scale(0.6)", "scale(1)"])
    }}
    className="item"
  />
)}
</ScrollableBlock>
        `}
          </Code>
          <Paragraph>
            Here in this example, I have used animated node for opacity and
            interpolated it from scale 0.6 to 1.{" "}
            <span className="highlight">ScrollableBlock</span> accepts{" "}
            <span className="highlight">direction</span>
            prop which can be either "both" or "single". "both" represents
            always animate when it appears on the viewport and "single" which is
            by default represents at the first time only.
          </Paragraph>
        </Paragraph>
      </section>

      <section>
        <iframe
          src="https://codesandbox.io/embed/scrollableblock-q128z?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            height: 500,
            border: 0,
            borderRadius: 4,
            overflow: "hidden",
          }}
          title="ScrollableBlock"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </section>
    </div>
  );
};

export default ScrollableBlock;
