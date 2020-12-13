import React, { useEffect } from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Code from "../common/code/Code.common";

const UseScrollApiRefPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>useScroll()</Title>
      <section>
        <Paragraph>
          <span className="highlight">useScroll()</span> hook lets you to listen
          how much a document or an element is scrolled. It accepts a callback
          function as its argument which gives scroll events with following
          properties:
        </Paragraph>
        <ul className="list">
          <li className="list__item">
            <span className="highlight">
              <b>scrollX</b>
            </span>{" "}
            how much document / element has scrolled horizontally.
          </li>
          <li className="list__item">
            <span className="highlight">
              <b>scrollY</b>
            </span>{" "}
            how much document / element has scrolled vertically.
          </li>
          <li className="list__item">
            <span className="highlight">
              <b>isScrolling</b>
            </span>{" "}
            boolean representing either the document / element is currently
            scrolling or not.
          </li>
          <li className="list__item">
            <span className="highlight">
              <b>scrollDirection</b>
            </span>{" "}
            represents which direction the document / element is scrolling.{" "}
            <span className="highlight">
              <b>ScrollDirectionState</b>
            </span>{" "}
            enum with {`<UP | DOWN | RIGHT | LEFT | UNDETERMINED>`} is used to
            compare with it.
          </li>
          <li className="list__item">
            <span className="highlight">
              <b>velocityX</b>
            </span>{" "}
            represents the horizontal velocity. Positive represents right and
            negative represents left.
          </li>
          <li className="list__item">
            <span className="highlight">
              <b>velocityY</b>
            </span>{" "}
            represents the vertical velocity. Positive represents bottom and
            negative represents top.
          </li>
        </ul>
      </section>
      <section>
        <SecondaryTitle>Example</SecondaryTitle>
        <Code>
          {`
import React from "react";
import { useScroll, ScrollDirectionState } from "react-uicomp";

export default function UseAnimatedValue() {
  useScroll((event) => {
    const { scrollX, scrollDirection } = event;

    if(scrollDirection === ScrollDirectionState.RIGHT) {
      console.log("DOCUMENT IS SCROLLING RIGHT", scrollX);
    }
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

export default UseScrollApiRefPage;
