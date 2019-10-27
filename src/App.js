import React from "react";
import Home from "./views/Home";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from './data/Logo.PNG'
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
      <Navbar fixed="top" variant="dark" id = "navBar">
          <div className="col-9">
            <Navbar.Brand href="/">
              <img
                alt=""
                src={Logo}
                style={{width: 165, height: 66}}
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
        </div>
        <div className="col-md-auto">
          <div className="btn-group btn-group-lg" role="group">
            <button class="btn btn-sm btn-outline-warning" type="button">Sign Up</button>
            <button class="btn btn-sm btn-outline-warning" type="button">Log In</button>
          </div>
        </div>
  </Navbar>
    <Router>
      <font size="7">text</font>
        <Row>
            <Col md="1" id = "navCol">
                <Nav id = "nav" defaultActiveKey="/" className="flex-column">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/map">Map</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/users">Users</Nav.Link>
                </Nav>
            </Col>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Col md="auto" id ="displayCol">
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
        </Row>
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
