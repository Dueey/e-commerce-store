import React from "react";
import * as Icons from "@material-ui/icons";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <Icons.Home />,
    className: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <Icons.Assessment />,
    className: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <Icons.ShoppingCart />,
    className: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <Icons.Group />,
    className: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <Icons.Email />,
    className: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <Icons.Help />,
    className: "nav-text",
  },
];
