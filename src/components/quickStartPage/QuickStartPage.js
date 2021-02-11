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
          Implementing good quality reusable components over and over again
          would be quite daunting. React UI Comp provides you very useful
          components which helps you to build incredible UI and user experience.
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
