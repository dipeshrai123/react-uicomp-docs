import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";

const UseAuth = () => {
  return (
    <div>
      <Title>useAuth()</Title>
      <section>
        <Paragraph>
          useAuth() is a hook which gives access to the config object and state
          object defined in {"<Auth.Provider>"} HOC directly. For example it
          returns an object with isLoggedIn, userRole and all the keys passed
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
    </div>
  );
};

export default UseAuth;
