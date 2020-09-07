import React, { useEffect } from "react";
import Title from "../common/title/Title";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Paragraph from "../common/paragraph/Paragraph";
import Code from "../common/code/Code.common";

const UseScrollApiRefPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>useScroll()</Title>
    </div>
  );
};

export default UseScrollApiRefPage;
