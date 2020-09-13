import React, { useEffect } from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
// import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
// import Code from "../common/code/Code.common";

const UseAnimatedValueApiRefPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>useAnimatedValue()</Title>
      <section>
        <Paragraph>Coming soon...</Paragraph>
      </section>
    </div>
  );
};

export default UseAnimatedValueApiRefPage;
