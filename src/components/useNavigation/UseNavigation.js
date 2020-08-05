import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";

const UseNavigation = () => {
  return (
    <div>
      <Title>useNavigation()</Title>
      <section>
        <Paragraph>
          useNavigation() is a hook which gives access to the navigation object
          providing you to navigate between different screens, providing you all
          accessible routes according to the current state of a user ( logged
          state and logged role ). It is also very useful for a component which
          is not directly a route defined in public or private paths because it
          doesn't have access to history prop directly.
        </Paragraph>
        <Paragraph>
          useNavigation() returns an object with the following properties :
        </Paragraph>
        <ul className="list">
          <li className="list__item">
            navigation ( object ) : Object for handling navigation and provides
            all authenticated routes name and path
          </li>
          <ul className="list list--nested">
            <li className="list__item">
              routes ( object ) : Object with keys you defined in{" "}
              <b>publicPaths</b> and <b>privatePaths</b> in{" "}
              <b>{"<Navigation.Provider>"}</b> and values are the object of name
              and path for a defined key.
            </li>
            <li className="list__item">
              navigate ( function ) : Function which takes either string or an
              object similar to <b>react-router-dom</b>’s history.push()
              function.
            </li>
            <li className="list__item">
              goBack ( function ) : Function which will navigate to the previous
              screen.
            </li>
            <li className="list__item">
              goForward ( function ) : Function which will navigate to the next
              screen if history is available.
            </li>
          </ul>
          <li className="list__item">
            history ( object ) : History object provided by react-router-dom
            useHistory() hook.
          </li>
          <li className="list__item">
            location ( object ) : History object provided by react-router-dom
            useLocation() hook.
          </li>
          <li className="list__item">
            params ( object ) : History object provided by react-router-dom
            useParams() hook.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default UseNavigation;
