import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Users from "./components/users.component";
import UserRepos from './components/repos.component';

function Routes() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Users} />
      <Route exact path="/profile/:name" component={UserRepos} />
      </Switch>
    </Router>
  );
}

export default Routes;