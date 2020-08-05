import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import Code from "../common/code/Code.common";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";

const Auth = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>Auth</Title>
      <section>
        <Paragraph>
          Auth provides 2 different HOCs which handles all the authentications
          defined by{" "}
          <span className="highlight">
            <b>{"<Navigation.Provider>"}</b>
          </span>{" "}
          HOC.
        </Paragraph>
      </section>
      <ol className="list">
        <li className="list__item">
          <Paragraph>
            <b>Auth.Provider</b>
            <br />
            It lets you define the current state of a user i.e. ( logged state
            and logged role ) and allows us to define global state which can be
            accessed from any component with useAuth() hook.
          </Paragraph>
          <Paragraph>It accepts two props :</Paragraph>
          <ol className="list list--nested list--alpha">
            <li className="list__item">
              <span className="highlight">
                <b>config (object)</b>
              </span>
              <br />
              You must pass an config object to config prop. Object should be of
              following shape :
            </li>
            <ul className="list list--nested">
              <li className="list__item">
                <span className="highlight">isLoggedIn ( boolean )</span> :
                Defines logged state of a user
              </li>
              <li className="list__item">
                <span className="highlight">userRole ( string )</span> : Defines
                current role of a user
              </li>
            </ul>
            <br />
            <li className="list__item">
              <span className="highlight">
                <b>state ( object )</b>
              </span>
              <br />
              It can be used as a global state which can accept any object with
              any keys. It is mostly used to change the config state. For
              example: state object could be an object with handleLogout method
              which modifies the isLoggedIn key defined in config object.
            </li>
          </ol>
        </li>
        <li className="list__item">
          <Paragraph>
            <b>Auth.Screens</b>
            <br />
            It returns all the authenticated screens based on the current state
            of a user and all the routes provided to{" "}
            <b>{"<Navigation.Provider>"} </b>
            HOC.
          </Paragraph>
          <Paragraph>
            Hierarchy of Routing should be:
            <Code>
              {`
<Navigation.Provider {...{ ...propsToThis }}>
  <Auth.Provider {...{ ...propsToThis }}>
    <Auth.Screens {...{ ...propsToThis }}/>
  </Auth.Provider>
</Navigation.Provider>
              `}
            </Code>
            Navigation.Provider should be wrapping all other HOCs. Auth.Provider
            should wrap Auth.Screens.
          </Paragraph>
        </li>
      </ol>
      <section>
        <SecondaryTitle>Example</SecondaryTitle>
        <Code>
          {`
// import Auth from here
import { Navigation, Auth } from "react-uicomp";

...

const App = () => {
  const [config, setConfig] = useState({ isLoggedIn: false, userRole: "user" });

  return (
    <Navigation.Provider
      publicPaths={publicPaths}
      privatePaths={privatePaths}
      userRoles={userRoles}
    >
      <Auth.Provider
        config={config}
        state={{
          logout: () => {
            setConfig({ isLoggedIn: false, userRole: "user" });
          }
        }}
      >
        <Auth.Screens />
      </Auth.Provider>
    </Navigation.Provider>
  );
};
          `}
        </Code>
      </section>
    </div>
  );
};

export default Auth;
