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
          Implementing good quality animations and creating reusable components
          over and over again would be quite complicated and requires lots of
          initial set up. React UI Comp provides you very useful components and
          animation tools which helps you to build incredible UI and user
          experience.
        </Paragraph>
        <Paragraph>
          What follows within the fundamentals section of this documentation is
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
        <Code>{`
// npm
npm install react-uicomp

// yarn
yarn add react-uicomp`}</Code>
      </section>
    </div>
  );
};

export default QuickStartPage;
