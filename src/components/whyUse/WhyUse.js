import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";

const WhyUse = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>Why Use React UI Comp ?</Title>
      <section>
        <SecondaryTitle>For Routing</SecondaryTitle>
        <Paragraph>
          Web application which requires complex routings, user role
          authentication is very much time consuming and it becomes quite messy
          implementing these features. React UIComp is the abstract
          implementation of react-router-dom which enables you to write routings
          and user roles authentication very easily.
        </Paragraph>
      </section>

      <section>
        <SecondaryTitle>For Animation</SecondaryTitle>
        <Paragraph>
          It provides some useful hooks and functions that allows you to write
          smooth animations very easily.
        </Paragraph>
        <iframe
          src="https://codesandbox.io/embed/parallex-header-navigation-83s30?fontsize=14&hidenavigation=1&theme=dark&view=preview"
          style={{
            width: "100%",
            height: 500,
            border: 0,
            borderRadius: 4,
            overflow: "hidden",
          }}
          title="Parallex Header Navigation"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </section>
    </div>
  );
};

export default WhyUse;
