import React from "react";
import {
    Card,
    ListGroup,
    ListGroupItem,
    Button,
    Image
 } from 'react-bootstrap';
import "./Home.css"

export default class Comment extends React.Component {
    render() {
        return(
            <ListGroupItem>{this.props.comments.COMMENT}</ListGroupItem>
        );
    }
}