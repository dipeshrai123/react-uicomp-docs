import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Code from "../common/code/Code.common";

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
      <section>
        <SecondaryTitle>Example</SecondaryTitle>
        <Code>
          {`
// import Theme from here
import { Navigation, Auth, Theme } from "react-uicomp";

...

// Dark theme object variable
const darkTheme = {
    dark: true,
    // colors cannot have other keys except these...
    colors: {
        backgroundColor: "#1F1B24",
        primaryColor: "#1A6AA7",
        secondaryColor: "#989898",
        highlightColor: "#FA0404",
        textColor: "#FFFFFF",
        borderColor: "#353535",
        cardColor: "#383838",
    }
}

// Light theme object variable
const lightTheme = {
    dark: false,
    colors: {
        backgroundColor: "#F8F8F8",
        primaryColor: "#2196F3",
        secondaryColor: "#989898",
        highlightColor: "#EB4034",
        textColor: "#353535",
        borderColor: "#E1E1E1",
        cardColor: "#FFFFFF",
    },
}

const App = () => {
    const [ activeTheme, setActiveTheme ] = useState("light");
    
    const theme = activeTheme === "light" ? lightTheme : darkTheme;
    
    const toggleTheme = () => {
        setActiveTheme(prev => prev === "light" ? darkTheme : lightTheme);
    }
    
    return (
    	<Navigation.Provider>
        	<Theme.Provider theme={theme} toggleTheme={toggleTheme}>
            	<Auth.Provider>
                	<Auth.Screens />
                </Auth.Provider>
            </Theme.Provider>
        </Navigation.Provider>
    )
};
          `}
        </Code>
      </section>
    </div>
  );
};

export default ThemeProvider;
