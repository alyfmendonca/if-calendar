import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";
import Index from '../pages/index';
import Login from '../pages/login';
import SignUp from '../pages/signup';
import Home from '../pages/home';
import Agendar from '../pages/agendar';
import Confirm from '../pages/confirm';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/confirm" component={Confirm} />
      <Route path="/:user/:evento" component={Agendar} />
      <PrivateRoute path="/home" component={Home} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);


export default Routes;