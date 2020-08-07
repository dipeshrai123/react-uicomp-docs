import React, { useEffect } from "react";
import Title from "../common/title/Title";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Paragraph from "../common/paragraph/Paragraph";
import Code from "../common/code/Code.common";

const QuickStartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>Quick Start</Title>
      <section>
        <Paragraph>
          When it comes to authentication and routing for multiple users in the
          same application the codebase gets messy with similar logic
          everywhere.
        </Paragraph>
        <Paragraph>
          Developing simple animations takes a lot of initial setup.
        </Paragraph>
        <Paragraph>
          React UI Comp is built from ground up to solve these problems.
        </Paragraph>
        <Paragraph>
          What follows within the Fundamentals section of this documentation is
          a tour of the most important aspects of React UI Comp. It should cover
          enough for you to know how to build your typical react application,
          and give you the background that you need to dive deeper into the more
          advanced parts of React UI Comp.
        </Paragraph>
      </section>
      <section>
        <SecondaryTitle>Prerequisite</SecondaryTitle>
        <Paragraph>
          If you're already familiar with JavaScript, React and React Router
          DOM, then you'll be able to get moving with React UI Comp quickly! If
          not, we highly recommend you to gain some basic knowledge first, then
          come back here when you're done.
        </Paragraph>
      </section>
      <section>
        <SecondaryTitle>Installation</SecondaryTitle>
        <Paragraph>
          React UI Comp 1.2.0 requires
          <b>
            {" "}
            <span className="highlight">react 16.13.1</span> or later,{" "}
            <span className="highlight">react-dom 16.13.1</span> or later,{" "}
            <span className="highlight">react-router-dom 5.2.0</span> or later.
          </b>
        </Paragraph>
        <Paragraph>To use React UI Comp with your React App.</Paragraph>
        <Code>npm install react-uicomp</Code>
        <Paragraph>or</Paragraph>
        <Code>yarn add react-uicomp</Code>
      </section>
    </div>
  );
};

export default QuickStartPage;
