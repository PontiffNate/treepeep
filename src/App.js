import React from "react";
import Home from "./views/Home";
import TreePost from "./views/TreePost"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TreeMap from "./views/TreeMap"
import Post from "./views/Post"
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
      <Navbar bg="dark" fixed="top" variant="dark" id = "navBar">
          <div className="col-9">
            <Navbar.Brand href="/">
              <img
                alt=""
                src="../data/Capture.gif"
                className="d-inline-block align-top"
              />{' '}
              Treepeep
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
        <h1>1</h1>
        <Row>
            <Col md="1" id = "navCol">
                <Nav id = "nav" defaultActiveKey="/" className="flex-column">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/map">Map</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/users">Users</Nav.Link>
                  <Nav.Link href="/new-post">Post</Nav.Link>
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
                  <Route path="/new-post">
                    <Post />
                  </Route>
                  <Route path="/post">
                    <TreePost />
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
