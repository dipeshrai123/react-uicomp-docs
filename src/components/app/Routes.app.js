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
import UseMeasureApiRefPage from "../useMeasureApiRefPage/UseMeasureApiRefPage";
import UseAnimatedValueApiRefPage from "../useAnimatedValueApiRefPage/UseAnimatedValueApiRefPage";
import InterpolateApiRefPage from "../interpolateApiRefPage/interpolateApiRefPage";
import UseOutsideClickApiRefPage from "../useOutsideClickApiRefPage/useOutsideClickApiRefPage";
import UseMouseMoveApiRefPage from "../useMouseMoveApiRefPage/UseMouseMoveApiRefPage";
import UseScrollApiRefPage from "../useScrollApiRefPage/UseScrollApiRefPage";
import UseMountedValueApiRef from "../useMountedValueApiRefPage/UseMountedValueApiRef";
import UseWindowDimensionApiRef from "../useWindowDimensionRefPage/UseWindowDimensionApiRef";

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
    name: "useMeasure",
    path: "/docs/api-ref/use-measure",
    component: UseMeasureApiRefPage,
    restricted: true,
  },
  {
    name: "useAnimatedValue()",
    path: "/docs/api-ref/use-animated-value",
    component: UseAnimatedValueApiRefPage,
    restricted: true,
  },
  {
    name: "interpolate()",
    path: "/docs/api-ref/interpolate",
    component: InterpolateApiRefPage,
    restricted: true,
  },
  {
    name: "useOutsideClick()",
    path: "/docs/api-ref/use-outside-click",
    component: UseOutsideClickApiRefPage,
    restricted: true,
  },
  {
    name: "useMouseMove()",
    path: "/docs/api-ref/use-mouse-move",
    component: UseMouseMoveApiRefPage,
    restricted: true,
  },
  {
    name: "useScroll()",
    path: "/docs/api-ref/use-scroll",
    component: UseScrollApiRefPage,
    restricted: true,
  },
  {
    name: "useMountedValue()",
    path: "/docs/api-ref/use-mounted-value",
    component: UseMountedValueApiRef,
    restricted: true,
  },
  {
    name: "useMountedValue()",
    path: "/docs/api-ref/use-window-dimension",
    component: UseWindowDimensionApiRef,
    restricted: true,
  },
  {
    path: null,
    component: NotFoundPage,
  },
];
