import config from "./config";
import React, {Component} from "react";
import $ from 'jQuery';
// const {google} = require('googleapis');




export default class TreeController extends Component {
    url = "https://content-sheets.googleapis.com/v4/spreadsheets/10ju1elheSXSyExtol1vIXqYyPTSG5n4iyDFMOeO_stY/values/Sheet1!B1%3AJ3?key=AIzaSyAfA3OSKh3y4KW9Lqs3h7GXS-FTKlpdo84";
    treeData;
    constructor(props) {
        super(props);
        this.state = {
            treeData: [],
            loading: true
        };
    }

    componentDidMount() {
        fetch(this.url)
          .then(response => response.json())
          .then(data => this.setState({ treeData: data, loading: false }), function() {
              this.getTreeByID(5);
          });
      }


    getTreeByID(id) {
        if (id != 5) {
            console.log("error");
        } else {
            console.log(this.state.treeData);
        }
    }



    newTree(name, image_url, coordinates, description, likes, species, height, author_id) {
    
    }

    // getNextID() {
    //     var fin = 0;
    //     for (var i = 0; i < treeData.trees.length; i++) {
    //         if (treeData.trees[i].ID > fin) {
    //             fin = treeData.trees[i].ID;
    //         }
    //     }
    //     return fin + 1;
    // }


}