import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";

const UseTheme = () => {
  return (
    <div>
      <Title>useTheme()</Title>
      <section>
        <Paragraph>
          useTheme() returns an object which provides current active theme and
          toggleTheme function. The object consists of following properties :
        </Paragraph>
        <ul className="list">
          <li className="list__item">
            dark ( boolean ) : Either it is a light theme or dark theme.
          </li>
          <li className="list__item">
            colors ( object ) : Various colors defined in{" "}
            <b>{"<Theme.Provider>"}</b> HOC.
          </li>
          <li className="list__item">
            toggleTheme ( function ) : Function which is passed in{" "}
            {"<Theme.Provider>"} HOC.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default UseTheme;
