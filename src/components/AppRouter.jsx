import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "../context";
import { publicRoutes, privatRoutes } from "../routes/routes";
import MyLoader from "./UI/loader/MyLoader";

const AppRouter = () => {
  const { isAuth, setIsAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <MyLoader />;
  }

  return isAuth ? (
    <Switch>
      {privatRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}

      <Redirect to="/about" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}

      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
