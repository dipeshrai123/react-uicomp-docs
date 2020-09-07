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
        <Paragraph>
          React UI Comp provides the abstract implementation of react-router-dom
          to handle all the complex routing with different levels of user roles.
          It provides a react developer to write all the authentication flow in
          a single component. It also has some extremely helpful hooks and
          components that allows you to create beautiful UI Components and
          animation very easily.
        </Paragraph>

        <SecondaryTitle>For Routing</SecondaryTitle>
        <Paragraph>
          Let’s say you want to create a dashboard which should have different
          users who can access it. Suppose <b>ROLE_A, ROLE_B</b> and{" "}
          <b>ROLE_C</b> are some roles who can access the dashboard. And suppose
          there are some routes{" "}
          <span className="highlight">
            <b>/route_a</b>
          </span>
          ,{" "}
          <span className="highlight">
            <b>/route_b</b>
          </span>
          ,{" "}
          <span className="highlight">
            <b>/route_c</b>
          </span>
          ,{" "}
          <span className="highlight">
            <b>/route_d</b>
          </span>
          . There are some restrictions for all user roles to access these
          routes.
        </Paragraph>
        <ol className="list">
          <li className="list__item">
            <span className="highlight">
              <b>/route_a</b>
            </span>{" "}
            can be accessed by all user roles <b>ROLE_A, ROLE_B</b> and{" "}
            <b>ROLE_C.</b>
          </li>
          <li className="list__item">
            <span className="highlight">
              <b>/route_b</b>
            </span>{" "}
            can be accessed by all user roles if they are not logged in and they
            cannot access after login.
          </li>
          <li className="list__item">
            <span className="highlight">
              <b>/route_c</b>
            </span>{" "}
            can be accessed by <b>ROLE_A </b>and <b> ROLE_B </b> but not{" "}
            <b> ROLE_C.</b>
          </li>
          <li className="list__item">
            <span className="highlight">
              <b>/route_d</b>
            </span>{" "}
            can be accessed by <b> ROLE_B</b> and <b>ROLE_C</b> but not{" "}
            <b>ROLE_A</b> and they cannot be accessed without login.
          </li>
        </ol>
        <Paragraph>
          OMG! We should scratch our heads very hard to implement this kind of
          complex authentication routing.
        </Paragraph>
        <Paragraph>
          That’s where React UI Comp comes in. It will save you from scratching
          your head :) . It provides different HOCs and hooks will help you
          define all those routing in a single component without any headache.
        </Paragraph>
      </section>

      <section>
        <SecondaryTitle>For Animation</SecondaryTitle>
        <Paragraph>
          You can create these kinds of parallex effects very easily.
        </Paragraph>
        <iframe
          src="https://codesandbox.io/embed/parallex-header-navigation-83s30?fontsize=14&hidenavigation=1&theme=dark"
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
