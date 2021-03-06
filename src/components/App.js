import React from "react";
import Header from "./Header";
import ReservationControl from "./ReservationControl";
// import SignIn from "../AuthForms/SignIn";
import SignIn from "../AuthForms/SignIn";
import SignUp from "../AuthForms/SignUp";
import SignOut from "../AuthForms/SignOut";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Dashboard from "./Dashboard";

function App(){
  return ( 
    <Router>
      <Header />
      <Switch>
      <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-out">
            <SignOut />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
      {/* <Route exact path="/sign-in" element={<SignIn/>} />
      <Route exact path="/sign-up" element={<SignUp/>} />
      <Route exact path="/sign-out" element={<SignOut/>} />
      <Route exact path="/" element={<ReservationControl/>} />
      <Route exact path="/dashboard" element={<Dashboard/>} /> */}
        {/* <Route path="/signin">
          <Signin />
        </Route> */}

        {/* <Route path="/">
          <ReservationControl />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;