import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privatRoutes = [
  { path: "/about", component: About, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:id", component: PostIdPage, exact: true },
  { path: "/error", component: ErrorPage, exact: true },
];

export const publicRoutes = [{ path: "/login", component: Login, exact: true }];
