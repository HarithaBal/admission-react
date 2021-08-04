import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Register } from "./pages/Register";
import { VerifyUser } from "./pages/VerifyUser";
import { ProtectedRoute } from "./ProtectedRoute";
import { Community } from "./pages/Community";
import { Profile } from "./pages/Profile";
import { Management } from "./pages/Management";
import { Payment } from "./pages/Payment";
import { DocumentsForm } from "./forms/DocumentsForm";

export const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/verifyUser" component={VerifyUser} />
      <ProtectedRoute exact path="/forms/management" component={Management} />
      <ProtectedRoute exact path="/forms/community" component={Community} />
      <ProtectedRoute exact path="/forms/documents" component={DocumentsForm} />
      <ProtectedRoute path="/profile" component={Profile} />
      <ProtectedRoute path="/payment" component={Payment} />
      <Route component={NotFound} />
    </Switch>
  );
};
