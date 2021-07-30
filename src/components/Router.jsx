import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "../pages/homepage/Homepage";
import About from "../pages/about/About";
import Rental from "../pages/rental/Rental";
import Error from "../pages/error/Error";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/a-propos" component={About} />
        <Route path="/location/:id" render={(props) => <Rental {...props} />} />
        <Route component={Error} />
      </Switch>
    );
  }
}

export default Router