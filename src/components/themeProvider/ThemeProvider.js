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
            dark ( boolean ) : Either it is a light theme or dark theme.
          </li>
          <li className="list__item">
            colors ( object ) : Various colors to define a particular theme.
          </li>
          <ul className="list list--nested">
            <li className="list__item"> backgroundColor ( string )</li>
            <li className="list__item">primaryColor ( string )</li>
            <li className="list__item">secondaryColor ( string )</li>
            <li className="list__item">highlightColor ( string )</li>
            <li className="list__item">textColor ( string )</li>
            <li className="list__item">borderColor ( string )</li>
            <li className="list__item">cardColor ( string </li>
          </ul>
        </ul>
      </section>
    </div>
  );
};

export default ThemeProvider;
