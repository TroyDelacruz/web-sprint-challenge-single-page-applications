import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import Confirmation from "./components/Confirmation";
import axios from "axios";
import * as yup from "yup";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <Pizza />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
      </Switch>
    </>
  );
};

export default App;
