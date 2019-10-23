import React from "react";
import Home from "./views/Home"
import 'bootstrap/dist/css/bootstrap.min.css';

import TreeMap from "./views/TreeMap"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
    <nav>
      <div className="navbar navbar-dark bg-primary">
        <div className="col-9">
          <a className="navbar-brand">
            <img src="../public/image/Capture.gif"></img>
          </a>
          <a class="navbar-brand">Treepeep</a>
        </div>
        <div className="col-md-auto">
          <div className="btn-group btn-group-lg" role="group">
            <button class="btn btn-sm btn-outline-success" type="button">Sign Up</button>
            <button class="btn btn-sm btn-outline-success" type="button">Log In</button>
        </div>
        </div>
        </div>

    </nav>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/map">
            <TreeMap />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </React.Fragment>
  );
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
