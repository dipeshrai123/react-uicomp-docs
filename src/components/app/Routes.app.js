import React, { useEffect } from "react";
import { useNavigation } from "react-uicomp";
import NotFoundPage from "../notFoundPage/NotFoundPage";
import QuickStartPage from "../quickStartPage/QuickStartPage";
import WhyUse from "../whyUse/WhyUse";
import Navigation from "../navigation/Navigation";
import Auth from "../auth/Auth";
import UseNavigation from "../useNavigation/UseNavigation";
import UseAuth from "../useAuth/UseAuth";
import ThemeProvider from "../themeProvider/ThemeProvider";
import UseTheme from "../useTheme/UseTheme";
import UseAnimatedValue from "../useAnimatedValue/UseAnimatedValue";
import AnimatedBlock from "../animatedBlock/AnimatedBlock";
import Interpolate from "../interpolate/Interpolate";
import DropdownPage from "../dropdownPage/DropdownPage";
import DropdownMenuPage from "../dropdownMenuPage/DropdownMenuPage";
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
    key: "QuickStart",
    name: "Quick Start",
    path: "/docs/quick-start",
    component: QuickStartPage,
    restricted: true,
  },
  {
    key: "QuickStart",
    name: "Quick Start",
    path: "/docs/why-use-react-uicomp",
    component: WhyUse,
    restricted: true,
  },
  {
    name: "Navigation",
    key: "Navigation",
    path: "/docs/navigation",
    component: Navigation,
    restricted: true,
  },
  {
    name: "Auth",
    key: "Auth",
    path: "/docs/auth",
    component: Auth,
    restricted: true,
  },
  {
    name: "Use Navigation",
    path: "/docs/use-navigation",
    key: "UseNavigation",
    component: UseNavigation,
    restricted: true,
  },
  {
    name: "Use Auth",
    key: "UseAuth",
    path: "/docs/use-auth",
    component: UseAuth,
    restricted: true,
  },
  {
    name: "Theme Provider",
    key: "ThemeProvider",
    path: "/docs/theme",
    component: ThemeProvider,
    restricted: true,
  },
  {
    name: "Use Theme",
    key: "Use Theme",
    path: "/docs/use-theme",
    component: UseTheme,
    restricted: true,
  },
  {
    name: "Use Animated Value",
    key: "UseAnimatedValue",
    path: "/docs/use-animated-value",
    component: UseAnimatedValue,
    restricted: true,
  },
  {
    name: "AnimatedBlock",
    path: "/docs/animated-block",
    component: AnimatedBlock,
    restricted: true,
  },
  {
    name: "Interpolate",
    path: "/docs/interpolate",
    component: Interpolate,
    restricted: true,
  },
  {
    name: "Dropdown",
    path: "/docs/dropdown",
    component: DropdownPage,
    restricted: true,
  },
  {
    name: "DropdownMenu",
    path: "/docs/dropdown-menu",
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
