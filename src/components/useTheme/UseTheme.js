import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Code from "../common/code/Code.common";

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
            <span className="highlight">dark ( boolean )</span> : Either it is a
            light theme or dark theme.
          </li>
          <li className="list__item">
            <span className="highlight">colors ( object )</span> : Various
            colors defined in <b>{"<Theme.Provider>"}</b> HOC.
          </li>
          <li className="list__item">
            <span className="highlight">toggleTheme ( function )</span> :
            Function which is passed in {"<Theme.Provider>"} HOC.
          </li>
        </ul>
      </section>
      <section>
        <SecondaryTitle>Example</SecondaryTitle>
        <Code>
          {`
// import useTheme
import { useTheme } from "react-uicomp";

export default function() {
    
    // It has theme object and toggleTheme function
    const { colors, toggleTheme } = useTheme();
    
    return () {
        {/* use it like this which is changed automatically when toggleTheme function is called */}
        <div style={{ color: colors.primaryColor }}>
        	Paragraph Text
        </div>
    }
}
          `}
        </Code>
      </section>
    </div>
  );
};

export default UseTheme;
