import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Code from "../common/code/Code.common";

const Navigation = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>Navigation</Title>
      <section>
        <Paragraph>
          Navigation lets you define all the routes (public, private and
          protected) and user roles.
        </Paragraph>
        <Paragraph>
          But, What exactly are public, private and protected routes ?
        </Paragraph>
        <ul className="list">
          <li className="list__item">
            <span className="highlight">
              <b>Public routes</b>
            </span>{" "}
            are those routes which can be accessed with or without login.
          </li>
          <li className="list__item">
            <span className="highlight">
              <b>Private routes</b>
            </span>{" "}
            are those routes which cannot be accessed without login.
          </li>
          <li className="list__item">
            <span className="highlight">
              <b>Protected routes</b>
            </span>{" "}
            are those types of public routes which cannot be accessed if a user
            is logged in.
          </li>
        </ul>
        <Paragraph>
          We also should define <span className="highlight">userRoles</span> who
          can access different routes. To define these React UI Comp provides a
          Higher Order Component (HOC) called{" "}
          <span className="highlight">
            <b>{"withNavigation()"}</b>
          </span>{" "}
          . It allows us to define all those routes and roles by passing them as
          a prop.
        </Paragraph>
      </section>
      <section>
        <SecondaryTitle>withNavigation()</SecondaryTitle>
        <Paragraph>
          <b>withNavigation()</b> manages all the routes and user roles for you.
          Usually you should export a root component with{" "}
          <span className="highlight">
            <b>withNavigation()</b>
          </span>{" "}
          HOC.
        </Paragraph>
        <Paragraph>
          <b>Configuring publicPaths, privatePaths and userRoles</b>
        </Paragraph>
        <ol className="list">
          <li className="list__item">
            <span className="highlight">
              <b>publicPaths</b>
            </span>{" "}
            accepts an array of object with following keys:
          </li>
          <ol className="list list--nested list--alpha">
            <li className="list__item">
              <span className="highlight">name ( string )</span> : Defines the
              name for a path and used as a key for useNavigation()'s route keys
              if key is not passed.
            </li>
            <li className="list__item">
              <span className="highlight">path ( string )</span> : Defines the
              path for a component
            </li>
            <li className="list__item">
              <span className="highlight">component ( Component )</span> :
              Defines a component for a path
            </li>
            <li className="list__item">
              <span className="highlight">restricted ( boolean )</span> : If
              true then it is protected route otherwise public
            </li>
          </ol>
          <br />
          <li className="list__item">
            <span className="highlight">
              <b>privatePaths</b>
            </span>{" "}
            accepts an array of object with following keys:
          </li>
          <ol className="list list--nested  list--alpha">
            <li className="list__item">
              <span className="highlight">name ( string )</span> : Defines the
              name for a path used as a key for useNavigation()'s route keys if
              key is not passed.
            </li>
            <li className="list__item">
              <span className="highlight">path ( string )</span> : Defines the
              path for a component
            </li>
            <li className="list__item">
              <span className="highlight">component ( Component )</span> :
              Defines a component for a path
            </li>
          </ol>
          <br />
          <li className="list__item">
            <span className="highlight">
              <b>userRoles</b>
            </span>{" "}
            accepts an object with any number of keys which defines the access
            routes for a user.
          </li>
        </ol>
      </section>
      <section>
        <SecondaryTitle>Example</SecondaryTitle>
        <Code>
          {`
// app.js
import React from "react";
import { withNavigation } from "react-uicomp";
import { publicRoutes, privateRoutes, userRoles } from "./routes";

const App = () => {
  return (
    // ...
  );
};

export default withNavigation(App, {
  publicPaths,
  privatePaths,
  userRoles,
});
          `}
        </Code>
        <Code>
          {`
// routes.js
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

// Array of object having name, path, component and restricted.
export const publicPaths = [
  {
    name: "Public",
    path: "/public",
    component: Page1,
    restricted: true,
  },
];

// Array of object having name, path and component.
export const privatePaths = [
  {
    name: "Private",
    path: "/private",
    component: Page2,
  },
];

// Define user role and provide access routes.
export const userRoles = { 
    user: { access: ["/public"] }, 
    admin:  { access: ["/public", "/private"] },
};
          `}
        </Code>
      </section>
    </div>
  );
};

export default Navigation;
