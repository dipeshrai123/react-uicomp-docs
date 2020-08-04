import NotFoundPage from "../notFoundPage/NotFoundPage";

export const PUBLIC_PATHS = [
  {
    key: "QuickStart",
    name: "Quick Start",
    path: "/quick-start",
    component: NotFoundPage,
    restricted: true,
  },
  {
    path: null,
    component: NotFoundPage,
  },
];
