
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
      this.handleChange = this.handleChange.bind(this);
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
        console.log(this.state);
    }
    handleSignIn(event) {
        this.setState({
            showSignInOverlay: !this.state.showSignInOverlay
        })
        console.log(this.state);
    }

    // Handles all other form changes
    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
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
                <Form.Control id="usernameSignUp" required="True" placeholder="CoolTreeGuy12"onChange={this.handleChange}/>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" id="passwordSignUp" required="True" placeholder="******"onChange={this.handleChange}/>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" id="passwordConfSignUp" required="True" placeholder="******"onChange={this.handleChange}/>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" id="emailSignUp" required="True" placeholder="temp@email.com"onChange={this.handleChange}/>
                <Form.Label>Name</Form.Label>
                <Form.Control id="nameSignUp" required="True" placeholder="John"onChange={this.handleChange}/>
                <Form.Label>Age</Form.Label>
                <Form.Control id="ageSignUp" required="True" placeholder="18"onChange={this.handleChange}/>
                <Form.Label>State</Form.Label>
                <Form.Control id="stateSignUp" required="True" placeholder="NY"onChange={this.handleChange}/>
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
                Log In to Treepeep
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Username</Form.Label>
                <Form.Control id="usernameLogIn" required="True" placeholder="CoolTreeGuy12" onChange={this.handleChange}/>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" id="passwordLogIn" required="True" placeholder="******" onChange={this.handleChange}/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.handleSignIn}>Close</Button>
              <Button variant="success" onClick={this.handleSignIn}>Log In</Button>
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
