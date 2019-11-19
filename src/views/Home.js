import React, {Component} from "react";
import { Badge } from 'react-bootstrap';
import "./Home.css"
import TreeFeedPost from "./TreeFeedPost"
import * as testData from "../data/testData.json";
import TreeController from "./DatabaseControllers/TreeController";
export default class Home extends Component {
    treeData = null;

    render() {
      var filter = getFilter();
      var tc = new TreeController();
      this.treeData = tc.getAllTrees(filter);
      return (
          <div>
          <h1 align="center">Tree Feed</h1>
            {this.treeData.map((post) => {
              return <TreeFeedPost post={post}/>
            })}
          </div>
      );
    }
}

function getFilter() {
  var url = new URL(window.location.href);
  var filter = url.searchParams.get("filter");
  return filter;
}

