import { lazy } from "react";

export default [
  {
    path: "/",
    label: "",
    exact: true,
    component: lazy(() => import("./pages/ChatLIstPage/ChatLIstPage")),
    private: false,
    restricted: false,
  },
];
