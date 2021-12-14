import React from "react";
import Header from "./Header";
import ReservationControl from "./ReservationControl";
import Signin from "./Signin";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Routes>
      <Route exact path="/signin" element={<Signin/>} />
      <Route exact path="/" element={<ReservationControl/>} />
        {/* <Route path="/signin">
          <Signin />
        </Route> */}

        {/* <Route path="/">
          <ReservationControl />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;