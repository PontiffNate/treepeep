import React, {Component} from "react";
import "./TreePost.css"
import {
    Card,
    ListGroup,
    ListGroupItem,
    Image
 } from 'react-bootstrap';
// import "./TreePost.css"
import * as testData from "../data/testData.json";
import tree0 from '../data/tree0.jpg';
import CommentForm from "./CommentForm";
import likeIcon from "../data/open-iconic-master/svg/heart.svg";
import commentIcon from "../data/open-iconic-master/svg/comment-square.svg";
import mapIcon from "../data/open-iconic-master/svg/map-marker.svg"

import TreeController from "./DatabaseControllers/TreeController";

export default class TreePost extends Component {
    post = getTreePost();
    render() {
        var tc = new TreeController();
        console.log(tc.getTreeByID(getTreePostID()));
        return (
            <div>
                <h1>{this.post.NAME}</h1>

                <Card style={{ width: '40rem' }}>
                    {/* <Card.Img variant="top" src={"" + this.props.post.IMAGE_URL} /> */}
                    <Card.Img variant="top" src={tree0} />
                    <Card.ImgOverlay id ="cardOverlay" >
                        <Image src={likeIcon} className="iconic" id = "likeIcon" fluid />
                        <Image src={commentIcon} className="iconic" id = "commIcon" fluid />
                        <a href="/map"><Image src={mapIcon} className="iconic" id="mapIcon" fluid /></a>
                    </Card.ImgOverlay>
                    <Card.Body>
                    <Card.Title>{this.post.NAME}</Card.Title>
                    <Card.Text>
                        {this.post.DESCRIPTION}
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Author: {getAuthorName(this.post.AUTHOR_ID)}</ListGroupItem>
                        <ListGroupItem>Likes: {this.post.LIKES}</ListGroupItem>
                        <ListGroupItem>Species: {this.post.SPECIES}</ListGroupItem>
                        <ListGroupItem>Height: {this.post.HEIGHT}</ListGroupItem>
                    </ListGroup>
                </Card>

                <Card id="comments-section" style={{ width: '40rem' }}>
                    {/* <Card.Img variant="top" src={"" + this.props.post.IMAGE_URL} /> */}
                    <Card.Body>
                        <Card.Title>Comments:</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><CommentForm/></ListGroupItem>
                        <ListGroupItem>Cool tree!</ListGroupItem>
                        <ListGroupItem>Love the colors!</ListGroupItem>
                        <ListGroupItem>Hey I live near there!</ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
        );
    }
}

function getTreePostID() {
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    return parseInt(id);
}

function getTreePost() {
    var id = getTreePostID();
    for (var i = 0; i < testData.trees.length; i++) {
        if (testData.trees[i].ID === id) {
            return testData.trees[i];
        }
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
