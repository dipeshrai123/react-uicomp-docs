import React, { useEffect } from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Code from "../common/code/Code.common";

const UseMeasurePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>useMeasure()</Title>
      <section>
        <Paragraph>
          <span className="highlight">useMeasure()</span> hook lets you to
          measure the any HTML Element you want to measure. It accepts a
          callback function as its argument which gives the measurement event
          with following properties:
        </Paragraph>
        <ul className="list">
          <li className="list__item">
            <span className="highlight">
              <b>left</b>
            </span>{" "}
            represents how far is the element from the left of a document. It
            also accounts horizontal page offset.
          </li>
          <li className="list__item">
            <span className="highlight">
              <b>top</b>
            </span>{" "}
            represents how far is the element from the top of a document. It
            also accounts vertical page offset.
          </li>
          <li className="list__item">
            <span className="highlight">
              <b>width</b>
            </span>{" "}
            represents the width of an element.
          </li>
          <li className="list__item">
            <span className="highlight">
              <b>height</b>
            </span>{" "}
            represents the height of an element.
          </li>
          <li className="list__item">
            <span className="highlight">
              <b>vLeft</b>
            </span>{" "}
            represents left offset of element relative to viewport.
          </li>
          <li className="list__item">
            <span className="highlight">
              <b>vTop</b>
            </span>{" "}
            represents top offset of element relative to viewport.
          </li>
        </ul>
      </section>
      <section>
        <SecondaryTitle>Example</SecondaryTitle>
        <Paragraph>
          To bind useMeasure() hook to a specific element, you just have to bind
          it to that element. To bind it, it returns a function with can be
          spread into an element.
        </Paragraph>
        <Code>
          {`
import React from "react";
import { useMeasure } from "react-uicomp";

export default function Example() {
  const bind = useMeasure((event) => { // bind is a function
    const { width, height } = event;

    console.log("WIDTH OF AN ELEMENT", width);
    console.log("HEIGHT OF AN ELEMENT", height);
  });

  return (
    <>
      // ...
      <div {...bind()}> // spread here
        // ...
      </div>
    </>
  );
}
       `}
        </Code>

        <Paragraph>
          <span className="highlight">
            <b>useMeasure()</b>
          </span>{" "}
          hook also has feature to measure multiple elements at once. To measure
          multiple element pass an index to bind() function when spread. And the
          measured values in callback will have array of values.
        </Paragraph>

        <Code>
          {`
import React from "react";
import { useMeasure } from "react-uicomp";

export default function Example() {
  const bind = useMeasure((event) => { // bind is a function
    const { width, height } = event;

    console.log("WIDTHS OF AN ELEMENT", width); // returns array of widths 
    console.log("HEIGHTS OF AN ELEMENT", height); // returns array of heights 
  });

  return (
    <>
      // ...
      {
        ARRAY_ELEMENT.map((item, index) => (
          <div key={index} {...bind(index)}> // spread here with index
            // ...
          </div>
        ))
      }
      
    </>
  );
}
       `}
        </Code>

        <SecondaryTitle>Demo</SecondaryTitle>
        <iframe
          src="https://codesandbox.io/embed/animated-active-tab-lh8u2?fontsize=14&hidenavigation=1&theme=dark&view=preview"
          style={{
            width: "100%",
            height: 500,
            border: 0,
            borderRadius: 4,
            overflow: "hidden",
          }}
          title="Animated Active Tab"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </section>
    </div>
  );
};

export default UseMeasurePage;
