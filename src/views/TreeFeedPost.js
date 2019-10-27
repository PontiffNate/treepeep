import React from "react";
import {
    Card,
    ListGroup,
    ListGroupItem
 } from 'react-bootstrap';
import "./Home.css"
import tree0 from '../data/tree0.jpg';
import * as testData from "../data/testData.json";

export default class TreeFeedPosts extends React.Component {
    render() {
        return(
            <Card style={{ width: '40rem' }}>
                {/* <Card.Img variant="top" src={"" + this.props.post.IMAGE_URL} /> */}
                <Card.Img variant="top" src={tree0} />
                <Card.Body>
                <Card.Title>{this.props.post.NAME}</Card.Title>
                <Card.Text>
                    {getPaginatedDescription(this.props.post.DESCRIPTION)}
                </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroupItem>Author: {getAuthorName(this.props.post.AUTHOR_ID)}</ListGroupItem>
                <ListGroupItem>Likes: {this.props.post.LIKES}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                <Card.Link href={"/post?id=" + this.props.post.TREE_ID}>View Full Post</Card.Link>
                </Card.Body>
            </Card>
        );
    }
}

function getAuthorName(id) {
    for (var i = 0; i < testData.users.length; i++) {
        if (testData.users[i].ID === id) {
            return testData.users[i].NAME;
        }
    }
    return "Anonymous"
}

function getPaginatedDescription(desc) {
    if (desc.length > 100) {
        var newString = "";
        for (var i = 0; i < desc.length; i++) {
            if (newString.length < 100) {
                newString = newString + desc.charAt(i);
            } else {
                if (desc.charAt(i) === " ") {
                    return newString + "...";
                } else {
                    newString = newString + desc.charAt(i);
                }
            }
        }
    } else {
        return desc;
    }
}