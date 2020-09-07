import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import Code from "../common/code/Code.common";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import InterpolateExample from "../demos/interpolate";

const Interpolate = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>interpolate()</Title>
    </div>
  );
};

export default Interpolate;
