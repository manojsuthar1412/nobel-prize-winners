import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Home from "./Home";
import SpecialWinners from "./SpecialWinners";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact element={<Home />} />
        <Route path="/winners" exact element={<SpecialWinners />} />
      </Switch>
    </Router>
  );
};

export default Routes;
