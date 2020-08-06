import React, { useEffect } from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";

const DropdownPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>Dropdown</Title>
      <section>
        <Paragraph>Comming soon</Paragraph>
      </section>
    </div>
  );
};

export default DropdownPage;
