import React from "react";
import { Auth, Navigation } from "react-uicomp";
import { PUBLIC_PATHS } from "./Routes.app";

import Header from "../common/header/Header.common";
import Sidenav from "../common/sidenav/Sidenav.common";

const App = () => {
  const config = { isLoggedIn: false, userRole: "user" };

  return (
    <Navigation.Provider
      publicPaths={PUBLIC_PATHS}
      privatePaths={[]}
      userRoles={{
        user: {
          access: [
            "/",
            "/quick-start",
            "/why-use-react-uicomp",
            "/navigation",
            "/auth",
            "/use-navigation",
            "/use-auth",
            "/theme-provider",
            "/use-theme",
            "/use-animated-value",
            "/animated-block",
          ],
        },
      }}
    >
      <Auth.Provider config={config}>
        <Header />
        <Sidenav />
        <div className="app">
          <Auth.Screens />
        </div>
      </Auth.Provider>
    </Navigation.Provider>
  );
};

export default App;
