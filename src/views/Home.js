import React, {Component} from "react";
import { Badge } from 'react-bootstrap';
import "./Home.css"
import TreeFeedPost from "./TreeFeedPost"
import * as testData from "../data/testData.json";
export default class Home extends Component {
    treeposts = testData.trees
    render() {
        return (
            <div>
            <h1><Badge variant="success">Global</Badge>Tree Feed</h1>
              {testData.trees.map((post) => {
                return <TreeFeedPost post={post}/>
              })}
            </div>
        );
    }
}


