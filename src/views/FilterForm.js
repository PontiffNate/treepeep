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
          filter: "newest",
          button: (<Button variant="danger" onClick={this.handleReset}>Reset</Button>)
      };

      this.handleRadio = this.handleRadio.bind(this);
      this.handleFilterSubmission = this.handleFilterSubmission.bind(this);
      this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount(){
        var url = window.location.href;

        var regex = /[?&]([^=#]+)=([^&#]*)/g,
          params = {},
          match;
        while (match = regex.exec(url)) {
          params[match[1]] = match[2];
        }
        console.log(params)
        this.setState({filter: params.filter})
        console.log(params.filter);
    }

    handleRadio(event){
        if (this.state.filter !== event.target.id){
            this.setState({button: (
                <Button variant="success" onClick={this.handleFilterSubmission}>Apply</Button>
            )})
        }
        this.setState({
            filter: event.target.id,
        })

    }

    handleReset(event){
        event.preventDefault();
        window.location.href = window.location.origin;
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
                   <Form.Check type="radio" checked={this.state.filter === "newest"} label="Newest" id = "newest" onChange={this.handleRadio} />
                   <Form.Check type="radio" checked={this.state.filter === "likes"} label="Likes" id = "likes" onChange={this.handleRadio} />
                   <Form.Check type="radio" checked={this.state.filter === "name"} label="Name" id = "name" onChange={this.handleRadio}/>
                   {this.state.button}
                </Form.Group>
                </Nav>
            );
        } else {
            return (null);
        }
    }

}
