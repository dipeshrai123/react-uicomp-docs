import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Code from "../common/code/Code.common";

const UseNavigation = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>useNavigation()</Title>
      <section>
        <Paragraph>
          <span className="highlight">useNavigation()</span> is a hook which
          gives access to the navigation object providing you to navigate
          between different screens, providing you all accessible routes
          according to the current state of a user ( logged state and logged
          role ). It is also very useful for a component which is not directly a
          route defined in public or private paths because it doesn't have
          access to history prop directly.
        </Paragraph>
        <Paragraph>
          <span className="highlight">useNavigation()</span> returns an object
          with the following properties :
        </Paragraph>
        <ul className="list">
          <li className="list__item">
            <span className="highlight">navigation ( object )</span> : Object
            for handling navigation and provides all authenticated routes name
            and path
          </li>
          <ul className="list list--nested">
            <li className="list__item">
              <span className="highlight">routes ( object )</span> : Object with
              name key you defined in <b>publicPaths</b> and <b>privatePaths</b>{" "}
              in <b>withNavigation()</b> and values are the object of name and
              path for a defined key.
            </li>
            <li className="list__item">
              <span className="highlight">navigate ( function )</span> :
              Function which takes either string or an object similar to{" "}
              <b>react-router-dom</b>’s history.push() function.
            </li>
            <li className="list__item">
              <span className="highlight">goBack ( function )</span> : Function
              which will navigate to the previous screen.
            </li>
            <li className="list__item">
              <span className="highlight">goForward ( function )</span> :
              Function which will navigate to the next screen if history is
              available.
            </li>
          </ul>
          <br />
          <li className="list__item">
            <span className="highlight">history ( object )</span> : History
            object same as react-router-doms's history object.
          </li>
          <li className="list__item">
            <span className="highlight">location ( object )</span> : Location
            object same as react-router-dom's location object.
          </li>
          <li className="list__item">
            <span className="highlight">params ( object )</span> : Params object
            same as react-router-dom's params object.
          </li>
        </ul>
      </section>
      <section>
        <SecondaryTitle>Example</SecondaryTitle>
        <Code>
          {`
import { useNavigation } from 'react-uicomp';

const { navigation, history, location, params } = useNavigation()
          `}
        </Code>
      </section>
    </div>
  );
};

export default UseNavigation;
