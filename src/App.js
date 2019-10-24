import React from "react";
import Home from "./views/Home";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TreeMap from "./views/TreeMap"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
    Button,
    ButtonToolbar,
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Row,
    Col
 } from 'react-bootstrap';

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
    <Row>
        <Router>
            <Col md="auto" id = "navCol">
                <Nav id = "nav" defaultActiveKey="/" className="flex-column">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/map">Map</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/users">
                    Users
                  </Nav.Link>
                </Nav>
            </Col>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Col md="auto">
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
            </Col>
        </Router>
    </Row>
    </React.Fragment>
  );
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
