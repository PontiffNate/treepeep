import React, {Component} from "react";
import CommentController from "./DatabaseControllers/CommentController";
import {
    Button,
    Nav,
    Form,
 } from 'react-bootstrap';
 
import '../App.css';

export default class FilterForm extends Component {
    constructor(props) {
        super(props)
      this.state = {
          filter: "none"
      };
      
      this.handleRadio = this.handleRadio.bind(this);
      this.handleFilterSubmission = this.handleFilterSubmission.bind(this);
    }

    handleRadio(event){
        this.setState({
            filter: event.target.id,
        })
    }

    handleFilterSubmission(event){
        event.preventDefault();
        window.location.href = window.location.origin + "?filter=" + this.state.filter;
    }

    isHome() {
        var url = window.location.href;
        url = url.split('?')[0];
        url = url.substring(0, url.length - 1);
        if (url == window.location.origin) {
            return true;
        }
        return false;
    }

    render() {
        if (this.isHome()) {
            return (
                <Nav id = "filter" defaultActiveKey="/" className="flex-column">
                <Form.Group controlId="formBasicCheckbox">
                   <Form.Label>Sort By:</Form.Label>
                   <Form.Check type="radio" checked={this.state.filter === "likes"} label="Likes" id = "likes" onChange={this.handleRadio} />
                   <Form.Check type="radio" checked={this.state.filter === "name"} label="Name" id = "name" onChange={this.handleRadio}/>
                   <Button variant="success" onClick={this.handleFilterSubmission}>Apply</Button>
                </Form.Group>
                </Nav>
            );
        } else {
            return (null);
        }
    }

}