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

export const PUBLIC_PATHS = [
  {
    key: "QuickStart",
    name: "Quick Start",
    path: "/quick-start",
    component: QuickStartPage,
    restricted: true,
  },
  {
    key: "QuickStart",
    name: "Quick Start",
    path: "/why-use-react-uicomp",
    component: WhyUse,
    restricted: true,
  },
  {
    name: "Navigation",
    key: "Navigation",
    path: "/navigation",
    component: Navigation,
    restricted: true,
  },
  {
    name: "Auth",
    key: "Auth",
    path: "/auth",
    component: Auth,
    restricted: true,
  },
  {
    name: "Use Navigation",
    path: "/use-navigation",
    key: "UseNavigation",
    component: UseNavigation,
    restricted: true,
  },
  {
    name: "Use Auth",
    key: "UseAuth",
    path: "/use-auth",
    component: UseAuth,
    restricted: true,
  },
  {
    name: "Theme Provider",
    key: "ThemeProvider",
    path: "/theme-provider",
    component: ThemeProvider,
    restricted: true,
  },
  {
    name: "Use Theme",
    key: "Use Theme",
    path: "/use-theme",
    component: UseTheme,
    restricted: true,
  },
  {
    name: "Use Animated Value",
    key: "UseAnimatedValue",
    path: "/use-animated-value",
    component: UseAnimatedValue,
    restricted: true,
  },
  {
    name: "AnimatedBlock",
    path: "/animated-block",
    component: AnimatedBlock,
    restricted: true,
  },
  {
    path: null,
    component: NotFoundPage,
  },
];
