import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import Confirmation from "./components/Confirmation";
import axios from "axios";
import * as yup from "yup";

const formSchema = yup.object().shape({
  customer: yup
    .string()
    .required("Name must be entered!")
    .min(2, "Name must be at least 2 characters."),
  size: yup
    .string()
    .oneOf(["Small", "Medium", "Large"], "Please select a size!"),
  sauce: yup.string().required("Please select a sauce!"),
  pepperoni: yup.string(),
  sausage: yup.string(),
  mushroom: yup.string(),
  chicken: yup.string(),
  ham: yup.string(),
  extraCheese: yup.string(),
  sub: yup.string(),
  special: yup.string().notRequired(),
  gluten: yup.string().notRequired(),
});

const initialFormValues = {
  customer: "",
  size: "",
  sauce: "",
  pepperoni: false,
  sausage: false,
  chicken: false,
  mushroom: false,
  ham: false,
  extraCheese: false,
  special: "",
  gluten: false,
};

const initialFormErrors = {
  size: "",
  sauce: "",
  customer: "",
};

const initialOrders = [];

const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, seFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  function reset() {
    setFormValues(initialFormValues);
  }

  function clearOrders() {
    setOrders(initialOrders);
  }

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
