import React, {Component} from "react";
import "./Home.css"
import {
    Card,
    ListGroup,
    ListGroupItem
 } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (

            <div>
                <h1>About Treepeep</h1>

                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Title>
                            Who We Are
                        </Card.Title>
                        <Card.Text>
                            We are treepeep! But you knew that already. More specifically, we are Bryce, Christian, Nate, and Patrick. We started treepeep 
                            as a school project to show off all the awesome trees we all see every day. After noticing there was no service in this space 
                            already, we quickly got to work. After all - to us, a world without a tree sharing app is one we aren't ready to live in. So we 
                            created treepeep, for lovers an aficionados of trees young and old, all across the globe!
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                <Card.Body>
                        <Card.Title>
                            What Is TreePeep?
                        </Card.Title>
                        <Card.Text>
                            Our app is designed to be as easy to use as possible for you to get your favorite trees posted, and explore what other trees are 
                            put up on the site. Here you can view your feed of all trees posted (or filter further if you want), like and/or comment on a post, 
                            and view an aggregate map of all the geotagged trees in our database, further connecting you to users across the world! We hope you 
                            enjoy what we have for you, and we look forward to seeing your best trees!
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Title>
                            Why TreePeep?
                        </Card.Title>
                        <Card.Text>
                            If you enjoy trees, a great community, or nature in general, treepeep is for you! While we market ourselves as a tree-specific social 
                            media site similar to your favorites, we are just as much a community of tree-lovers and appreciators of nature. After all, if there are 
                            no trees, there is no site, and we find that such a niche role has great potential to start a healthy community. So come take root!
                        </Card.Text>
                    </Card.Body>
                    </Card>

            </div>

        );
    }

}