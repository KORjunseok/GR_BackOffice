import React from "react";
import "./App.css";

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import compornent
import Header from "./component/Header";

// import Pages
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Profile from "./Pages/Profile"


function App() {
  return (
    <React.StrictMode>
      <Router>
       <Header />
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;