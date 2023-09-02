import React from "react";
import "./styles.css";
import Main from "./components/Main"
import QRLogin from "./components/QRLogin"
import Signup from "./components/SignUp"
import Success from "./components/Success"
import State from "./components/BeforeRegister"
import CheckoutPage from './components/CheckoutPage';
import SignUpOther from './components/SignUpOther';
import AfterWelcome from './components/AfterWelcome';
import { Route } from "react-router-dom";
import "@fontsource/open-sans";

export default function App() {

  return (

    <div>
          <Route path="/main" component={Main} />
          <Route path="/login" component={QRLogin} />
          <Route path="/signup" component={Signup} />
          <Route path="/success" component={Success} />
          <Route path="/state" component={State} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/welcome" component={AfterWelcome} />
          <Route path="/signupother" component={SignUpOther} />
    </div>

  );
}
