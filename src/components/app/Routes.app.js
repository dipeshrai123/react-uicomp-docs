import React, { useEffect } from "react";
import { useNavigation } from "react-auth-navigation";

import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import QuickStartPage from "../pages/quickStartPage/QuickStartPage";
import DropdownPage from "../pages/dropdownPage/DropdownPage";
import DropdownMenuPage from "../pages/menuPage/MenuPage";
import ModalPage from "../pages/modalPage/ModalPage";
import ToastPage from "../pages/toastPage/ToastPage";
import RippleButtonPage from "../pages/rippleButtonPage/RippleButtonPage";

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
    name: "RippleButton",
    path: "/docs/ripple-button",
    component: RippleButtonPage,
    restricted: true,
  },
  {
    path: null,
    component: NotFoundPage,
  },
];
