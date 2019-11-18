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
import UserController from "./DatabaseControllers/UserController";
import CommentController from "./DatabaseControllers/CommentController";
import Comment from "./Comment";

export default class TreePost extends Component {
    post = null;
    author = null;
    comments = null;
    render() {
        var tc = new TreeController();
        this.post = tc.getTreeByID(getTreePostID());
        var uc = new UserController();
        this.author = uc.getUserByID(this.post.AUTHOR_ID);
        var cc = new CommentController();
        this.comments = cc.getCommentsByTreeID(getTreePostID());
        return (
            <div>
                <h1>{this.post.NAME}</h1>

                <Card style={{ width: '40rem' }}>
                    {/* <Card.Img variant="top" src={"" + this.props.post.IMAGE_URL} /> */}
                    <Card.Img variant="top" src={tree0} />
                    <Card.ImgOverlay id ="cardOverlay" >
                        <Image src={likeIcon} className="iconic" id = "likeIcon" fluid />
                        <a href="#comments-section"><Image src={commentIcon} className="iconic" id = "commIcon" fluid /></a>
                        <a href={"/map?id=" + this.post.ID}><Image src={mapIcon} className="iconic" id="mapIcon" fluid /></a>
                    </Card.ImgOverlay>
                    <Card.Body>
                    <Card.Title>{this.post.NAME}</Card.Title>
                    <Card.Text>
                        {this.post.DESCRIPTION}
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Author: {this.author.NAME}</ListGroupItem>
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
                        {this.comments.map((comments) => {
                            return <Comment comments={comments}/>
                        })}
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
