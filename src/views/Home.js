import React, {Component} from "react";
import {
    Card,
    ListGroup,
    ListGroupItem,
    Badge,
 } from 'react-bootstrap';
import "./Home.css"
import tree0 from '../data/tree0.jpg';
import tree1 from '../data/tree1.png';
export default class Home extends Component {
    render() {
        return (
            <div>
            <h1><Badge variant="success">Global</Badge>Tree Feed</h1>
            <Card style={{ width: '40rem' }}>
              <Card.Img variant="top" src={tree0} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>

            <Card style={{ width: '40rem' }}>
              <Card.Img variant="top" src={tree1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
            </div>
        );
    }
}
