import React, { useEffect } from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Code from "../common/code/Code.common";

const UseWindowDimensionApiRef = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>useWindowDimension()</Title>
      <section>
        <Paragraph>
          <span className="highlight">useWindowDimension()</span> hook gives you
          the dimension of window / viewport. It accepts a callback function as
          its argument which gives the measurement event with following
          properties:
        </Paragraph>
        <ul className="list">
          <li className="list__item">
            <span className="highlight">
              <b>width</b>
            </span>{" "}
            represents the current width of window.
          </li>
          <li className="list__item">
            <span className="highlight">
              <b>height</b>
            </span>{" "}
            represents the current height of window.
          </li>
        </ul>
      </section>
      <section>
        <SecondaryTitle>Example</SecondaryTitle>
        <Code>
          {`
import React from "react";
import { useWindowDimension } from "react-uicomp";

export default function Example() {
  useWindowDimension((event) => {
    const { width, height } = event;

    console.log("WIDTH OF A WINDOW", width);
    console.log("HEIGHT OF A WINDOW", height);
  });

  return (
    // ...
  );
}
       `}
        </Code>
      </section>
    </div>
  );
};

export default UseWindowDimensionApiRef;
