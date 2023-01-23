import React from 'react';
import {Route, Switch} from "react-router";
import {Home, ProductEdit, ProductList, SignUp, SignIn} from "./templates";
import Auth from "./Auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin"} component={SignIn} />

      <Auth>
        {/*<Route exact path={"(/)?"} component={Home} /> */}
        {/* <Route exact path={"/product/edit"} component={ProductEdit} /> */}
        <Route exact path={"(/)?"} component={ProductList} />
        <Route path={"/product/edit(/:id)?"} component={ProductEdit} /> 
      </Auth>
    </Switch>
  );
};

export default Router;