import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
const AuthPage = lazy(() =>
  import("./components/OpenRoutes/AuthPage/AuthPage.js" /* webpackChunkName: 'AuthPage'*/),
);
const MainPage = lazy(() =>
  import("./components/OpenRoutes/MainPage/MainPage" /* webpackChunkName: 'MainPage'*/),
);
const Contacts = lazy(() =>
  import("./components/OpenRoutes/Contacts/Contacts" /* webpackChunkName: 'Contacts'*/),
);
const About = lazy(() =>
  import("./components/OpenRoutes/About/About" /* webpackChunkName: 'About'*/),
);
const Price = lazy(() =>
  import("./components/OpenRoutes/Price/Price" /* webpackChunkName: 'Price'*/),
);
const ForgotPassword = lazy(() =>
  import(
    "./components/OpenRoutes/ForgotPassword/ForgotPassword" /* webpackChunkName: 'ForgotPassword'*/
  ),
);
const Online_shedule = lazy(() =>
  import(
    "./components/OpenRoutes/Online_shedule/Online_shedule" /* webpackChunkName: 'Online_shedule'*/
  ),
);
const Registration = lazy(() =>
  import(
    "./components/OpenRoutes/Registration/Registration" /* webpackChunkName: 'Online_shedule'*/
  ),
);
const UserProfile = lazy(() =>
  import("./components/UserProfile/UserProfile" /* webpackChunkName: 'UserProfile'*/),
);
const AdminPanel = lazy(() =>
  import("./components/AdminPanel/AdminPanel" /* webpackChunkName: 'AdminPanel'*/),
);
function OpenRoutes() {
  return (
    <>
      <Suspense fallback={<p>Hellooo</p>}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/authPage" component={AuthPage} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/about" component={About} />
          <Route path="/price" component={Price} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/online_shedule" component={Online_shedule} />
          <Route path="/registration" component={Registration} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}
function UserProfileFinction() {
  return (
    <>
      <Suspense fallback={<p>Hellooo</p>}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/about" component={About} />
          <Route path="/price" component={Price} />
          <Route path="/registration" component={Registration} />
          <Route path="/userProfile" component={UserProfile} />
          <Redirect to="/userProfile" />
        </Switch>
      </Suspense>
    </>
  );
}
function AdminPanelFunction() {
  return (
    <>
      <Suspense fallback={<p>Hellooo</p>}>
        <Switch>
          <Route path="/registration" component={Registration} />
          <Route path="/adminPanel" component={AdminPanel} />
          <Redirect to="/adminPanel" />
        </Switch>
      </Suspense>
    </>
  );
}

export const router = (token, adminID) => {
  if (!token) {
    return OpenRoutes();
  }
  if (token && !adminID) {
    return UserProfileFinction();
  }
  if (token && adminID) {
    return AdminPanelFunction();
  }
};
