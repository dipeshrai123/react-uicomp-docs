import NotFoundPage from "../notFoundPage/NotFoundPage";
import QuickStartPage from "../quickStartPage/QuickStartPage";
import WhyUse from "../whyUse/WhyUse";

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
    path: null,
    component: NotFoundPage,
  },
];
