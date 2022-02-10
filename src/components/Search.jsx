import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
export const Search = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route exact path={["/search", "/image", "/news", "/videos"]}>
          <Results />
        </Route>
      </Switch>
    </div>
  );
};
