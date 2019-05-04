import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, BaseLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Login from "./views/Login";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/profile" />
  },
  // {
  //   path: "/login",
  //   layout: BaseLayout,
  //   component: Login
  // },
  {
    path: "/profile",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-project",
    layout: DefaultLayout,
    component: AddNewPost
  },
  { 
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  // {
  //   path: "/components-overview",
  //   layout: DefaultLayout, 
  //   component: ComponentsOverview
  // },
  // {
  //   path: "/tables",
  //   layout: DefaultLayout,
  //   component: Tables
  // },
  {
    path: "/all-users",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
