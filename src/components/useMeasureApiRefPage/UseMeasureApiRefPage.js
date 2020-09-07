import React, { useEffect } from "react";
import Title from "../common/title/Title";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Paragraph from "../common/paragraph/Paragraph";
import Code from "../common/code/Code.common";

const UseMeasureApiRefPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>useMeasure()</Title>
      <section>
        <Paragraph>When</Paragraph>
      </section>
      <section>
        <SecondaryTitle>Prerequisite</SecondaryTitle>
        <Paragraph>If you're al</Paragraph>
      </section>
      <section>
        <Code>yarn add react-uicomp</Code>
      </section>
    </div>
  );
};

export default UseMeasureApiRefPage;
