import React from "react";
import { Auth, withNavigation } from "react-uicomp";
import { PUBLIC_PATHS } from "./Routes.app";

import Header from "../common/header/Header.common";
import Sidenav from "../common/sidenav/Sidenav.common";

const App = () => {
  return (
    <Auth.Provider config={{ isLoggedIn: false, userRole: "user" }}>
      <Header />

      <Sidenav />

      <div className="app">
        <Auth.Screens />
      </div>
    </Auth.Provider>
  );
};

export default withNavigation(App, {
  routerType: "hash",
  publicPaths: PUBLIC_PATHS,
  privatePaths: [],
  userRoles: {
    user: {
      access: ["*"],
    },
  },
});
