import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Code from "../common/code/Code.common";

const Navigation = () => {
  return (
    <div>
      <Title>
        Navigation : Define routes (public, private and protected) and user
        roles.
      </Title>
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
            <b>Public routes</b> are those routes which can be accessed with or
            without login.
          </li>
          <li className="list__item">
            <b>Private routes</b> are those routes which cannot be accessed
            without login.
          </li>
          <li className="list__item">
            <b>Protected routes</b> are those types of public routes which
            cannot be accessed if a user is logged in.
          </li>
        </ul>
        <Paragraph>
          We also should define users for these routes so that we can manage who
          can access which route.
        </Paragraph>
        <Paragraph>
          To define these React UI Comp provides a Higher Order Component (HOC)
          called <b>{"<Navigation.Provider>"}</b>. It allows us to define all
          those routes and roles by passing them as a prop.
        </Paragraph>
      </section>
      <section>
        <SecondaryTitle>Navigation.Provider</SecondaryTitle>
        <Paragraph>
          <b>Navigation.Provider</b> manages all the routes and user roles for
          you. Usually you should wrap an entire app i.e. root component with{" "}
          <b>{"<Navigation.Provider>"}</b> HOC.
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
              <span className="highlight">key ( string )</span> : Unique key to
              access using useNavigation() hook.
            </li>
            <li className="list__item">
              <span className="highlight">name ( string )</span> : Defines the
              name for a path
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
          <li className="list__item">
            <span className="highlight">
              <b>privatePaths</b>
            </span>{" "}
            accepts an array of object with following keys:
          </li>
          <ol className="list list--nested  list--alpha">
            <li className="list__item">
              <span className="highlight">key ( string )</span> : Unique key to
              access using useNavigation() hook.
            </li>
            <li className="list__item">
              <span className="highlight">name ( string )</span> : Defines the
              name for a path
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
          <li className="list__item">
            <span className="highlight">
              <b>userRoles</b>
            </span>{" "}
            accepts an object with any number of keys which defines the access
            routes for a user. <br />
            Format of userRoles object is: <br />{" "}
            <Code>{"{ [role] : { access: Array of paths } }"}</Code>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Navigation;
