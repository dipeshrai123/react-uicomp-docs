import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Code from "../common/code/Code.common";

const UseAuth = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>useAuth()</Title>
      <section>
        <Paragraph>
          <span className="highlight">useAuth()</span> is a hook which gives
          access to the config object and state object defined in{" "}
          {"<Auth.Provider>"} HOC directly. For example it returns an object
          with <span className="highlight">isLoggedIn</span>,{" "}
          <span className="highlight">userRole</span> and all the keys passed
          inside the state object.
        </Paragraph>
        <Paragraph>It is useful for some scenarios like :</Paragraph>
        <ul className="list">
          <li className="list__item">
            If you want to hide a login button in the header if the user is not
            logged in.
          </li>
          <li className="list__item">
            If you want to change the text for a button for a different user
            role.
          </li>
          <li className="list__item">
            If you want to handle login and logout.
          </li>
        </ul>
      </section>
      <section>
        <SecondaryTitle>Example</SecondaryTitle>
        <Code>
          {`
// import useAuth
import { useAuth } from "react-uicomp";

export default function() {
    
    // config and state can be accessed with useAuth()
    const { isLoggedIn, userRole, logout } = useAuth();
    
    return () {
        // ...
    }
}
          `}
        </Code>
      </section>
    </div>
  );
};

export default UseAuth;
