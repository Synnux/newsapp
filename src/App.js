import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Page Imports
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";

/* import './App.css'; */

function App() {
  return (
    <Router>
      <Route to="/home">
        <Home />
      </Route>
      <Route to="/about">
        <About />
      </Route>


    </Router>
  );
}

export default App;
