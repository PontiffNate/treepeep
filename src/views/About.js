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
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet, lacus scelerisque interdum blandit, purus sem aliquam metus, sed luctus ipsum diam ac erat. Quisque sit amet magna vitae nisl blandit pharetra. Suspendisse scelerisque porttitor ipsum sit amet bibendum. Nulla sit amet ullamcorper turpis. Curabitur at lectus ut diam venenatis rhoncus. Phasellus hendrerit auctor pulvinar. Morbi semper urna et convallis egestas. Fusce fringilla finibus facilisis. Nullam eu dignissim libero.
                    </Card.Text>
                    </Card.Body>
                    <Card.Body>
                    </Card.Body>
                </Card>

            <Card style={{ width: '40rem' }}>
                    <Card.Body>
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet, lacus scelerisque interdum blandit, purus sem aliquam metus, sed luctus ipsum diam ac erat. Quisque sit amet magna vitae nisl blandit pharetra. Suspendisse scelerisque porttitor ipsum sit amet bibendum. Nulla sit amet ullamcorper turpis. Curabitur at lectus ut diam venenatis rhoncus. Phasellus hendrerit auctor pulvinar. Morbi semper urna et convallis egestas. Fusce fringilla finibus facilisis. Nullam eu dignissim libero.
                    </Card.Text>
                    </Card.Body>
                    <Card.Body>
                    </Card.Body>
                </Card>

            </div>

        );
    }

}