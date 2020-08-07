import React from "react";
import { Auth, Navigation } from "react-uicomp";
import { PUBLIC_PATHS } from "./Routes.app";

import Header from "../common/header/Header.common";
import Sidenav from "../common/sidenav/Sidenav.common";

const App = () => {
  const config = { isLoggedIn: false, userRole: "user" };

  return (
    <Navigation.Provider
      routerType="hash"
      publicPaths={PUBLIC_PATHS}
      privatePaths={[]}
      userRoles={{
        user: {
          access: [
            "/",
            "/docs/quick-start",
            "/docs/why-use-react-uicomp",
            "/docs/navigation",
            "/docs/auth",
            "/docs/use-navigation",
            "/docs/use-auth",
            "/docs/theme",
            "/docs/use-theme",
            "/docs/use-animated-value",
            "/docs/animated-block",
            "/docs/interpolate",
            "/docs/dropdown",
            "/docs/dropdown-menu",
            "/docs/modal",
            "/docs/toast",
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
