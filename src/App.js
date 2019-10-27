import React, {Component} from "react";
import Home from "./views/Home";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TreeMap from "./views/TreeMap";
import Post from "./views/Post";
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
    Modal,
    Col
 } from 'react-bootstrap';

export default class App extends Component {
    constructor(props) {
        super(props)
      this.state = {
          showSignInOverlay: false
      };

      // Allows these fuctions access to this (so they can access this.state)
      this.handleSignIn = this.handleSignIn.bind(this);
    }
    // componentDidMount(){
    //     fetch('http://localhost:9000/stock')
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log(res);
    //         this.setState({stock: res})
    //     });
    // }
    // Handles all other form changes
    handleSignIn(event) {
        this.setState({
            showSignInOverlay: !this.state.showSignInOverlay
        })
    }
    render(){
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
                  <Button variant="primary" onClick={this.handleSignIn}>Sign Up</Button>
                  <button class="btn btn-sm btn-outline-warning" type="button">Log In</button>
                </div>
              </div>
        </Navbar>

        <Modal size="lg" aria-labelled show={this.state.showSignInOverlay} by="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Sign Up to Treepeep
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.handleSignIn}>Close</Button>
              <Button variant="success" onClick={this.handleSignIn}>Sign Up</Button>
            </Modal.Footer>
        </Modal>
        <Modal size="lg" aria-labelled show={this.state.showSignInOverlay} by="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Sign Up to Treepeep
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.handleSignIn}>Close</Button>
              <Button variant="success" onClick={this.handleSignIn}>Sign Up</Button>
            </Modal.Footer>
        </Modal>

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
                        <Route path="/new-post">
                          <Post />
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
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}