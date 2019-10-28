
import React, {Component} from "react";
import Home from "./views/Home";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TreeMap from "./views/TreeMap";
import Post from "./views/Post";
import TreePost from "./views/TreePost";
import About from "./views/About";
import Logo from './data/Logo.png'

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
          showSignUpOverlay: false,
          showSignInOverlay: false,
      };

      // Allows these fuctions access to this (so they can access this.state)
      this.handleSignIn = this.handleSignIn.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
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
    handleSignUp(event) {
        this.setState({
            showSignUpOverlay: !this.state.showSignUpOverlay
        })
    }
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
                      src={Logo}
                      style={{width: 165, height: 66}}
                      className="d-inline-block align-top"
                    />{' '}
                  </Navbar.Brand>
              </div>
              <div className="col-md-auto">
                <div className="btn-group btn-group-lg" role="group">
                  <Button variant="outline-warning" onClick={this.handleSignUp}>Sign Up</Button>
                  <Button variant="outline-warning" onClick={this.handleSignIn}>Log In</Button>
                </div>
              </div>
        </Navbar>

        <Modal size="lg" aria-labelled show={this.state.showSignUpOverlay} by="contained-modal-title-vcenter" centered>
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                Sign Up to Treepeep
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Label>Username</Form.Label>
                <Form.Control id="username" required="True" placeholder="CoolTreeGuy12"/>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" id="password" required="True" placeholder="******"/>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" id="passwordConf" required="True" placeholder="******"/>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" id="email" required="True" placeholder="temp@email.com"/>
                <Form.Label>Name</Form.Label>
                <Form.Control id="name" required="True" placeholder="John"/>
                <Form.Label>Age</Form.Label>
                <Form.Control id="age" required="True" placeholder="18"/>
                <Form.Label>State</Form.Label>
                <Form.Control id="state" required="True" placeholder="NY"/>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.handleSignUp}>Close</Button>
              <Button variant="success" onClick={this.handleSignUp}>Sign Up</Button>
            </Modal.Footer>
        </Modal>
        <Modal size="lg" aria-labelled show={this.state.showSignInOverlay} by="contained-modal-title-vcenter" centered>
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                Sign In to Treepeep
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Username</Form.Label>
                <Form.Control id="usernameme" required="True" placeholder="CoolTreeGuy12"/>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" id="password" required="True" placeholder="******"/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.handleSignIn}>Close</Button>
              <Button variant="success" onClick={this.handleSignIn}>Sign In</Button>
            </Modal.Footer>
        </Modal>

          <Router>
              <h1>1</h1>
              <Row>
                  <Col md="1" id = "navCol">
                      <Nav id = "filter" defaultActiveKey="/" className="flex-column">
                      <Form.Group controlId="formBasicCheckbox">
                         <Form.Check type="checkbox" label="Filter1" />
                         <Form.Check type="checkbox" label="Filter2" />
                         <Form.Check type="checkbox" label="Filter3" />
                      </Form.Group>
                      </Nav>
                      <Nav id = "nav" defaultActiveKey="/" className="flex-column">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/map">Map</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
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
                        <Route path="/new-post">
                          <Post />
                        </Route>
                        <Route path="/post">
                          <TreePost />
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

function Users() {
  return <h2>Users</h2>;
}
