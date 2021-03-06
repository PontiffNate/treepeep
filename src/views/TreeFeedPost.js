import React from "react";
import {
    Card,
    ListGroup,
    ListGroupItem,
    Button,
    Image
 } from 'react-bootstrap';
import "./Home.css"
import tree0 from '../data/tree0.jpg';
import * as testData from "../data/testData.json";
import likeIcon from "../data/open-iconic-master/svg/leaf.svg";
import commentIcon from "../data/open-iconic-master/svg/comment-square.svg";
import mapIcon from "../data/open-iconic-master/svg/map-marker.svg"

export default class TreeFeedPosts extends React.Component {
    render() {
        return(
            <div id ="post">
            <Card style={{ width: '40rem' }}>
                {/* <Card.Img variant="top" src={"" + this.props.post.IMAGE_URL} /> */}
                <Card.Img variant="top" src={this.props.post.IMAGE_URL} />
                <Card.ImgOverlay id ="cardOverlay" >
                    
                </Card.ImgOverlay>
                <Card.Body>
                <Card.Title>
                    {this.props.post.NAME}
                    <nobr class="move-icons-right">
                        <Image src={likeIcon} className="iconic" id = "likeIcon" fluid />
                        <a href={"/post?id=" + this.props.post.ID + "#comments-section"}><Image src={commentIcon} className="iconic" id = "commIcon" fluid /></a>
                        <a href={"/map?id=" + this.props.post.ID}><Image src={mapIcon} className="iconic" id="mapIcon" fluid /></a>
                    </nobr>
                
                </Card.Title>
                <Card.Text>
                    {getPaginatedDescription(this.props.post.DESCRIPTION)}
                </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroupItem>Author: {getAuthorName(this.props.post.AUTHOR_ID)}</ListGroupItem>
                <ListGroupItem><Image src={likeIcon} className="iconic likeIcon-small" id = "likeIcon" fluid />Likes: {this.props.post.LIKES}</ListGroupItem>
                <ListGroupItem><a href={"/post?id=" + this.props.post.ID}>View Full Post</a></ListGroupItem>
                </ListGroup>
            </Card>
            </div>
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
