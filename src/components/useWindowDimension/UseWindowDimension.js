import React, { useEffect } from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
// import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
// import Code from "../common/code/Code.common";

const UseWindowDimensionApiRef = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>useWindowDimension()</Title>
      <section>
        <Paragraph>Coming soon...</Paragraph>
      </section>
    </div>
  );
};

export default UseWindowDimensionApiRef;
