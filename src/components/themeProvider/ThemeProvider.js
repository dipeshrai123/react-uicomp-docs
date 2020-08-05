import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";

const ThemeProvider = () => {
  return (
    <div>
      <Title>Theme</Title>
      <section>
        <Paragraph>
          Theme allows you to handle the themes for your application. Theme
          provides a {"<Theme.Provider>"} HOC to handle any number of themes you
          want to add into your application. It is mostly useful if you want to
          implement light themes and dark themes.
        </Paragraph>
      </section>
      <section>
        <SecondaryTitle>Configure your themes</SecondaryTitle>
        <Paragraph>
          <b>Theme.Provider</b> HOC accepts theme prop which accepts the theme
          object with the following properties :
        </Paragraph>
        <ul className="list">
          <li className="list__item">
            <span className="highlight">dark ( boolean )</span> : Either it is a
            light theme or dark theme.
          </li>
          <li className="list__item">
            <span className="highlight">colors ( object )</span> : Various
            colors to define a particular theme.
          </li>
          <ul className="list list--nested">
            <li className="list__item">
              <span className="highlight">backgroundColor ( string )</span>
            </li>
            <li className="list__item">
              <span className="highlight">primaryColor ( string )</span>
            </li>
            <li className="list__item">
              <span className="highlight">secondaryColor ( string )</span>
            </li>
            <li className="list__item">
              <span className="highlight">highlightColor ( string )</span>
            </li>
            <li className="list__item">
              <span className="highlight">textColor ( string )</span>
            </li>
            <li className="list__item">
              <span className="highlight">borderColor ( string )</span>
            </li>
            <li className="list__item">
              <span className="highlight">cardColor ( string )</span>
            </li>
          </ul>
        </ul>
      </section>
    </div>
  );
};

export default ThemeProvider;
