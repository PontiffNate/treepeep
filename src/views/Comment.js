import React from "react";
import {
    Card,
    ListGroup,
    ListGroupItem,
    Button,
    Image
 } from 'react-bootstrap';
import "./Home.css"
import commentIcon from "../data/open-iconic-master/svg/commenter.svg";

export default class Comment extends React.Component {
    render() {
        return(
            <ListGroupItem><Image src={commentIcon} className="iconic commenterIcon" id="commentIcon" fluid />{this.props.comments.COMMENT}</ListGroupItem>
        );
    }
}