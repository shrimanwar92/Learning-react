import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Users from "./components/users.component";
import Search from './components/search.component';

function Routes() {
  return (
    <Router>
      <Route exact path="/" render={() => <React.Fragment><Search /><Users /></React.Fragment>} />
      <Route exact path="/profile" render={() => <div className="users-list">asdasda2112312123</div>} />
    </Router>
  );
}

export default Routes;