import React, { useEffect } from "react";
import { useNavigation } from "react-auth-navigation";

import NotFoundPage from "../notFoundPage/NotFoundPage";
import QuickStartPage from "../quickStartPage/QuickStartPage";
import DropdownPage from "../dropdownPage/DropdownPage";
import DropdownMenuPage from "../menuPage/MenuPage";
import ModalPage from "../modalPage/ModalPage";
import ToastPage from "../toastPage/ToastPage";

const Redirect = () => {
  const { navigation } = useNavigation();

  useEffect(() => {
    navigation.navigate("/docs/quick-start");
  }, [navigation]);

  return <></>;
};

export const PUBLIC_PATHS = [
  {
    key: "Home",
    name: "Home",
    path: "/",
    component: Redirect,
    restricted: true,
  },
  {
    name: "Quick Start",
    path: "/docs/quick-start",
    component: QuickStartPage,
    restricted: true,
  },
  // UI COMPONENTS
  {
    name: "Dropdown",
    path: "/docs/dropdown",
    component: DropdownPage,
    restricted: true,
  },
  {
    name: "DropdownMenu",
    path: "/docs/menu",
    component: DropdownMenuPage,
    restricted: true,
  },
  {
    name: "Modal",
    path: "/docs/modal",
    component: ModalPage,
    restricted: true,
  },
  {
    name: "Toast",
    path: "/docs/toast",
    component: ToastPage,
    restricted: true,
  },
  {
    path: null,
    component: NotFoundPage,
  },
];
