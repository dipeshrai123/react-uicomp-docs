import React from "react";
import { Auth, withNavigation } from "react-auth-navigation";
import { PUBLIC_PATHS } from "./Routes.app";

import Header from "../common/header/Header.common";
import Sidenav from "../common/sidenav/Sidenav.common";

const App = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <Auth.Provider
      config={{ isLoggedIn: false, userRole: "user" }}
      state={{
        drawerOpen,
        setDrawerOpen,
      }}
    >
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
