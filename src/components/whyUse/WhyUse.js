import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";

const WhyUse = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>Why React UI Comp ?</Title>
      <section>
        <Paragraph>
          There are lots of component and animation library out there. But
          having good UI component with animations aren't taken into account. If
          you want to add some animations to your own component then it can help
          you tremendously. And also if you want more flexible components that
          you use over and over again then it also provides that.
        </Paragraph>

        <Paragraph>
          It provides some useful hocs, hooks and functions that allows you to
          write smooth animations very easily and some very basic UI Components
          that you need frequently.
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
