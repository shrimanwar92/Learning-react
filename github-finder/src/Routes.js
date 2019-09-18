import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Users from "./components/users.component";
import UserRepos from './components/repos.component';
import Header from './layouts/header';
import Footer from './layouts/footer';

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/profile/:name" component={UserRepos} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;